function multiply() {
    var number = window.document.getElementById('choosen')
    var results = window.document.getElementById('results')
    results.innerHTML = ''
    if (number.value.length == 0) {
        window.alert = ("Por favor, digite um número!")
    } else {
        var n = Number(number.value)
        results.innerHTML = ''
        for (var index = 1; index <= 10; index++) {
            var item = document.createElement('option')
            item.text = `${n} x ${index} = ${n*index}`
            results.appendChild(item)
        }
    }
}