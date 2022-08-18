function microondas (opcao, tempo) {

    let tempoPadrao;

    if (opcao == "1 - pipoca") {
        tempoPadrao=10;
    }

    else if (opcao == "2 - macarrao") {
        tempoPadrao=8;
    }

    else if (opcao == "3 - carne") {
        tempoPadrao=15;
    }

    else if (opcao == "4 - feijao") {
        tempoPadrao=12;
    }

    else if (opcao == "5 - brigadeiro") {
        tempoPadrao=8;
    }

    else {
        return "Prato inexistente";
    }
    

    if (tempo <= tempoPadrao) {
        return "Tempo insuficiente";
    }

    else if (tempo == tempoPadrao) {
        return "Acabou!";
    }

    else if (tempo >= (2 * tempoPadrao) && tempo <= (3 * tempoPadrao)) {
    return "A comida queimou!";
    }

    else if (tempo > 3* tempoPadrao) {
        return "Kabummm!"
    }
}

console.log (microondas ("3 - carne", 30) + " Prato pronto, bom apetite!")