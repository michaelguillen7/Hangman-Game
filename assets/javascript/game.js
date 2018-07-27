var doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];

var wordBank =['cavaliers', 
                'lakers', 
                'spurs', 
                'pistons', 
                'rockets', 
                'mavericks',
                'warriors',
                'clippers',
                'kings',
                'celtics',
                'magic',
                'wizards',
                'heat',
                'raptors',
                'grizzlies',
                'suns',
                'timberwolves',
                'nuggets',];

var choosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses =[];
var wrongLetters = [];

var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;

function reset()
{
	
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = choosenWord.split('');
	numBlanks = lettersInWord.length;
	
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];
	test=false;
	startGame();
}