import { Routes } from '@angular/router';
import { RegisterCardComponent } from './pages/onboarding/register-card/register-card.component';
import { LoginCardComponent } from './pages/onboarding/login-card/login-card.component';
import { OtpCardComponent } from './pages/onboarding/otp-card/otp-card.component';
import { NotFoundComponent } from './shared/widgets/not-found/not-found.component';
import { IndexPageComponent } from './index-pages/index-page/index-page.component';


export const routes: Routes = [
    {path:"", redirectTo:"", pathMatch:"full"},
    {path:"", component:IndexPageComponent},
    {path:"register", component:RegisterCardComponent},
    {path:"login", component:LoginCardComponent},
    {path:"otp-verify", component:OtpCardComponent},



    {path:'**', component:NotFoundComponent }
];

