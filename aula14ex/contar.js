function conta() {
    var inicio = window.document.getElementById('start');
    var ultimo = window.document.getElementById('end');
    var passo = window.document.getElementById('jump');
    var result = document.getElementById('res')
    if (inicio.value.length == 0 || ultimo.value.length == 0 || passo == 0) {
        result.innerHTML = 'Impossível contar!'
    } else {
        result.innerHTML = 'Contando: <br>';
        var i = Number(inicio.value)
        var f = Number(ultimo.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                result.innerHTML += `\u{1F449} ${c} `
            }
        } else {
            for(var c = i; c >= f; c -= p) {
                result.innerHTML += `\u{1F449} ${c} `
            }
        }
    }
}