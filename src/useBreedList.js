//This is a custom hook which will be called inside Search Params

import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);

    //show what the state of the hook is at
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        } else {
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );
            const json = await res.json();
            //return empty array if json is empty
            localCache[animal] = json.breeds || [];

            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    }, [animal]);

    return [breedList, status]; 
}
