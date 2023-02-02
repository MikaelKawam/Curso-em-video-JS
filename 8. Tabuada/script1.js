function tabuada() {
        var num = document.getElementById('txtn')
        var tab = document.getElementById('seltab')
        if (num.value.length == 0) {
                window.alert('[ERRO] Por favor verifique o número e tente novamente')
        } else {
                var n = Number(num.value)
                var c = 1
               while (c <= 10) {
                var item = document.createElement('option')
                item.txt = `${n} x ${c} = ${n*c}`
                tab.appendChild(item)
                c++
               }
                
        }

}
function tabuada() {
        var num = document.querySelector('input#txtn')
        var res = document.getElementById('res')
        if (num.value.length == 0) {
                alert('Digite um número!')
        } else {
                var n = Number(num.value)
                res.innerHTML = ' '
                for (var c = 1; c <= 10; c++) {
                        res.innerHTML += `${n} x ${c} = ${n * c} </br> `
                }
        }
}
