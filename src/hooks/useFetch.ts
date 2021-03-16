import { useState, useEffect } from 'react';

interface Response<T> {
    data: T | undefined;
    status: Status;
}

export type Status = 'init' | 'loading' | 'ready' | 'error';

const UseFetch = <T>(url: string): Response<T> => {
    
    // Create state variables
    const [data, setData] = useState<T | undefined>(undefined);
    const [status, setStatus] = useState<Status>('init');

    useEffect(() => {
        const fetchWeather = async () => {
            setData(undefined);
            if(!url) return;
            try {
                setStatus('loading');
                const data = await (await fetch(url)).json();
                setData(data);
                setStatus('ready');
            }
            catch(err) {
                setStatus('error');
                throw err;
            }
        }
        fetchWeather();
    }, [url]);

    return { data, status };
};

export default UseFetch;