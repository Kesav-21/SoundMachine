function playAudio(str){
    let dispbar=document.getElementById("clip");
    let dispbg=document.getElementById("drum-machine")
    switch(str){
        case "q":
        case "Q":
            dispbar.innerHTML="Cev_H2.mp3";
            dispbg.style.backgroundImage="url(./assets/img/visual.gif)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "w":
        case "W":
            dispbar.innerHTML="Dsc_Oh.mp3";
            dispbg.style.backgroundImage="url(./assets/img/visual1.gif)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "e":
        case "E":
            dispbar.innerHTML="Heater-1.mp3";
            dispbg.style.backgroundImage="url(./assets/img/visual.gif)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "a":
        case "A":
            dispbar.innerHTML="Heater-2.mp3";
            dispbg.style.backgroundImage="url(./assets/img/visual1.gif)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "s":
        case "S":
            dispbar.innerHTML="Heater-3.mp3";
            dispbg.style.backgroundImage="url(./assets/img/visual1.gif)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "d":
        case "D":
            dispbar.innerHTML="Heater-4.mp3";
            dispbg.style.backgroundImage="url(./assets/img/visual1.gif)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "z":
        case "Z":
            dispbar.innerHTML="Heater-6.mp3";
            dispbg.style.backgroundImage="url(./assets/img/visual.gif)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "x":
        case "X":
            dispbar.innerHTML="Kick_n_Hat.mp3";
            dispbg.style.backgroundImage="url(./assets/img/visual1.gif)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "c":
        case "C":
            dispbar.innerHTML="RP4_KICK_1.mp3";
            dispbg.style.backgroundImage="url(./assets/img/visual.gif)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;                          
    }
    let audioid=document.getElementById(str);
    audioid.play();
}

function keyPlay(event){
    switch(event.key){
        case "q":
        case "Q":
            playAudio("Q");
            break;
        case "w":
        case "W":
            playAudio("W");
            break;
        case "e":
        case "E":
            playAudio("E");
            break;
        case "a":
        case "A":
            playAudio("A");
            break;
        case "s":
        case "S":
            playAudio("S");
            break;
        case "d":
        case "D":
            playAudio("D");
            break;
        case "z":
        case "Z":
            playAudio("Z");
            break;
        case "x":
        case "X":
            playAudio("X");
            break;
        case "c":
        case "C":
            playAudio("C");
            break;                          
    }
}

