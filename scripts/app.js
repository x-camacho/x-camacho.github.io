//////* GRAB USER NAME FROM URL, STORE AND PUSH TO GAME PAGE */////
let userName = [];
location.search.substr(1).split("&").forEach(function(item) {userName[item.split("=")[0]] = item.split("=")[1]});
console.log(userName)
document.getElementById('plantName1').innerText = userName.plantName;
//////*  END GRAB USER NAME FROM URL, STORE AND PUSH TO GAME PAGE */////


//////* BUTTON FUNCTION VARIABLES && MECHANICS */////
let level = document.getElementById('level');
let levelCount = 1;
let progress = document.getElementById("value");
let xpPercent = document.getElementById("xpPercent");
let counter1 = document.getElementById("counter1");
let counter2 = document.getElementById("counter2");
let counter3 = document.getElementById("counter3");
let count1 = 0;
let count2 = 0;
let count3 = 0;

document.getElementById("plus").addEventListener("click", function() {
    let newValue = parseInt(progress.getAttribute('data-value')) + 1;
        count1 += 1;
        if(count1 >= 15) {
            coolDown();
        }
        counter1.innerText = count1 + " / 15";  //increase counter after every button click //
        afterClick(newValue);
        },
);
       
document.getElementById("plus2").addEventListener("click", function() {
    let newValue = parseInt(progress.getAttribute('data-value')) + 2;
        count2 += 1;
        if(count2 >= 10) {
            coolDown2();
        }
        counter2.innerText = count2 + " / 10";
        afterClick(newValue);
        },
);
       
document.getElementById("plus3").addEventListener("click", function() {
    let newValue = parseInt(progress.getAttribute('data-value')) + 5;
    count3 += 1;
    if(count3 >= 5) {
        coolDown3();
        }
        counter3.innerText = count3 + " / 5";
        afterClick(newValue);
        },
);
        
function afterClick(newValue) {
    progress.style.width = newValue + '%';
    progress.setAttribute('data-value', newValue);
    xpPercent.innerText = newValue + '%';
        if (newValue >= 100) {
            reset();
        }
}
        
function reset() {
    progress.style.width = '0%';
    progress.setAttribute('data-value', 0);
     xpPercent.innerText = '0%';
     count1 = 0;
     counter1.innerText = 0 + " / 15";
     count2 = 0;
     counter2.innerText = 0 + " / 10";
     count3 = 0;
     counter3.innerText = 0 + " / 5";
     levelCount = levelCount + 1;
     level.innerText = "Level:" + levelCount;
     plus.disabled = false;
     plus.innerText = "Sun!"
     plus2.disabled = false;
     plus2.innerText = "Water!";
     plus3.disabled = false;
     plus3.innerText = "Love";
     willLeft += 20;
}
//////* END BUTTON FUNCTION VARIABLES && MECHANICS END *//////


//////* DISABLE BUTTON && INITIALIZE COOLDOWN*//////
function coolDown() {
  plus.disabled = true;
  plus.innerText = "On Cooldown";
  setTimeout( ()=>{
    plus.disabled = false;
    plus.innerText = "Sun!";
    count1 = 0;
    counter1.innerText = count1 + " / 15";
    }, 10000);
}

function coolDown2() {
  plus2.disabled = true;
  plus2.innerText = "On Cooldown";
  setTimeout( ()=>{
    plus2.disabled = false;
    plus2.innerText = "Water!";
    count2 = 0;
    counter2.innerText = count2 + " / 10";
    }, 15000);
}

function coolDown3() {
    plus3.disabled = true;
    plus3.innerText = "On Cooldown";
    setTimeout( ()=>{
      plus3.disabled = false;
      plus3.innerText = "Love!";
      count3 = 0;
      counter3.innerText = count3 + " / 5";
      }, 20000);
  }
//////* END DISABLE BUTTON && INITIALIZE COOLDOWN*//////
  

///* Will Meter *///
function willtoLive() {
let willLeft = 10;
let interval = setInterval(function() {
    document.getElementById('timer').innerHTML = --willLeft + " seconds";
    if (willLeft <= 0) {
        plus.disabled = true;
        plus2.disabled = true;
        plus3.disabled = true;
       document.getElementById('timer').innerHTML = "Oh, no! " + userName.plantName + " has lost the will to live!" + " Continue?";
       let a = document.createElement('a');
       let a2 = document.createElement('a');
       let contentYes = document.createTextNode("Yes!");
       let contentNo = document.createTextNode("No!")
       a.appendChild(contentYes);
       a2.appendChild(contentNo);
       a.href = "name_your_plant.html";
        a2.href = "welcome.html";
       document.getElementById('continueYes').appendChild(a);
        document.getElementById('continueNo').appendChild(a2);
       clearInterval(interval);
    }
}, 1000);
}

willtoLive();

    //    window.alert("Would you like to try again?");