import { Component, OnInit } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-courses',
    standalone: true,
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.css',
    imports: [HeadingComponent,CardComponent,CommonModule]
})
export class CoursesComponent{
  courses = 6;
}
