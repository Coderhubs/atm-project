#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin =  1234;

console.log("Welcome Dear Sumra Mumbai!!");

let pinAnswer = await inquirer.prompt(
    [
       {
            name:  "pin",
            message: "enter your pin",
            type:  "number"
       } 
    ]
);

if (pinAnswer.pin == myPin){
    console.log("correct pin code!!!");

  let operationAns = await  inquirer.prompt(
        [
             {
                name: "operation",
                message: "please select option",
                type: "list",
                choices:["withdraw","check balance","fastcash"]
             }
         ]
    );

 


    if (operationAns.operation === "withdraw"){
    let withdraw = await inquirer.prompt(
        [
            {
                name:"amount",
                message: "enter your amount",
                type: "number"
            }
        ]
    );
    myBalance -= withdraw.amount
    console.log(withdraw.amount);
    console.log(`your remaining balance is ${myBalance}`);
    
    
    
    }else if(operationAns.operation === "fastcash"){
        let fastCash = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message: "enter your amount",
                    type: "list",
                    choices:["1000","2000","5000","7000","10000","15000"]
                }
            ]
        );
    // = , -= , +=
    if (fastCash.amount > myBalance) {
        console.log("Insufficient funds.");

    }else{
    myBalance -= fastCash.amount
    console.log(fastCash.amount);
    console.log(`your balance is ${myBalance}`);
    }
    

 }  else if (operationAns.operation === "check balance"){
    console.log("your balance is: " + myBalance);
    
 }

}else{console.log("wrong pin");
}