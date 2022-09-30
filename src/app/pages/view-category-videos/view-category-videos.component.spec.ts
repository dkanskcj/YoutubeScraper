import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoryVideosComponent } from './view-category-videos.component';

describe('ViewCategoryVideosComponent', () => {
  let component: ViewCategoryVideosComponent;
  let fixture: ComponentFixture<ViewCategoryVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCategoryVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCategoryVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
