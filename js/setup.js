'use strict';

var WIZARDS_COUNT = 4;

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var getRandomInt = function (max) {
  return Math.floor(Math.random() * max);
};


var createWizards = function () {
  var wizards = [];

  for (var i = 1; i <= WIZARDS_COUNT; i++) {
    var wizardToAdd = {
      'name': NAMES[getRandomInt(NAMES.length)] + ' ' + SURNAMES[getRandomInt(SURNAMES.length)],
      'coatColor': COAT_COLOR[getRandomInt(COAT_COLOR.length)],
      'eyesColor': EYES_COLOR[getRandomInt(EYES_COLOR.length)]
    };

    wizards.push(wizardToAdd);
  }

  return wizards;
};


var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizzard = function (wizard) {
  var newWizzard = wizardTemplate.cloneNode(true);

  var setupSimilarLabel = newWizzard.querySelector('.setup-similar-label');
  setupSimilarLabel.textContent = wizard.name;

  var wizardCoat = newWizzard.querySelector('.wizard-coat');
  wizardCoat.style.fill = wizard.coatColor;

  var wizardEyes = newWizzard.querySelector('.wizard-eyes');
  wizardEyes.style.fill = wizard.eyesColor;

  return newWizzard;
};

var wizards = createWizards();

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizzard(wizards[i]));
}

var setupSimilarList = document.querySelector('.setup-similar-list');
setupSimilarList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
