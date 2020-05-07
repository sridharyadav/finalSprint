import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComComponent } from './home-com.component';

describe('HomeComComponent', () => {
  let component: HomeComComponent;
  let fixture: ComponentFixture<HomeComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
