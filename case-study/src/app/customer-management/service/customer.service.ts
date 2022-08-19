import {Injectable} from '@angular/core';
import {Customer} from '../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [
    {
      id: 1,
      customerType: {name: 'Silver'},
      name: 'Nguyễn Văn A',
      dayOfBirth: '11-11-2020',
      gender: 'Male',
      idCard: '123123123',
      phone: '0908765432',
      email: 'a@gmail',
      address: 'Quảng Nam'
    },
    {
      id: 2,
      customerType: {name: 'Platinum'},
      name: 'Nguyễn Văn B',
      dayOfBirth: '11-11-2020',
      gender: 'Male',
      idCard: '123456789',
      phone: '0909999999',
      email: 'b@gmail',
      address: 'Đà Nẵng'
    },
    {
      id: 3,
      customerType: {name: 'Gold'},
      name: 'Nguyễn Văn C',
      dayOfBirth: '11-11-2020',
      gender: 'Female',
      idCard: '123456789',
      phone: '0909999000',
      email: 'c@gmail',
      address: 'Huế'
    },
    {
      id: 4,
      customerType: {name: 'Diamond'},
      name: 'Nguyễn Văn D',
      dayOfBirth: '11-11-2020',
      gender: 'Female',
      idCard: '123456789',
      phone: '0909999111',
      email: 'd@gmail',
      address: 'Sài Gòn'
    },
    {
      id: 5,
      customerType: {name: 'Member'},
      name: 'Nguyễn Văn E',
      dayOfBirth: '11-11-2020',
      gender: 'Female',
      idCard: '123226789',
      phone: '0909299111',
      email: 'd@gmail',
      address: 'Hà Nội'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.customerList;
  }

  saveCustomer(customer) {
    this.customerList.push(customer);
  }

  findById(id: number) {
    return this.customerList.find(customer => customer.id === id);
  }

  updateCustomer(id: number, customer: Customer) {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === id) {
        this.customerList[i] = customer;
      }
    }
  }

  deleteCustomer(id: number) {
    this.customerList = this.customerList.filter(customer => {
      return customer.id !== id;
    });
  }
}
