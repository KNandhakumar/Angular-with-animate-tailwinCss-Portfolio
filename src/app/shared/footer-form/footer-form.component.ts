import { FormsModule, NgForm } from '@Angular/forms';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-footer-form',
  standalone: true,
  imports: [ButtonComponent,FormsModule,],
  templateUrl: './footer-form.component.html',
  styleUrl: './footer-form.component.css'
})
export class FooterFormComponent {
  
}
