var socket = io();

var label = $('#lblNuevoTicket');
//on: escuchar información
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

socket.on('estadoActual', function(ticketActual) {
    label.text(ticketActual.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        console.log(siguienteTicket);
        label.text(siguienteTicket);
    });
});