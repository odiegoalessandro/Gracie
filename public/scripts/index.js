var human = document.getElementById("human")
var btn = document.querySelector(".btn")
var mensageBox = document.getElementById("text")

function say(msg){
    var bot = document.createElement("p")
    bot.classList.add("bot")
    bot.classList.add("view")
    bot.innerText = msg
    mensageBox.appendChild(bot)
}

function theme_dark(){
    var footer = document.querySelector('footer')
    var btn = document.getElementById('btn')
    document.body.style.backgroundColor = "#ffffff"
    footer.style.backgroundColor = "#202329c2"
    btn.style.backgroundColor = "#40444b"
    human.style.backgroundColor = "#40444b"
}

function theme_light(){
    var footer = document.querySelector('footer')
    var btn = document.getElementById('btn')
    document.body.style.backgroundColor = "#eef4ff"
    footer.style.backgroundColor = "#dbdbdb"
    btn.style.backgroundColor = "#e6e6e6"
    human.style.backgroundColor = "#e6e6e6"
}

var lang = navigator.language
var date = new Date()
var hours = new Date().getHours()

if(hours >= 18 || hours <= 5){
    theme_dark()
    console.log("tema escuro")
}

else{
    theme_light()
    console.log("tema claro")
}

function sayMsg(msg){
    var humanMsg = document.createElement("p")
    humanMsg.classList.add("human")
    humanMsg.classList.add("view")
    humanMsg.innerText = msg
    mensageBox.appendChild(humanMsg)
}

function time(){
    var lang = navigator.language
    var date = new Date()
    var month = date.toLocaleString(lang, {month: 'long'})
    var weekday = date.toLocaleString(lang, {weekday: 'long'})
    var mouthday = date.getDate()
    var year = date.getFullYear()
    var hours = date.getHours(lang)
    var minutes = date.getMinutes(lang)

    var compleateDate =
    `Ano: ${year}
    Mês: ${month}
    Dia do mês: ${mouthday}
    Dia da semana: ${weekday}
    Horario: ${hours}:${minutes}`
    return compleateDate
}

var repo = 
`https://github.com/
odiegoalessandro/
gracie_chatbot`

var dialogue = {
    "oi": [ "Oi", "Olá" ],
    "oi tudo bem?": ["Oi estou bem e você?"],
    "oi estou bem": ["Ainda bem que você está bem :)"],
    "oi estou mal": ["Que pena que você está mal :("],
    "estou bem": ["Ainda bem que você está bem :)"],
    "estou mal": ["Que pena que você está mal :("],
    "tchau": [ "Tchau", "Adeus" ],
    "!codigo": [repo],
    "como se chama?": ["Gracie", "Me chamo Gracie"],
    "quem te criou?": ["Eu fui criada por um jovem programador chamado Diego Alessandro da Cruz Martins no dia 08/08/2020"],
    "o que gosta de fazer?": ["Axiliar as pessoas no seu dia a dia"],
    "o que você sabe fazer?": ["Por enquanto não sei muita coisa, mas planejo aprender muito mais sobre vocês para que eu consiga ser a mais eficiente possivel"],
    "que horas são?": [time()],
    "gracie": ["Oi, tudo bem?", "Oi", "Olá", "Olá tudo bem?"]
}

function randomSays(start, end){
    return Math.floor(Math.random() * (end - start)) + start
}

function receivedMensage(msgHuman){
    if(!msgHuman || msgHuman.length == 0){
        return say("Diga algo")
    }
    msgHuman = msgHuman.trim().toLowerCase();
    for(let text in dialogue){
        if(!dialogue.hasOwnProperty(text)){
            continue
        }
        if(text == msgHuman){
            var possibleAnswers = dialogue[text]
            var answer = possibleAnswers[randomSays(0, possibleAnswers.length)]
            say(answer)

            return
        }
    }
    say("Não sei como te responder")
}

btn.addEventListener("click", () => {
    if(human && human.value && human.value.length > 0){
        sayMsg(human.value)
        receivedMensage(human.value)
        human.value = ""
    } 
    else{
        say("Digite alguma palavra para que possa me comunicar com você")
    }
})

human.addEventListener("keypress", (key) => {
    if(key.which === 13){
        if(human && human.value && human.value.length > 0){
            sayMsg(human.value)
            receivedMensage(human.value)
            human.value = ""
        } 
        else{
            say("Digite alguma palavra para que possa me comunicar com você")
        }
    }
    else{
        return
    }
})