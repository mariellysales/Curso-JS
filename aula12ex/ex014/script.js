function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var now = new Date ()
    var completedHour = now.getHours() +':' + now.getMinutes() + ':' + now.getSeconds()
    var hora = now.getHours()
    msg.innerHTML = `Agora são ${completedHour} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        console.log('dia')
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        console.log('tarde')
        img.src = 'img/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite
        console.log('noite')
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#515154'
    }
}

