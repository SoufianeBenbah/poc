import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableMeetUpsComponent } from './available-meet-ups.component';

describe('AvailableMeetUpsComponent', () => {
  let component: AvailableMeetUpsComponent;
  let fixture: ComponentFixture<AvailableMeetUpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableMeetUpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableMeetUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
