const trilhas = document.querySelectorAll('.trilha-box');
const inputTrilhaSelecionada = document.getElementById('trilhaSelecionada');

trilhas.forEach(trilha => {
    trilha.addEventListener('click', () => {
        trilhas.forEach(t => t.classList.remove('selecionada'));
        trilha.classList.add('selecionada');
        inputTrilhaSelecionada.value = trilha.getAttribute('data-trilha');
    });
});

document.getElementById('inscricaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let camposValidados = true;
    const inputs = document.querySelectorAll('#inscricaoForm input, #inscricaoForm select');
    inputs.forEach(input => {
        if (!input.value) {
            input.classList.add('error');
            camposValidados = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (camposValidados) {
        alert('Inscrição Realizada');
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

function cancelarInscricao() {
    if (confirm('Tem certeza que deseja cancelar a inscrição?')) {
        alert('Inscrição Cancelada');
        window.location.reload();
    }
}