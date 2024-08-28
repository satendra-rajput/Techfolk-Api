import { Component, OnInit } from '@angular/core';
import { MaterialListModule } from '../../../shared/material-list/material-list.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-otp-card',
  standalone: true,
  imports: [MaterialListModule, ReactiveFormsModule, FormsModule],
  templateUrl: './otp-card.component.html',
  styleUrl: './otp-card.component.css'
})
export class OtpCardComponent{


}
