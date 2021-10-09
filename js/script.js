function playAudio(str){
    let dispbar=document.getElementById("clip");
    let dispbg=document.getElementById("drum-machine")
    switch(str){
        case "q":
        case "Q":
            dispbar.innerHTML="Chirp.mp3";
            dispbg.style.backgroundImage="url(./assets/img/1.jpg)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "w":
        case "W":
            dispbar.innerHTML="Clank.mp3";
            dispbg.style.backgroundImage="url(./assets/img/2.jpeg)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "e":
        case "E":
            dispbar.innerHTML="Crystal.mp3";
            dispbg.style.backgroundImage="url(./assets/img/3.jpeg)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "a":
        case "A":
            dispbar.innerHTML="FadeOut.mp3";
            dispbg.style.backgroundImage="url(./assets/img/4.jpeg)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "s":
        case "S":
            dispbar.innerHTML="Flute.mp3";
            dispbg.style.backgroundImage="url(./assets/img/5.jpeg)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "d":
        case "D":
            dispbar.innerHTML="Guitar.mp3";
            dispbg.style.backgroundImage="url(./assets/img/6.jpeg)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "z":
        case "Z":
            dispbar.innerHTML="Harp.mp3";
            dispbg.style.backgroundImage="url(./assets/img/7.jpeg)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "x":
        case "X":
            dispbar.innerHTML="NotificationXylophone.mp3";
            dispbg.style.backgroundImage="url(./assets/img/8.jpeg)";
            dispbg.style.backgroundPosition="center";
            dispbg.style.backgroundSize="cover";
            break;
        case "c":
        case "C":
            dispbar.innerHTML="WindChime.mp3";
            dispbg.style.backgroundImage="url(./assets/img/9.jpeg)";
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

