const quizDB = [
    {
        question:"Q1:JDK stands for ____. ",
        a: "Java development kit",
        b:"Java deployment kit",
        c:"JavaScript deployment kit ",
        d:"None of these",
        ans: "ans1"
    },

    {
        question:"Q2:  JRE stands for ___.",
        a: "Java run ecosystem        ",
        b:"JDK runtime Environment",
        c:"Java runtime Environment",
        d:"none of the above",
        ans: "ans3"
    },

    {
        question:"Q3: What are the types of memory allocated in memory in java?",
        a: "heap memory",
        b:"Stack memory",
        c:"both a and b",
        d:"none of the above",
        ans: "ans3"
    },

    {
        question:"Q4: Multiline comment is created using ___. ",
        a: "//",
        b:"$  $",
        c:"/* */",
        d:"<!--  -- >",
        ans: "ans3"
    },

    {
        question:"Q5:What is the entry point of a program in Java?",
        a: "main() method",
        b:"The first line of code",
        c:"Last line of code",
        d:"main class",
        ans: "ans1"
    },

    {
        question:"Q6: Which keyword in java is used for exception handling?    ",
        a: "throw",
        b:"excepHand",
        c:"exep",
        d:"All of these",
        ans: "ans1"
    },

    {
        question:"Q7: Which class in Java is used to take input from the user?",
        a: "Scanner",
        b:"input",
        c:"Applier",
        d:"none of the above",
        ans: "ans1"
    },

    {
        question:"Q8: Method used to take a string as input in Java?",
        a: "next()",
        b:"nextLine()",
        c:"Both a and b",
        d:"none of the above",
        ans: "ans3"
    },

    {
        question:"Q9: Which of these is a type of variable in Java?",
        a: "local variable ",
        b:"instance variable",
        c:"static variable",
        d:"All of the above",
        ans: "ans4"
    },

    {
        question:"Q10:Which of the following can be declared as final in java?   ",
        a: "class",
        b:"method",
        c:"variable",
        d:"All of the above",
        ans: "ans4"
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