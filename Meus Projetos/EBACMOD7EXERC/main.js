function send () {
    var a1 = window.document.getElementById('A')
    var b1 = window.document.getElementById('B')
    var res = window.document.getElementById('res')
    var n1 = Number(a1.value)
    var n2 = Number(b1.value)
    var s = n2 > n1 ? 'O resultado é válido' : 'O resultado é inválido'
    alert (s)
}