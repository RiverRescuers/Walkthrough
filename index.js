var questions=["question1","question2","question3","question4","question5","question6"];
var i=0;

var setEverythingUp = () => {
    // document.getElementById("ii").src="./ext_right_r.gif";
    document.getElementById("father").style.transform="translate(-48vh,0vh)";

    setTimeout( () => {
    const ele=document.getElementById("tv");
    ele.style.position="absolute";
    ele.style.top="24vh";
    ele.style.left="125vh";
    ele.style.border="7px solid black";
    ele.style.borderRadius="5vh";
    ele.style.height="45vh";
    ele.style.width="74vh";
    ele.style.paddingTop="2.4vh";
    ele.style.paddingLeft="7vh";
    document.getElementById("tvv").src="./NGTV.png";
    
    },1000);
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
    // document.getElementById("father").style.transform="translate(22.5vh,0vh)";
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
    setTimeout(play1,2000);
    setTimeout(play2,17000);
    setTimeout(play1,28000);
    setTimeout(play2,44000);
    setTimeout(play1,55000);
    setTimeout(play2,71000);
    setTimeout(setEverythingBack,80500);
}

document.getElementById("b").addEventListener("click",walkthrough);