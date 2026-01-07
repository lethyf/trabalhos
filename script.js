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

function escolhaNarrativa(opcao) {
    let texto = '';

    if (opcao === "evento") {
        texto = "O avatar envolve-se num evento social, conhecendo outros utilizadores.";
        registarAccao("Participou num evento social");
    }
    else if (opcao === "observar") {
        texto = "O avatar observa as interacções e aprende as dinâmicas da comunidade";
        registarAccao("Observou a comunidade");
    }
    else if (opcao === "criar") {
        texto = "O avatar cria um objeto que passa a fazer parte do mundo virtual.";
        registarAccao("Criou conteúdo no mundo");
    }
	
    document.getElementById("resultadoNarrativa").innerText = texto;
}

function registarAccao(acao) {
    let historico = JSON.parse(localStorage.getItem("historico")) || [];
    historico.push(acao);
    localStorage.setItem("historico", JSON.stringify(historico));
    mostrarHistorico();
}

function guardarMensagem() {
    const msg = document.getElementById("mensagem").value;
    if (!msg) return;

    let mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];
    mensagens.push(msg);
    localStorage.setItem("mensagens", JSON.stringify(mensagens));

    document.getElementById("mensagem").value = "";
    mostrarMensagens();
    registarAcao("Contribuiu para a comunidade");
}

function mostrarMensagens() {
    const lista = document.getElementById("mensagensComunidade");
    lista.innerHTML = "";

    let mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];

    mensagens.forEach(m => {
        const li = document.createElement("li");
        li.innerText = m;
        lista.appendChild(li);
    });
}

window.addEventListener("load", mostrarMensagens);

function mostrarHistorico() {
    const lista = document.getElementById("listaAcoes")
    lista.innerHTML = "";

    let historico = JSON.parse(localStorage.getItem("historico")) || [];

    historico.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        lista.appendChild(li);
    });
}

window.addEventListener("load", mostrarHistorico);
