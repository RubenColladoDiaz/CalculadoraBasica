function addToInput(value) {
    document.querySelector('.userinput').value += value; // Se agrega X texto al input de la calculadora
}

function clearInput() {
    document.querySelector('.userinput').value = ''; // Se limpia el input de la calculadora
}

function calculate() {
    var input = document.querySelector('.userinput').value; // Contenido del input de la calculadora
    try {
        var result = eval(input); // Evaluar la expresión matemática y calcularla
        document.querySelector('.userinput').value = result; // Si sale bien se imprime el restultado
    } catch (error) {
        document.querySelector('.userinput').value = 'Error';
    }
}