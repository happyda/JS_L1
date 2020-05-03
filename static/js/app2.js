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

// 第一種寫法，但我在inputpass.includes(inputName) 遇到麻煩如果加入單引號反而會有問題，因為原本就是做為字串比較的功能
// 如加入反而造成結果不同 例如出錯的寫法 'inputPass'.includes('inputName') 只要任何一邊加入單引號就造成判斷失常
// function isVaildPassword(inputPass, inputName) {
//     if (inputPass.length >= 8 && inputPass.indexOf(' ') === -1 && !inputPass.includes(inputName)) {
//         return true;
//     } 
//     return false;
// }

function isVaildPassword(inputPass, inputName) {
    const passNotIncName = !inputPass.includes(inputName) ; 
    if (inputPass.length >= 8 && inputPass.indexOf(' ') === -1 && passNotIncName ) {
        return true;
    } 
    return false;
}
isVaildPassword('89Fjj1nms','dogLuvr');
isVaildPassword('dogLuvr123!','dogLuvr');


function avg(numAry) {
    let numAvg = 0;
    let aryCount = 0;
    for (const inputNum of numAry) {
        numAvg += inputNum;
        aryCount++;
    }
    return numAvg/aryCount;
}

// 看MDN 中 Array method 沒有求長度，但才知道在Properties 有length 自己記錯了

//function avg(numAry) {
 //   let numAvg = 0;
 //   for (const inputNum of numAry) {
 //       numAvg += inputNum;
 //   }
 //   return numAvg/numAry.length;
//}
