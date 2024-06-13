import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit{
  ngOnInit(): void {
    this.setUpAnimation()
  }
  
  @Input('size')
  size = 'S'; //small , medium , large
  @Input('shade')
  shade = 'NA'; // dark , light , white , NA -> not applicable -> Link
  @Input('animation')
  animation = 'F'; // circle , fade
  @Input('name')
  name = '';

  animationClass = '';

  setUpAnimation(){
    this.animation==='F'&&this.shade==='D'?
    ' hover:bg-emerald-50':
    this.animation==='F'&&this.shade==='L'?
    ' hover:bg-emerald-600':
    this.animation==='F'&&this.shade==='W'?
    'hover:bg-emerald-600':
    ''
  }

}
