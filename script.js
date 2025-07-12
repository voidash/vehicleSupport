document.addEventListener('DOMContentLoaded', () => {
    const fleetContainer = document.querySelector('#fleet .card-container');

    const cars = [
        {
            name: 'Rolls-Royce Phantom',
            type: 'Wedding & VIP',
            description: 'The pinnacle of automotive luxury. Perfect for making an unforgettable entrance on your wedding day.',
            image: 'https://images.unsplash.com/photo-1629450646302-3d86c80fdd58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
        },
        {
            name: 'Mercedes-Benz G-Class',
            type: 'Luxury Jeep Escort',
            description: 'A symbol of power and prestige. Command the city streets with this iconic luxury SUV.',
            image: 'https://images.unsplash.com/photo-1603584071921-23724a2ac958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            name: 'Toyota Land Cruiser',
            type: 'Family & Temple Visits',
            description: 'Uncompromising safety and comfort for your family. A trusted companion for serene spiritual journeys.',
            image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            name: 'Range Rover Vogue',
            type: 'Luxury Jeep Escort',
            description: 'The definitive luxury SUV. Experience peerless refinement and capability on any terrain.',
            image: 'https://images.unsplash.com/photo-1580273916550-402b6a52091f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80'
        },
        {
            name: 'BMW 7 Series',
            type: 'Wedding & VIP',
            description: 'Combining dynamic presence with ultimate comfort. A statement of modern luxury for any special occasion.',
            image: 'https://images.unsplash.com/photo-1592996237625-d8a775b27238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
        },
        {
            name: 'Ford Endeavour',
            type: 'Family & Temple Visits',
            description: 'A spacious and powerful SUV, offering a blend of ruggedness and comfort for family adventures.',
            image: 'https://images.unsplash.com/photo-1617106315145-e3959984d16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        }
    ];

    const displayCars = (carList) => {
        fleetContainer.innerHTML = '';
        carList.forEach(car => {
            const carCard = `
                <div class="card">
                    <img src="${car.image}" alt="${car.name}">
                    <div class="card-content">
                        <h3>${car.name}</h3>
                        <p>${car.description}</p>
                    </div>
                </div>
            `;
            fleetContainer.innerHTML += carCard;
        });
    };

    displayCars(cars);
});
