 //get the values from the app page
 function getValues(){
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    }else{
        alert("You must enter intergers");
    }


 }

 //generate number from the start value to the end value checking for FizzBuzz
 function generateNumbers(sValue,eValue){
    
    let numbers=[];

    for(let i = sValue;i <= eValue; i++){
        numbers.push(i);

    }

    return numbers;
 }

 function displayNumbers(numbers){
    
    let templateRows = "";

    for(let i = 0; i < numbers.length; i++){
        
        let gameName = "";
        let number = numbers[i];

        if(number % 15 == 0){
            gameName = "FizzBuzz";
            templateRows += `<tr><td>${gameName}</td></tr>`;
        }else if(number % 3 == 0){
            gameName = "Fizz";
            templateRows += `<tr><td>${gameName}</td></tr>`;
        }else if(number % 5 == 0){
            gameName = "Buzz";
            templateRows += `<tr><td>${gameName}</td></tr>`;
        }else{
            templateRows += `<tr><td>${number}</td></tr>`;
        }
       

    } 
    document.getElementById("results").innerHTML = templateRows;

 }