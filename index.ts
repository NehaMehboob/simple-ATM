#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let user = {
    name:"nehaMehboob",
    pin:123456,
    balance:100000
};

const atm = await inquirer.prompt([

    {
        name:"pin",
        type:"input",
        message:chalk.bgBlueBright("Enter your pin")
    },

]);


if(user.pin == atm.pin){
    console.log(chalk.bgGrey(`welcome ${user.name}`));
    
    const answer = await inquirer.prompt([
        {
            name:"method",
            type:"list",
            choices:["Custom amount","Fast cash","Check balance"],
            message:"Select your withdraw method",

        }
    ]);

    if(answer.method === "Custom amount"){
        const CustomAmount = await inquirer.prompt([
{
    name:"amount",
    type:"input",
    message:chalk.bgBlackBright("Enter your desired amount")
}
        ]);

    user.balance = user.balance -CustomAmount.amount;
if(CustomAmount.amount > user.balance){
    console.log(chalk.bgRed("insufficient Balance!"));
    
}else{

    console.log(chalk.yellowBright(`You withdrew ${CustomAmount.amount}`));
    console.log(chalk.yellowBright(`Your current balance is ${user.balance}`));
}

 }else if(answer.method === "Fast cash"){

    const fastCash = await inquirer.prompt([

        {
            name:"amount",
            type:"list",
            choices:["500","1000","3000","5000","10000"],
            message:"Select your desired amount"
        }
        
]);
 
user.balance = user.balance - fastCash.amount;
 
if(fastCash.amount > user.balance){

    console.log(chalk.bgRed("insufficient Balance!"));
    
}else{

    console.log(chalk.yellowBright(`You withdrew ${fastCash.amount}`));
    console.log(chalk.yellowBright(`Your current balance is ${user.balance}`));
}

 }else if(answer.method === "Check balance"){
    console.log(chalk.yellowBright(`Your current balance is ${user.balance}`));
 }
 


}else{
    console.log(chalk.bgRedBright("Wrong Pin Try Again"));
}
