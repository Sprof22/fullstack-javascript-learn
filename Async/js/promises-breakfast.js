const breakfastPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject('your order is ready, come and get it')
    }, 3000);
});

console.log(breakfastPromise);