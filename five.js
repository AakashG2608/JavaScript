let a = promnpt("Enter you age?");
console.log(typeof a); // always return string when user enter something.
a = Number.parseInt(a);
if (a<=0){
    console.log('You are not born yet.');
}
else if (age>1 && age<18){
    console.log('You are a kid.');
}
else if (age>=18 && age<50){
    console.log('You are a teenager.');
}
else{
    console.log('You are old.');
}
alert(a);

// Swtuch Statement:-

let expr = 'Aakash';
switch(expr){
    case 'Aakash':
        console.log('Win');
        break;
    case 'Bhavna':
        console.log('lose');
    default:
        console.log(`Sorry, we are not able to get you, ${expr}.`);
}