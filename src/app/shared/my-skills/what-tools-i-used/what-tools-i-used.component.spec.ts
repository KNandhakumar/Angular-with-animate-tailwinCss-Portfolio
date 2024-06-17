import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatToolsIUsedComponent } from './what-tools-i-used.component';

describe('WhatToolsIUsedComponent', () => {
  let component: WhatToolsIUsedComponent;
  let fixture: ComponentFixture<WhatToolsIUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatToolsIUsedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatToolsIUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
