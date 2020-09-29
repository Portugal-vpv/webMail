import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavItensComponent } from './side-nav-itens.component';

describe('SideNavItensComponent', () => {
  let component: SideNavItensComponent;
  let fixture: ComponentFixture<SideNavItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
