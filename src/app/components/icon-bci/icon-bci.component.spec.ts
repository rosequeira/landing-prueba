import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBciComponent } from './icon-bci.component';

describe('IconBciComponent', () => {
  let component: IconBciComponent;
  let fixture: ComponentFixture<IconBciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconBciComponent]
    });
    fixture = TestBed.createComponent(IconBciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
