import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setSercices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setSercices(data);
        })
    }, [])
    return services;
};

export default useServices;