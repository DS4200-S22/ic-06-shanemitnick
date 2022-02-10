/*

In-class activity 07 starter code
Prof. Mosca
Modified: 12/06/21

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    console.log("Button 1 was clicked");

    const buttonDiv = document.getElementById("random_num");

    const randomNum = Math.random() * 100;
    console.log(randomNum);
    buttonDiv.innerHTML = "Random Number is " + randomNum;
}

console.log("Hello world");
