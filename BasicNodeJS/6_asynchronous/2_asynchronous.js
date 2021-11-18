const step1 = () => {
    setTimeout(() => {
        console.log('The First Step.');
    }, 3000);
}
const step2 = () => {
    console.log('The Second Step.');
}
step1();
step2();