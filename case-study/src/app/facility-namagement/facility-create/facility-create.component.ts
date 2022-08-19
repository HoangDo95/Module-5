import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../service/facility.service';
import {FacilityTypeService} from '../service/facility-type.service';
import {RentTypeService} from '../service/rent-type.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../model/rent-type';
import {FacilityType} from '../../model/facility-type';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  temp: string;
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),
    facilityType: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    other: new FormControl(),
    pool: new FormControl(),
    floors: new FormControl(),
    free: new FormControl(),
    img: new FormControl(),
  });

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService) {
  }

  facilityType: FacilityType[] = this.facilityTypeService.getAll();
  rentType: RentType[] = this.rentTypeService.getAll();

  ngOnInit(): void {
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility);
    this.facilityForm.reset();
    alert('Create done');
  }

  changeFacility(even: Event) {
    this.temp = even.target.value;
    console.log(this.temp);
  }
}
