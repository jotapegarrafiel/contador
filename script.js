function contar(){
    let fInit = document.getElementById('txtInit')
    let fEnd = document.getElementById('txtEnd')
    let fPasso = document.getElementById('txtPasso')
    let res = document.getElementById('resposta')

    if(fInit.value.length == 0 || fEnd.value.length == 0 || fPasso.value.length == 0){
        window.alert(`Dados inválidos, revise`)
    } else {
        res.innerHTML = `Contando:`
        let i = Number(fInit.value)
        let f = Number(fEnd.value)
        let p = Number(fPasso.value)

        if(i < f){
            //Contagem crescente
            for(let c = i; c <= f; c+= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for(let c = i; c>= f; c-= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }
}