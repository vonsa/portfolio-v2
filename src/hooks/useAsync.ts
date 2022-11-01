import { useEffect, useState } from "react";

// Add generic typing
export const useAsync = (
  promiseThunk: () => Promise<any>,
  dependencies: any[] = []
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    execute();
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
