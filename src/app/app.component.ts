import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialListModule } from './shared/material-list/material-list.module';
import { MenuCardComponent } from './index-pages/menu-card/menu-card.component';
import { BannerCardComponent } from './index-pages/banner-card/banner-card.component';
import { ApiCardComponent } from './index-pages/addhar-page/api-card/api-card.component';
import { FooterCardComponent } from './index-pages/footer-card/footer-card.component';
import { ServicsCardComponent } from './index-pages/servics-card/servics-card.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    MenuCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Techfolk Api';
}
