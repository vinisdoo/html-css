function calcular(){
    var q = document.getElementById('numero').value
    var w = document.getElementById('numero2').value
    var e = document.getElementById('resposta')
    var c1 = Number.parseFloat(q)
    var c2 = Number.parseFloat(w)
    var f = 90000000000000 * c1 * c2

    e.innerText = 'A placa de '+c1+' coulombs consegue levantar um objeto de metal a uma distância de 1cm e '+c2+' coulombs que tenha um peso de até '+f/10+' quilos'
    
}