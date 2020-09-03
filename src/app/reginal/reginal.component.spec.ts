import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReginalComponent } from './reginal.component';

describe('ReginalComponent', () => {
  let component: ReginalComponent;
  let fixture: ComponentFixture<ReginalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReginalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
