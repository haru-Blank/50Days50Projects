const domEL = {
  buttons: document.querySelector('.buttons'),
  progressLine: document.querySelector('.progress'),
  progessSteps: [...document.querySelectorAll('.progress__step')],
};

let currentStep = 1;
let progressPerc = 0;

domEL.buttons.addEventListener('click', (e) => {
  if (e.target.getAttribute('id') === 'prev') {
    currentStep--;
    progressPerc -= 100 / 3;
  } else if (e.target.getAttribute('id') === 'next') {
    currentStep++;
    progressPerc += 100 / 3;
  }
  updateUI();
});

function updateUI() {
  // ! Update Button State
  if (currentStep <= 1) {
    domEL.buttons.children[0].disabled = true;
  } else {
    domEL.buttons.children[0].disabled = false;
  }

  if (currentStep >= 4) {
    domEL.buttons.children[1].disabled = true;
  } else {
    domEL.buttons.children[1].disabled = false;
  }

  // ! Update finished steps
  domEL.progessSteps
    .slice(0, currentStep)
    .forEach((step) => step.classList.add('active'));
  domEL.progessSteps
    .slice(currentStep)
    .forEach((step) => step.classList.remove('active'));

  // ! Update progress
  document.documentElement.style.setProperty(
    '--progress',
    `${progressPerc + '%'}`
  );
}

window.addEventListener('load', updateUI);
