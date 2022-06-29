function useWalletCalculation (salary) {
    let so = parseFloat(salary)
    let s = ''
    if (so>0) s = so*(1-2000/Math.pow(so,1.2644))
    if (s>10000) s = s-0.000004*s*s-0.0197*s-673
    if (s<0) s=0
    let wallet = Math.round(s*0.05)
    let wallet_m = Math.round(wallet/24)
    let wallet_d = ''
    if (salary === 0) {
        wallet = 0
        wallet_m = 0
    }
    if (wallet >= 20000) {
        wallet_m = (wallet/2)+(wallet/24)
        wallet_d = 'Пользуйтесь чемоданом, прикованным к охраннику'
    }
    else if (wallet>=10) wallet_d = 'Обычный партмоне'
    else if (wallet<10) {
        wallet = 0
        wallet_m = 0
        wallet_d = 'Можно обойтись карманом'
    }

    return {
        wallet,
        wallet_m,
        wallet_d
    }

}

export default useWalletCalculation