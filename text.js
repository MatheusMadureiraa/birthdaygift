var cont = 0;

function nextPage() {
    cont++;
    const pageOne = document.getElementById('page-one');
    const pageTwo = document.getElementById('page-two');
    const pageTree = document.getElementById('page-tree');

    if (cont === 1) {
        pageOne.style.display = 'none'; // Esconder img 1
        pageTwo.style.display = 'block'; // Exibir img 2
    } else if (cont === 2) {
        pageTwo.style.display = 'none'; // Esconder img 2
        pageTree.style.display = 'block'; // Exibir img 3
    } else {
        window.location.href = 'birthday_page.html';
    }
}

