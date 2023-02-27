class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.result = Math.round(this.max - (this.max - this.min) / 2);
    //console.log(this.result);
    return this.result;
  }

  lower() {
    this.min = this.min;
    this.max = this.result;
    //console.log(this.min);
    //console.log(this.max)
  }

  greater() {
    this.min = this.result;
    this.max = this.max;
    //console.log(this.min);
  }
}

module.exports = GuessingGame;
