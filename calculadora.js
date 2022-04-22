function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpa(){
    document.getElementById('resultado').innerHTML = '';
}

function apagar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        var calc = (eval(resultado)).toString();
        if (calc.length > 15){
            while(calc.length > 15){
                calc = calc.substring(0, calc.length -1);
            }
        }
        document.getElementById('resultado').innerHTML = calc;
    }
}