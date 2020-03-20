//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event Listener
eventListeners();

function eventListeners(){

    //Cuando se envía el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    //Borrar Tweets
    listaTweets.addEventListener("click",borrarTweet);

    //Contenido cargado
    document.addEventListener("DOMContentLoaded", localStorageListo);
}

//Funciones
function agregarTweet(e)
{
    e.preventDefault();
    /*
    console.log("Formulario enviado");*/

    const tweet = document.getElementById("tweet").value;

    //Crear botón de eliminar
    const botonBorrar = document.createElement("a");
    botonBorrar.classList = "borrar-tweet";
    botonBorrar.innerText = "X";


    //Crear elemento y añadirlo al contenido de la lista
    const li = document.createElement("li");
    li.innerText = tweet;

    //Añade el boton de borrar tweet
    li.appendChild(botonBorrar);

    //Añadel el tweet a la lista
    listaTweets.appendChild(li);

    //Añadir al local storage
    agregarTweetLocalStorage(tweet);
}

//Elimina el tweet del DOM
function borrarTweet(e)
{
    e.preventDefault();
    if (e.target.className == "borrar-tweet")
    {
        console.log(e.target.parentElement.remove());
        alert("Tweet Eliminado");
    }
}

//Mostrar datos del local storage en la lista
function localStorageListo()
{
    let tweets;

    tweets = obtenerTweetsLocalStorage();

   tweets.forEach(function(tweet)
   {
        //Crear botón de eliminar
        const botonBorrar = document.createElement("a");
        botonBorrar.classList = "borrar-tweet";
        botonBorrar.innerText = "X";


        //Crear elemento y añadirlo al contenido de la lista
        const li = document.createElement("li");
        li.innerText = tweet;

        //Añade el boton de borrar tweet
        li.appendChild(botonBorrar);
        
        //Añadel el tweet a la lista
        listaTweets.appendChild(li);
   });
}

//Agregar tweet a local storage
function agregarTweetLocalStorage(tweet)
{
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    //Añadir el nuevo tweet
    tweets.push(tweet);

    //Convertir de String a arreglo a local storage
    localStorage.setItem("tweets",JSON.stringify(tweets));

    /*//Agregar al local storage
    localStorage.setItem("tweets",tweet);*/

}

//Comprobar que haya elementos en local storage, retorna un arreglo.
function obtenerTweetsLocalStorage()
{
    let tweets;
    //Revisamos los values de local storage
    if(localStorage.getItem("tweets") == null){
        tweets =[];
    }
    else
    {
        tweets = JSON.parse(localStorage.getItem("tweets"));
    }

    return tweets;
}

