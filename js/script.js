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
console.log(higherBMI)