import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulPipesComponent } from './stateful-pipes.component';

describe('StatefulPipesComponent', () => {
  let component: StatefulPipesComponent;
  let fixture: ComponentFixture<StatefulPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefulPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefulPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
