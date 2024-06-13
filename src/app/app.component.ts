import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthLinksComponent } from './shared/auth-links/auth-links.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { EmailComponent } from "./shared/email/email.component";
import { PhoneComponent } from "./shared/phone/phone.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, RouterModule, MenuComponent, AuthLinksComponent, SocialLinksComponent, EmailComponent, PhoneComponent]
})
export class AppComponent {

  isMenuScrolled = false
  isSlidebarShowing = false;

  @HostListener('window:scroll',['$event'])
  scrollCheck(){
    if(window.pageYOffset>90)
      this.isMenuScrolled = true;
    else
    this.isMenuScrolled = false;

    console.log(this.isMenuScrolled)
  }

  // sideBarOpen
  slideBarOpen(){
    this.isSlidebarShowing = true;
  }
  // closeSideBar
  closeSidebar(){
    this.isSlidebarShowing = false;
  }
}
