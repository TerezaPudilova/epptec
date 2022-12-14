import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCountComponent } from './comments-count.component';

describe('CommentCountComponent', () => {
  let component: CommentCountComponent;
  let fixture: ComponentFixture<CommentCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
