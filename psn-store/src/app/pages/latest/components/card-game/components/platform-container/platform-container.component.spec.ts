import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformContainerComponent } from './platform-container.component';

describe('PlatformContainerComponent', () => {
  let component: PlatformContainerComponent;
  let fixture: ComponentFixture<PlatformContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
