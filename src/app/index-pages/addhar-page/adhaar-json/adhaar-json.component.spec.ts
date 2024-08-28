import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhaarJsonComponent } from './adhaar-json.component';

describe('AdhaarJsonComponent', () => {
  let component: AdhaarJsonComponent;
  let fixture: ComponentFixture<AdhaarJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdhaarJsonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdhaarJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
