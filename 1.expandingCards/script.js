const domEL = {
  galleryEL: document.getElementById('gallery'),
};

const images = [
  {
    link: 'https://images.alphacoders.com/605/thumbbig-605592.webp',
    caption: 'Naruto And Sasuke',
  },
  {
    link: 'https://images2.alphacoders.com/516/thumbbig-516664.webp',
    caption: 'Sabo, Luffy and Ace.',
  },
  {
    link: 'https://images3.alphacoders.com/144/thumbbig-144565.webp',
    caption: 'Uchiha Itachi',
  },
  {
    link: 'https://images5.alphacoders.com/613/thumbbig-613925.webp',
    caption: 'Battle of Gods',
  },
  {
    link: 'https://images7.alphacoders.com/736/thumbbig-736462.webp',
    caption: 'Kimi No Na wa',
  },
];

let randInt = Math.floor(Math.random() * (4 - 0 + 1)) + 0;

for (let [index, image] of images.entries()) {
  const figureEL = document.createElement('figure');
  figureEL.setAttribute('data-key', index);

  const imageEL = document.createElement('img');
  imageEL.setAttribute('src', image.link);
  imageEL.setAttribute('alit', image.caption);

  const figEL = document.createElement('figcaption');
  figEL.textContent = image.caption;

  figureEL.appendChild(imageEL);
  figureEL.appendChild(figEL);

  domEL.galleryEL.appendChild(figureEL);

  if (index === randInt) figureEL.classList.add('active');
}

[...document.getElementsByTagName('figure')].forEach((figure, index, array) => {
  figure.addEventListener('click', (e) => {
    array.forEach((el) => el.classList.remove('active'));
    e.target.parentNode.classList.add('active');
  });
});
