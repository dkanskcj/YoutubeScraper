import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholepageComponent } from './wholepage.component';

describe('WholepageComponent', () => {
  let component: WholepageComponent;
  let fixture: ComponentFixture<WholepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
