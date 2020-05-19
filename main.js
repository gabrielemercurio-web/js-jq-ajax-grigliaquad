// intercettare il click dell'utente sulla classe .invia-msg

$('.invia-msg').click(invia_messaggio);

// intercettare il tasto ENTER dell'utente sull'id #input-msg
$('#input-msg').keypress(function(event) {
    if (event.which == 13) {
        invia_messaggio();
    }
});
