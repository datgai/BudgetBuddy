var barCount = 60;
var initialDateStr = '01 Apr 2017 00:00 Z';

var ctx = document.getElementById('candlestick-chart').getContext('2d');
ctx.canvas.width = 800;
ctx.canvas.height = 400;

var barData = getRandomData(initialDateStr, barCount);
function lineData() { return barData.map(d => { return { x: d.x, y: d.c } }) };


