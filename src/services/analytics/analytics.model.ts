export interface PlausibleWindow extends Window {
  plausible: (
    event: string,
    options?: { callback?: () => void; props?: any }
  ) => void;
}

export type AnalyticsEvent = {
  name: string;
  callback?: () => void;
  props?: any;
};
