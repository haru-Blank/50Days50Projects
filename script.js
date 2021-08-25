const PROJECTS = [
  {
    day: '1',
    title: 'Expanding Cards',
    link: '/1.expandingCards/index.html',
    image: '/images/1-expanding-cards.png',
  },
  {
    day: '2',
    title: 'Progress Steps',
    link: '/2.progressStep/index.html',
    image: '/images/2-progress-steps.png',
  },
  {
    day: '3',
    title: 'Rotating Navigation Animation',
    link: '/03.rotatingNav/client/index.html',
    image: '/images/3-rotating-navigation-animation.png',
  },
  {
    day: '4',
    title: 'Hidden Search Widget',
    link: '/04.hiddenSearch/index.html',
    image: '/images/4-hidden-search-widget.png',
  },
  {
    day: '5',
    title: 'Blurry Loading',
    link: '///',
    image: '/images/5-blurry-loading.png',
  },
];

class ProjectFactory {
  constructor(parentElement, arrayOfData) {
    this.parentElement = parentElement;
    this.arrayOfProjects = arrayOfData;
  }

  createProject({ day, title, link, image }) {
    const projectEL = document.createElement('div');
    projectEL.classList.add('project');

    const showcaseEL = document.createElement('div');
    showcaseEL.classList.add('showcase');
    showcaseEL.style.backgroundImage = `url(${image})`;

    const titleEL = document.createElement('div');
    titleEL.classList.add('title');
    titleEL.textContent = title;

    const dayEL = document.createElement('div');
    dayEL.classList.add('day');
    dayEL.textContent = 'Day ' + day;

    showcaseEL.insertAdjacentElement('beforeend', titleEL);
    showcaseEL.insertAdjacentElement('beforeend', dayEL);

    const projectHoverEL = document.createElement('div');
    projectHoverEL.classList.add('hover');
    projectHoverEL.insertAdjacentElement('beforeend', titleEL);

    const buttonEL = document.createElement('a');
    buttonEL.setAttribute('href', link);
    buttonEL.classList.add('btn');
    buttonEL.textContent = 'Live Demo';
    projectHoverEL.insertAdjacentElement('beforeend', buttonEL);

    projectEL.insertAdjacentElement('beforeend', projectHoverEL);
    projectEL.insertAdjacentElement('beforeend', showcaseEL);

    return projectEL;
  }

  hoverEffect(elements) {
    elements.forEach((element) => {
      element.addEventListener('mouseenter', (e) => {
        e.target.classList.add('hide');
      });

      element.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('hide');
      });
    });
  }

  startProjectPainting() {
    const projectsGenerated = this.arrayOfProjects.map(
      ({ day, title, link, image }) =>
        this.createProject({ day, title, link, image })
    );

    projectsGenerated.forEach((project) =>
      this.parentElement.appendChild(project)
    );

    this.hoverEffect(projectsGenerated);
  }
}

const projectsEL = document.getElementById('projects');

new ProjectFactory(projectsEL, PROJECTS).startProjectPainting();
