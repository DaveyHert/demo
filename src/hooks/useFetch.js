import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const getData = async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        //   check for error fetching data
        console.log(res);
        if (!res.ok) throw new Error("Data could not be fetched");
        //   store data
        const jsonData = await res.json();
        setLoading(false);
        setData(jsonData);
      } catch (err) {
        if (err.name === "Abort") {
          console.log("Fetch aborted");
        } else {
          setLoading(false);
          setError(err);
        }
      }
    };
    getData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};
