////   CHAPTER   8 (questions from chapter 6 to 9 from github  )
// Q:3
    // var name = prompt("Please enter your name:");
    // var greetingMessage = "Hello, " + name + "! Welcome to our website.";
    // alert(greetingMessage);

// Q:5
        // var number = prompt("Enter a number to display its multiplication table:", 5 ) 

        // // Display the multiplication table in the browser
        // document.write("<h2>Multiplication Table for " + number + "</h2>");
        // document.write(number + " x 1 = " + (number * 1) + "<br>");
        // document.write(number + " x 2 = " + (number * 2) + "<br>");
        // document.write(number + " x 3 = " + (number * 3) + "<br>");
        // document.write(number + " x 4 = " + (number * 4) + "<br>");
        // document.write(number + " x 5 = " + (number * 5) + "<br>");
        // document.write(number + " x 6 = " + (number * 6) + "<br>");
        // document.write(number + " x 7 = " + (number * 7) + "<br>");
        // document.write(number + " x 8 = " + (number * 8) + "<br>");
        // document.write(number + " x 9 = " + (number * 9) + "<br>");
        // document.write(number + " x 10 = " + (number * 10) + "<br>");

        // // Display the multiplication table in the console
        // console.log("Multiplication Table for " + number);
        // console.log(number + " x 1 = " + (number * 1));
        // console.log(number + " x 2 = " + (number * 2));
        // console.log(number + " x 3 = " + (number * 3));
        // console.log(number + " x 4 = " + (number * 4));
        // console.log(number + " x 5 = " + (number * 5));
        // console.log(number + " x 6 = " + (number * 6));
        // console.log(number + " x 7 = " + (number * 7));
        // console.log(number + " x 8 = " + (number * 8));
        // console.log(number + " x 9 = " + (number * 9));
        // console.log(number + " x 10 = " + (number * 10));

// Q:6

// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");
// var totalMarksPerSubject = 100;
// var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"), 10);
// var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"), 10);
// var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"), 10);
// var totalMarks = totalMarksPerSubject * 3;
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / totalMarks) * 100;

// // Display the results in a table in the browser
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><td colspan='2'>Total</td><td>" + totalObtainedMarks + "</td></tr>");
// document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");

// // Display the results in the console
// console.log("Marks Sheet");
// console.log("Subject: " + subject1 + " | Total Marks: " + totalMarksPerSubject + " | Obtained Marks: " + obtainedMarks1);
// console.log("Subject: " + subject2 + " | Total Marks: " + totalMarksPerSubject + " | Obtained Marks: " + obtainedMarks2);
// console.log("Subject: " + subject3 + " | Total Marks: " + totalMarksPerSubject + " | Obtained Marks: " + obtainedMarks3);
// console.log("Total Marks: " + totalMarks);
// console.log("Total Obtained Marks: " + totalObtainedMarks);
// console.log("Percentage: " + percentage.toFixed(2) + "%");





 








////    CHAPTER    9 to 11
//Q:1

    //  var city = prompt("Enter the name of your city:");
    //  if (city === "karachi") {
    //            var message = "Welcome to the city of lights";
    //      alert(message);
    //      console.log(message);
    //  } else {
    //            console.log("The city entered is not Karachi.");
    //  }

//Q:2
// var gender = prompt("Please enter your gender (male/female):").toLowerCase();
// var message;
// if (gender === "male") {
//     message = "Good Morning Sir";
// }

// if (gender === "female") {
//     message = "Good Morning Ma'am";
// }
// if (gender !== "male" && gender !== "female") {
//     message = "Gender not recognized. Please enter 'male' or 'female'.";
// }
// alert(message);
// console.log(message);

// Q:3
//    var color = prompt("Enter the color of the traffic signal (Red/Yellow/Green):").toLowerCase();
//    var message;
//    if (color === "red") {
//        message = "Must Stop";
//    }
//    if (color === "yellow") {
//        message = "Ready to move";
//    }
//    if (color === "green") {
//        message = "Move now";
//    }
//    if (color !== "red" && color !== "yellow" && color !== "green") {
//        message = "Invalid color. Please enter Red, Yellow, or Green.";
//    }
//    alert(message);
//    console.log(message);

// Q:4
// let fuel = prompt("Enter the remaining fuel in your car (in litres):");
// if (fuel < "0.25") {
//     alert("Please refill the fuel in your car");
// }
// alert("happy ride")

// Q:5

// //OUTPUT
//a) given condition for variable a is true
//b) given condition for variable b is not true
//c) condition 2 and 4 is true
//d) condition true ,cost is equal
//e) condition true 
//f) condition true , car is smaller than cat

//Q:6
// var marks1 = +prompt("Enter marks obtained in subject 1:");
// var marks2 = +prompt("Enter marks obtained in subject 2:");
// var marks3 = +prompt("Enter marks obtained in subject 3:");
// var totalMarks = +prompt("Enter the total marks:");
// var totalObtainedMarks = marks1 + marks2 + marks3;
// var percentage = (totalObtainedMarks / totalMarks) * 100;
// var grade = "";
// var remarks = "";
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// if (percentage >= 70 && percentage < 80) {
//     grade = "A";
//     remarks = "Good";
// }
// if (percentage >= 60 && percentage < 70) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// if (percentage < 60) {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// alert("Marks Sheet\n" +
//       "Total marks: " + totalMarks + "\n" +
//       "Marks obtained: " + totalObtainedMarks + "\n" +
//       "Percentage: " + percentage.toFixed(2) + "%\n" +
//       "Grade: " + grade + "\n" +
//       "Remarks: " + remarks);


// Q:7
// const secretNumber = 7;
// const userGuess = +prompt("Guess the secret number (between 1 and 10):");
// if (userGuess === secretNumber) {
//     console.log("Bingo! Correct answer");
// } 
// if (userGuess + 1 === secretNumber) {
//     console.log("Close enough to the correct answer");
// }
// if (userGuess - 1 === secretNumber) {
//     console.log("Close enough to the correct answer");
// }
// if (userGuess !== secretNumber && userGuess + 1 !== secretNumber && userGuess - 1 !== secretNumber) {
//     console.log("Try again!");
// }

// Q:8
// const number = +prompt("Enter a number to check if it is divisible by 3:", 10);
// if (number % 3 === 0) {
//     console.log("The number is divisible by 3.");
// }
// if (number % 3 !== 0) {
//     console.log("The number is not divisible by 3.");
// }

// Q:9
// const number =+prompt("Enter a number to check if it is even or odd:", 10);
// if (number % 2 === 0) {
//     console.log("The number is even.");
// }
// if (number % 2 !== 0) {
//     console.log("The number is odd.");
// }




