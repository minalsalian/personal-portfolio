import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Project One',
      description: 'Description of Project One',
      link: 'https://example.com/project-one',
      imageUrl: 'assets/images/project-one.png'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Description of Project Two',
      link: 'https://example.com/project-two',
      imageUrl: 'assets/images/project-two.png'
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}