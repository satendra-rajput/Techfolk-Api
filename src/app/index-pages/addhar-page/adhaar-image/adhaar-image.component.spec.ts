import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhaarImageComponent } from './adhaar-image.component';

describe('AdhaarImageComponent', () => {
  let component: AdhaarImageComponent;
  let fixture: ComponentFixture<AdhaarImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdhaarImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdhaarImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
