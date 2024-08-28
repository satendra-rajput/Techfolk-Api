import { Component } from '@angular/core';
import { MaterialListModule } from '../../../shared/material-list/material-list.module';
import { AdhaarViewComponent } from '../adhaar-view/adhaar-view.component';
import { AdhaarImageComponent } from '../adhaar-image/adhaar-image.component';
import { AdhaarJsonComponent } from '../adhaar-json/adhaar-json.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-card',
  standalone: true,
  imports: [MaterialListModule, AdhaarJsonComponent, AdhaarViewComponent, AdhaarImageComponent, RouterLink],
  templateUrl: './api-card.component.html',
  styleUrl: './api-card.component.css'
})
export class ApiCardComponent {

  constructor(private _routers:Router){

  }
  
  routerlink(){
    this._routers.navigateByUrl('/login')
  }
}
