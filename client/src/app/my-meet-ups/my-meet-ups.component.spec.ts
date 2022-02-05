import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMeetUpsComponent } from './my-meet-ups.component';

describe('MyMeetUpsComponent', () => {
  let component: MyMeetUpsComponent;
  let fixture: ComponentFixture<MyMeetUpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMeetUpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMeetUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
