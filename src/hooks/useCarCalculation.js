function useCarCalculation (salary) {
    let so = parseFloat(salary)
    let s = ''
    if (so>0) s = so*(1-2000/Math.pow(so,1.2644))
    if (s>10000) s = s-0.000004*s*s-0.0197*s-673
    if (s<0) s=0
    let car = Math.round(s*10)
    let car_m = Math.round(car/56.87+67)
    let car_d = ''
    if (salary === 0) car = 0
    if (car>=50000) car_d = ['Volkswagen Touareg/Audi Q8/Volvo XC90/Mercedes-Benz GLE'];
    else if (car>=40000) car_d = 'Toyota Land Cruiser Prado (J150)/Land Rover Range Rover Evoque (L551)/Volvo XC60';
    else if (car>=30000) car_d = 'Volkswagen Tiguan/Volvo XC40/Peugeot 5008';
    else if (car>=25000) car_d = 'Toyota RAV4/Hyundai Tucson/Mazda 6/Peugeot 3008/Toyota Camry';
    else if (car>=20000) car_d = 'Nissan Qashqai/Mitsubishi Outlander/Mazda CX-3/Ford Kuga/Volkswagen Golf';
    else if (car>=15000) car_d = 'Suzuki Vitara/Citroen C4/Toyota Corolla/Skoda Octavia A7/Kia Sportage/Ford Focus';
    else if (car>=13000) car_d = 'Citroen C3/Kia Rio/Renault Duster II';
    else if (car>=10000) car_d = 'Renault Sandero/Fiat Tipo/Citroen C-Elysee';
    else if (car>=7000) car_d = 'Chevrolet Spark/Ravon Nexia R3';
    else if (car>=5000) car_d = 'Daewoo Sens';
    else if (car < 5000) {
        car = 0
        car_m = 0
        car_d = 'Автомобиль не нужен'
    }
    
    return {
        car,
        car_m,
        car_d
    }

}


export default useCarCalculation