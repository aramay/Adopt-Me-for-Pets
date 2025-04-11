import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }
  }, [animal]);

  async function requestBreedList() {
    setBreedList([]);
    setStatus("loading");

    try {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );

      if (!res.ok) {
        console.error(`HTTP error - requestBreeList! Status: ${res.status}`);
        throw new Error(`HTTP error - requestBreeList! Status: ${res.status}`);
      }
      // If res.ok - extract data
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    } catch (error) {
      console.error("Fetch error - requestBreeList!", error.message);
      // Optionally rethrow or handle error
      throw error;
    }
  }
  return [breedList, status];
}
