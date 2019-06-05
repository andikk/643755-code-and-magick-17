'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMNS_GAP = 50;

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

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'top';
  ctx.fillText('Ура вы победили!', 230, 20);
  ctx.fillText('Список результатов:', 220, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], BAR_HEIGHT + i * (COLUMN_WIDTH + COLUMNS_GAP), 250);
    ctx.fillText(Math.round(times[i]), BAR_HEIGHT + i * (COLUMN_WIDTH + COLUMNS_GAP), 70 + (BAR_HEIGHT - Math.round(BAR_HEIGHT * times[i]) / maxTime));
    ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : getRandomColor();
    ctx.fillRect(BAR_HEIGHT + i * (COLUMN_WIDTH + COLUMNS_GAP), 100 + (BAR_HEIGHT - Math.round(BAR_HEIGHT * times[i] / maxTime)), COLUMN_WIDTH, Math.round(BAR_HEIGHT * times[i]) / maxTime);
  }
};

var getRandomColor = function () {
  return 'rgba(0, 0, 255, ' + Math.random() + ')';
};
