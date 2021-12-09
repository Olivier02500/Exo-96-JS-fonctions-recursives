let start = 0;

function recursives (numberToStart) {
    let div = document.createElement('div');
    document.body.appendChild(div).innerHTML = "la valeur et égale a = " + start;
    if (start < 12) {
        start += 2;
        recursives();

    }
}
recursives(start);