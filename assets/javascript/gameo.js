
var game = {
	// counters
	remainingGuesses	: 12,
	word				: "",
	wordLength			: 0,
	ulines				: "",
	usedLetters			: "",
	found				: 0,
	misses				: 0,
	Message 			: "Welcome, won't you join me at the gallows?"

	// dom pointers
	ptrRemainingGuesses	: "",
	ptrWord				: "",
	ptrUsedLetters		: "",
	ptrFound			: "",
	ptrMisses 			: "",
	ptrMessage			: "",

	function setMessage( pMsg ) {
		ptrMessage.textContent = pMsg;
	},

	function setRemainingGuesses( pValue ) {
		ptrRemainingGuesses.textContent = pValue;
	},

	function updateDom() {
		ptrRemainingGuesses.textContent = this.remainingGuesses;
		ptrFound.textContent = this.found;
		ptrMisses.textContent = this.misses;
		ptrUsedLetters.textContent = this.usedLetters;
		ptrWord.textContent = this.word;
		ptrMessage = this.message;
	},

	function init() {
		ptrRemainingGuesses = document.getElementById( "remaining" );
		ptrFound 			= document.getElementById( "foundLetters" );
		ptrMisses 			= document.getElementById( "misses" );
		ptrUsedLetters		= document.getElementById( "usedLetters" );
		ptrMessage          = document.getElementById( "messagetext" );
		ptrWord 			= document.getElementById( "word" );
	}
}