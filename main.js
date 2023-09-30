const nomeHeroi = "Leon"
let xp = 0

function imprimirRanking(nivel) {
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`)
}

switch (true) {
    case xp <= 1000:
        imprimirRanking("novato")
        break
    case xp <= 2000:
        imprimirRanking("bronze")
        break
    case xp <= 5000:
        imprimirRanking("prata")
        break
    case xp <= 7000:
        imprimirRanking("ouro")
        break
    case xp <= 8000:
        imprimirRanking("platina")
        break
    case xp <= 9000:
        imprimirRanking("ascendente")
        break
    case xp <= 10000:
        imprimirRanking("importal")
        break
    default:
        imprimirRanking("radiante")
        break
}