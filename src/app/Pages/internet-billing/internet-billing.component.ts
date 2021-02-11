import { Component, OnInit } from '@angular/core';
import { TableData } from './billing-data';

@Component({
  selector: 'app-internet-billing',
  templateUrl: './internet-billing.component.html',
  styleUrls: ['./internet-billing.component.css']
})
export class InternetBillingComponent implements OnInit {

  tableData = TableData;
  constructor() { }

  ngOnInit(): void {
  }

}

