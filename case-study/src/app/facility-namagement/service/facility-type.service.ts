import {Injectable} from '@angular/core';
import {FacilityType} from '../../model/facility-type';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilityTypes: FacilityType[] = [
    {
      id: 1,
      name: 'Villa'
    },
    {
      id: 2,
      name: 'House'
    },
    {
      id: 3,
      name: 'Room'
    }
  ];

  constructor() {
  }

  findById(name: string) {
    // tslint:disable-next-line:no-shadowed-variable
    return this.facilityTypes.find( element => element.name === name);
  }

  getAll() {
    return this.facilityTypes;
  }
}
