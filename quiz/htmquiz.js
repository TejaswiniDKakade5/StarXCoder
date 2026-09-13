const quizDB = [
    {
        question:"Q1: What is full form of HTML?",
        a: "Hello To My Land",
        b:"Hey Text Markup Language",
        c:"Hyper Text Markup Language",
        d:"Hypertext Markup Language",
        ans: "ans4"
    },

    {
        question:"Q2: What is the smallest header in HTML by default?",
        a: "h1",
        b:"h2",
        c:"h6",
        d:"h4",
        ans: "ans3"
    },

    {
        question:"Q3: What are the types of lists available in HTML?",
        a: "Ordered,Unordered lists",
        b:"Bulleted,Numbered lists",
        c:"Named,Unmamed lists",
        d:"None of the above",
        ans: "ans1"
    },

    {
        question:"Q4: If we want to open link to another page in HTML then which of the following attribute we use?",
        a: '<a href=" " >',
        b:'<a href=" " target="_blank">',
        c:'<a href=" " target="_parent">',
        d:'<a href=" " target="_new">',
        ans: "ans2"
    },

    {
        question:"Q5: Which character is used to represent the closing of a tag in HTML?",
        a: "\\" ,
        b:"!",
        c:"/",
        d:".",
        ans: "ans3"
    },

    {
        question:"Q6: How to insert an image in HTML?",
        a: '<img link = "jtp.png" /> ',
        b: '<img href = "jtp.png" /> ',
        c: '<img url = "jtp.png" /> ',
        d: '<img src = "jtp.png" /> ',
        ans: "ans4"
    },

    {
        question:"Q7:Which of the following is the container for <tr>, <th>, and <td> ?",
        a: "<data>",
        b:"<table>",
        c:"<group>",
        d:"All of above",
        ans: "ans2"
    },

    {
        question:"Q8:Which of the following HTML tag is used to display the text with scrolling effect?",
        a: "<marquee>",
        b:"<scroll>",
        c:"<div>",
        d:"none of the above",
        ans: "ans1"
    },

    {
        question:"Q9:What are the types of unordered or bulleted list in HTML?",
        a: "disc, square, triangle",
        b:"polygon, triangle, circle",
        c:"disc, circle, square",
        d:"All of above",
        ans: "ans3"
    },

    {
        question:"Q10:Which of the following is the correct way to start an ordered list with the count of numeric value 4?",
        a: '<ol type = "1" initial = "4">',
        b: '<ol type = "1" begin = "4">',
        c: '<ol type = "1" num = "4">',
        d: '<ol type = "1" start = "4">',
        ans: "ans4"
    },

    {
        question:"Q11:A program in HTML can be rendered and read by -",
        a: "Web browser",
        b:"Server",
        c:"Interpreter",
        d:"none of the above",
        ans: "ans1"
    },

    {
        question:"Q12:The tags in HTML are - ",
        a: "Case-sensitive",
        b: "Uppercase",
        c: "Lowercase",
        d: "Not case sensitive",
        ans: "ans4"
    },

    {
        question:"Q13:Comment in HTML?",
        a: "//",
        b:"<!-- and -->",
        c:"<!-- and -!>",
        d:"/* and */",
        ans: "ans2"
    },

    {
        question:"Q14:Which of the following tag is used to add rows in the table?",
        a: "<td> and </td>",
        b:"<th> and </th>",
        c:"<tr> and </tr>",
        d:"none of the above",
        ans: "ans3"
    },

    {
        question:"Q15:Which of the following attribute is used to provide a unique name to an element? ",
        a: "class",
        b:"id",
        c:"type",
        d:"none of the above",
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

        showScore.innerHTML = `<h3> You scored ${score}/${quizDB.length} ✌️</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `; 
       showScore.classList.remove('scoreArea');

      

        
        }

});