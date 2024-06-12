import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isMenuScrolled = false;
  @HostListener('window:scroll',['$event'])
  scrollCheck(){
    if(window.pageYOffset>90)
      this.isMenuScrolled = true;
    else
    this.isMenuScrolled = false;

    console.log(this.isMenuScrolled)
  }
}
