import {Injectable} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityTypeService} from './facility-type.service';
import {FacilityType} from '../../model/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [
    {
      id: 1,
      name: 'BEACH FRONT VILLAS',
      area: '150',
      cost: '1000',
      maxPeople: '5',
      rentType: {name: 'Day'},
      facilityType: {name: 'Villa'},
      standardRoom: 'Vip',
      other: 'No',
      pool: '50',
      floors: '3',
      free: '',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
    },
    {
      id: 2,
      name: 'PRESIDENTIAL SUITE',
      area: '100',
      cost: '300',
      maxPeople: '3',
      rentType: {name: 'Day'},
      facilityType: {name: 'House'},
      standardRoom: 'Vip',
      other: 'No',
      pool: '',
      floors: '3',
      free: '',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg'
    },
    {
      id: 3,
      name: 'OCEAN SUITE',
      area: '50',
      cost: '100',
      maxPeople: '3',
      rentType: {name: 'Day'},
      facilityType: {name: 'Room'},
      standardRoom: '',
      other: '',
      pool: '',
      floors: '',
      free: 'Buffer',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
    },
    {
      id: 4,
      name: 'OCEAN SUITE',
      area: '50',
      cost: '100',
      maxPeople: '3',
      rentType: {name: 'Day'},
      facilityType: {name: 'Room'},
      standardRoom: '',
      other: '',
      pool: '',
      floors: '',
      free: 'Buffer',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
    },
    {
      id: 5,
      name: 'PRESIDENTIAL SUITE',
      area: '100',
      cost: '300',
      maxPeople: '3',
      rentType: {name: 'Day'},
      facilityType: {name: 'House'},
      standardRoom: 'Vip',
      other: 'No',
      pool: '',
      floors: '3',
      free: '',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg'
    },
    {
      id: 6,
      name: 'BEACH FRONT VILLAS',
      area: '150',
      cost: '1000',
      maxPeople: '5',
      rentType: {name: 'Day'},
      facilityType: {name: 'Villa'},
      standardRoom: 'Vip',
      other: 'No',
      pool: '50',
      floors: '3',
      free: '',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
    },
  ];
  facilityType: FacilityType[] = this.facilityTypeService.getAll();

  constructor(private facilityTypeService: FacilityTypeService) {
  }

  getAll() {
    return this.facilityList;
  }

  saveFacility(facility) {
    for (let i = 0; i < this.facilityType.length; i++) {
      if (facility.facilityType === this.facilityType[i].name) {
        facility.facilityType = this.facilityType[i];
      }
    }
    this.facilityList.push(facility);
  }

  findById(id: number) {
    return this.facilityList.find(facility => facility.id === id);
  }

  updateFacility(id: number, facility: Facility) {
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id === id) {
        this.facilityList[i] = facility;
      }
    }
  }

  deleteFacility(id: number) {
    this.facilityList = this.facilityList.filter(facility => {
      return facility.id !== id;
    });
  }
}
