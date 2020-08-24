class GracieView{
    constructor(screen){
        this._screen = screen
    }
    createBotMensage(mensage){
        var botMsg = document.createElement('p')
        botMsg.innerText = mensage.responce(human)
        botMsg.classList.add('view')
        botMsg.classList.add('bot')

        return botMsg
    }
    createHumanMensage(){
        if(human.value.length > 0){
            var humanMsg = document.createElement('p')
            humanMsg.innerText = human.value
            humanMsg.classList.add('view')
            humanMsg.classList.add('human')
    
            return humanMsg    
        }
        else{
            return
        }
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
            human.value = ""

            alert('Digite algo para que eu possa me comunicar com você')
        }
    }
    update(data){
        return this.screen(data)
    }
}