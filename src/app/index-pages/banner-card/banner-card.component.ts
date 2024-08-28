import { Component, inject } from '@angular/core';
import { MaterialListModule } from '../../shared/material-list/material-list.module';
import { Router } from '@angular/router';
import { HoverdirectiveDirective } from '../../shared/directive/hoverdirective.directive';

@Component({
  selector: 'app-banner-card',
  standalone: true,
  imports: [MaterialListModule],
  templateUrl: './banner-card.component.html',
  styleUrl: './banner-card.component.css',
  hostDirectives:[HoverdirectiveDirective]
})
export class BannerCardComponent {
  private _routerLink = inject(Router);


  routerLink(){
    this._routerLink.navigateByUrl('/login')
  }
}
