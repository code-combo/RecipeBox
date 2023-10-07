import { useEffect, useState, useRef } from 'react'

export const useFetch = (url, _options) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    // use useRef to wrap an object/array argument (refrebce types)
    //  which is a useEffect dependency

    const options = useRef(_options).current;

    useEffect(() => {

        const controller = new AbortController();

        const fetchData = async () => {

            console.log(options);
            setIsPending(true);

            try {
                const res = await fetch(url, { signal: controller.signal });

                console.log(res);

                if(!res.ok) {
                    throw new Error(res.statusText);
                }

                const json = await res.json();
    
                setIsPending(false);
    
                setData(json);
                setError(null);
            } catch (err) {

                if(err.name === "AbortError") {
                    console.log('the fetch was aborted');
                } else {
                    setIsPending(false);
                    setError('could not fetch data');
                    console.log(err.message);
                }

            }
        }

        fetchData();

        return () => {
            controller.abort();
        }

    }, [url, options]);

    return { data, isPending, error }

}