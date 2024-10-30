document.getElementById('buscarCEP').addEventListener('click', function () {
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // depois de replace é regex para tirar letras e outros 
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(response => response.json()) // then aguarda a resposta
        .then(data => {
            if(!data.erro){ // se erro não existir (!) entre no if
                document.getElementById('logradouro').value = data.logradouro || ''; // || = se não tiver 'logradouro 'deixe vázio ''; 
                document.getElementById('bairro').value = data.bairro || '';
                document.getElementById('localidade').value = data.localidade || '';
                document.getElementById('estado').value = data.estado || '';
            }
        })
    } else {
        alert(`CEP inserido inválido`)
    }
})