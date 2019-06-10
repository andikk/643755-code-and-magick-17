'use strict';

var WIZZARDS_COUNT = 4;
var WIZZARDS_NAMES_TO_SELECT_COUNT = 7;
var WIZZARDS_COAT_COLORS_TO_SELECT_COUNT = 5;
var WIZZARDS_EYES_COLORS_TO_SELECT_COUNT = 4;

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandomInt = function (max) {
  return Math.floor(Math.random() * max);
};


var createWizards = function () {
  var wizzards = [];

  for (var i = 1; i <= WIZZARDS_COUNT; i++) {
    var wizzardToAdd = {
      'name': names[getRandomInt(WIZZARDS_NAMES_TO_SELECT_COUNT)] + ' ' + surnames[getRandomInt(WIZZARDS_NAMES_TO_SELECT_COUNT)],
      'coatColor': coatColors[getRandomInt(WIZZARDS_COAT_COLORS_TO_SELECT_COUNT)],
      'eyesColor': eyesColors[getRandomInt(WIZZARDS_EYES_COLORS_TO_SELECT_COUNT)]
    };

    wizzards.push(wizzardToAdd);
  }

  return wizzards;
};


var wizzardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizzard = function (wizzard) {
  var newWizzard = wizzardTemplate.cloneNode(true);

  var setupSimilarLabel = newWizzard.querySelector('.setup-similar-label');
  setupSimilarLabel.textContent = wizzard.name;

  var wizardCoat = newWizzard.querySelector('.wizard-coat');
  wizardCoat.style = 'fill: ' + wizzard.coatColor;

  var wizardEyes = newWizzard.querySelector('.wizard-eyes');
  wizardEyes.style = 'fill: ' + wizzard.eyesColor;

  return newWizzard;
};

var wizzards = createWizards();

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizzards.length; i++) {
  fragment.appendChild(renderWizzard(wizzards[i]));
}

var setupSimilarList = document.querySelector('.setup-similar-list');
setupSimilarList.appendChild(fragment);

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
