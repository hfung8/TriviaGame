//starts the page when clicked on the start button()
//timer automatically begins
$(document).ready(function(){

console.log("trivia.jsloaded");
var correct = 0;
var incorrect = 0;
// var firstQuestionAnswers = ["50","80","100","321","298"];

// var button1 = firstQuestionAnswers[0];
// var button2 = firstQuestionAnswers[1];
// var button3 = firstQuestionAnswers[2];
// var button4 = firstQuestionAnswers[3];
// var button5 = firstQuestionAnswers[4];

// console.log(firstQuestionAnswers[0]);

$("button").click(function(){
	console.log(this.value);
	if (this.value && this.value !== ""){
		console.log("you are correct!");
		correct++;
	} else {
		incorrect++;
	}
	$("#correct").text(correct);
	$("#incorrect").text(incorrect);
});
var time = 60;
var timer= setInterval(function(){ 
	if (time>0){ 
		time--;
		$("#time").text(time);
	} else{
		clearInterval(timer);
		alert("Time is up! The number of correct is " + correct + " the number of incorrect is " + incorrect);
		window.location.href="index.html";

	}
}, 1000);

});