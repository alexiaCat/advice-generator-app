import { useState, useEffect } from 'react';

export const useFetchAdvice = (url, setDataApi, callAPI) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if(callAPI){
            const fetchData = async () => {
                setLoading(true);
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    setDataApi(data);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [url, setDataApi, callAPI])

    return [loading, error];
};
