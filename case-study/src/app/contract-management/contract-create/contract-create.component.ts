import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../service/contract.service';
import {CustomerService} from '../../customer-management/service/customer.service';
import {FacilityService} from '../../facility-namagement/service/facility.service';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 100)),
    starDay: new FormControl('', [Validators.required]),
    endDay: new FormControl('', [Validators.required]),
    deposit: new FormControl('', [Validators.required, Validators.min(1)]),
    customer: new FormControl('', [Validators.required]),
    facility: new FormControl('', [Validators.required]),
    total: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService) {
  }

  customer: Customer[] = this.customerService.getAll();
  facility: Facility[] = this.facilityService.getAll();

  ngOnInit(): void {
  }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.saveContract(contract);
    this.contractForm.reset();
    alert('Create done');
  }

}
