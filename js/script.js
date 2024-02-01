/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */

const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.76;
const johnWeight = 85;
const calculateBMI = (mass,height) => {
    return mass/height * 2;
}

const markBMI = parseInt(calculateBMI(markWeight,markHeight));

console.log(`Mark BMI : ${markBMI}`);
const johnBMI =parseInt(calculateBMI(johnWeight,johnHeight));
console.log(`John BMI : ${johnBMI}`)

const higherBMI = markBMI > johnBMI ? 'Mark has a higher BMI than John' : 'John has a higher BMI than Mark'
console.log(higherBMI);


// Coding Challenge #1

/*
Alice and Bob are training for a marathon and they're comparing their average speeds to see who's faster on a specific day. The average speed is calculated using the formula: speed = distance / time. (distance in kilometers and time in hours).

Store Alice's and Bob's distance and time in variables.
Calculate both their average speeds using the formula.
Create a boolean variable 'aliceFasterThanBob' containing information about whether Alice has a higher average speed than Bob.
TEST DATA 1: Alice runs 10 km in 0.5 hours. Bob runs 10 km in 0.6 hours.
TEST DATA 2: Alice runs 5 km in 0.2 hours. Bob runs 5 km in 0.25 hours.

GOOD LUCK 😀
*/
const aliceTime = 0.5;
const aliceDistance = 10;
const bobTime = 0.4;
const bobDistance = 10;

const avgSpeed = (distance,time) => {
    const speed = distance/time
    return speed
}

const aliceAvg = avgSpeed(aliceDistance,aliceTime);
console.log(`Alice average speed ${aliceAvg}`);
const bobAvg = avgSpeed(bobDistance,bobTime);
console.log(`Bob average speed ${bobAvg}`);

const higherSpeed = aliceAvg > bobAvg ? 'Alice has higher average speed than bob' : 'Bob has higher average speed than Alice';
console.log(higherSpeed)


/* Challenge 2
Two schools, Oakwood and Pinecrest, are competing in an annual spelling bee contest. They compete in 3 rounds. The school with the highest average score wins the championship trophy!

Calculate the average score for each school, using the test data below.

Compare the schools' average scores to determine the winner of the championship, and print it to the console. Remember, there can be a tie, so check for that as well (tie means they have the same average score).

BONUS 1: Include a requirement for a minimum score of 15 points. With this rule, a school only wins if it has a higher average score than the other school, and at the same time, a score of at least 15 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

BONUS 2: The minimum score rule also applies to a tie! So a tie only happens when both schools have the same average score and both have a score of 15 points or more. Otherwise, no school wins the championship.

TEST DATA: Oakwood scores 14, 18, and 20. Pinecrest scores 20, 15, and 12.
TEST DATA BONUS 1: Oakwood scores 16, 14, and 19. Pinecrest scores 18, 20, and 17.
TEST DATA BONUS 2: Oakwood scores 15, 15, and 15. Pinecrest scores 15, 15, and 15. */

const oakwood = [16,14,19];
const pinecrest = [18,20,17];

const calcAvg = (data) => {
   let checkMinScore =[];
   for(let i=0; i < data.length; i++){
     if(data[i] >= 15) {
       checkMinScore.push(data[i])
     }
   }
   let sum =0
   for(let i=0 ; i<checkMinScore.length; i++){
      sum += checkMinScore[i]
   }
   return sum/checkMinScore.length
}

const oakwoodAvg = calcAvg(oakwood);
console.log(oakwoodAvg);
const pinecrestAvg = calcAvg(pinecrest);
console.log(pinecrestAvg);

if(oakwoodAvg>pinecrestAvg){
    console.log('Oakwood is winner')
}else if(oakwoodAvg == pinecrestAvg){
    console.log('Match is Tie')
}else if (oakwoodAvg<pinecrestAvg){
    console.log('Pinecrest is winner')
}


/*
Lucy wants to calculate her daily water intake to stay hydrated. According to health guidelines, she should drink 2 litres of water per day, plus an additional 250 ml for every hour of exercise. Lucy exercises different amounts each day.


Your task is to calculate Lucy's total daily water intake, including her exercise needs. Create a variable called 'totalWater' for this. Try to use a ternary operator instead of an if/else statement! (If it's easier, you can start with an if/else statement, and then try to convert it to a ternary operator.)
Print a string to the console containing the amount of exercise in hours, the extra water intake due to exercise, and the total water intake. Example: 'Lucy exercised for 1 hour(s) today, so she needs to drink an additional 0.25 liters of water, making her total water intake 2.25 liters.'
TEST DATA: Test for exercise hours 0, 1, and 3

HINT: To calculate the additional water intake, multiply the hours of exercise by 0.25 liters.
HINT: The base water intake without exercise is 2 liters 😉

GOOD LUCK 😀
*/
// const exerciseHours = 3;
function lucy(hour){
    const extraWater = hour * 0.25
    const totalWater = 2 + extraWater;
    console.log(`Lucy exercised for ${hour} hour today, so she needs to drink an additional ${extraWater} liters of water, making her total water intake of ${totalWater} liters`)
}
lucy(0);
lucy(1)
lucy(3)


/*
Imagine an inter-college quiz competition between the Engineering department and the Science department! The competition format has changed to make it more exciting.
Each department participates in 3 quiz rounds, and then the average of the 3 scores is calculated (so one average score per department).
A department ONLY wins if it has at least 1.5 times the average score of the other department. Otherwise, no department wins!

Create an arrow function 'calcAverage' to calculate the average of 3 scores.
Use the function to calculate the average for both departments.
Create a function 'declareWinner' that takes the average score of each department as parameters ('avgEngineering' and 'avgScience'), and then logs the winner to the console, along with the victory points, according to the rule above. Example: "Engineering wins (45 vs. 30)".
Use the 'declareWinner' function to determine the winner for both TEST DATA 1 and TEST DATA 2.
This time, ignore ties as well.
TEST DATA 1: Engineering scores 60, 45, and 75. Science scores 66, 55, and 52
TEST DATA 2: Engineering scores 40, 60, and 80. Science scores 20, 35, and 50

HINT: To calculate the average of 3 values, add them all together and divide by 3.
HINT: To check if one average score is at least 1.5 times the other, check for A >= 1.5 * B. Apply this to the department's average scores 😉

GOOD LUCK 😀
*/

const scienceDept = [40, 60,  8];
const engineeringDept = [20, 35,  50]

const calcAverage = (score) => {
    let sum = 0;
    for(let i=0; i < score.length; i++){
        sum += score[i]
    }
    return parseInt(sum/score.length)
}

const scienceDeptAvg = calcAverage(scienceDept);
console.log(scienceDeptAvg)
const engineeringDeptAvg = calcAverage(engineeringDept);
console.log(engineeringDeptAvg)

// const winner = scienceDeptAvg >= 1.5 * engineeringDeptAvg ? 'Science Dept is winner' : 'Engineering Dept is winner';
// console.log(winner)

if(scienceDeptAvg >= 1.5*engineeringDeptAvg){
    console.log('Science Dept is winner')
}else if(engineeringDeptAvg >= 1.5 * scienceDeptAvg){
    console.log('Engineering Dept is winner')
}else{
    console.log('no winner')
}