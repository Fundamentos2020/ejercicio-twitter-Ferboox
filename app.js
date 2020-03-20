//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event Listener
eventListeners();

function eventListeners(){
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    listaTweets.addEventListener("click",borrarTweet);
}

//Funciones
function agregarTweet(e)
{
    e.preventDefault();
    /*
    console.log("Formulario enviado");*/

    const tweet = document.getElementById("tweet").value;

    
    const botonBorrar = document.createElement("a");
    botonBorrar.classList = "borrar-tweet";
    botonBorrar.innerText = "X";



    const li = document.createElement("li");
    li.innerText = tweet;

    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);
}

function borrarTweet(e)
{
    e.preventDefault();
    if (e.target.className == "borrar-tweet")
    {
        console.log(e.target.parentElement.remove());
        alert("Tweet Eliminado");
    }
}