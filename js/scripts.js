function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function start() {
    await sleep(300)
    maindiv = document.getElementById('board')
    document.getElementById('score').innerHTML = "Let's Play!!!"
    document.getElementById('score').style.color = "black"
    colors = ['lightcoral', 'greenyellow', 'lightskyblue', 'palegreen', 'coral', 'lightgreen']
    let gameStatus = 1;
    let flag = 1;
    let top = 450;
    let score = 0;
    maindiv.classList.remove('hideNow');
    function deleteChild() {
        var maindiv = document.getElementById('board')

        var child = maindiv.lastElementChild;
        while (child) {
            maindiv.removeChild(child);
            child = maindiv.lastElementChild;
        }
    }
}