import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpplLibraryComponent } from './jumppl-library.component';

describe('JumpplLibraryComponent', () => {
  let component: JumpplLibraryComponent;
  let fixture: ComponentFixture<JumpplLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumpplLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumpplLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
