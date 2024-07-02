document.addEventListener('DOMContentLoaded', function() {
    const participantList = document.getElementById('participant-list');
    const participants = Array.from(participantList.getElementsByClassName('participant'));

    // participantes em ordem alfabética
    participants.sort(function(a, b) {
        return a.querySelector('.name').textContent.localeCompare(b.querySelector('.name').textContent);
    });

    participantList.innerHTML = '';

    participants.forEach(function(participant) {
        participantList.appendChild(participant);
    });

    participantList.classList.add('visible');

    // "visible" para cada participante com um pequeno atraso
    participants.forEach((participant, index) => {
        setTimeout(() => {
            participant.classList.add('visible');
        }, index * 250); // para cada participante
    });

    // abrir vídeo ao clicar no participante
    participants.forEach(participant => {
        participant.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video');
            if (videoUrl) {
                window.open(videoUrl, '_blank');
            } else {
                console.error('Video URL not found!');
            }
        });
    });
});

