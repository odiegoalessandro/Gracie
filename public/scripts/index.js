var bot = document.getElementById("bot")
var human = document.getElementById("human")
var btn = document.querySelector(".btn")
function say(msg){
    human.value = ""
    bot.classList.add("view")
    return bot.innerText = msg
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

var dialogue = {
    "oi": [ "oi", "olá" ],
    "oi tudo bem?": ["Oi estou bem"],
    "tchau": [ "tchau", "adeus" ],
    "como se chama?": ["Gracie", "me chamo Gracie"],
    "quem te criou?": ["Eu fui criada por um jovem programador chamado Diego Alessandro da Cruz Martins no dia 8/09/2020"],
    "o que gosta de fazer?": ["axiliar as pessoas no seu dia a dia"],
    "o que você sabe fazer?": ["por enquanto não sei muita coisa, mas planejo aprender muito mais sobre vocês para que eu consiga ser a mais eficiente possivel"],
    "que horas são?": [time()]
}

function randomSays(start, end){
    return Math.floor(Math.random() * (end - start)) + start
}

function receivedMensage(msgHuman){
    if(!msgHuman || msgHuman.length == 0){
        return "Diga algo";
    }
    msgHuman = msgHuman.trim().toLowerCase();
    for(let text in dialogue){
        if(!dialogue.hasOwnProperty(text)){
            continue;
        }
        if(text == msgHuman){
            var possibleAnswers = dialogue[text]
            var answer = possibleAnswers[randomSays(0, possibleAnswers.length)]
            say(answer);
            return;
        }
    }
    say("Não conheço essa palavra");
}

btn.addEventListener("click", () => {
    if(human && human.value && human.value.length > 0){
        receivedMensage(human.value);
    } 
    else{
        alert("Digite algo")
    }
})