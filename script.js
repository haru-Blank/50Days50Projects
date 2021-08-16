const PROJECTS = [
  {
    day: '1',
    title: 'Expanding Cards',
    link: '///',
    image: '///',
  },
  {
    day: '2',
    title: 'Progress Steps',
    link: '///',
    image: '///',
  },
  {
    day: '3',
    title: 'Rotating Navigation Animation',
    link: '///',
    image: '///',
  },
  {
    day: '4',
    title: 'Hidden Search Widget',
    link: '///',
    image: '///',
  },
  {
    day: '5',
    title: 'Blurry Loading',
    link: '///',
    image: '///',
  },
  {
    day: '1',
    title: 'Expanding Cards',
    link: '///',
    image: '///',
  },
  {
    day: '2',
    title: 'Progress Steps',
    link: '///',
    image: '///',
  },
  {
    day: '3',
    title: 'Rotating Navigation Animation',
    link: '///',
    image: '///',
  },
  {
    day: '4',
    title: 'Hidden Search Widget',
    link: '///',
    image: '///',
  },
  {
    day: '5',
    title: 'Blurry Loading',
    link: '///',
    image: '///',
  },
];

class ProjectFactory {
  constructor(parentElement, arrayOfData) {
    this.parentElement = parentElement;
    this.arrayOfProjects = arrayOfData;
  }

  startProjectPainting() {
    const projectsGenerated = this.arrayOfProjects.map(
      ({ day, title, link, image }) =>
        this.createProject({ day, title, link, image })
    );

    projectsGenerated.forEach((project) =>
      this.parentElement.appendChild(project)
    );
  }

  createProject({ day, title, link, image }) {
    const projectEL = document.createElement('div');
    projectEL.classList.add('project');

    const titleEL = document.createElement('div');
    titleEL.classList.add('title');
    titleEL.textContent = title;

    const dayEL = document.createElement('div');
    dayEL.classList.add('day');
    dayEL.textContent = day;

    projectEL.appendChild(titleEL);
    projectEL.appendChild(dayEL);

    return projectEL;
  }
}

const projectsEL = document.getElementById('projects');

new ProjectFactory(projectsEL, PROJECTS).startProjectPainting();
