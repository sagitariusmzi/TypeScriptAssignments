function car_info(manufacturer: string, model: string, ...details: { [key: string]: any }[]): any {
    const carInfo = {
        Manufacturer: manufacturer,
        Model: model,
    };

    for (const detail of details) {
        const key = Object.keys(detail)[0];
        carInfo[key] = detail[key];
    }

    return carInfo;
}

// Call the function with required information and additional details enclosed in object literals
const carDetails = car_info('Toyota', 'Camry', { Color: 'Blue' }, { 'Optional Feature': 'Sunroof' });

// Print the object to ensure all information is stored correctly
console.log(carDetails);
