function car_info(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var carInfo = {
        Manufacturer: manufacturer,
        Model: model,
    };
    for (var _a = 0, details_1 = details; _a < details_1.length; _a++) {
        var detail = details_1[_a];
        var key = Object.keys(detail)[0];
        carInfo[key] = detail[key];
    }
    return carInfo;
}
// Call the function with required information and additional details enclosed in object literals
var carDetails = car_info('Toyota', 'Camry', { Color: 'Blue' }, { 'Optional Feature': 'Sunroof' });
// Print the object to ensure all information is stored correctly
console.log(carDetails);
