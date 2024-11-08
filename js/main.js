


$(document).on('click', function (e) {
    if ($(e.target).closest('.main-nav-toggle').length) {
        $(' #main-nav ').toggleClass('active');
    } else {
        $(' #main-nav ').removeClass('active');
    }
});








function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Display feedback message for a short time
    const feedback = document.getElementById('copyFeedback');
    feedback.style.display = 'block';
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 2000);
}


document.querySelectorAll('.clipboard_container .items').forEach(item => {
    item.addEventListener('click', function () {
        const img = item.querySelector('img');
        if (img) {
            copyToClipboard(img.src); // Copy the image's URL
        }
    });
});