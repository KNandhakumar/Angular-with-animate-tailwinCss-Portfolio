import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { AboutComponent } from './about/about.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'my-skills',component:MySkillsComponent},
    {path:'projects',component:MyProjectsComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'test',component:TestComponent},
];
