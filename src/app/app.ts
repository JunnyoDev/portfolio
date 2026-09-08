import { Component } from '@angular/core';
import { projects } from './data/projects';
import { skills, otherTechnologies, cloudTools } from './data/skills';
import { experience } from './data/experience';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly projects = projects;
  protected readonly skills = skills;
  protected readonly otherTechnologies = otherTechnologies;
  protected readonly cloudTools = cloudTools;
  protected readonly experience = experience;
}
