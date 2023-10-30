function calcular(){
    var q = document.getElementById('numero').value
    var w = document.getElementById('planeta').value
    var e = document.getElementById('resposta')
    var c1 = Number.parseFloat(q)
    var pesoN
    
    e.innerText = ''
    
    switch(w.toUpperCase()){
        case 'MERCÚRIO':
            pesoN = c1 * 0.3707
            break
        case 'MERCURIO':
            pesoN = c1 * 0.3707
            break
        case 'VÊNUS':
            pesoN = c1 * 0.8888
            break
        case 'VENUS':
            pesoN = c1 * 0.8888
            break
        case 'TERRA':
            pesoN = c1 * 1
            break
        case 'MARTE':
            pesoN = c1 * 0.3717
            break
        case 'JÚPITER':
            pesoN = c1 * 2.4839
            break
        case 'JUPITER':
            pesoN = c1 * 2.4839
            break
        case 'SATURNO':
            pesoN = c1 * 1.0461
            break
        case 'URANO':
            pesoN = c1 * 0.8888
            break
        case 'NETUNO':
            pesoN = c1 * 1.1172
            break
        
    }

    e.innerText = 'O peso em '+w+' é '+pesoN+'kg'
}
