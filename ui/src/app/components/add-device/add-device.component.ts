import { Component, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  device = {
    company: '',
    imageurl: '',
    model: '',
    productid: '',
    warranty: ''
  };
  submitted = false;

  constructor(private deviceService: DevicesService) { }

  ngOnInit(): void {
  }

  
  saveDevice(): void {
    const data = {
      company: this.device.company,
      imageurl: this.device.imageurl,
      model: this.device.model,
      productid: this.device.productid,
      warranty: this.device.warranty
    };

    this.deviceService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newDevice(): void {
    this.submitted = false;
    this.device = {
      company: '',
      imageurl: '',
      model: '',
      productid: '',
      warranty: ''
    };
  }

}

