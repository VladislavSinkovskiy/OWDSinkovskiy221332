let x = +prompt('Введите число');
let n = Math.floor(+prompt('Введите степень'));
let answer = 1;
for(let i = 0; i < n; i++) {
    answer = answer * x;
}
alert(answer);