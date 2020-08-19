class gracieView{
    constructor(screen){
        this._screen = screen
    }
    showInScreen(data){

        let clientMsg = this.sayMsg()
        let bot = this.say(data)
        this._screen.appendChild(clientMsg)
        this._screen.appendChild(bot)
    }
    sayMsg(){
        if(human.value.length > 0){
            var mensage = document.createElement('p')
            mensage.innerText = human.value
            mensage.classList.add('human')
            mensage.classList.add('view')
            human.value = ""
            return mensage
        }
        else{
            return "digite algo"
        }
    }
    say(text){
        var mensage = document.createElement('p')
        mensage.innerText = text
        mensage.classList.add('bot')
        mensage.classList.add('view')

        return mensage
    }
    update(data, mensage){
        this.showInScreen(data, mensage)
    }
}
