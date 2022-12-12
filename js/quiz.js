// 1. Create a multidimensional array to hold quiz questions and answers
const questionsAnswer = [
  ["How old am I?", "26"],
  ["What is my First Name?", "Richmond"],
  ["What is the name of my girlfriend?", "Sarah"],
  ["What is the fastest land animal?", "cheetah"],
];

const main = document.querySelector('main');
// 2. Store the number of questions answered correctly
let correctNum = 0;
let correct = [];
  let incorrect = [];
//  if(answer.toLowerCase ß=== questionsAnswer.toLowerCase){
//    correct++
//  }

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for (let i = 0; i < questionsAnswer.length; i++) {
  let question = questionsAnswer[i][0];
  let answer = questionsAnswer[i][1];
  let response = prompt(question);
  
  if (response.toLowerCase() === answer.toLowerCase()) {
    correctNum++;

    correct.push(question);
  } else {
    incorrect.push(question);
  }

  console.log(correct, "these are correct");
  console.log(incorrect, "these are incorrect");
}

function createListItem(arr){
 let items = '';
 for (let i=0; i<arr.length; i++){
  items += `<li>${arr[i]}</li>`;
 }

 return items;

}
console.log( createListItem(correct), "just checking")
// 4. Display the number of correct answers to the user

main.innerHTML = `<h1>Congratulations, you got ${correctNum} questions correctly</h1>
<h2>You got these correct: </h2>
<ol>${createListItem(correct)}</ol>
<h2>These answers were incorrect: </h2>
<ol>${createListItem(incorrect)}</ol>


`;
