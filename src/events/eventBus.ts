import { Subject } from "rxjs";
import { filter, map } from "rxjs/operators";
import { AppEvent } from "./events";

const eventBus$ = new Subject<AppEvent>();

export const send = (event: AppEvent) => {
  eventBus$.next(event);
};

export const listen = (type: AppEvent["type"]) => {
  return eventBus$.pipe(
    filter((event) => event.type === type),
    map((event) => event.payload)
  );
};
