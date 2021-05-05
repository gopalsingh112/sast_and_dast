import { Component, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {

  devices: any;
  currentDevice = null;
  currentIndex = -1;
  company = '';

  constructor(private deviceService: DevicesService) { }

  ngOnInit(): void {
    this.retrieveDevices();
  }


  retrieveDevices(): void {
    this.deviceService.getAll()
      .subscribe(
        data => {
          this.devices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveDevices();
    this.currentDevice = null;
    this.currentIndex = -1;
  }

  setActiveDevice(device, index): void {
    this.currentDevice = device;
    this.currentIndex = index;
  }

  removeAllDevices(): void {
    this.deviceService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveDevices();
        },
        error => {
          console.log(error);
        });
  }

  searchCompany(): void {
    this.deviceService.findByCompany(this.company)
      .subscribe(
        data => {
          this.devices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
