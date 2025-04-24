console.log('a started');

for (let i = 0; i < 100000; i++) {
    if (i % 50000 === 0) {
        console.log(i);

    }
}