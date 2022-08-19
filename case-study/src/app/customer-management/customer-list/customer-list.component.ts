import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../service/customer.service';
import {CustomerTypeService} from '../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  customerTypeList: CustomerType[] = [];
  idDelete: number;


  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.customerList = this.customerService.getAll();
    this.customerTypeList = this.customerTypeService.getAll();
  }

  showDelete(customer: Customer) {
    this.idDelete = customer.id;
  }

  delete(idDelete: number) {
    console.log(idDelete);
    this.customerService.deleteCustomer(idDelete);
    this.ngOnInit();
  }
}
