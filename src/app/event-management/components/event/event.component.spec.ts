import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { EventManagementService } from '../../event-management.service';

import { EventComponent } from './event.component';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} },
    params: {
      subscribe: (fn: (value: any) => void) =>
        fn({
          tab: 0
        })
    }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [
        EventManagementService,
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        },
        { provide: ActivatedRoute, useValue: fakeActivatedRoute }
      ],
      declarations: [EventComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
