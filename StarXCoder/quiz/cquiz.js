const quizDB = [
    {
        question:"Q1: Single line Comment in C?",
        a: "//",
        b:"/* and */",
        c:"<!-- and -->",
        d:"#",
        ans: "ans1"
    },

    {
        question:'Q2: Trace the output -  int main(){  int a=5,b=2, sum;  sum=a+b;  printf("sum") }?',
        a: "7",
        b:"error",
        c:"sum = 7",
        d:"sum ",
        ans: "ans4"
    },

    {
        question:"Q3: \\a is use for?",
        a: "alter",
        b:"alaram or beep",
        c:"hexadecimal",
        d:"new line",
        ans: "ans2"
    },

    {
        question:"Q4: C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in ?",
        a: "1972",
        b:"1970",
        c:"1990",
        d:"1995",
        ans: "ans1"
    },

    {
        question:"Q5: To create a file, you can use the w mode inside which function",
        a: "fwrite()",
        b:"fclose()",
        c:"fopen()",
        d:"None of these",
        ans: "ans3"
    },

    {
        question:"Q6: What is a correct syntax to output 'Hello World' in C?",
        a: 'print("Hello world");',
        b: 'printf("Hello world");',
        c: 'console.log("Hello world");',
        d:  "None of these",
        ans: "ans2"
    },

    {
        question:"Q7: Which operator can be used to find the memory size (in bytes) of a data type or variable?        ",
        a: "sizeof",
        b:"len",
        c:"length",
        d:"sizer",
        ans: "ans1"
    },

    {
        question:"Q8: Which keyword is used to return a value inside a function? ",
        a: "get",
        b:"void",
        c:"break",
        d:"return",
        ans: "ans4"
    },

    {
        question:"Q9: What is a correct syntax for For loop?",
        a: "for (i=0; i<5; break)",
        b:"for (i=0; i++;)",
        c:"for (statement 1; switch())",
        d:"for (i=0; i<5; i++)",
        ans: "ans4"
    },

    {
        question:"Q10: int myNumbers[] = {25, 50, 75, 100}; is",
        a: "A pointer",
        b:"Array",
        c:"Structure",
        d:"All of these",
        ans: "ans2"
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