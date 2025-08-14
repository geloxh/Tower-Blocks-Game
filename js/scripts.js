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
    // deleteChild() 
    /** This method deletes all the childNodes of the maindiv element so that when
     *  we can rerun the game without the refresh or reload action.
     */
    function deleteChild() {
        var maindiv = document.getElementById('board')

        var child = maindiv.lastElementChild;
        while (child) {
            maindiv.removeChild(child);
            child = maindiv.lastElementChild;
        }
    }
    deleteChild(); 
    let prevleft, prevright;

    for(let i = 1; i <= 10 && gameStatus; i++)
    {
        if(flag)
            await sleep(2000)
        else
            await sleep(500)

        let left = 0;
        block = document.createElement('div')
        block.setAttribute('class', 'blocks')

        c = colors[Math.floor(Math.random() * 6)]
        block.setAttribute('style', 'background-color:' + c + ';')

        var id = setInterval(frame, 2);
        block.style.top = top + "px";
        top -= 50;

        function frame() {
            if (left > 250)
            {
                document.getElementById('score').innerHTML = "Game Over Score = " + score
                document.getElementById('score').style.color = "red";
                maindiv.classList.add('hideNow');
                gameStatus = 0;
                i = 11;
                clearInterval(id);
            }
            else
            {
                left++;
                block.style.left = left + "px";
            }
            if (gameStatus == 0)
                return;
            block.addEventListener('click', function() {
                if (i != 0 && left + 145 <= prevleft || left >= prevright)
                {
                    document.getElementById('score').innerHTML = "Game Over Score = " + score
                    document.getElementById('score').style.color = "red";
                    maindiv.classList.add('hideNow');
                    clearInterval (id);
                    gameStatus = 0;
                }
                else
                {
                    flag = 1;
                    clearInterval(id);
                }
                prevleft = left;
                prevright = 145 + left;
            })
        }
        if (gameStatus == 0)
            break;
        maindiv.append(block)

        score++;
    }

    if (gameStatus != 0)
    {
        document.getElementById('score').innerHTML = "You Win Score = " + score
        document.getElementById('score').style.color = "green"
    }
}