import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyResultComponent } from './fly-result.component';

describe('FlyResultComponent', () => {
  let component: FlyResultComponent;
  let fixture: ComponentFixture<FlyResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlyResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
