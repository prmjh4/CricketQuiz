var readlineSync = require('readline-sync');
var userName= readlineSync.question("Enter your Name ..");
console.log("Welcome "+ userName +" to the Cricket Show");
var score=0;
function quiz(ques,ans){
  var userAns= readlineSync.question(ques);
  if(userAns==ans){
    console.log("Correct!");
    score+=1;
  }else{
    console.log("Wrong!");
  }
  console.log(score);
  console.log("--------");
}
var questions= [{
  question: "Who is know as the Little Master?",
  answer:"sachin",
},{
  question: "Where is Eden Gardens?",
  answer:"kolkata",
},{
  question: "Which year India won Cricekt World Cup in MS Dhoni Captaincy?",
  answer:"2011",
},{
  question: "Who is the captain of India T20 Team?",
  answer:"rohit",
}]
for(var i=0; i<questions.length; i++){
  quiz(questions[i].question,questions[i].answer);
}
console.log("You scored "+score);

readlineSync.keyInPause('Press any key to know your fnal score', {hideEchoBack: true, mask: ''});
console.log("final score is " + score);