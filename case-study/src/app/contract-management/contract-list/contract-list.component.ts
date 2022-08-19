import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../service/contract.service';
import {CustomerService} from '../../customer-management/service/customer.service';
import {FacilityService} from '../../facility-namagement/service/facility.service';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[] = [];
  customers: Customer[] = [];
  facilitys: Facility[] = [];

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService) {
  }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.contracts = this.contractService.getAll();
    this.customers = this.customerService.getAll();
    this.facilitys = this.facilityService.getAll();
  }
}
