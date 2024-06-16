import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
  @Input('subHeading')
  subHeading = '';

  @Input('headingText1')
  headingText1 = '';

  @Input('headingText2')
  headingText2 = '';

  @Input('headingText3')
  headingText3 = '';

  @Input('specialHeadingId')
  specialHeadingId:number | String = 2;

}
