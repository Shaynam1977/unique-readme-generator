// TODO: Include packages needed for this application
const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require("inquirer")
const fs=require("fs")
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type:"input",
            name:"title",
            message:"What is the title of your app?"
        }, 
        {
            type:"input",
            name:"discription",
            message:"What is your program description?"
        }, 
        {
            type:"input",
            name:"installation",
            message:"Please include any installation instructions"
        }, 
        {
            type:"input",
            name:"usage",
            message:"Please include any usage instructions"
        }, 
        {
            type:"input",
            name:"lincense",
            message:"Are any licenses applied to your application"
        }, 
        {
            type:"input",
            name:"contributing",
            message:"Please list any contributing parties"
        }, 
        {
            type:"input",
            name:"tests",
            message:"Please include any test instructions"
        }, 
        {
            type:"input",
            name:"questions",
            message:"Please list any relavent questions"
        }, 
    ]) .then(data=>{
        console.log(data)
        fs.writeFileSync("readMeTest.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
