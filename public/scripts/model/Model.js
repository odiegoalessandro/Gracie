class gracieModel{
    constructor(dialogue, human, mensageBox){
        this._dialogue = dialogue
        this._human = human
        this._mensageBox = mensageBox
    }
    get dialogue(){
        return this._dialogue
    }
    get human(){
        return this._input
    }
    get boxMensage(){
        return this._mensageBox
    }
    responce(){
        function randomSays(start, end){
            return Math.floor(Math.random() * (end - start)) + start
        }
        
        function receivedMensage(msgHuman){
            if(!this._human.value || this._human.value.length == 0){
                return "Diga algo"
            }
            msgHuman = msgHuman.trim().toLowerCase();
            for(let text in this._dialogue){
                if(!this._dialogue.hasOwnProperty(text)){
                    continue
                }
                if(text == this._human.value){
                    var possibleAnswers = this.mensage[text]
                    var answer = possibleAnswers[randomSays(0, possibleAnswers.length)]
        
                    return answer
                }
            }
        }
    }
}