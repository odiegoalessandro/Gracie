class gracieController{
    constructor(){
        this._human = document.getElementById("human")
        this._btn = document.querySelector(".btn")
        this._mensageBox = document.getElementById("text")
        this.repo = 
        `https://github.com/
        odiegoalessandro/
        gracie_chatbot`

        this.time = function time(){
            var lang = navigator.language
            var date = new Date()
            var month = date.toLocaleString(lang, {month: 'long'})
            var weekday = date.toLocaleString(lang, {weekday: 'long'})
            var mouthday = date.getDate()
            var year = date.getFullYear()
            var hours = date.getHours(lang)
            var minutes = date.getMinutes(lang)
        
            var time =
            {
                year,
                month,
                mouthday,
                weekday,
                hours,
                minutes,
                dateComplete: `${weekday} ${mouthday}/${month}/${year} ${hours}:${minutes}`
            }
            return time
        }

        this._dialogue = {
            "oi": [ "Oi", "Olá" ],
            "oi tudo bem?": ["Oi estou bem e você?"],
            "oi estou bem": ["Ainda bem que você está bem :)"],
            "oi estou mal": ["Que pena que você está mal :("],
            "estou bem": ["Ainda bem que você está bem :)"],
            "estou mal": ["Que pena que você está mal :("],
            "tchau": [ "Tchau", "Adeus" ],
            "!codigo": [this.repo],
            "como se chama?": ["Gracie", "Me chamo Gracie"],
            "quem te criou?": ["Eu fui criada por um jovem programador chamado Diego Alessandro da Cruz Martins no dia 08/08/2020"],
            "o que gosta de fazer?": ["Axiliar as pessoas no seu dia a dia"],
            "o que você sabe fazer?": ["Por enquanto não sei muita coisa, mas planejo aprender muito mais sobre vocês para que eu consiga ser a mais eficiente possivel"],
            "que horas são?": [`São ${this.time.hours}:${this.time.minutes}`],
            "que dia é hoje": [`Hoje estamos na(o) ${this.time.weekday} no dia ${this.time.mouthday}`],
            "que ano estamos?": [`Estamos em ${this.time.year}`],
            "estamos em que mês?": [`Estamos em ${this.time.month}`],
            "em que mês estamos?": [`Estamos em ${this.time.month}`],
            "mostre a data completa": [`${this.time.dateComplete}`],
            "gracie": ["Oi, tudo bem?", "Oi", "Olá", "Olá tudo bem?"]
        }

        this._view = new gracieView(this._mensageBox)
    }
    createDialogue(){
        return new gracieModel(this._dialogue, this._human , this._mensageBox)
    }
    sendView(event){
        event.preventDefault()
        this._view.update(this.createDialogue())
    }
}