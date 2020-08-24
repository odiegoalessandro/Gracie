class GracieModel{
    constructor(clientMsg, mensageBox){
        this._human = clientMsg
        this._mensageBox = mensageBox
        this._dialogue = {
            "oi": [ "Oi", "Olá" ],
            "oi tudo bem?": ["Oi estou bem e você?"],
            "oi estou bem": ["Ainda bem que você está bem :)"],
            "oi estou mal": ["Que pena que você está mal :("],
            "estou bem": ["Ainda bem que você está bem :)"],
            "estou mal": ["Que pena que você está mal :("],
            "tchau": [ "Tchau", "Adeus" ],
            "!codigo": [
            `https://github.com/
            odiegoalessandro/
            gracie_chatbot`
            ],
            "como se chama?": ["Gracie", "Me chamo Gracie"],
            "quem te criou?": ["Eu fui criada por um jovem programador chamado Diego Alessandro da Cruz Martins no dia 08/08/2020"],
            "o que gosta de fazer?": ["Axiliar as pessoas no seu dia a dia"],
            "o que você sabe fazer?": ["Por enquanto não sei muita coisa, mas planejo aprender muito mais sobre vocês para que eu consiga ser a mais eficiente possivel"],
            "que horas são?": [`São ${this.time().hours}:${this.time().minutes}`],
            "que dia é hoje": [`Hoje estamos na(o) ${this.time().weekday} no dia ${this.time().mouthday}`],
            "que ano estamos?": [`Estamos em ${this.time().year}`],
            "estamos em que mês?": [`Estamos em ${this.time().month}`],
            "em que mês estamos?": [`Estamos em ${this.time().month}`],
            "mostre a data completa": [`${this.time().dateComplete}`],
            "gracie": ["Oi, tudo bem?", "Oi", "Olá", "Olá tudo bem?"]
        }

    }
    time(){
        var lang = navigator.language
        var date = new Date()
        var month = date.toLocaleString(lang, {month: 'long'})
        var weekday = date.toLocaleString(lang, {weekday: 'long'})
        var mouthday = date.getDate()
        var year = date.getFullYear()
        var hours = date.getHours(lang)
        var minutes = date.getMinutes(lang)

        var schudele =
        {
            year,
            month,
            mouthday,
            weekday,
            hours,
            minutes,
            dateComplete: `${weekday} ${mouthday}/${month}/${year} ${hours}:${minutes}`
        }
        return schudele
    }
    get human(){
        return this._human
    }
    get mensageBox(){
        return this._mensageBox
    }
    get dialogue(){
        return this._dialogue
    }
    responce(mensage){
        function randomSays(start, end){
            return Math.floor(Math.random() * (end - start)) + start
        }

        function reciveMensage(msgHuman, msgBot){
            if(!msgHuman || msgHuman.value.length == 0){
                return "Diga algo"
            }

            for(var text in msgBot){
                if(!msgBot.hasOwnProperty(text)){
                    continue
                }
                if(text === msgHuman.value){
                    var possibleAnswers = msgBot[text]
                    var answer = randomSays(0, possibleAnswers.length)
                    console.log(text);

                    return msgBot[text][answer]
                }
            }
            return "Não conheço essa palavra"
        }

        return reciveMensage(mensage, this.dialogue)
    }
}