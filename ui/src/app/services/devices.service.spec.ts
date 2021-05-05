import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { DevicesService } from './devices.service';

describe('DevicesService', () => {
  let service: DevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule], 
      providers: [DevicesService]
    });
    // service = TestBed.inject(DevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', inject([DevicesService], (service: DevicesService) => {
    expect(service).toBeTruthy();
  }));

});
