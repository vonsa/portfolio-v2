import { AnalyticsEvent, PlausibleWindow } from "./analytics.model";

const analyticsEvent = ({ name, callback, props }: AnalyticsEvent) => {
  if ("plausible" in window) {
    (window as unknown as PlausibleWindow).plausible(name, { callback, props });
  }
};

export { analyticsEvent };
