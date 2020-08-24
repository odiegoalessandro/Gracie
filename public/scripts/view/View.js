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
        let client = this.createHumanMensage()
        let bot = this.createBotMensage(info)
        this._screen.appendChild(client)
        this._screen.appendChild(bot)

        human.value = ""
    }
    update(data){
        return this.screen(data)
    }
}