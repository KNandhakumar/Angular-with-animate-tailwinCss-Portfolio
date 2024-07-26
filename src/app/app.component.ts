import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthLinksComponent } from './shared/auth-links/auth-links.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { EmailComponent } from "./shared/email/email.component";
import { PhoneComponent } from "./shared/phone/phone.component";
import { TestComponent } from './test/test.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, CommonModule, RouterModule, MenuComponent, AuthLinksComponent, SocialLinksComponent, EmailComponent, PhoneComponent, TestComponent]
})
export class AppComponent {

  isMenuScrolled = false;
  isSlidebarShowing = false;

  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    this.isMenuScrolled = window.pageYOffset > 90;
    console.log(this.isMenuScrolled);
  }

  slideBarOpen() {
    this.isSlidebarShowing = true;
  }

  closeSidebar() {
    this.isSlidebarShowing = false;
  }

  scrollToTop() {
    document.body.scrollIntoView({
      behavior: 'smooth'
    });
  }

  closeSidebarOnNavigate() {
    this.closeSidebar();
  }
}
