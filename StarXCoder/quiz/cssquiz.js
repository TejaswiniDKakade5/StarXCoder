const quizDB = [
    {
        question:"Q1: What is full form of CSS?",
        a: "Cascading style sheet",
        b:"Cascading sheet style",
        c:"Hyper Text Markup Language",
        d:"Hypaertext Markup Language",
        ans: "ans4"
    },

    {
        question:"Q2: How can we change the text color of an element?",
        a: "color",
        b:"background-color",
        c:"both a & b",
        d:"none of these",
        ans: "ans1"
    },

    {
        question:"Q3: What type of CSS is generally recommended for designing large web pages?",
        a: "inline",
        b:"internal",
        c:"external",
        d:"none of these",
        ans: "ans3"
    },

    {
        question:"Q4: How can we select an element with a specific ID in CSS?",
        a: "#",
        b:".",
        c:"^",
        d:"none of these",
        ans: "ans1"
    },

    {
        question:"Q5: Can negative values be allowed in padding property?",
        a: "yes",
        b:"no",
        c:"depends on property",
        d:"none of these",
        ans: "ans2"
    },

    {
        question:"Q6: The CSS property used to specify the transparency of an element is?",
        a: "opacity",
        b:"visibility",
        c:"filter",
        d:"none of these ",
        ans: "ans1"
    },

    {
        question:"Q7: How can we specify the spacing between each letter in a text in CSS?",
        a: "alpha-spacing",
        b:"letter-spacing",
        c:"character-spacing ",
        d:"none of these ",
        ans: "ans2"
    },


    {
        question:"Q8: What is the correct syntax for referring an external CSS?",
        a: '<link rel="stylesheet" type="text/css" href="style.css">',
        b:'<link rel="stylesheet" type="text/css" href="style.css">',
        c:"Both a and b ",
        d:"none of these ",
        ans: "ans1"
    },

    {
        question:"Q9: We can make rounded borders around elements using which CSS element?",
        a: "border-collapse",
        b:"border-round",
        c:"border-radius",
        d:"none of these ",
        ans: "ans3"
    },

    {
        question:"Q10: Which of the following are valid CSS position property values?",
        a: "static",
        b:"relative",
        c:"fixed ",
        d:"All of these ",
        ans: "ans4"
    },

    {
        question:"Q11: Setting an inline-block in CSS requires which of the following properties?",
        a: "block",
        b:"display",
        c:"color ",
        d:"none of these ",
        ans: "ans2"
    },

    {
        question:"Q12: Which of the following CSS property is used for controlling the layout?",
        a: "display",
        b:"color",
        c:"text",
        d:"none of these",
        ans: "ans1"
    },

    {
        question:"Q13: Which of the following are parts of the CSS box model?",
        a: "margin",
        b:"border",
        c:"padding",
        d:"All of these ",
        ans: "ans4"
    },

    {
        question:"Q14: Which of the following components of the CSS box model are transparent?",
        a: "margin",
        b:"paddind",
        c:"Both a and b ",
        d:"content ",
        ans: "ans3"
    },

    {
        question:"Q15: What value should be passed to the width parameter if we want an element, say a table, to span the entire width of the screen? ",
        a: "100%",
        b:"50%",
        c:"0% ",
        d:"none of these ",
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