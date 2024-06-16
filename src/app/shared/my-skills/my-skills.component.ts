import { Component } from '@angular/core';
import { HeadingComponent } from "../heading/heading.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
    selector: 'app-my-skills',
    standalone: true,
    templateUrl: './my-skills.component.html',
    styleUrl: './my-skills.component.css',
    imports: [HeadingComponent, SkillsComponent]
})
export class MySkillsComponent {

}
