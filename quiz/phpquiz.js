const quizDB = [
    {
        question:"Q1: What is full form of php?",
        a: "Personal Programming",
        b:"personal home page",
        c:"preprocessor home page",
        d:"None of the above",
        ans: "ans2"
    },

    {
        question:"Q2: Which of the following type of variables are special variables that hold references to resources external to PHP (such as database connections)?",
        a: "objects",
        b:"strings",
        c:"Arrays",
        d:"resources",
        ans: "ans4"
    },

    {
        question:"Q3: Which of the following function is used to get length of a string?",
        a: "size()",
        b:"strlen()",
        c:"length",
        d:"none of the above",
        ans: "ans2"
    },

    {
        question:"Q4: If there is any problem in loading a file then the include() function generates a warning but the script will continue execution.",
        a:"." ,
        b:"False",
        c:"true",
        d:".",
        ans: "ans3"
    },

    {
        question:"Q5:Which of the following function is used to check if a file exists or not?  ",
        a: "fopen()",
        b:"fread()",
        c:"filesize()",
        d:"file_exist()",
        ans: "ans4"
    },

    {
        question:"Q6:Which of the following is an associative array of variables passed to the current script via HTTP cookies?   ",
        a: "$GLOBALS",
        b:"$_COOKIE",
        c:"$_SESSION",
        d:"$_SERVER",
        ans: "ans2"
    },

    {
        question:"Q7:Which of the following method of Exception class returns source filename? ",
        a: "getMessage()",
        b:"getFile()",
        c:"getCode()",
        d:"getLine()",
        ans: "ans2"
    },

    {
        question:"Q8: Who is the father of PHP?",
        a: "Drek Kolkevi",
        b:" Willam Makepiece",
        c:"Rasmus Lerdorf",
        d:"List Barely",
        ans: "ans3"
    },

    {
        question:"Q9: What is PHP?",
        a: "PHP is an open-source programming language",
        b:"PHP is used to develop dynamic and interactive websites",
        c:"PHP is a server-side scripting language",
        d:"All of the mentioned",
        ans: "ans4"
    },

    {
        question:"Q10: Which of the following PHP functions can be used for generating unique ids? ",
        a: "md5()",
        b:"uniqueid()",
        c:"mdid()",
        d:"id()",
        ans: "ans2"
    },

    {
        question:"Q11: A function in PHP which starts with __ (double underscore) is known as __________",
        a: "Default Function",
        b:"User Defined Function",
        c:"Inbuilt Function",
        d:"Magic Function",
        ans: "ans4"
    },


    {
        question:"Q12: Which of the following web servers are required to run the PHP script?",
        a: "Apache and PHP",
        b:"IIS",
        c:"XAMPP",
        d:"All of these but  You can choose either one according to your platform.",
        ans: "ans4"
    },

    {
        question:"Q13:Which one of the following PHP function is used to determine a file’s last access time? ",
        a: " filetime()",
        b:"fileatime()",
        c:" fileltime()",
        d:" filectime()",
        ans: "ans2"
    },

    {
        question:"Q14:Which of the following is the correct way to add a comment in PHP code?",
        a: "/*  */",
        b:"//",
        c:"#",
        d:"All of these",
        ans: "ans4"
    },

    {
        question:"Q15: PHP recognizes constructors by the name _________       ",
        a: " function __construct()",
        b:" function -construct()",
        c:" classname()",
        d:"_construct()",
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