import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input('size')
  size = 'S'; //small , medium , large
  @Input('shade')
  shade = 'NA'; // dark , light , white , NA -> not applicable -> Link
  @Input('animation')
  animation = 'F'; // circle , fade
}
