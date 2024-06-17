import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { HeroComponent } from './hero/hero.component';
import { CoursesComponent } from "./courses/courses.component";
import { DesignDevelopComponent } from './design-develop/design-develop.component';
import { MySkillsComponent } from "../shared/my-skills/my-skills.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { ContactFormComponent } from "../shared/contact-form/contact-form.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ButtonComponent, HeroComponent, CoursesComponent, DesignDevelopComponent, MySkillsComponent, FooterComponent, ContactFormComponent]
})
export class HomeComponent {
  test(){
    console.log(this.test)
  }
}
