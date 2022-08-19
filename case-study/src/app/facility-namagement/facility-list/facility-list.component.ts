import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../service/facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility [] = [];
  idDelete: number;
  id: number;
  name: string;
  area: string;
  cost: string;
  maxPeople: string;
  rentType: string;
  facilityType: string;
  standardRoom: string;
  other: string;
  pool: string;
  floors: string;
  free: string;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.facilityList = this.facilityService.getAll();
  }

  showDelete(facility: Facility) {
    this.idDelete = facility.id;
  }

  showDetail(facility: Facility) {
    this.id = facility.id;
    this.name = facility.name;
    this.area = facility.area;
    this.cost = facility.cost;
    this.maxPeople = facility.maxPeople;
    this.rentType = facility.rentType.name;
    this.facilityType = facility.facilityType.name;
    this.standardRoom = facility.standardRoom;
    this.other = facility.other;
    this.pool = facility.pool;
    this.floors = facility.floors;
    this.free = facility.free;
  }

  delete(idDelete: number) {
    console.log(idDelete);
    this.facilityService.deleteFacility(idDelete);
    this.ngOnInit();
  }
}
