import { Component } from '@angular/core';
import { ApiCardComponent } from '../addhar-page/api-card/api-card.component';
import { BannerCardComponent } from '../banner-card/banner-card.component';
import { FooterCardComponent } from '../footer-card/footer-card.component';
import { ServicsCardComponent } from '../servics-card/servics-card.component';
import { MenuCardComponent } from '../menu-card/menu-card.component';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [MenuCardComponent,BannerCardComponent, ServicsCardComponent, FooterCardComponent, ApiCardComponent],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent {

}
