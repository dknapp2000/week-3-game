
/* Words, a small things with disasterous consequences */

var wordix = Math.floor( Math.random() * 100 );
var word = "";
var wordlength = word.length;
var ulines = "";
var usedLetters = "";
var remainingGuesses = 12;
var found = 0;
var missed = 0;

var wordptr = document.getElementById( "word" );
var message = document.getElementById( "message" );
var used  = document.getElementById( "usedletters" );
var remaining = document.getElementById( "remaining" );
var foundLetters = document.getElementById( "foundletters" );
var misses = document.getElementById( "misses" );

document.onkeyup = function() {
	var keyPressed = event.key;
	var wordptr = document.getElementById( "word" );
	var goodLetterFlag = false;
	var foundLetterFlag = false;

	message.textContent = "";

	console.log( "Key pressed = " + keyPressed);

	if ( remainingGuesses <= 0 ) {
		message.textContent = "Sorry, it's over for you.";
		return;
	}

	// Check to see if the key pressed has already been used

	for ( var i = 0 ; i < usedLetters.length; i++ ) {
		if ( keyPressed === usedLetters.charAt(i) ) {
			// No action, this letter has been used already.  No foul.
			message.textContent = "'" + keyPressed + "' has already been used";
			return;
		}
	}

	usedLetters = usedLetters + keyPressed;

	let ulinesArray = ulines.split("");

	// Check to see if this letter is part of the word
	for ( var i = 0; i < word.length; i++ ) { 
		console.log( "Checking character: " + word[i] );
		if ( keyPressed === word[i] ) {
			ulinesArray[i] = keyPressed;
			ulines = ulinesArray.join("");
			console.log( "ulines is now : " + ulines )
			wordptr.textContent = ulines;	
			goodLetterFlag = true;
			foundLetterFlag = true;
		}
	}

	if ( foundLetterFlag === true ) {
		found++;
		foundletters.textContent = found;
	} else {
		missed++;
		misses.textContent = missed;
	}

	used.textContent = usedLetters;

	remainingGuesses--;

	remaining.textContent = remainingGuesses;

	if ( remainingGuesses === 0 ) {
		message.textContent = "Won't you step up to my Gallows?"
	}
}

window.onload = function() {
	var wordlist = [ "talented", "repeat", "dominant", "fashion", "accent", "soft",
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
	"qualified" ];

	wordix = Math.floor( Math.random() * 100 );
	word = wordlist[ wordix ];
	wordlength = word.length;

	for ( var i = 0; i < wordlength; i++ ) {
		ulines = ulines + "_";
	}

	console.log( "wordix = " + wordix );
	console.log( "The word is " + word );
	console.log( "Word length is " + wordlength );
	console.log( "ulines = " + ulines );

	wordptr.textContent = ulines ;
}