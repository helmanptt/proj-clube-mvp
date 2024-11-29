import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VoucherPageComponent } from './voucher-page/voucher-page.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'voucher-page', component:VoucherPageComponent}
];
    