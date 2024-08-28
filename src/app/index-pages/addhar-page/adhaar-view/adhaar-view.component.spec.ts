import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhaarViewComponent } from './adhaar-view.component';

describe('AdhaarViewComponent', () => {
  let component: AdhaarViewComponent;
  let fixture: ComponentFixture<AdhaarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdhaarViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdhaarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
