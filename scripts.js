function showAlert() {
    alert('Agora só resta você prosseguir e encontrar seu caminho em meio as pistas ok?');
   alert(' Em nosso cabeçalho estarão os caminhos que poderá usar, valeu e falou!')
    console.log('Botão de alerta clicado');
}

function openTab(tabName) {
    let tabs = document.getElementsByClassName('tabcontent');
    for (let tab of tabs) {
        tab.style.display = 'none';
    }

    let tablinks = document.getElementsByClassName('tablink');
    for (let tablink of tablinks) {
        tablink.classList.remove('active');
    }

    document.getElementById(tabName).style.display = 'block';

    event.currentTarget.classList.add('active');
}

function addComment(postId) {
    let commentText = document.getElementById('comment-' + postId).value;

    let newComment = document.createElement('li');
    newComment.textContent = commentText;

    let commentsList = document.getElementById('comments-' + postId);
    commentsList.appendChild(newComment);

    
    document.getElementById('comment-' + postId).value = '';

    
}
