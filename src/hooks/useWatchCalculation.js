function useWatchCalculation (salary) {
    let so = parseFloat(salary)
    let s = ''
    if (so>0) s = so*(1-2000/Math.pow(so,1.2644))
    if (s>10000) s = s-0.000004*s*s-0.0197*s-673
    if (s<0) s=0
    let watch = Math.round(0.00002*Math.pow(s,2.3)+4)
    let watch_m = Math.round(watch/72)
    let watch_d = ''
    if (salary === 0) watch = 0
    if(s>20000) {
        watch=Math.round(watch*(20000/s))
        watch_m = Math.round(watch/72)
    }
    if (watch >= 55000) watch_d = 'Турбийон или вечный календарь';
    else if (watch >= 15000) watch_d = 'Швейцарская механика в платине';
    else if (watch >= 9000) watch_d = 'Швейцарская механика в золоте или сталь с усложнениями';
    else if (watch >= 3000) watch_d = 'Швейцарская механика в стали';
    else if (watch >= 900) watch_d = 'Omega или аналоги';
    else if (watch >= 700) watch_d = 'Tag Hauer или аналоги';
    else if (watch >=500) watch_d = 'Longines';
    else if (watch >= 400) watch_d = 'Tissot';
    else if (watch >= 300) watch_d = 'Японская механика, швецарский кварц';
    else if (watch >=100) watch_d = 'Японский кварц';
    else if (watch >9) watch_d = 'Дешевая китайская электроника';
    else {
        watch = 0
        watch_m = 0
        watch_d = 'Часы, впрочем, ни к чему'
    }

    return {
        watch,
        watch_m,
        watch_d
    }

}

export default useWatchCalculation