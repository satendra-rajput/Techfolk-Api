import { Component } from '@angular/core';
import { MaterialListModule } from '../../../shared/material-list/material-list.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { OtpCardComponent } from '../otp-card/otp-card.component';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [MaterialListModule, ReactiveFormsModule, FormsModule,RouterLink],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})
export class LoginCardComponent {

  loginForm!: FormGroup;

  constructor(
    private _router:Router,
    private _toastr:ToastrService,
    public _dialog: MatDialog
    ){}

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      pass: new FormControl('' ,[Validators.minLength(5), Validators.required]),
      checkbox: new FormControl('')
    })
  }

  LoginSubmit(logData:FormGroup){
    console.log(logData.value);
    this._toastr.info("Please verify Mobile and Email OTP");
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this._dialog.open(OtpCardComponent);
    dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log(`Dialog result: ${result}`);
          this._toastr.info("Login Successfully");
        } else {
          console.log(`Dialog result: ${result}`);
          this._toastr.error("Please try to again after sometime");
        }
      
    });
  }
}
