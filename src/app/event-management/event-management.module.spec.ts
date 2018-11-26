import { EventManagementModule } from './event-management.module';

describe('EventManagementModule', () => {
  let eventManagementModule: EventManagementModule;

  beforeEach(() => {
    eventManagementModule = new EventManagementModule();
  });

  it('should create an instance', () => {
    expect(eventManagementModule).toBeTruthy();
  });
});
