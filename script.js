function showJs() {
    var o = "Hello World";
    document.getElementById("world").innerHTML = "<p style='font-size: 2em;'>" + o + "</p>";
}

function changeJs() {
    var c = document.getElementById("cursos").value;
    document.getElementById("present").innerHTML = "<p style='font-size: 2em;'>" + c + "</p>";
}

function massagem() {
    var m = "Seja bem vindo a massagem";
    document.getElementById("m").innerHTML = "<p style='font-size: 2em;'>" + m + "</p>";
}


function acao(){
    var a = document.getElementsByTagName("h1")[0];
    document.getElementById("exibi").innerHTML = a.innerHTML;

}

function exibirEscreva() {
    var c = document.getElementById("escreva").value;
    document.getElementById("result").innerHTML = c;
    c.value = "";
}

function acion(){
    var t = document.getElementsByTagName("h1")[1];

    t.style.color = "rgb(65,88,208)";
    t.style.fontSize = "32px";

    t.innerHTML = t.innerHTML;
}