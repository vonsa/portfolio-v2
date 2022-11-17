export type Action<Type, Payload = undefined> = {
  type: Type;
  payload?: Payload;
};
