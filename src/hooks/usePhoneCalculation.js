function usePhoneCalculation (salary) {
    let so = parseFloat(salary)
    let s = ''
    if (so>0) s = so*(1-2000/Math.pow(so,1.2644))
    if (s>10000) s = s-0.000004*s*s-0.0197*s-673
    if (s<0) s=0
    let phone = Math.round((0.01*Math.pow(s,1.34))+15)
    let phone_m = Math.round(phone/12)
    let phone_d = ''
 
    if (salary === 0) {
        phone = 0
        phone_m = 0
    }
    if (phone >= 20000) phone_d = 'Спутниковый телефон';
    else if (phone >=30) phone_d = 'Мобильный телефон';
    else if (phone<30) {
        phone = 0
        phone_m = 0
        phone_d = 'Мобильный телефон не нужен'
    }

    return {
        phone,
        phone_m,
        phone_d
    }

}

export default usePhoneCalculation