let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.querySelector('#door2');
let doorImage3 = document.querySelector('#door3');
let startButton = document.querySelector('#start');
let currentlyPlaying = true;
//     var k = 'value'; 
//     var i = 0; 
//     for(i = 1; i < 5; i++) { 
//         eval('var ' + k + i + '= ' + i + ';'); 
//     } 
//     console.log("value1=" + value1); 
//     console.log("value2=" + value2); 
//     console.log("value3=" + value3); 
//     console.log("value4=" + value4); 


let numClosedDoors = 3;
//let doorImage = [];

// for (i=1; i < 4; i++ ) {
//     eval(`let doorImage${i} = document.querySelector('#door${i}')`);
//         console.log(doorImage1);
// }

// doorImage.forEach(element => eval(element));

//console.log(doorImage);
let openDoor1 = 0;
let openDoor2 = 0;
let openDoor3 = 0;
console.log(`No of doors closed is ${numClosedDoors}`);

const botDoorPath ='https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

const playDoor = (door) => {
    numClosedDoors--;
    console.log(`No of doors closed is ${numClosedDoors}`);
    if (!numClosedDoors) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }

}

const startRound = () => {
    currentlyPlaying = true;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good Luck!';
    doorImage1.setAttribute('src',closedDoorPath);
    doorImage2.setAttribute('src',closedDoorPath);
    doorImage3.setAttribute('src',closedDoorPath);
    randomChoreDoorGenerator();
}

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You Win! Play Again?';
    } else {
        startButton.innerHTML = 'Game Over! Play Again?';
    }
    currentlyPlaying = false;
}

const isClicked = (door) => {
    console.log(doorImage1.getAttribute('src'));
    if (door === 1 && doorImage1.getAttribute('src') === closedDoorPath) 
    {
        console.log(doorImage1.getAttribute('src'));
        return false;
    } else if (door === 2 && doorImage2.getAttribute('src') === closedDoorPath) {
        return false;
    } else if (door === 3 && doorImage3.getAttribute('src') === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

const isBot = (door) => {
    if (door === 1 && doorImage1.getAttribute('src') === botDoorPath) 
    {
        return true;
    } else if (door === 2 && doorImage2.getAttribute('src') === botDoorPath) {
        return true;
    } else if (door === 3 && doorImage3.getAttribute('src') === botDoorPath) {
        return true;
    } else {
        return false;
    }
}

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors); 
    //let setChoreDoor = `doorImage${}`
    console.log(`choreDoor is ${choreDoor}`);

    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } 
    else if (choreDoor === 1) {
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else {
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = botDoorPath;
    }

}

doorImage1.onclick = () => {
    if (currentlyPlaying) {
        if (!isClicked(1) && currentlyPlaying) {
            console.log('Door 1 is cliked');
            console.log(`SRC to be changed to ${openDoor1}`);
            doorImage1.setAttribute('src',openDoor1);
            playDoor(1);
        }
        else {
            alert('Door already played');
        }
    }
}

doorImage2.onclick = () => {
    if (currentlyPlaying) {
        if (!isClicked(2) && currentlyPlaying) {
            console.log('Door 2 is cliked');
            console.log(`SRC to be changed to ${openDoor2}`);
            doorImage2.setAttribute('src',openDoor2);
            playDoor(2);    
        }
        else {
            alert('Door already played');
        }
    }
}

doorImage3.onclick = () => {
    if (currentlyPlaying) {
        if (!isClicked(3) && currentlyPlaying) {
            console.log('Door 3 is cliked');
            console.log(`SRC to be changed to ${openDoor3}`);
            doorImage3.setAttribute('src',openDoor3);
            playDoor(3);
        }
        else {
            alert('Door already played');
        }
    }
}

startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }    
}

startRound();