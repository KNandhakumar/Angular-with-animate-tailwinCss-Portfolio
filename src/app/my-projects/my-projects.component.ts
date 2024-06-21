import { Component } from '@angular/core';
import { HeadingComponent } from "../shared/heading/heading.component";
import { CardComponent } from "../shared/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-my-projects',
    standalone: true,
    templateUrl: './my-projects.component.html',
    styleUrl: './my-projects.component.css',
    imports: [HeadingComponent, CardComponent,CommonModule]
})
export class MyProjectsComponent {
    courses = 6;
}
