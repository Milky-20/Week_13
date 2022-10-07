function message(){
    let name = prompt('Как тебя зовут?');

    alert( `Привет ${name}!` );
}

function calcPlas(x=prompt('Введите первое число'), y=prompt('Введите второе число'), z=(+x + +y)){
    alert(`Сложение равно ${z}`)
}
function calcMinus(x=prompt('Введите первое число'), y=prompt('Введите второе число'), z=(+x - +y)){
    alert(`Вычитание равно ${z}`)
}
function calcMultiplay(x=prompt('Введите первое число'), y=prompt('Введите второе число'), z=(+x * +y)){
    alert(`Умножение равно ${z}`)
}
function calcDivide(x=prompt('Введите первое число'), y=prompt('Введите второе число'), z=(+x / +y)){
    alert(`Деление равно ${z}`)
}