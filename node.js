
document.getElementById('white_back').addEventListener('click', function() {
    document.body.classList.remove('black_back');
    document.body.classList.add('white_back');
});

document.getElementById('black_back').addEventListener('click', function() {
    document.body.classList.remove('white_back');
    document.body.classList.add('black_back');
});
