function guardarIdentidade() {
    const nome = document.getElementById('username').value;
    const perfil = document.getElementById('perfil').value;

    if (!nome || !perfil) {
        alert('Por favor, escolhe um nome e um tipo de identidade.');
        return;
    }

    localStorage.setItem('nomeAvatar', nome);
    localStorage.setItem('perfilAvatar', perfil);

    document.getElementById('identidadeGuardada').innerText = 
    `Identidade guardada: ${nome} (${perfil})`;
}

window.onload = () => {
    const nome = localStorage.getItem('nomeAvatar');
    const perfil = localStorage.getItem('perfilAvatar');

    if (nome && perfil) {
        document.getElementById('username').value = nome;
        document.getElementById('perfil').value = perfil;
        document.getElementById('identidadeGuardada').innerText =
        `Identidade carregada: ${nome} (${perfil})`;
    }
};