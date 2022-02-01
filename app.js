const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [], 
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
    do {
        this.prevGuesses.push(this.getGuess())
        this.render()
      
    } while (this.prevGuesses[0] !== this.secretNum)
  },
  getGuess: function(){
    let playerGuess = null
    
    do {
      playerGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))

    } while (isNaN(playerGuess) 
    || playerGuess < this.smallestNum || playerGuess > this.biggestNum)
    return this.prevGuesses.unshift(playerGuess)
  },

  render: function(){
    let message = null
    
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
    message = `Congrats! You guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length > 1 ? 'guesses' : 'guess'}!`
    
    } else {
    message = `Your guess is too ${this.prevGuesses[this.prevGuesses.length -1] > this.secretNum ? 'high' : 'low'}. Previous guesses: ${this.prevGuesses.join(', ')} `        }
    alert(message)
  }, 
}
game.play()
console.log(game.secretNum)