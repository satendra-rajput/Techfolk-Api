import { Component, HostListener } from '@angular/core';
import { MaterialListModule } from '../../shared/material-list/material-list.module';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [MaterialListModule, RouterLink],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.css'
})
export class MenuCardComponent {

  // const header = document.querySelector("header");
  // const hamburgerBtn = document.querySelector("#hamburger-btn");
  // const closeMenuBtn = document.querySelector("#close-menu-btn");

  // Toggle mobile menu on hamburger button click
  // @HostListener('click')
  // hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

  // // Close mobile menu on close button click
  // closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

}
