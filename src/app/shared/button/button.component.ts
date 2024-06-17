import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent{
  
  @Input('disabled')
  disabled = false;
  @Input('size')
  size = 'S'; //small , medium , large
  @Input('shade')
  shade = 'NA'; // dark , light , white , NA -> not applicable -> Link
  @Input('animation')
  animation = 'F'; // circle , fade
  @Input('name')
  name = '';
}
