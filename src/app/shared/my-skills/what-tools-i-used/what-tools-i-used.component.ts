import { Component } from '@angular/core';
import { HeadingComponent } from '../../heading/heading.component';
import { SkillsComponent } from '../skills/skills.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-what-tools-i-used',
  standalone: true,
  imports: [HeadingComponent,SkillsComponent,CommonModule],
  templateUrl: './what-tools-i-used.component.html',
  styleUrl: './what-tools-i-used.component.css'
})
export class WhatToolsIUsedComponent {
  
}
