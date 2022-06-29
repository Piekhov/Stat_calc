function useTieCalculation (salary) {
    let so = parseFloat(salary)
    let s = ''
    if (so>0) s = so*(1-2000/Math.pow(so,1.2644))
    if (s>10000) s = s-0.000004*s*s-0.0197*s-673
    if (s<0) s=0
    let tie = Math.round(s*0.12)
    let tie_m = Math.round(s/5)
    let tie_d = ''
    let tie_a = Math.round(0.0043*Math.pow(tie/0.12,0.82)+1)
    if (salary === 0) {
        tie = 0
        tie_m = 0
        tie_a = 0
    }
    if (tie<3) {
        tie = 0
        tie_a = 0
        tie_m = 0
    }
    tie_d = 'Должно быть галстуков (минимум): ' + tie_a

    return {
        tie,
        tie_m,
        tie_d
    }

}

export default useTieCalculation