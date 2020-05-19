
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.

// BONUS: generare la griglia in jQuery utilizzando handlebars


$(document).ready(function () {

    $('.small').one('click', function() {

        var elemento_corrente = $(this);

        $.ajax ({
            'url': 'https://flynn.boolean.careers/exercises/api/random/int',
            'method': 'GET',
            'success': function(data) {
                // recupero il numero restituito dall'api
                var numero_pc = data.response;
                console.log('Numero pc: ' + numero_pc);

                $(elemento_corrente).append(numero_pc);

                if (numero_pc <= 5) {
                    $(elemento_corrente).addClass('giallo');
                } else {
                    $(elemento_corrente).addClass('verde');
                }
            },

            'error': function() {
                alert('si è verificato un errore');
            }
        });

    });

})
