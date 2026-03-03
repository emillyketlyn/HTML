const guests = [];
const btn = document.getElementById('addBtn');
const input = document.getElementById('guestName');
const listUl = document.getElementById('displayList');
const counterSpan = document.getElementById('aCounter');

btn.addEventListener('click', () => {
    const name = input.value.trim();
    
    if (name !== "") {
        guests.push(name);
        input.value = "";
        updateApp();
    }
});

function updateApp() {
    listUl.innerHTML = ""; // Limpa a lista visual
    let countA = 0;

    // LOOP PRINCIPAL
    for (let i = 0; i < guests.length; i++) {
        // 1. Transformar em maiúsculo
        let upperName = guests[i].toUpperCase();

        // 2. Criar elemento na tela
        let li = document.createElement('li');
        li.textContent = upperName;
        listUl.appendChild(li);

        // 3. Contar nomes que começam com 'A'
        if (upperName.startsWith('A')) {
            countA++;
        }
    }

    // Atualiza o contador no HTML
    counterSpan.textContent = countA;
}

// Permitir adicionar ao apertar Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') btn.click();
});
