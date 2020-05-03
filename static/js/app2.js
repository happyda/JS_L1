const student = {
    firstname : 'David',
    lastName : 'Jones',
    strengths : ['Music','Art'],
    exams   : {
        midterm :   92,
        final   :   88
    }
};

const shoppingCart = [
    {
        product : '大便',
        price :  199,
        quantity : 1
    },
    {
        product : '保險套',
        price :  98,
        quantity : 12
    },
    {
        product : '小便',
        price :  1999,
        quantity : 6,
        100 : 100,
    }
];

const numArray = [1, 4, 5,7, 100, '304', 880, 'sdfsdf', 'sdfsdf', '123123213', 234234234];
let numSum = 0;
for (let index = 1; index <= 20; index++) {
    console.log(`${index} * ${index} = ${index*index}`);
}


const word1= [ 'mail','milk','bath','black']
const word2= [ 'box', 'shake', 'tub','berry']

for (let index = 0; index < word1.length; index++) {
    console.log(`${word1[index]}_${word2[index]}`);
}

for (const wordName of word1) {
    for ( const wordName2 of word2) {
        console.log(wordName,wordName2);
    }
    
}


function rollDie() {
        let roll = Math.floor(Math.random()*6)+1;  
        return roll;   
}

let rollResult = rollDie();
console.log(`丟出： ${rollResult}`);
let myroll = 0;
while(myroll!==rollResult){
    myroll = rollDie();
    console.log(`重丟：${myroll}`);
}
