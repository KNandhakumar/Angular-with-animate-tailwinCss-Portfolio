import { Component } from '@angular/core';
import { SkillsComponent } from "../shared/my-skills/skills/skills.component";

@Component({
    selector: 'app-my-skills',
    standalone: true,
    templateUrl: './my-skills.component.html',
    styleUrl: './my-skills.component.css',
    imports: [SkillsComponent]
})
export class MySkillsComponent {

}
