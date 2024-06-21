import { Component, Input } from '@angular/core';
import { HeadingComponent } from "../heading/heading.component";
import { SkillsComponent } from "./skills/skills.component";
import { WhatToolsIUsedComponent } from "./what-tools-i-used/what-tools-i-used.component";

@Component({
    selector: 'app-my-skills',
    standalone: true,
    templateUrl: './my-skills.component.html',
    styleUrl: './my-skills.component.css',
    imports: [HeadingComponent, SkillsComponent, WhatToolsIUsedComponent]
})
export class MySkillsComponent {
    @Input('name')
    name = '';
}
