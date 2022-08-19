import { Component, OnInit } from '@angular/core';
import {FacilityService} from '../service/facility.service';
import {FacilityTypeService} from '../service/facility-type.service';
import {RentTypeService} from '../service/rent-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityType} from '../../model/facility-type';
import {RentType} from '../../model/rent-type';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityForm: FormGroup;
  id: number;

  facilityTypeList: FacilityType [] = this.facilityTypeService.getAll();
  rentTypeList: RentType [] = this.rentTypeService.getAll();

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const facility = this.findById(this.id);
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id),
        name: new FormControl(facility.name, [Validators.required]),
        area: new FormControl(facility.area, [Validators.required]),
        cost: new FormControl(facility.cost, [Validators.required]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required]),
        rentType: new FormControl(facility.rentType.name, [Validators.required]),
        facilityType: new FormControl(facility.facilityType.name, [Validators.required]),
        standardRoom: new FormControl(facility.standardRoom, [Validators.required]),
        other: new FormControl(facility.other),
        pool: new FormControl(facility.pool),
        floors: new FormControl(facility.floors),
        free: new FormControl(facility.free),
        img: new FormControl(facility.img),
      });
    });
  }
  ngOnInit(): void {
  }

  findById(id: number) {
    return this.facilityService.findById(id);
  }

  // @ts-ignore
  updateFacility(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(id, facility);
    alert('Edit done');
    this.router.navigate(['/facility-list']);
  }
}
