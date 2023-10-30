function gerar(){
    var q = document.getElementById('numero').value
    var r = document.getElementById('seleção')
    var w = Number.parseInt(q)
    var res

    for(var i = 0; i<=10;i++){
        res = i * w
        var e = document.createElement('option')
        e.innerText = w+'X'+i+'='+res
        r.appendChild(e)
        
    }
}