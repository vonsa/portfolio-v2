import { AnalyticsEvent, PlausibleWindow } from "./analytics.model";

/*
  Can also handle sending events in the Analytics component, which is conditionally rendered.
  Events could be forwarded using an observable
*/
const analyticsEvent = ({ name, callback, props }: AnalyticsEvent) => {
  if ("plausible" in window) {
    (window as unknown as PlausibleWindow).plausible(name, { callback, props });
  }
};

export { analyticsEvent };
