class GracieController{
    constructor(){
        this._human = document.getElementById('human')
        this._mensageBox = document.getElementById('box')
        this._view = new GracieView(this._mensageBox)
    }
    createDialogue(){
        return new GracieModel(this._human, this._mensageBox)
    }
    sendForView(event){
        event.preventDefault()
        return this._view.update(this.createDialogue())
    }
}