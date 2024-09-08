let play = true;
let start = new Date().getTime();

// make object disappear
function dissapear () {
    document.getElementById("randomObject").onclick = function() {
        document.getElementById("randomObject").style.display="none";
        
        let end = new Date().getTime();

        let timeTaken = end - start;

        timeTaken = timeTaken / 1000;

        document.getElementById("timeTaken").innerHTML = timeTaken + "s";

        appearAgain();
    }
}

// randomize the size 
function size () {
    let size = Math.random() * (250 - 40 + 1) + 40;
    document.getElementById("randomObject").style.height = size + "px";
    document.getElementById("randomObject").style.width = size + "px";

}

// make either square or circle
function shape () {
    let shapeArr = [50, 0];
    let choice = Math.round(Math.random() * 1);
    document.getElementById("randomObject").style.borderRadius = shapeArr[choice] + "%";
}

// randomize the color
function color () {
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 
    let hex = '#';
    for(let i = 0; i < 6; i++){
        const index = Math.floor(Math.random() * hexValues.length)
        hex += hexValues[index];
    }
    document.getElementById("randomObject").style.backgroundColor = hex;
}

//randomize the position
function position () {
    let top = Math.random() * 70;
    let left = Math.random() * 80;
    document.getElementById("randomObject").style.top = top + "%";
    document.getElementById("randomObject").style.left = left + "%";

}

// make object appear
function appear () {
    shape();
    position();
    size();
    color();
    document.getElementById("randomObject").style.display = "block";
    start = new Date().getTime();
}

// make object appear again after some itme 
function appearAgain () {
    setTimeout(appear, randomTime());
}

// set a random time to make the object appear 
function randomTime () {
    return Math.floor(Math.random() * (1000 - 250 + 1) + 250);
}

appear();
dissapear();