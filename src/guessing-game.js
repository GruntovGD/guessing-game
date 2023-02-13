class GuessingGame {
    constructor() {      
    }

    setRange(min, max) {
      this.min=min
      this.max=max
      return (this.min,this.max)
    }

    guess() {
      this.gessed= Math.round((this.max + this.min)/2)
      return this.gessed
    }

    lower() {
      this.max = this.gessed
    }

    greater() {
      this.min = this.gessed
    }
}

module.exports = GuessingGame;
