//STEP 1
var myFavmov = ["Rock on", "ZNMD", "Wake Up Sid", "Golmaal", "Dhol"];
window.console.log(myFavmov[1]);

//STEP 2
var mov = new Array(5);
mov[0] = "Rock on";
mov[1] = "ZNMD";
mov[2] = "Wake Up Sid";
mov[3] = "Golmaal";
mov[4] = "Dhol";
window.console.log(mov[0]);

//STEP 3
var mov2 = new Array(5);
mov2[0] = "Rock on";
mov2[1] = "ZNMD";
mov2[2] = "Wake Up Sid";
mov2[3] = "Golmaal";
mov2[4] = "Dhol";

mov2.splice(2, 0, "Masti");
window.console.log(mov2.length);

//STEP 4
var myFavmov2 = [];
myFavmov2[0] = "Rock on";
myFavmov2[1] = "ZNMD";
myFavmov2[2] = "Wake Up Sid";
myFavmov2[3] = "Golmaal";
myFavmov2[4] = "Dhol";

delete myFavmov2[0];
window.console.log(myFavmov2);

//STEP 5
var myFavmov3 = [];
myFavmov3[0] = "Rock on";
myFavmov3[1] = "ZNMD";
myFavmov3[2] = "Wake Up Sid";
myFavmov3[3] = "Golmaal";
myFavmov3[4] = "Dhol";
myFavmov3[5] = "Masti";
myFavmov3[6] = "3 Idiots";

for (var i = 0; i < myFavmov3.length; i++) {
    window.console.log(myFavmov3[i]);
}

//STEP 6
var myFavmov4 = [];
myFavmov4[0] = "Rock on";
myFavmov4[1] = "ZNMD";
myFavmov4[2] = "Wake Up Sid";
myFavmov4[3] = "Golmaal";
myFavmov4[4] = "Dhol";
myFavmov4[5] = "Masti";
myFavmov4[6] = "3 Idiots";

for (index in myFavmov4) {
    if (myFavmov4.hasOwnProperty(index)) {
        window.console.log(myFavmov4[index]);
    }
}

//STEP 7
var myFavmov5 = [];
myFavmov5[0] = "Rock on";
myFavmov5[1] = "ZNMD";
myFavmov5[2] = "Wake Up Sid";
myFavmov5[3] = "Golmaal";
myFavmov5[4] = "Dhol";
myFavmov5[5] = "Masti";
myFavmov5[6] = "3 Idiots";

myFavmov5.sort();
for (index in myFavmov5) {
    if (myFavmov5.hasOwnProperty(index)) {
        window.console.log(myFavmov5[index]);
    }
}

//STEP 8
var myFavmov6 = [];
myFavmov6[0] = "Rock on";
myFavmov6[1] = "ZNMD";
myFavmov6[2] = "Wake Up Sid";
myFavmov6[3] = "Golmaal";
myFavmov6[4] = "Dhol";
myFavmov6[5] = "Masti";
myFavmov6[6] = "3 Idiots";

var leastmyFavmov = [];
leastmyFavmov[0] = "Dabaang";
leastmyFavmov[1] = "Dhoom 3";
leastmyFavmov[2] = "Tubelight";

window.console.log("Movies I like:\n\n");
for (var i = 0; i < myFavmov6.length; i++) {
    window.console.log(myFavmov6[i]);
}

window.console.log("I regret watching:\n\n");
for (var i = 0; i < leastmyFavmov.length; i++) {
    window.console.log(leastmyFavmov[i]);
}

//STEP 9
var mov = myFavmov6.concat(leastmyFavmov);
mov.reverse();
for (var i = 0; i < mov.length; i++) {
    window.console.log(mov[i]);
}

//STEP 10
var mov2 = myFavmov6.concat(leastmyFavmov);
window.console.log(mov.pop());