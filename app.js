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

	strong: new Ingredient(["Glug of rum", "slug of whisky", "splash of gin"]),
	salty: new Ingredient(["Olive on a stick", "salt-dusted rim", "rasher of bacon"]),
	bitter: new Ingredient(["Shake of bitters", "splash of tonic", "twist of lemon peel"]),
	sweet: new Ingredient(["Sugar cube", "spoonful of honey", "splash of cola"]),
	fruity: new Ingredient(["Slice of orange", "dash of cassis", "cherry on top"])

};


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



// Display first question

questions.strong.ask();

})();

