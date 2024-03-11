const questions = [{
	
		'que': 'Which of the following is a markup language?',
		'a': 'HTML',
		'b': 'CSS',
		'c': 'JavaScript',
		'd': 'PHP',
		'correct': 'a'

	},
	{
		'que': 'Which of the following is a structured programming technique that graphically represents the detailed steps required to solve a program?',

		'a': 'Object-oriented programming',
		'b' : 'Pseudocode',
		'c' : 'Flowchart',
		'd' : 'Top-down design',
		'correct' : 'c'
	},

	{
		'que':'Which of the following is an output device?',

		'a':'Keyboard',
 		'b':'Mouse',
		'c': 'Light pen',
		'd': 'VDU',
		'correct' : 'd'
	},
	{
		'que':'Which of the following is an input device?',

 		'a':'Plotter',
		'b':'Printer',
		'c':'VDU',
		'd':'Mouse',
		'correct':'d'
	},
	{
		'que':'Which one of the following groups contains graphical file extensions?',

		'a':'JPG, CPX, GCM',
		'b':'GIF, TCE, WMF',
		'c':'TCP, JPG, BMP',
		'd':'JPG, GIF, BMP',
		'correct':'d'
	}
]

let index = 0;
let total = questions.length;
let right = 0,
	wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInput = document.querySelectorAll('.options')
const loadQuestion = () => {
	if(index === total){
		return endQuiz()
	}
	reset();
	const data = questions[index]
	quesBox.innerText = ` ${index+1}) ${data.que}`;
	optionInput[0].nextElementSibling.innerText = data.a;
	optionInput[1].nextElementSibling.innerText = data.b;
	optionInput[2].nextElementSibling.innerText = data.c;
	optionInput[3].nextElementSibling.innerText = data.d;
}	

const submitQuiz = () => {
	const data = questions[index];
	const ans = getAnswer()
	if(ans === data.correct) {
		right++;
	}else{
		wrong++;
	}
	index++;
	loadQuestion();
	return;
}

const getAnswer = () => {
	let answer
	optionInput.forEach(
		(input)=> {
			if (input.checked){
				answer = input.value;

			}
		}
	)
	return answer;
}


const reset = () =>{
	optionInput.forEach(
		(input)=> {
			input.checked = false;
		}
	)

}

const endQuiz = () => {
	document.getElementById("box").innerHTML =`
	<div style="text-align:center">
		<h3> Thank you for playing the quiz</h3>
		<h2> ${right}/ ${total} are correct </h2>
		</div>
		`
}
//initial call
loadQuestion();