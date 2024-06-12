import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'all-courses',component:AllCoursesComponent},
    {path:'blog',component:BlogComponent},
    {path:'pages',component:PagesComponent}
];
