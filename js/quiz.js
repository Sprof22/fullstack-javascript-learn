// 1. Create a multidimensional array to hold quiz questions and answers
const heading = document.querySelector('h1')
const questionsAnswer = [
  ['How old am I?','26'],
  ['What is my First Name?','Richmond'],
  ['What is the name of my girlfriend?','Sarah'],
  ['What is the fastest land animal?','cheetah'],
  
]

correctMain = document.getElementById('correct');
incorrectMain = document.getElementById('incorrect');
  
  
// 2. Store the number of questions answered correctly
let correctNum = 0;
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
  
  for (let i=0; i<questionsAnswer.length; i++){
    let question = questionsAnswer[i][0];
    let answer = questionsAnswer[i][1];
    let response = prompt(question);
    let correct = [];
    let incorrect = [];
    if(response.toLowerCase() === answer.toLowerCase()){
      correctNum++;

      correct.push(question)
    } else{
      incorrect.push(question)
    }
    
console.log(correct, "these are correct");
console.log(incorrect, "these are incorrect");
  }




// 4. Display the number of correct answers to the user

heading.innerHTML = `<h4>Congratulations, you got ${correctNum} questions correctly</h4>
<h2>You got these correct:</h2>`
