import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlySearchComponent } from './fly-search.component';

describe('FlySearchComponent', () => {
  let component: FlySearchComponent;
  let fixture: ComponentFixture<FlySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlySearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
