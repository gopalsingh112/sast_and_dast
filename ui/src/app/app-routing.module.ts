import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';

const routes: Routes = [
{ path: '', redirectTo: 'devices', pathMatch: 'full' },
{ path: 'devices', component: DevicesListComponent },
{ path: 'devices/:id', component: DeviceDetailsComponent },
{ path: 'add', component: AddDeviceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

