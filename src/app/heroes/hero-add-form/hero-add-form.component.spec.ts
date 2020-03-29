import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAddFormComponent } from './hero-add-form.component';

describe('HeroAddFormComponent', () => {
  let component: HeroAddFormComponent;
  let fixture: ComponentFixture<HeroAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
