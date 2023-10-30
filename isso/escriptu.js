function calcular(){
    var q = document.getElementById('numero').value
    var w = document.getElementById('numero2').value
    var e = document.getElementById('resposta')
    var p = Number.parseInt(q)
    var f = Number.parseInt(w)
    var conta = 1
    var andar = p
    
    var quociente = andar/f

    e.innerHTML = ''

    while(quociente > 1){

        conta = conta + 1
        andar = andar/2
        quociente=andar/f

    }
    
    e.innerText = 'A força peso de '+ f +' newtons levanta o peso de '+p+' newtons com ' + conta+' polias'
    
}   