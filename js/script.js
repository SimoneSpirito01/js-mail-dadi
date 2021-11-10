
const mailUtente = prompt('Inserisci la tua email');
let listaMail = ['simo@gmail.com', 'lucia@gmail.com,', 'antonio@gmail.com', 'cecilia@gmail.com'];
let sentinella = false;

for (let i = 0; i < listaMail.length; i++){
    if (mailUtente == listaMail[i]){
        sentinella = true;
    }
}

if (sentinella){
    alert('accesso consentito');
    const titolo = document.createElement('h1');
    titolo.innerHTML = "Gioco dei Dadi";
    document.querySelector('body').prepend(titolo);
    const btn = document.createElement('button');
    btn.innerHTML = "Gioca";
    document.querySelector('body').append(btn);
    
    btn.addEventListener('click', function(){
        const rdComputer = Math.floor(Math.random() * 6) + 1;
        const rdUser = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.numero-pc').innerHTML = "Dado del Computer: " + rdComputer;
        document.querySelector('.numero-user').innerHTML = "Dado dell'utente: " + rdUser;

        if (rdComputer > rdUser){
            document.querySelector('.vincitore').innerHTML = "Il vincitore è il computer!";
        }
        else if (rdComputer == rdUser) {
            document.querySelector('.vincitore').innerHTML = "Nessun vincitore, pareggio!";
        }
        else {
            document.querySelector('.vincitore').innerHTML = "Il vincitore è l'utente!";
        }
    })

} else {
    alert('accesso non consentito')
}
