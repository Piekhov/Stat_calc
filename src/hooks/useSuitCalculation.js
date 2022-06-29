function useSuitCalculation (salary) {
    let so = parseFloat(salary)
    let s = ''
    if (so>0) s = so*(1-2000/Math.pow(so,1.2644))
    if (s>10000) s = s-0.000004*s*s-0.0197*s-673
    if (s<0) s=0
    let suit = Math.round(s*0.4)
    let suit_m = Math.round(suit/12)
    let suit_d = ''
    if (salary === 0) suit = 0
    if (suit >= 6000) suit_d = 'Должно быть более четырех костюмов';
    else if (suit >= 4200) suit_d = 'Должно быть четыре костюма';
    else if (suit >= 2800) suit_d = 'Должно быть три костюма';
    else if (suit >= 1600) suit_d = 'Должно быть два-три костюма';
    else if (suit >= 900) suit_d = 'Должно быть два костюма';
    else if (suit >= 600) suit_d = 'Должно быть один-два костюма';
    else if (suit >=100) suit_d = 'Достаточно одного, но добротного костюма';
    else if (suit<100) {
        suit = 0
        suit_m = 0
        suit_d = 'Можно обойтись без костюма'
    }

    return {
        suit,
        suit_m,
        suit_d
    }

}

export default useSuitCalculation