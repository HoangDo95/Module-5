import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../service/facility.service';
import {FacilityTypeService} from '../service/facility-type.service';
import {RentTypeService} from '../service/rent-type.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../model/rent-type';
import {FacilityType} from '../../model/facility-type';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  temp: string;
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 100)),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),
    facilityType: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    other: new FormControl('', [Validators.required]),
    pool: new FormControl('', [Validators.required]),
    floors: new FormControl('', [Validators.required]),
    free: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  });

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private router: Router) {
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
    this.router.navigate(['/facility-list']);
  }

  changeFacility(even: string) {
    this.temp = even;
    console.log(this.temp);
  }
}
