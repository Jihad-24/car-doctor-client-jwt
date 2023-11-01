import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setSercices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-jwt-jihad.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setSercices(data);
            })
    }, [])
    return services;
};

export default useServices;