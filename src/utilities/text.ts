export const substring = (str: string, charCount: number) => {
  if (str.length > charCount) {
    return `${str.substring(0, charCount)}...`;
  } else {
    return str;
  }
};

export const readableDate = (timestampMs: number) => {
  return new Date(timestampMs).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
