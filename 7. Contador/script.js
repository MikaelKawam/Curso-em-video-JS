function contar() {
        var ini = document.getElementById('txti')
        var fim = document.getElementById('txtf')
        var passo = document.getElementById('txtp')
        var res = document.getElementById('res')

        if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
                window.alert('[ERRO] Por favor verifique os dados e tente novamente')
        } else {
                res.innerHTML = 'Contando:'
                var i = Number(ini.value)
                var f = Number(fim.value)
                var p = Number(passo.value)
                // if (p <=0) {
                //         window.alert('Passo invalido! CONSIDERANDO PASSO 1 ENTÃO')
                //         p = 1
                // }
                if (i < f) {
                        for (var c = i; c <= f; c += p) {
                                res.innerHTML += `${c} 👉`
                        }
                } else {
                        // Contagem Regressiva
                        for (var c = i; c >= f; c -= p) {
                                res.innerHTML += `${c} 👉`
                        }

                }
                res.innerHTML += `🏁`
        }


}