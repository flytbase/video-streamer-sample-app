import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddStreamModalComponent } from './add-stream-modal.component';

describe('AddStreamModalComponent', () => {
  let component: AddStreamModalComponent;
  let fixture: ComponentFixture<AddStreamModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStreamModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStreamModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
