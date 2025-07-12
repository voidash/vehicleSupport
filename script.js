document.addEventListener('DOMContentLoaded', () => {
    const fleetContainer = document.querySelector('#fleet .card-container');

    const cars = [
        {
            name: 'Toyota Land Cruiser',
            type: 'SUV',
            image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            name: 'Ford Ranger',
            type: 'Jeep',
            image: 'https://images.unsplash.com/photo-1617106315145-e3959984d16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            name: 'Mercedes-Benz G-Class',
            type: 'SUV',
            image: 'https://images.unsplash.com/photo-1603584071921-23724a2ac958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            name: 'Toyota Hilux',
            type: 'Jeep',
            image: 'https://images.unsplash.com/photo-1542892650-763949553448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            name: 'Hyundai Creta',
            type: 'SUV',
            image: 'https://images.unsplash.com/photo-1617814108585-545d5a368a1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            name: 'Skoda Kushaq',
            type: 'SUV',
            image: 'https://images.unsplash.com/photo-1623952299448-1418b3a3220d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
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
                        <p>Type: ${car.type}</p>
                    </div>
                </div>
            `;
            fleetContainer.innerHTML += carCard;
        });
    };

    displayCars(cars);
});
