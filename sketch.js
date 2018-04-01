var canvasWidth = 960;
var canvasHeight = 500;

var prevSec;
var millisRolloverTime;
var nextAlarm;
var debug_is_on = (typeof DEBUG !== 'undefined');

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');


  // this is true if debug.js is included
  if(debug_is_on) {
    debug_setup();
  }
  turn_off_alarm();
}

function turn_on_alarm() {
  nextAlarm = millis() + 20000;    
  print("Alarm on: T minus 20 seconds");  
}

function turn_off_alarm() {
  nextAlarm = -1;
  print("Alarm turned off");  
}

function mouseClicked() {
  if (debug_is_on && debugCheckbox.checked()) {
    return;
  }
  if (nextAlarm > 0) {
    turn_off_alarm();
  }
  else {
    turn_on_alarm();
  }
}

// taking ideas from http://cmuems.com/2016/60212/deliverables/deliverables-02/
function draw () {
  var H, M, S, mils, alarm;

  if (debug_is_on && debugCheckbox.checked()) {
    hourSlider.removeAttribute('disabled');
    minSlider.removeAttribute('disabled');
    secSlider.removeAttribute('disabled');
    millisSlider.removeAttribute('disabled');
    alarmCheckbox.removeAttribute('disabled');
    alarmSlider.removeAttribute('disabled');

    H = hourSlider.value();
    M = minSlider.value();
    S = secSlider.value();
    mils = millisSlider.value();
    if (alarmCheckbox.checked()) {
      alarm = alarmSlider.value();
    }
    else {
      alarm = -1;
    }
  }
  else {
    // Fetch the current time
    H = hour();
    M = minute();
    S = second();
    if (nextAlarm > 0) {
      now = millis();
      var millis_offset = nextAlarm - now;
      if (millis_offset < -10000 ){
        // turn off alarm
        nextAlarm = -1;
        alarm = -1;
      }
      else if (millis_offset < 0) {
        alarm = 0;
      }
      else {
        alarm = millis_offset / 1000.0;
      }
    }
    else {
      alarm = -1;
    }

    // Reckon the current millisecond, 
    // particularly if the second has rolled over.
    // Note that this is more correct than using millis()%1000;
    if (prevSec != S) {
      millisRolloverTime = millis();
    }
    prevSec = S;
    mils = floor(millis() - millisRolloverTime);

    if (debug_is_on) {
      hourSlider.attribute('disabled','');
      minSlider.attribute('disabled','');
      secSlider.attribute('disabled','');
      millisSlider.attribute('disabled','');
      alarmCheckbox.attribute('disabled','');
      alarmSlider.attribute('disabled','');

      hourSlider.value(H);
      minSlider.value(M);
      secSlider.value(S);
      millisSlider.value(mils);
      alarmCheckbox.checked(alarm >= 0);
      alarmSlider.value(alarm);
    }
  }


  draw_clock(H, M, S, mils, alarm);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
