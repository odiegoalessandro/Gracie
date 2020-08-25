class GracieView{
    constructor(screen){
        this._screen = screen
    }
    createBotMensage(mensage){
        if(human.value.length > 0){
            var botMsg = document.createElement('p')
            botMsg.innerText = mensage.responce(human)
            botMsg.classList.add('view')
            botMsg.classList.add('bot')

            return botMsg
        }
        else{
            var botMsg = document.createElement('p')
            botMsg.innerText = 'Digite algo para que eu possa me comunicar com você'
            botMsg.classList.add('view')
            botMsg.classList.add('bot')

            return botMsg
        }
    }
    createHumanMensage(){
        var humanMsg = document.createElement('p')
        humanMsg.innerText = human.value
        humanMsg.classList.add('view')
        humanMsg.classList.add('human')

        return humanMsg

    }
    screen(info){
        if(human.value.length > 0){
            let client = this.createHumanMensage()
            let bot = this.createBotMensage(info)
            this._screen.appendChild(client)
            this._screen.appendChild(bot)
    
            human.value = ""
        }
        else{
            let bot = this.createBotMensage(info)
            this._screen.appendChild(bot)
        }
    }
    update(data){
        return this.screen(data)
    }
}