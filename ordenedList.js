document.addEventListener('DOMContentLoaded', function() {
    const participantList = document.getElementById('participant-list');
    const participants = Array.from(participantList.getElementsByClassName('participant'));

    // Ordena participantes em ordem alfabética
    participants.sort(function(a, b) {
        return a.querySelector('.name').textContent.localeCompare(b.querySelector('.name').textContent);
    });

    participantList.innerHTML = '';

    participants.forEach(function(participant) {
        participantList.appendChild(participant);
    });

    participantList.classList.add('visible');

    // Adiciona a classe "visible" para cada participante com um pequeno atraso
    participants.forEach((participant, index) => {
        setTimeout(() => {
            participant.classList.add('visible');
        }, index * 250); // Atraso para cada participante
    });
});

