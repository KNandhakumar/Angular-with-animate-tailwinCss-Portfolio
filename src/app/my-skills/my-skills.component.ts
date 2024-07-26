import { Component } from '@angular/core';
import { SkillsComponent } from "../shared/my-skills/skills/skills.component";
import { WhatToolsIUsedComponent } from "../shared/my-skills/what-tools-i-used/what-tools-i-used.component";
import { HeadingComponent } from "../shared/heading/heading.component";

@Component({
    selector: 'app-my-skills',
    standalone: true,
    templateUrl: './my-skills.component.html',
    styleUrl: './my-skills.component.css',
    imports: [SkillsComponent, WhatToolsIUsedComponent, HeadingComponent]
})
export class MySkillsComponent {

}
