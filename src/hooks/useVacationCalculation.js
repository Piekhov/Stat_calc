function useVacationCalculation (salary) {
    let so = parseFloat(salary)
    let s = ''
    if (so>0) s = so*(1-2000/Math.pow(so,1.2644))
    if (s>10000) s = s-0.000004*s*s-0.0197*s-673
    if (s<0) s=0
    let vacation = Math.round(s*1.2)
    let vacation_m = Math.round(vacation/12)
    let vacation_d = ''
    if (salary === 0) vacation = 0
    if (vacation >= 100) vacation_d = 'Один или более одного отдыха в год' 
    else if (vacation<100) {
        vacation = 0
        vacation_m = 0
        vacation_d = 'На работе отдохнете'
    }

    return {
        vacation,
        vacation_m,
        vacation_d
    }

}

export default useVacationCalculation