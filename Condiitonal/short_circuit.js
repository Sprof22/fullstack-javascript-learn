function isAdult(age){
    return age && age >= 18
}

// console.log(isAdult(15));

function countToFive(start){
    start = start || 1;
    if (start && start < 5){
        for (var i = start; i <= 5; i++){
            console.log(i)
        }
    } else if (start && start > 5){
        for (var i = start; i >= 5; i--){
            console.log(i)
        }
    }
}

countToFive();