var btn = document.getElementsByClassName('btn');
var list = document.querySelector('.list');
var input = document.getElementById('name');

btn[0].addEventListener("click", function () {

    var name = input.value.trim();

    if( name !== '' ){

        var newLI = document.createElement('li');

        newLI.appendChild(document.createTextNode(name));

        list.insertBefore(newLI, list.firstChild);

        input.value = '';
    }
});