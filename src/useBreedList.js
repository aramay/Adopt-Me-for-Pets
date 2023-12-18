import { useState, useEffect } from "react";

const cache = {};

const useBreedList = (animal) => {
  const URL = `http://pets-v2.dev-apis.com/breeds?animal=${animal}`;
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (cache[animal]) {
      setBreedList(cache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(URL);

      const result = await res.json();

      // update cache
      cache[animal] = result.breeds || [];
      setBreedList(cache[animal]);
      setStatus("loaded");

      console.log("breeds ", result);
    }
  }, [animal]);
  return [breedList, status];
};

export default useBreedList;
