import { Component, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
  currentDevice = null;
  message = '';

  constructor(
    private deviceService: DevicesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getDevice(this.route.snapshot.paramMap.get('id'));
  }

  getDevice(id): void {
    this.deviceService.get(id)
      .subscribe(
        data => {
          this.currentDevice = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      company: this.currentDevice.company,
      imageurl: this.currentDevice.imageurl,
      model: this.currentDevice.model,
      productid: this.currentDevice.productid,
      warranty: this.currentDevice.warranty
    };

    this.deviceService.update(this.currentDevice._id, data)
      .subscribe(
        response => {
          // this.currentDevice.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateDevice(): void {
    this.deviceService.update(this.currentDevice._id, this.currentDevice)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Device was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteDevice(): void {
    this.deviceService.delete(this.currentDevice._id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/devices']);
        },
        error => {
          console.log(error);
        });
  }

}
