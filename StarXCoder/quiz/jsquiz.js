const quizDB = [
    {
        question:"Q1: What is full form of js?",
        a: "JavaScript",
        b:"javascript",
        c:"java ",
        d:"java search",
        ans: "ans1"
    },

    {
        question:"Q2: Javascript is an _______ language?",
        a: "object oriented",
        b:"object based",
        c:"procedure oriented",
        d:"none of the above",
        ans: "ans1"
    },

    {
        question:"Q3: Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b:"let",
        c:"both a and b",
        d:"none of the above",
        ans: "ans4"
    },

    {
        question:"Q4: Which of the following methods is used to access HTML elements using Javascript? ",
        a: "getElementbyId",
        b:"getElementByClassName",
        c:"Both a and b",
        d:"none of the above",
        ans: "ans3"
    },

    {
        question:"Q5:Which of the following methods can be used to display data in some form using Javascript?  ",
        a: "console.log()",
        b:"document.write()",
        c:"window.alert()",
        d:"All of the above",
        ans: "ans4"
    },

    {
        question:"Q6: What keyword is used to check whether a given property is valid or not?        ",
        a: "in",
        b:"is in",
        c:"lies",
        d:"exists",
        ans: "ans1"
    },

    {
        question:"Q7: What is the use of the <noscript> tag in Javascript?",
        a: "The contents are displayed by non-js browser",
        b:"clears all the cookies and cache",
        c:"Both a and b",
        d:"none of the above",
        ans: "ans1"
    },

    {
        question:"Q8: When an operator’s value is NULL, the typeof returned by the unary operator is:",
        a: "Boolean",
        b:"undefined",
        c:"object",
        d:"integer",
        ans: "ans3"
    },

    {
        question:"Q9: What will be the output of the following code snippet?        print(typeof(NaN));",
        a: "object",
        b:"number",
        c:"string",
        d:"none of the above",
        ans: "ans2"
    },

    {
        question:"Q10: The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?   ",
        a: "object serialization",
        b:"object Encapsulation",
        c:"object inheritance",
        d:"none of the above",
        ans: "ans1"
    },

    {
        question:"Q11: Which of the following are closures in Javascript?",
        a: "object",
        b:"variable",
        c:"function",
        d:"All of the above",
        ans: "ans4"
    },


    {
        question:"Q12: Which of the following is not a Javascript framework?",
        a: "Node",
        b:"Vue",
        c:"React",
        d:"cassandra",
        ans: "ans2"
    },

    {
        question:"Q13: Which of the following are not server-side Javascript objects?    ",
        a: "Date",
        b:"file Upload",
        c:"function",
        d:"All of these",
        ans: "ans4"
    },

    {
        question:"Q14: How do we write a comment in javascript?",
        a: "/*  */",
        b:"//",
        c:"#",
        d:"$ $",
        ans: "ans2"
    },

    {
        question:"Q15: How to stop an interval timer in Javascript?        ",
        a: "clearInterval",
        b:"clearTimer",
        c:"intervalOver",
        d:"none of the above",
        ans: "ans1"
    },

];





const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList =quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();


 const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;

};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener('click',() => {
    const checkedAnswer =getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

     questionCount++;

     deselectAll();

     if(questionCount < quizDB.length){
        loadQuestion();
       }else{

        showScore.innerHTML = `<h3> You scored ${score}/${quizDB.length}✌️ </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `; 
       showScore.classList.remove('scoreArea');

      

        
        }

});