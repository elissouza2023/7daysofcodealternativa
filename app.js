function iniciarJogo() {
    let area = prompt("Você quer seguir para a área de Front-End ou Back-End? (Digite 'Front-End' ou 'Back-End')").toLowerCase();

    if (area === "front-end") {
        let tecnologia = prompt("Você quer aprender React ou Vue? (Digite 'React' ou 'Vue')").toLowerCase();
        alert(`Ótima escolha! ${tecnologia.charAt(0).toUpperCase() + tecnologia.slice(1)} é uma tecnologia muito usada no mercado.`);
    } else if (area === "back-end") {
        let tecnologia = prompt("Você quer aprender C# ou Java? (Digite 'C#' ou 'Java')").toLowerCase();
        alert(`Ótima escolha! ${tecnologia.toUpperCase()} é uma linguagem poderosa para o desenvolvimento back-end.`);
    } else {
        alert("Opção inválida! Reinicie o jogo.");
        return;
    }

    let carreira = prompt("Você deseja se especializar na área escolhida ou seguir como Fullstack? (Digite 'Especializar' ou 'Fullstack')").toLowerCase();
    if (carreira === "especializar") {
        alert("Ótimo! Aprofundar seus conhecimentos nessa área pode te tornar um especialista valioso.");
    } else if (carreira === "fullstack") {
        alert("Incrível! Ser Fullstack abre muitas oportunidades no mercado.");
    } else {
        alert("Opção inválida! Reinicie o jogo.");
        return;
    }

    let tecnologias = [];
    let continuar = true;

    while (continuar) {
        let novaTecnologia = prompt("Digite uma tecnologia que você gostaria de aprender:");
        tecnologias.push(novaTecnologia);
        continuar = confirm("Tem mais alguma tecnologia que você gostaria de aprender? (Clique em 'OK' para continuar ou 'Cancelar' para sair)");
    }

    alert(`Muito bom! Você quer aprender as seguintes tecnologias: ${tecnologias.join(", ")}. Boa sorte na sua jornada!`);
}

iniciarJogo();
