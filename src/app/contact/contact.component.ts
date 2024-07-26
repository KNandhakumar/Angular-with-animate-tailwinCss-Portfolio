import { NgForm, FormsModule } from '@Angular/forms';
import { Component, NgModule } from '@angular/core';
import { ContactFormComponent } from "../shared/contact-form/contact-form.component";
import { ButtonComponent } from "../shared/button/button.component";
import { HttpClient } from '@angular/common/http';
import { HeadingComponent } from '../shared/heading/heading.component';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [ContactFormComponent, ButtonComponent,FormsModule, HeadingComponent]
})
export class ContactComponent {
    constructor(private http: HttpClient) {}


  submit(form: NgForm) {
    if (form.valid) {
      this.http.post('http://localhost:8080/api/send-email', form.value)
        .subscribe(response => {
          alert('Email sent successfully!');
          form.reset(); // Clear the form fields
        }, error => {
          console.error('Error sending email', error);
          alert('Failed to send email.');
        });
    }
  }
}
