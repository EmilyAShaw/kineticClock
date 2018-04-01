function draw_clock(hour, minute, second, millis, alarm) {
  

var secondsWithFraction = second + (millis / 1000.0);
  var secondRotationSmooth = map(secondsWithFraction, 0, 60, 0, 360);


   var minutesWithFraction = minute + (second / 60.0);
  var minuteRotationSmooth = map(minutesWithFraction, 0, 60, 0, 360-6);


var hoursWithFraction = hour + (minute / 60.0);
  var hourRotationSmooth = map(hoursWithFraction, 0, 23, 0, 360-15);

var hourFact = hour;
var minuteFact = minute;
var starRate = second;
  background(0); 
  angleMode(DEGREES);
  fill(0); 
  rectMode(CENTER);
translate(width/2, height/2);



//some code credit for alarm from lectures
// is alarm going off?
  if (alarm == 0) {
    if (second % 2 == 0) {
      rotate(360);
       superNova(0,0); //creates the picture in the background of the sun when the alarm 
      					 //goes off
       
    }
    else {
      background(10,0,0);  
      sun(0,0);    
    }
  }
  else {
    background(0);
    sun(0,0);
  }
sun(0,0);
  //is alarm going off in next 15 seconds
  if (alarm > 0) {
    fill(100);
    rect(width-50, height-50, 40, 40);
    if (alarm < 30.0) {
      
      text("alarm on", 200,200);
    }
  }


//controls the font
 fill(45, 44, 44);
  textSize(45);
  textFont("bakery");
  fill(0);


  //creating the extra "0" to make the clock look more 24 hour. i.e instead of 4:30 - 04:30
  if (hour<10){
    text("0" + hour+":"+ minute, -40, -30);

  }
  else{
    text( hour + ":" + minute, -40,-30);
  }


 

  

 // these are all if statements controlling very specific biological facts
 //the reason I did not put this into an array was that there were some which were to do 
 //in between a specific couple of minutes - and this would have been too complicated for me 
 //to put in an array


textSize(24);
  if (hourFact == 14){
    if (minuteFact > 30){
  text("Best" , -25,0);
  text("coordernation" , -50,25);

}}


  if (hourFact == 15){
    if (minuteFact > 30){
  text("Fastest" , -30,0);
  text("Reaction Time" , -55,25);

}}

if (hourFact == 17){
    textSize(16);
  text("Greatest Cardiovascular " , -60,0);
  text("efficency" ,-25,25);
  text("and muscle strength" , -50,50);

}


  if (hourFact == 18){
    if (minuteFact > 30){
  text("Highest" , -26,0);
  text("Blood Pressure" , -60,25);

}}

if (hourFact == 19){

  text("Melatonin" , -35,0);
  text("Secretion Starts" , -60,25);

}


  if (hourFact == 22){
    if (minuteFact > 30){
      text("bowel Movements" , -55,0);
      text("supressed" , -40,25);
}}

if (hourFact == 0){
  text("midnight" , -35,0);
}

if (hourFact == 2){
  text("deepest" , -28,0);
  text("sleep" , -20,25);
}

 if (hourFact == 4){
    if (minuteFact > 30){
  text("lowest" , -26,0);
  text("Body Tempreture" , -60,25);

}}

 if (hourFact == 6){
    if (minuteFact > 30){
      text("Sharpest Rise" , -50,0);
      text("in" , -10,25);
      text(" Blood Tempretre" , -60,50);
}}


if (hourFact == 7){
if (minuteFact > 30){
  text("Melatonin" , -35,0);
  text("Secretion Stops" , -60,25);

}}

  if (hourFact == 8){
    if (minuteFact > 30){
      text("bowel Movements" , -55,0);
      text("likely" , -15,25);
}}


if (hourFact == 9){

  text("Highest Testosterone" , -70,0);
  text("Secretion" , -40,25);

}

if (hourFact == 10){
  text("High" , -20,0);
  text("alertness" , -35,25);

}

if (hourFact == 12){
  text("Noon" , -25,0);
  

}

//controlls the commet which rotates around the solar system 
rotate(270);
push();
fill(127, 102, 102);
rotate(secondRotationSmooth);
ellipse(200,0,3,6);
fill(229,153,55);
ellipse(200,-10,1,10);
fill(255,0,0);
ellipse(200,-17,1,17);

pop();


  
	//earth
    push();
    rotate(hourRotationSmooth);
    fill(70,130,180);
    noStroke();
    

   //my world function did not end up working at the last minute 
   //so I improvised without it
    ellipse(150,0,35);
    fill(95,158,160);
    ellipse(152,10,5, 5);
    ellipse(155,-10,5, 5);
    ellipse(145,-5,13, 13);
    ellipse(159,5,8, 8);
    ellipse(140,8,8, 8);
    fill(255);
    ellipse(157,5,4, 4);
    ellipse(142,8,4, 5);
    ellipse(145,-8,6, 6);
    ellipse(145,-4,6, 6);
//moon
	push();
	translate(150,0);
	rotate(minuteRotationSmooth);
	fill(200);
	ellipse(30,0,10,10);
	pop();
	pop();
 

 //careful placement of stars and constellations

star2(200,-100);
star3(-200,100);
star2(200,-200);
star3(150,150);
star1(160, 200);
star1(-50,350);
star2(-200, -300);
star3(-130, -300);
star2(-170, -320);
star3(-170, -270);
star1(100, -400);

 
}
//function which controls the earth's features
function world (x,y){
noStroke();

ellipse(200,0,35);
    fill(95,158,160);
    ellipse(152,10,5, 5);
    ellipse(155,-10,5, 5);
    ellipse(145,-5,13, 13);
    ellipse(159,5,8, 8);
    ellipse(140,8,8, 8);
    fill(255);
    ellipse(157,5,4, 4);
    ellipse(142,8,4, 5);
    ellipse(145,-12,6, 6);
  
}

//a function which I did not end up using - but kept just incase I wanted to (just mapped where 
//the commet was supposed to be)

function outerCircle (x,y) {
  fill(255);
  strokeWeight(0.5);
  stroke(0);
   fill(255,000,000);
   noFill();

  fill(255, 206, 186);
  noStroke();
 //ellipse(x-240,y+10,20,40);
  fill(200);
  ellipse(x-240,y,20,20);
}

//sun function

function sun (x,y){
fill(255, 252, 178);
 noStroke();
ellipse(x,y,220,220);
 
 



}
//largest star cluster
 function star1(x,y,w,h){
  fill(255);
  ellipse(x, y, 15, 2);
  ellipse(x, y, 2, 10);
 }
//medium star cluster
function star2(x, y, w, h){
  fill(255);
  ellipse(x,y,7,2);
  ellipse (x, y, 2, 7);
}
//smallest star cluster
 function star3(x,y,w,h){
  fill(255);
  ellipse(x, y, 4, 2);
  ellipse(x, y, 2, 4);
 }

//background picture that flashes when alarm is activated.
 function superNova(x,y){
  fill(244, 137, 66);
  beginShape();

  //vertex(-83,83);
  vertex(0,120);
  vertex(83,83);
  vertex(120,0);
  vertex(83,-83);
  vertex(0,-120);
  vertex(-83,-83);
  vertex(-120,0);
  vertex(-83,83);
  strokeWeight(1);
  stroke(244,137,66);
  line(127,0,-127,0);
  line(0,127,0,-127);
  line(-90,-90,90,90);
  line(-90,90,90,-90);
  noStroke();

endShape(CLOSE);

 }

