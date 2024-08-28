import { Component } from '@angular/core';
import { MaterialListModule } from '../../shared/material-list/material-list.module';

@Component({
  selector: 'app-servics-card',
  standalone: true,
  imports: [MaterialListModule],
  templateUrl: './servics-card.component.html',
  styleUrl: './servics-card.component.css'
})
export class ServicsCardComponent {

 
  services=[
    {
      icons:'assets/icons/adhaar.png',
      heading:'Adhaar Card Service',
      para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.'
    }  ,
    
    {
      icons:'assets/icons/pan.png',
      heading:'Pan Card Service',
      para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.'
    } ,

    {
      icons:'assets/icons/voterid.png',
      heading:'VoterID Card Service',
      para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.'
    } 
  ]
}

