// Spreads for Arrays

console.log('spread operator');

const numberList = [2,5,3];

const newNumber = 7;

numberList.push(newNumber);

console.log('this is numberList', numberList);


const newNumberList = [numberList[0], numberList[1], numberList[2], newNumber]

console.log('this is newNumbrList', newNumberList);




const newestNumberList = [...numberList, newNumber];

console.log('this is newestNumberList', newestNumberList);


// Spreads for Objects

const bowler = {
    name: "Paul",
    bowlingScore: 108,
    shoeSize: 10,
};

bowler.lastBowlingScore = 127;

console.log(bowler);

const newBowler = {name: bowler.name, lastBowlingScore: 109};

const newestBowler = { ...bowler, lastBowlingScore: 200};

console.log(bowler);
console.log(newBowler);
// console.log(newestBowler);