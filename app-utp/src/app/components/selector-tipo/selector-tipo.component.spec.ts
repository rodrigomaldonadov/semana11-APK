import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectorTipoComponent } from './selector-tipo.component';

describe('SelectorTipoComponent', () => {
  let component: SelectorTipoComponent;
  let fixture: ComponentFixture<SelectorTipoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SelectorTipoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectorTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
