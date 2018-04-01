var DEBUG=true;

var debugCheckbox;
var hourSlider;
var minSlider;
var secSlider;
var millisSlider;
var alarmSlider;

function debug_setup() {
  debugCheckbox = createCheckbox('', false);
  debugCheckbox.parent("checkboxDebug")
  hourSlider = createSlider(0, 23, 12);
  hourSlider.parent("sliderHours")
  minSlider = createSlider(0, 59, 0);
  minSlider.parent("sliderMinutes")
  secSlider = createSlider(0, 59, 0);
  secSlider.parent("sliderSeconds")
  millisSlider = createSlider(0, 999, 0);
  millisSlider.parent("sliderMillis")
  alarmCheckbox = createCheckbox('', false);
  alarmCheckbox.parent("checkboxAlarm")
  alarmSlider = createSlider(0, 60, 0);
  alarmSlider.parent("sliderAlarm")
}
