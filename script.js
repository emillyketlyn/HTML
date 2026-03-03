<script>
    function filtrarNomes() {
        // 1. Pega o valor do input e o elemento da lista
        const input = document.getElementById('inputNomes').value;
        const listaUI = document.getElementById('listaResultado');
        
        // Limpa a lista antes de começar
        listaUI.innerHTML = "";

        // 2. Transforma a string em um Array e remove espaços extras
        const nomesArray = input.split(',').map(nome => nome.trim());

        // 3. Filtra nomes que começam com "A" ou "a"
        const nomesComA = nomesArray.filter(nome => 
            nome.toLowerCase().startsWith('a')
        );

        // 4. Exibe os nomes na tela
        nomesComA.forEach(nome => {
            const li = document.createElement('li');
            li.textContent = nome;
            listaUI.appendChild(li);
        });

        if (nomesComA.length === 0 && input !== "") {
            listaUI.innerHTML = "<li>Nenhum nome encontrado.</li>";
        }
    }
</script>
