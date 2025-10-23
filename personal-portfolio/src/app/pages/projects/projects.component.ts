export class ProjectsComponent {
  projects: any[] = [];

  constructor() {
    this.loadProjects();
  }

  loadProjects() {
    // Logic to load projects can be implemented here
    this.projects = [
      { title: 'Project 1', description: 'Description of Project 1' },
      { title: 'Project 2', description: 'Description of Project 2' },
      { title: 'Project 3', description: 'Description of Project 3' },
    ];
  }
}