import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialListModule } from '../../../shared/material-list/material-list.module';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { OtpCardComponent } from '../otp-card/otp-card.component';

@Component({
  selector: 'app-register-card',
  standalone: true,
  imports: [MaterialListModule ,ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './register-card.component.html',
  styleUrl: './register-card.component.css'
})
export class RegisterCardComponent implements OnInit{

  RegisterForm!: FormGroup;

  constructor(
    private _toastr: ToastrService,
    private _router:Router,
    // public _dialog: MatDialog
    ){}

  ngOnInit(){
    this.RegisterForm = new FormGroup({
      username: new FormControl('', [Validators.minLength(3), Validators.required]),
      mobile: new FormControl('', [Validators.minLength(5), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      pass: new FormControl('', [Validators.minLength(5), Validators.required]),
      
    })
  }

  RegisterSubmit(logData:FormGroup){
    console.log(logData.value)
    this._toastr.success("Account Create Successfull ");
    this._router.navigateByUrl('/login');
  }
}
