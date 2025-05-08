import React, { useEffect, useState } from 'react';

function BeerList() {
    const [beers, setBeers] = useState([]);
    const [loading, settLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.sampleapis.com/beers/ale')
        .then((res) => res.json())
        .then((data) => {
            setBeers(data);
            settLoading(false);
        })
        .catch((err) => {
            console.error('Error fetching beers:', err);
            settLoading(false);
        });
    }, []);

    if (loading) return <p>cargando cervezas...</p>;

    return (
        <div>
            <h2>Lista de cervezas🍺</h2>
            <ul>
                {beers.map((beer) => (
                    <li key={beer.id}>
                        <h3>{beer.name}</h3>
                        {beer.image && <img src={beer.image} alt={beer.name} width="100"/>}
                        <p>{beer.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BeerList;