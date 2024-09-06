// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
  //////////////////////////////////////////////////////////////////////////////////////
  
                /*PART 1: Math Problems*/
  //divisable by 5?
  const divisableBy_5 = (n1%5 ===0 && n2%5 ===0 && n3%5 ===0 && n4%5===0);
  console.log(`Are the numbers divisable by 5: ${divisableBy_5}`)
  //first num > last num?
  const isFirstLargerThanLast = (n1>n4);
  console.log(`Is ${n1} >  ${n4}:  ${isFirstLargerThanLast}`)
  //Substract n1-n2
  //multiply by n3
  //divide result by n4
  const subtract = n1-n2;
  console.log(subtract);
  const multiply = subtract*n3;
  console.log(multiply);
  const divide = multiply/n4;
  console.log(divide);
 
  //Change the way that isOver25 calculates so that we do not need to use the NOT operator (!)
  const isLess25_2 = n1 < 25 && n2 <25 && n3 < 25 && n4 < 25;
  console.log(` Are they less than 25 : ${isLess25_2}`);
  const isUnique_2 = n1 < n2 || n1 < n3 || n1 < n4 || n2 < n3 || n2 < n4 || n3 < n4;
  console.log(`Are they Unique: ${isUnique_2}`)

  const isValid_2 = isSum50 && isTwoOdd && isLess25_2 && isUnique;
  console.log(`Are the numbers valid: ${isValid_2}`)

               /*PART 2: Practical Math*/ 


  //55mph
  // const totalDistance =1500;
  // const budget =175;
  // const avgFuelCost =3;
  // let mph =55;
  // let milesPerGallon =30

  // function crossCountryTrip(mph,milesPerGallon){
  //   const totalDistance =1500;
  //   const budget =175;
  //   const avgFuelCost =3;
   
   
  //   let gallonsForTrip = totalDistance/milesPerGallon;
  //   let gallonsNeeded = budget/avgFuelCost
  //   let time = totalDistance/mph
  //   if(gallonsNeeded > gallonsForTrip){
  //     console.log(`Budget will not suffice, around ${Math.ceil(gallonsNeeded)} minimum is needed while budget accounts for ${Math.ceil(gallonsForTrip)} at ${mph} mph. You will run out of gas in approximately ${Math.ceil(time)} hours`)
  //   }else{
  //     console.log(`At ${mph} mph your budget will work since you will burn one gallon per ${milesPerGallon} and you need around ${Math.ceil(gallonsForTrip)} gallons of gas for a 1500 miles. Total time is approximately ${time} hours`)
  //   }
  // }
  // crossCountryTrip(55,30)
  // crossCountryTrip(60,28)
  // crossCountryTrip(75,23)
  // // 75 miles per hour makes the most sense or...increaseing the budget by 100 dollars


  const trip =(mph,mpg)=>{
      const totalDistance =1500;
      const budget =175;
      const avgFuelCost =3;
      let gallonsForTrip= totalDistance/mpg;
      let gallonsNeeded = Math.ceil(budget/avgFuelCost)
      const time = Math.ceil(totalDistance/mph);
      if(gallonsNeeded > gallonsForTrip){
          console.log(`At ${mph}MPH you will not have enough money for the trip at ${mpg} miles per gallon. You will run out of gas in ${time} hours`)
      }else{
        console.log(`At ${mph}MPH you will have enough money for the trip at ${mpg} miles per gallon. You will arrive at your destination in ${time} hours`)
      }
  }

  trip(55,30);
  trip(60,28)
  trip(75,23)
  //It really only makes sense at 75mph or to increase the budget by 60 dollars