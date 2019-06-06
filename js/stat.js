'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMNS_GAP = 50;
var PLAYERS_TEXT_Y = 250;
var TIMES_TEXT_Y_GAP = 70;
var COLUMN_Y_GAP = 100;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomColor = function () {
  return 'rgba(0, 0, 255, ' + Math.random() + ')';
};

var printText = function (stringToPrint, ctx) {
  var START_TEXT_X = 150;
  var LINE_INDENT = 30;
  var startTextY = -10;

  var lines = stringToPrint.split('\n');

  for (var i = 0; i < lines.length; i++) {
    startTextY = startTextY + LINE_INDENT;
    ctx.fillText(lines[i], START_TEXT_X, startTextY);
  }

};

var drawColumn = function (ctx, times, players, i, maxTime) {
  ctx.fillStyle = '#000';
  ctx.fillText(players[i], BAR_HEIGHT + i * (COLUMN_WIDTH + COLUMNS_GAP), PLAYERS_TEXT_Y);
  ctx.fillText(Math.round(times[i]), BAR_HEIGHT + i * (COLUMN_WIDTH + COLUMNS_GAP), TIMES_TEXT_Y_GAP + (BAR_HEIGHT - Math.round(BAR_HEIGHT * times[i]) / maxTime));
  ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : getRandomColor();
  ctx.fillRect(BAR_HEIGHT + i * (COLUMN_WIDTH + COLUMNS_GAP), COLUMN_Y_GAP + (BAR_HEIGHT - Math.round(BAR_HEIGHT * times[i] / maxTime)), COLUMN_WIDTH, Math.round(BAR_HEIGHT * times[i]) / maxTime);
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'top';
  printText('Ура вы победили!\nСписок результатов:', ctx);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    drawColumn(ctx, times, players, i, maxTime);
  }
};

