import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {CustomerTypeService} from '../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';
import {Route, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerType: CustomerType[] = this.customerTypeService.getAll();
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 100)),
    customerType: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern('^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$')]),
    dayOfBirth: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^([+84]|0?)(9[0-4|6-9])[0-9]{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
  });

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService, private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.customerForm.reset();
    this.router.navigate(['/customer-list']);
    alert('Create done');

  }
}
