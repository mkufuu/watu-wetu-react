import { useState, useEffect } from "react";

const useData = (endpoint) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        //self invoking function - a function that calls itself
        (async () => {
            try {
                const resp = await fetch(`https://api.jsonbin.io/v3${endpoint}`, {
                    headers: {
                        "X-Key-Name": "WATU-WETU",
                        "Content-Type": "application/json",
                        "X-Master-Key": "$2b$10$Uf/kYg29QcCrAJXwYzzl..ico/r8FFdkUqlJ8ZVDTzSh89wXdyHJy",
                    }
                });

                console.log(resp);
                const data = await resp.json();

                console.log(data);
                setData(data);
            } catch (error) {
                setData(null);
            }
        })();
    }, [endpoint]);

    return data;
}

export default useData;