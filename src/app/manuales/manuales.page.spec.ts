import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManualesPage } from './manuales.page';

describe('ManualesPage', () => {
  let component: ManualesPage;
  let fixture: ComponentFixture<ManualesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManualesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
