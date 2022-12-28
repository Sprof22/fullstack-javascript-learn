const breakfastPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('your order is ready, come and get it')
    }, 3000);
});

breakfastPromise.then(val => console.log(val))