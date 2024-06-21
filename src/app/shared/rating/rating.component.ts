import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule,TestComponent],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent {
  @Input('value')
  value = 0;
  totalStar = 5;
}