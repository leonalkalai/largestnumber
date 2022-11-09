// Write a statement to find the largest of five numbers. Display an alert box to show the result

// statement

const findLargestNumber= (num1, num2, num3, num4, num5)=>{
    return Math.max(num1, num2, num3, num4, num5);
}

// display the result
alert("The largest number is " + findLargestNumber(5, 10, 9, 3, 4));
