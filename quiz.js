let questions = [{'q':'When was Namami Gange started ?','a':'10th June 2014','b':'18 July 2016','c':'26 September 2011','d':'30th April 2013'},{'q':'Which famous leader is most associated with Namami Gange?','a':'Jawaharlal Nehru','b':'Indira Gandhi','c':'Narendra Modi','d':'Rajiv Gandhi'},{'q':'What is the objective of Namami Gange?','a':'Clean and protect the Ganga River','b':'Develop the Ganga River Basin','c':'Promote tourism along the Ganga River','d':'All of the above'},{'q':'When was Chacha Chaudhary made the Mascot of Namami Gange?','a':'2022','b':'2021','c':'2018','d':'2020'},{'q':'Which of the following is not a component of Namami Gange?','a':'Sewage Treatment Infrastructure','b':'Afforestation','c':'Air quality monitoring','d':'Ganga Gram Scheme'}];
let i=-1;
let key=['a','c','d','b','c'];
let ans=[];

var result= () => {

    let count=0;
    for(let i=0;i<key.length;i++)
    if(ans[i]===key[i])
    count++;

    document.getElementById('cont').innerHTML=`<h2>Result</h2><br><br>
    <div style="display:flex; justify-content:center;align-items:center; font-size:8vh; font-weight:700">${count} / ${key.length} </div>`;

    if(count === key.length)
    {
        let x= new Audio("sevencr.mp3");
        x.play();
    }
}

var next= () => {
    console.log("1");
    if(i>=0)
    ans.push((document.getElementById('op1').checked)?'a':(document.getElementById('op2').checked)?'b':(document.getElementById('op3').checked)?'c':(document.getElementById('op4').checked)?'d':'0');
    console.log("2");

    i++;
    
    if(i===key.length)
    {
        result();
        return;
    }

    console.log("3");

    document.getElementById("cont").innerHTML=`<h2>${questions[i]['q']}</h2><br>

    <input class="form-check-input" type="radio" id="op1">
    <label class="form-check-label" for="op1">${questions[i]['a']}</label><br><br>
   
    <input class="form-check-input" type="radio" id="op2">
    <label class="form-check-label" for="op2">${questions[i]['b']}</label><br><br>
    
    <input class="form-check-input" type="radio" id="op3">
    <label class="form-check-label" for="op3">${questions[i]['c']}</label><br><br>
   
    <input class="form-check-input" type="radio" id="op4">
    <label class="form-check-label" for="op4">${questions[i]['d']}</label>`;

    console.log("4");
    setTimeout( () => {let audio = new Audio(`question_audios/q${i+1}.wav`);
    audio.play()},50);
}

document.getElementById("b4").addEventListener("click",next);