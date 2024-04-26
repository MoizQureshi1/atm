#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance  = 10000; // Dollar
let myPin = 1235; 

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number"  
        }
    ]
);

if(pinAnswer.pin === myPin){
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw", "check balance", "passed cash"]
            }
        ]
    );

    console.log(operationAns); 
        

    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [

                {
                    name: "amount",
                    message: "enter your amount",
                    choices: "number"
                }
            ]
        );
        if(amountAns.amount >= myBalance){
            console.log("your balance is not in enough amount");
        }
        else if(myBalance -= amountAns.amount){
        console.log("Your remaining balance is:" + myBalance)
        }
       
    }

    else if(operationAns.operation === "check balance"){
        console.log("your balance is: " + myBalance)
}    

    else if (operationAns.operation === "passed cash"){
        let amountAnsw = await inquirer.prompt(
            [

                {
                    name: "amount",
                    message: "select your amount",
                    type: "list",
                    choices: ["1000", "2000", "5000", "10000"]


                }
            ]
        );

        myBalance -= amountAnsw.amount
        
            console.log("Your remaining balance is:" + myBalance)
    }
        
    
}
else{
    console.log("Incorrect pin number");
};