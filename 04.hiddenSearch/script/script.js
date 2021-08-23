const domEL = (function () {
  return {
    buttonEL: document.getElementById('btn__search'),
    inputEL: document.getElementById('search__input'),
  };
})();

class SearchApp {
  eventHandler() {
    domEL.buttonEL.addEventListener('click', (e) => {
      e.preventDefault();
      domEL.inputEL.classList.toggle('show');
    });
  }

  init() {
    this.eventHandler();
  }
}

new SearchApp().init();
