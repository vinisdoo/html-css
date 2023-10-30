function analisar(){
    
    var q = document.getElementById('numero').value
    var w = document.getElementById('numero2').value
    var e = document.getElementById('numero3').value
    var r = document.getElementById('s')
    window.alert('entrou')
    var i = Number.parseInt(q)
    var o = Number.parseInt(w)
    var p = Number.parseInt(e)
    
    var t = i

    for(t=i; t<p; t+=o){

    r.innerText += 'Conta-'
    }
}