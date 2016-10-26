(function () {



// Counter for question cases

var questionNum = 0;


// Question Constructor

var Question = function(thisQuestion) {

	this.question = thisQuestion;

};


// Method created for displaying questions

Question.prototype.ask = askQuestions;


// Display current question

function askQuestions() {

	$('.question').remove();
	$('.q-and-a').prepend('<p class="question">' + this.question + '</p>');

}


// Create an object with instances of Question objects

var questions = {

	strong: new Question("Do ye like yer drinks strong?"),
	salty: new Question("Do ye like it with a salty tang?"),
	bitter: new Question("Are ye a lubber who likes it bitter?"),
	sweet: new Question("Would ye like a bit of sweetness with yer poison?"),
	fruity: new Question("Are ye one for a fruity finish?")

}


// Ingredients Constructor

var Ingredient = function(thisIngredient) {

	this.ingredient = thisIngredient;

};


// Create a pantry & fill with instances of Ingredient objects

var pantry = {

	strong: new Ingredient(["glug of rum", "slug of whisky", "splash of gin"]),
	salty: new Ingredient(["olive on a stick", "salt-dusted rim", "rasher of bacon"]),
	bitter: new Ingredient(["shake of bitters", "splash of tonic", "twist of lemon peel"]),
	sweet: new Ingredient(["sugar cube", "spoonful of honey", "splash of cola"]),
	fruity: new Ingredient(["slice of orange", "dash of cassis", "cherry on top"])

};


// Bartender Constructor

var Bartender = function(thisName) {

	this.name = thisName;

};


// Create method which grabs random pantry items according to user answers

Bartender.prototype.createDrink = function(questions) {

	var drinkArr = [];

	for (var category in questions) {

		if (questions[category].answer) {

			var randomNum = Math.floor(Math.random() * 3);
			var addToDrink = pantry[category].ingredient[randomNum];
			drinkArr.push(addToDrink);
		}
	} 

	addToDrink = cocktailNames.adjectives[randomNum] + " " + cocktailNames.nouns[randomNum];
	console.log(addToDrink);
	var newDrink = drinkArr.join(', ') + " - - Also known ter be " + addToDrink;
	return newDrink;
}


var cocktailNames = {

	adjectives: ['Rowdy', 'Perky', 'Greasy'],
	nouns: ['Cannibal', 'Toadstool', 'Bastard']

}

// Triggered on click, assings answer and swaps question displayed 

function forEveryQuestion(questionNum, answer) {

	switch (questionNum) {

		case 0:
			questions.strong.answer = answer;
			askMe(questions.salty);
			break;

		case 1:
			questions.salty.answer = answer;
			askMe(questions.bitter);
			break;

		case 2:
			questions.bitter.answer = answer;
			askMe(questions.sweet);
			break;

		case 3:
			questions.sweet.answer = answer;
			askMe(questions.fruity);
			break;	

		case 4:
			questions.fruity.answer = answer;
			var bartender = new Bartender("Parret O'Hara");
			var drinkResult = bartender.createDrink(questions);
			console.log(drinkResult);
			endOfQuestions(drinkResult);
			break;	

	}
}


// display current question

function askMe(thatQuestion) {

	thatQuestion.ask();
	questionNum++;

}


// Event handlers for clicks, trigger other functions

(function clicked() {

	$('.yes').click(function(e) {

		forEveryQuestion(questionNum, true);

	});

	$('.no').click(function(e) {

		forEveryQuestion(questionNum, false);

	});
})();



function endOfQuestions(drinkResult) {

	$('.q-and-a').empty();

	$('.q-and-a').append('<p class="drink-results">Yer drink be served: ' + drinkResult + '</p>');

}


// Display first question

questions.strong.ask();

})();

