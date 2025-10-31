let div = document.getElementById('div1')
//  inicializamos la variable div con "let" 
//  este div esta ligado con el main del HTML,
//  ¿que quiere decir? pues que estamos accediendo a
//  nuestro DOM para poder modificarlo desde nuestro
// JavaScript, es decir, desde aqui.



// aqui está el function 
function colores(){
    div.innerHTML= "Esto proviene desde el archivo JS"
    div.style.marginTop= "50px"
    div.style.background = "aliceblue";
}