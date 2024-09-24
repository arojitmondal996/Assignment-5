const loadedPage = document.getElementById('page-loaded');
loadedPage.addEventListener('click', function () {
    console.log('blocked added');
    window.location.href = './block.html';
})