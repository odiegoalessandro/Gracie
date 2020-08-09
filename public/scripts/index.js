var bot = document.getElementById('bot')
var human = document.getElementById('human')
var btn = document.querySelector('.btn')

function say(msg){
    human.value = ""
    bot.classList.add('view')
    return bot.innerText = msg
}

var dialogue = {
    oi: ["oi"],
    tchau: ["tchau"]
}

btn.addEventListener('click', () => {
    if(human.value.length > 0){
        for(let text in dialogue){
            if(dialogue.hasOwnProperty(text) === true){
                continue
            }
            else{
                break
            }
           
        }
    }
    else{
        alert('Digite algo')
    }
})