import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SocialLinksComponent } from "../social-links/social-links.component";
import { ButtonComponent } from "../button/button.component";
import { FooterFormComponent } from "../footer-form/footer-form.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: [RouterModule, SocialLinksComponent, ButtonComponent, FooterFormComponent]
})
export class FooterComponent {

}
