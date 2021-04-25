var studente1 = {
    nome: "Mario",
    cognome: "Marioni",
    eta_studente: 16
}

for(var key in studente1) {
    console.log(key + ": " + studente1[key]);
}

var listaStudenti = [
    {
        nome: "Luigi",
    cognome: "Conti",
    eta_studente: 16
    },

    {
        nome: "Matteo",
    cognome: "Fumagalli",
    eta_studente: 17
    },

    {
        nome: "Leonardo",
    cognome: "Rampolli",
    eta_studente: 18
    }
];

var inputNome = prompt("Inserisci il nome")
var inputCognome = prompt("Inserisci il cognome")
var inputEta = parseInt(prompt("Inserisci l'età"))

var datiMessi = {
    nome: inputNome,
    cognome: inputCognome,
    eta_studente: inputEta
}

listaStudenti.push(datiMessi)

for (var i = 0; i < listaStudenti.length; i++) {
    var studente = listaStudenti[i];
    console.log(studente.nome + " " + studente.cognome + " " + studente.eta_studente);
}