import { useEffect, useState } from "react";

// Add generic typing
export const useAsync = <T>(
  promiseThunk: () => Promise<T>,
  dependencies: any[] = [],
  condition: () => boolean = () => true
): [boolean, any, T | null, () => void] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (condition()) {
      execute();
    }
  }, dependencies);

  function execute() {
    setLoading(true);
    promiseThunk()
      .then(setData)
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }

  return [loading, error, data, execute];
};
