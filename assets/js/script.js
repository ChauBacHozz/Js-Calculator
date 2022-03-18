const res = document.querySelector('#result');
const nums = document.querySelectorAll('.btn');
res.innerHTML = '';
for (let num of nums) {
    num.onclick = function() {
        if (num.innerHTML == 'x' ||
        num.innerHTML == '/' ||
        num.innerHTML == '+' ||
        num.innerHTML == '-' ) {
            equal();
        }
        res.innerHTML += num.innerHTML;
    }
}
function undo() {
    let result = res.innerHTML;
    res.innerHTML = result.substring(0, result.length - 1);
}
function clean() {
    res.innerHTML = '';
}
function equal() {
    console.log(res);
    if (res.innerHTML !== '') {
        let result = res.innerHTML;
        let output = result.replace('x', '*');
        let actual_output = eval(output);
        res.innerHTML = actual_output;
    }
}