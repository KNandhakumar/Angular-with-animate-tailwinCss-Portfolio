import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { HeadingComponent } from "../../shared/heading/heading.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-design-develop',
    standalone: true,
    templateUrl: './design-develop.component.html',
    styleUrl: './design-develop.component.css',
    imports: [CommonModule,CardComponent, HeadingComponent,]
})
export class DesignDevelopComponent {

}
