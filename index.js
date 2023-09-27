var questions=["question1","question2","question3","question4","question5","question6"];
var audios=["what.wav","who.wav","afforestation.wav","sw_mgt.wav","gangagram.wav","restoration.wav"]
var i=0;

var setEverythingUp = () => {
    // document.getElementById("ii").src="./ext_right_r.gif";
    document.getElementById("father").style.transform="translate(-48vh,0vh)";

    const ele=document.getElementById("tv");

    setTimeout( () => {
    ele.style.position="absolute";
    ele.style.top="24vh";
    ele.style.left="125vh";
    ele.style.border="7px solid black";
    ele.style.borderRadius="5vh";
    ele.style.height="45vh";
    ele.style.width="36vw";
    ele.style.paddingTop="2.4vh";
    ele.style.paddingLeft="7vh";
    ele.style.overflow="hidden";
    
    },1000);

    setTimeout( () => {
        var video=document.createElement("video");
        ele.style.paddingTop="0vh";
        ele.style.paddingLeft="0vh";
        video.poster="./NGTV.png";
        video.src="./nmvid.mp4";
        video.autoplay=true;
        video.controls=false;
        video.height=320;
        video.width=545;
        video.style.objectFit="cover";
        console.log("Video has been set");
        document.getElementById("tv").appendChild(video);

    },2000);
}

var setEverythingBack = () => {
    document.getElementById('question6').style.transform="scale(1)";

    const everything=document.querySelectorAll('.al');
    everything.forEach(element => {
        element.style.opacity="1";
        element.style.filter="blur(0px)";
    });

    document.getElementById("ii").src="./Screenshot 2023-09-26 222939.png";
}

var play = () => {
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

    let audio= new Audio(audios[i]);
    audio.play();
    i++;

}

var walkthrough = () => {
    
    setEverythingUp();
    setTimeout(play,2500);
    setTimeout(play,16600);
    setTimeout(play,26700);
    setTimeout(play,60800);
    setTimeout(play,79900);
    setTimeout(play,121300);
    setTimeout(setEverythingBack,142400);
}

document.getElementById("b").addEventListener("click",walkthrough);
document.getElementById("b2").addEventListener("click",() => {
    window.location.href="https://chacha-chaudhary-web.vercel.app/chatbot";
})