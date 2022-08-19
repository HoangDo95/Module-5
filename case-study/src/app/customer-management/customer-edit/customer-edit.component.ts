import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerTypeService} from '../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;

  customerTypeList: CustomerType[] = this.customerTypeService.getAll();

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.findById(this.id);
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        customerType: new FormControl(customer.customerType.name, [Validators.required]),
        name: new FormControl(customer.name, [Validators.required, Validators.pattern('^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$')]),
        dayOfBirth: new FormControl(customer.dayOfBirth, [Validators.required]),
        gender: new FormControl(customer.gender, [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^[0-9]{9}$')]),
        phone: new FormControl(customer.phone, [Validators.required]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, [Validators.required])
      });
    });
  }

  ngOnInit(): void {
  }

   findById(id: number) {
    return this.customerService.findById(id);
  }

  // @ts-ignore
  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id, customer);
    alert('Edit done');
    this.router.navigate(['/customer-list']);
  }
}
