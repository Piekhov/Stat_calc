function useShoesCalculation (salary) {
    let so = parseFloat(salary)
    let s = ''
    if (so>0) s = so*(1-2000/Math.pow(so,1.2644))
    if (s>10000) s = s-0.000004*s*s-0.0197*s-673
    if (s<0) s=0
    let shoes = Math.round(0.15*s+0.00003*s*s)
    let shoes_m = Math.round(shoes/12)
    let shoes_d = ''
    let shoes_a = ''
    if (salary <= 0) {
        shoes = 0
        shoes_m = 0
        shoes_a = 0
    }
    else if (shoes<10 && salary >0) {
        shoes=10
        shoes_m=Math.round(shoes/12)
        shoes_a=1
    }
    else shoes_a = Math.round(0.003*Math.pow(shoes/0.12,0.7)+1)

    shoes_d = 'Должно быть пар (минимум): ' + shoes_a

    return {
        shoes,
        shoes_m,
        shoes_d
    }

}

export default useShoesCalculation