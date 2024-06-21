import { FormsModule, NgForm } from '@Angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { HeadingComponent } from "../heading/heading.component";

@Component({
    selector: 'app-contact-form',
    standalone: true,
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.css',
    imports: [FormsModule, CommonModule, ButtonComponent, HeadingComponent]
})
export class ContactFormComponent {
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
