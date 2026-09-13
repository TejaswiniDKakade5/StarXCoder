const quizDB = [
    {
        question:"Q1: Who invented C++?",
        a: " Dennis Ritchie",
        b:"Bjarne Stroustrup",
        c:" Ken Thompson ",
        d:" Brian Kernighan",
        ans: "ans2"
    },

    {
        question:"Q2: Which of the following user-defined header file extension used in c++?",
        a: "cpp",
        b:"hg",
        c:"h",
        d:"c++",
        ans: "ans1"
    },

    {
        question:"Q3: Which of the following is a correct identifier in C++?",
        a: "$var_name",
        b:" VAR_1234",
        c:" 7VARNAME",
        d:"7var_name",
        ans: "ans2"
    },

    {
        question:"Q4: Which of the following is not a type of Constructor in C++?",
        a: "Default constructor",
        b:"Parameterized constructor",
        c: "Copy constructor",
        d:" Friend constructor",
        ans: "ans4"
    },

    {
        question:"Q5:Which of the following approach is used by C++? ",
        a: "Left-right",
        b:"Right-Left",
        c:"Bottom-up",
        d:"Top-down",
        ans: "ans3"
    },

    {
        question:"Q6:Which of the following type is provided by C++ but not C?     ",
        a: "double",
        b:"float",
        c:"int",
        d:"bool",
        ans: "ans4"
    },

    {
        question:"Q7: By default, all the files in C++ are opened in _________ mode.",
        a: "Binary",
        b:"VTC",
        c:"Text",
        d:"ISCII",
        ans: "ans3"
    },

    {
        question:"Q8: Which of the following correctly declares an array in C++?",
        a: "array{10};",
        b: " array array[10];",
        c: " int array;",
        d: " int array[10];",
        ans: "ans4"
    },

    {
        question:"Q9: Which is more effective while calling the C++ functions?",
        a: "call by object",
        b:"call by pointer",
        c:"call by value",
        d:"call by reference",
        ans: "ans4"
    },

    {
        question:"Q10: The C++ code which causes abnormal termination/behaviour of a program should be written under _________ block.  ",
        a: "try",
        b:"catch",
        c:"throw",
        d:"finally",
        ans: "ans1"
    },

    {
        question:"Q11: Which of the following symbol is used to declare the preprocessor directives in C++?",
        a: "$",
        b:"#",
        c:"^",
        d:"*",
        ans: "ans2"
    },


    {
        question:"Q12: What is meant by a polymorphism in C++?",
        a: "class having only single form",
        b:"class having four form",
        c:"class having many form",
        d:"class having two form",
        ans: "ans3"
    },

    {
        question:"Q13: Which concept allows you to reuse the written code in C++?    ",
        a: "Encapsulation",
        b:"Inheritance",
        c:"polymorphism",
        d:"Abstraction",
        ans: "ans2"
    },

    {
        question:"Q14: How do we write a comment in c++?",
        a: "/*  */",
        b:"<!-- and -->",
        c:"#",
        d:"$ $",
        ans: "ans1"
    },

    {
        question:"Q15: What will be the output of the following C++ function? int main()  {   register int i = 1;   int *ptr = &i; cout << *ptr;  return 0;  }      ",
        a: "compile time error may be possible",
        b:"Runtime error may be possible",
        c:"0",
        d:"1",
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