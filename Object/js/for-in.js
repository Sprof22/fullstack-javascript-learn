const person = {
    name: 'Edward',
    nickname: 'Duke',
    city: 'New York',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
  };

for (let prop in person){
    console.log(`${prop}: ${person[prop]}`)
}

const humanPerson = {
    name: 'Reggie',
    role: 'Software developer',
    skills: ['JavaScript', 'HTML', 'CSS'],
    isTeacher: true
  };
  
  // Store the keys of the `person` object in `personProps`
  const personProps = Object.keys(humanPerson); 
  console.log(personProps);

  const personValues = Object.values(humanPerson);
  console.log(personValues);