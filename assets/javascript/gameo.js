// "use strict"

var game = {
	// counters
	remainingGuesses	: 12,
	word				: "",
	wordLength			: 0,
	ulines				: "________________________________________",
	usedLetters			: "",
	found				: 0,
	misses				: 0,
	wordlength 			: 0,
	Message 			: "Step up!",
	gameOver			: false,
	wordlist			: [ "talented", "repeat", "dominant", "fashion", "accent", "soft",
	"performer", "plane", "printer", "sensitive", "rack", "tank", "overwhelm", "run",
	"swim", "vacuum", "palace", "ribbon", "beginning", "relax", "horizon", "worker",
	"chocolate", "safe", "burial", "assembly", "poison", "forbid", "passive", "drift",
	"tie", "extension", "chain", "thick", "tin", "express", "free", "fat", "response",
	"forecast", "shift", "view", "scandal", "concept", "payment", "precision", "transfer",
	"college", "eliminate", "loop", "stomach", "bean", "racism", "elect", "bare", "deliver",
	"sword", "disk", "blue jean", "plot", "familiar", "advertise", "radiation", "trade",
	"sample", "muscle", "slot", "member", "brush", "outline", "sign", "slogan", "coffin",
	"eyebrow", "result", "scale", "brink", "dilemma", "species", "rape", "inject", "runner",
	"aisle", "comedy", "refund", "marriage", "activate", "cutting", "agree", "skeleton",
	"notebook", "outer", "storm", "impact", "coffee", "fantasy", "silk", "pound", "endorse",
	"qualified" ],

	// dom pointers
	ptrRemainingGuesses	: "",
	ptrWord				: "",
	ptrUsedLetters		: "",
	ptrFound			: "",
	ptrMisses 			: "",
	ptrMessage			: "",

	log					: function( pMsg ) {
		console.log( pMsg )
	},

	// Update the dom with all values at once
	updateDom 			: function() {
		this.ptrRemainingGuesses.textContent = this.remainingGuesses;
		this.ptrFound.textContent 			 = this.found;
		this.ptrMisses.textContent 			 = this.misses;
		this.ptrUsedLetters.textContent 	 = this.usedLetters;
		this.ptrWord.textContent 			 = this.ulines;
		this.ptrMessage.textContent			 = this.message;
		return this;
	},

	// Initialize any variables in the object (probably a better way to do this)
	init 				: function init() {
		this.ptrRemainingGuesses = document.getElementById( "remaining" );
		this.ptrFound 			 = document.getElementById( "foundletters" );
		this.ptrMisses 			 = document.getElementById( "misses" );
		this.ptrUsedLetters		 = document.getElementById( "usedletters" );
		this.ptrMessage          = document.getElementById( "messagetext" );
		this.ptrWord 		     = document.getElementById( "word" );
		// Initialize the work for the game
		wordix = Math.floor( Math.random() * 100 );
		this.word = this.wordlist[ wordix ];
		this.wordlength = this.word.length;
		this.ulines = this.ulines.substring( 0, this.wordlength );
		this.updateDom();
		return this;
	},

	keyPressed			: function keyPressed( pKey ) {

		if ( this.gameOver ) { return }
			
		this.log( "Key pressed is : '" + pKey + "', length = " + pKey.length );

		// If this is not a single character entry, then it's not a character--ignore it
		if ( pKey.length > 1 ) { return };

		// Clear the message
		this.message = "";

		// Check to see if this character has been used already
		// If so set a message and return, otherwise process it
		if ( this.usedLetters.search( pKey ) === -1 ) {
			this.remainingGuesses--;
			this.log( "This is a new character.")

			this.usedLetters = this.usedLetters + pKey;
			this.log( "UseList = '" + this.usedLetters + "'" );

			if ( this.word.search( pKey ) === -1 ) {
				// bad guess
				this.log( "Missed")
				this.misses++;

			} else {
				// good guess
				this.log( "Hit" );
				this.found++;
				for( var i = 0; i < this.word.length; i++ ) {
					this.log( this.word + " ??? " + pKey );
					if ( this.word[ i ] === pKey ) { this.ulines = this.replaceat( this.ulines, i, pKey ) }
				}
			}

		} else {
			this.log( "This character has already been used.")
			this.message = "'" + pKey + "' has already been used.";			
		}

		this.checkStatus();

		this.updateDom();
	},

	checkStatus			: function() {
		if ( this.ulines === this.word ) {
			// He won
			this.message = "Hmm... It seems that you live to play again.";
			this.gameOver = true;
		}
		if ( this.remainingGuesses < 1 ) {
			this.message = "Now, isn't that a shame. . . Please step up to the gallows.";
			this.gameOver = true;
		}
	},

	replaceat 			: function(pString, index, character) {
		this.log( "######replaceat( " + pString + ", " + index + ", " + character );
	    var result = pString.substr(0, index) + character + pString.substr(index+character.length);
	    this.log( "======" + result );
	    return result;
	}


}

window.onload = function() {
	game.init();
}


document.onkeyup = function() {
	game.keyPressed( event.key );

}


