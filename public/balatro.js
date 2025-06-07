let userInput;
let randInt;
let jokerName = "Hanging Chad";
let imageUrl;

document.getElementById("startGame").onclick = async function(){ // Empieza un nuevo juego al presionar el boton de New Game
  randInt = Math.floor(Math.random() * 3) + 1; // Genera un numero aleatorio
   try {
        const response = await fetch(`/api/jokers/${encodeURIComponent(randInt)}`); // Query al API de un get del Joker cuyo ID es igual al numero aleatorio de la linea 7
        const data = await response.json();
        jokerName = data.jokers[0].name; // Extrae el nombre del joker en formato de string
        imageUrl = data.jokers[0].imageurl; // Extrae la URL de la foto del joker en formato de string
        console.log(jokerName);
        console.log(imageUrl);
        document.getElementById("jokerImage").src=imageUrl; // Cambia la foto del joker al presionar el boton de New Game
   } catch (error) {
        console.error("Error al buscar el post:", error);
        document.getElementById("found").textContent = "Error"; 
   } 
}

document.getElementById("Submit").onclick = function(){
    userInput = document.getElementById("name").value; // Lee el valor de la caja de texto y lo asigna a userInput
    if(jokerName == userInput){
    document.getElementById("answer").textContent = "True"; // Si el nombre del joker coincide con userInput, devuelve true
     } else document.getElementById("answer").textContent = "False";
}
    
