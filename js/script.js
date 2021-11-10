
const mailUtente = prompt('Inserisci la tua email');
let listaMail = ['simo@gmail.com', 'lucia@gmail.com,', 'antonio@gmail.com', 'cecilia@gmail.com'];
let sentinella = false;

for (let i = 0; i < listaMail.length; i++){
    if (mailUtente == listaMail[i]){
        sentinella = true;
    }
}

if (sentinella){
    console.log('accesso consentito');
} else {
    console.log('accesso non consentito')
}
