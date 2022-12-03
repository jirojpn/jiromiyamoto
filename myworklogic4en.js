'use strict';
const userNameInput = document.getElementById('user-name');
const userExperienceInput = document.getElementById('user-experience');
const userspilitInput = document.getElementById('user-spilit');
const assessmentButton = document.getElementById('assessment');
const answerDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
let distination = 0;
let imgpath = " ";

assessmentButton.onclick = function(){
    const userName = userNameInput.value;
    const userExperience = Number(userExperienceInput.value);
    const userspilit = Number(userspilitInput.value);
    console.log(userspilit);
    if (userExperience >= 10 && userspilit === 1){
    distination = 'Iran';
    imgpath = "image/iran.JPG";
}
else if (userExperience >= 10 && userspilit === 0 ){
    distination = 'Morocco'
    imgpath = "image/morocco.jpg";
}
else if (userExperience <= 9 && userspilit === 1){
    distination = 'Lebanon'
    imgpath = "image/lebanon.jpg";
}
else { distination = 'Turky'
imgpath = "image/turky.jpg";}
 // 診断結果表示エリアの作成
 const header = document.createElement('h3');
 header.innerText = 'Our Recomendation';
 answerDivided.appendChild(header);
 const paragraph = document.createElement('p');
 let answer = 'Hey {userName}, your best Middle-East Ski distination is {distination}!!';
answer = answer.replaceAll('{userName}', userName);
answer = answer.replaceAll('{distination}', distination);
 paragraph.innerText = answer;
 answerDivided.appendChild(paragraph);

 const img = document.createElement('img');
 img.setAttribute("src",imgpath);
 console.log(img);
 answerDivided.appendChild(img);
 // TODO ツイートエリアの作成
};