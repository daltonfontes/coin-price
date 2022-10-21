import { useEffect, useState } from "react";


export const Card = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.log(error));
    }, []);
    console.log(data);

    return (
        <div className="grid gap-4 grid-cols-2">
            {data.map((item) => (
                <figure className="max-w-sm mx-auto shadow-md" key={item.id}>
                    <div className="text-center">
                        <img className="rounded-full w-32 mb-4 mx-auto" src={item.image} alt={item.name} />
                    </div>
                    <div className="p-6">
                        <h3 className="text-gray-900 text-xl font-medium mb-2">{item.name}</h3>
                        <p className="text-gray-700 text-base mb-4">{item.symbol}</p>
                        <p className="text-gray-700 text-base mb-4">R${item.current_price}</p>
                    </div>
                </figure>
            ))}
        </div>
    );
};