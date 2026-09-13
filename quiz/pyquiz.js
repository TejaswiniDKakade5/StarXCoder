const quizDB = [
    {
        question:"Q1: What is the maximum length of a Python identifier?",
        a: "32",
        b:"16",
        c:"128 ",
        d:"No fix length is specifies.",
        ans: "ans4"
    },

    {
        question:"Q2: Python was develop by -",
        a: "Guido van Rossum",
        b:"Bjarne Stroustrup",
        c:"Dennis Ritchie",
        d:"Brendan Eich",
        ans: "ans1"
    },

    {
        question:"Q3: How is a code block indicated in Python?",
        a: "Brackets",
        b:"Indentation",
        c:"key",
        d:"none of the above",
        ans: "ans2"
    },

    {
        question:"Q4: Which of the following concepts is not a part of Python? ",
        a: "pointer",
        b:"loops",
        c:"Dynamic typing",
        d:"All of the above",
        ans: "ans1"
    },

    {
        question:"Q5:Which of the following statements are used in Exception Handling in Python?  ",
        a: "try",
        b:"except",
        c:"finally",
        d:"All of the above",
        ans: "ans4"
    },

    {
        question:"Q6: Which of the following types of loops are not supported in Python?        ",
        a: "for",
        b:"while",
        c:"do-while",
        d:"none of the above",
        ans: "ans3"
    },

    {
        question:"Q7: Which of the following functions converts date to corresponding time in Python?      ",
        a: "strptime()",
        b:"strftime()",
        c:"Both a and b",
        d:"none of the above",
        ans: "ans1"
    },

    {
        question:"Q8: As what datatype are the *args stored, when passed into a function?",
        a: "list",
        b:"tuple",
        c:"dictonary",
        d:"none of the above",
        ans: "ans2"
    },

    {
        question:"Q9: As what datatype are the *kwargs stored, when passed into a function?",
        a: "list",
        b:"tuple",
        c:"dictonary",
        d:"none of the above",
        ans: "ans3"
    },

    {
        question:"Q10: What keyword is used in Python to raise exceptions?   ",
        a: "raise",
        b:"goto",
        c:"try",
        d:"except",
        ans: "ans1"
    },

    {
        question:"Q11: Which of the following is not a valid set operation in python?",
        a: "Union",
        b:"intersection",
        c:"difference",
        d:"none of the above",
        ans: "ans4"
    },


    {
        question:"Q12: Which of the following are valid escape sequences in Python?",
        a: "\t",
        b:"\n",
        c:"\\",
        d:"All of these",
        ans: "ans4"
    },

    {
        question:"Q13: Which of the following are valid string manipulation functions in Python?"        ,
        a: "strip",
        b:"counter",
        c:"upper",
        d:"All of these",
        ans: "ans4"
    },

    {
        question:"Q14: What will be the result of the following expression in Python “2 ** 3 + 5 ** 2”?        ",
        a: "33",
        b:"65536",
        c:"169",
        d:"none of the above",
        ans: "ans1"
    },

    {
        question:"Q15: In which language is Python written? ",
        a: "C",
        b:"C++",
        c:"java",
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