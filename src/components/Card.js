import { useEffect, useState } from "react";


export const Card = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
            .then(response => response.json())
            .then(json => setData(json))
    }, []);

    console.log(data);

    return (
        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={data[0].image}/>
            <h1>{data[0].name}</h1>
            <h2>{data[0].current_price}</h2>
        </div>
    )
}