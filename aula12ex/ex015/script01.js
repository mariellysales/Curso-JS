function verificar() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.getElementById('res')
    if (fyear.value.length == 0 || fyear.value > year) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gender = 'um Homem'
            if (age >= 0 && age < 10) {
                //criança
                img.setAttribute('src', 'imgpeople/bebemenino.jpg')
            } else if (age < 21) {
                //jovem
                img.setAttribute('src', 'imgpeople/jovemmenino.jpg')
            } else if (age < 50) {
                //adulto
                img.setAttribute('src', 'imgpeople/homemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imgpeople/idosohomem.jpg')
            }
        } else if (fsex[1].checked) {
            gender = 'uma Mulher'
            if (age >= 0 && age < 10) {
                //criança
                img.setAttribute('src', 'imgpeople/bebemenina.jpg')
            } else if (age < 21) {
                //jovem
                img.setAttribute('src', 'imgpeople/jovemmenina.jpg')
            } else if (age < 50) {
                //adulto
                img.setAttribute('src', 'imgpeople/mulheradulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imgpeople/idosamulher.jpg')
            }
        }
        img.setAttribute('style', 'width:  250px; height: 250px; border-radius: 50%')
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gender} com ${age} anos.`
        res.appendChild(img)
    }
}