import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToPrepareListComponent } from './to-prepare-list.component';

describe('ToPrepareListComponent', () => {
  let component: ToPrepareListComponent;
  let fixture: ComponentFixture<ToPrepareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToPrepareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToPrepareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
