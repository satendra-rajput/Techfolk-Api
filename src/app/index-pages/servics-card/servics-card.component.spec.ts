import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicsCardComponent } from './servics-card.component';

describe('ServicsCardComponent', () => {
  let component: ServicsCardComponent;
  let fixture: ComponentFixture<ServicsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
