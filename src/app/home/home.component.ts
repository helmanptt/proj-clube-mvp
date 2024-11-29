import { Component } from '@angular/core';
import { VoucherServiceService } from '../services/voucher/voucher.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  vouchers:String[] = [];
  constructor(private voucherService:VoucherServiceService) {}


}
