var questions=["question1","question2","question3","question4","question5","question6"];
var i=0;

var setEverythingUp = () => {
    document.getElementById("ii").src="./ext_left.gif";
    document.getElementById("father").style.transform="translate(-45vh,0vh)";
}

var setEverythingBack = () => {
    document.getElementById('question6').style.transform="scale(1)";

    const everything=document.querySelectorAll('.al');
    everything.forEach(element => {
        element.style.opacity="1";
        element.style.filter="blur(0px)";
        // element.style.transform="translate(45vh,0vh)";
    });

    document.getElementById("ii").src="./Screenshot 2023-09-26 222939.png";
    document.getElementById("father").style.transform="translate(45vh,0vh)";
}

var play1 = () => {
    if(i>0)
    document.getElementById(questions[i-1]).style.transform="scale(1)";

    const everything=document.querySelectorAll('.al');
    everything.forEach(element => {
        element.style.opacity="0.5";
        element.style.filter="blur(3px)";
    });

    document.getElementById(questions[i]).style.opacity="1";
    document.getElementById(questions[i]).style.filter="blur(0px)";
    document.getElementById(questions[i]).style.transform="scale(2)";
    i++;

    console.log("1 working");

    let audio1= new Audio("what.wav");
    audio1.play();

}
var play2 = () => {
    document.getElementById(questions[i-1]).style.transform="scale(1)";

    const everything=document.querySelectorAll('.al');
    everything.forEach(element => {
        element.style.opacity="0.5";
        element.style.filter="blur(3px)";
    });

    document.getElementById(questions[i]).style.opacity="1";
    document.getElementById(questions[i]).style.filter="blur(0px)";
    document.getElementById(questions[i]).style.transform="scale(2)";
    i++;

    console.log("2 working");
    
    let audio2= new Audio("who.wav");
    audio2.play();
}

var walkthrough = () => {
    
    setEverythingUp();
    setTimeout(play1,1500);
    setTimeout(play2,16500);
    setTimeout(play1,27500);
    setTimeout(play2,43500);
    setTimeout(play1,54500);
    setTimeout(play2,70500);
    setTimeout(setEverythingBack,80000);
}

document.getElementById("b").addEventListener("click",walkthrough);