const res = document.querySelector('#result');
const nums = document.querySelectorAll('.btn');
for (let num of nums) {
    num.onclick = function() {
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
    let result = res.innerHTML;
    let output = eval('3*3');
    console.log(output);
    res.innerHTML = output;
}