const random = Math.floor(Math.random()*10 ) +1; 
const random1 = Math.floor(Math.random()*100 ) +1;
const random2 = Math.floor(Math.random()*1000 ) +1;



const question = prompt("quel nombre veut tu générer: entre 1 et 10 , entre 1 et 100 ou entre 1 et 1000");



if(question === "entre 1 et 10") {
	console.log(random);
} else if(question === "entre 1 et 100") {
	console.log(random1); 
} else if(question === "entre 1 et 1000") {
	console.log(random2);
} else {
	console.log("la réponse na pas été compris")
}