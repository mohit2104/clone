import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { EventManagementService } from '../../event-management.service';
import { EventsComponent } from './events.component';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {} }
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
      declarations: [EventsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
