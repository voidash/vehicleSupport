document.addEventListener('DOMContentLoaded', () => {
    const fleetContainer = document.querySelector('#fleet .card-container');

    const cars = [
        {
            name: 'Rolls-Royce Phantom',
            type: 'Wedding & VIP',
            description: 'The pinnacle of automotive luxury. Perfect for making an unforgettable entrance on your wedding day.',
            image: 'https://hips.hearstapps.com/hmg-prod/images/phantom-scintilla-private-collection-0-1-66b50a5eddd44.jpg'
        },
        {
            name: 'Mercedes-Benz G-Class',
            type: 'Luxury Jeep Escort',
            description: 'A symbol of power and prestige. Command the city streets with this iconic luxury SUV.',
            image: 'https://vehicle-images.dealerinspire.com/6ed8-11001591/thumbnails/large/W1NWM0AB2SX042655/51b1e05851452a315656bdb8f62591c7.jpg'
        },
        {
            name: 'Toyota Land Cruiser',
            type: 'Family & Temple Visits',
            description: 'Uncompromising safety and comfort for your family. A trusted companion for serene spiritual journeys.',
            image: 'https://images.unsplash.com/photo-1650530579355-7ad9d4766043?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Range Rover Vogue',
            type: 'Luxury Jeep Escort',
            description: 'The definitive luxury SUV. Experience peerless refinement and capability on any terrain.',
            image: 'https://hips.hearstapps.com/hmg-prod/images/2024-land-rover-range-rover-evoque-phev-102-65380162bded9.jpg'
        },
        {
            name: 'BMW 7 Series',
            type: 'Wedding & VIP',
            description: 'Combining dynamic presence with ultimate comfort. A statement of modern luxury for any special occasion.',
            image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/132513/7-series-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80'
        },
        {
            name: 'Ford Endeavour',
            type: 'Family & Temple Visits',
            description: 'A spacious and powerful SUV, offering a blend of ruggedness and comfort for family adventures.',
            image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Ford/Endeavour/11580/1710203310359/front-left-side-47.jpg'
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
