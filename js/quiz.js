// 1. Create a multidimensional array to hold quiz questions and answers
const main = document.querySelector('main')
const questionsAnswer = [
  ['How old am I?','26'],
   ['What is my First Name?','Richmond'],
   ['What is the name of my girlfriend?','Sarah'],
   ['What is the fastest land animal?','cheetah'],
  
]
  
  
// 2. Store the number of questions answered correctly
let correct = 0;
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
    if(response[i].toLowerCase === answer.toLowerCase){
      correct++;
    }
    



  }




// 4. Display the number of correct answers to the user

main.innerHTML = `<h1>Congratulations, you got ${correct} questions correctly</h1>`
