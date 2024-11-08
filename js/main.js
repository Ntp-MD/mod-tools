$(document).ready(function() {
    // The base URL of your GitHub Pages site
    var baseURL = 'https://ntp-md.github.io/mod-tools';
  
    // Select all elements that might have root-relative URLs
    $('a, img, link, script, iframe').each(function() {
      $.each(this.attributes, function() {
        if (this.specified && this.value.startsWith('/')) {
          // Prepend the base URL to all root-relative URLs
          $(this).attr(this.name, baseURL + this.value);
        }
      });
    });
  });

$(document).on('click', function (e) {
    if ($(e.target).closest('.main-nav-toggle').length) {
        $(' #main-nav ').toggleClass('active');
    } else {
        $(' #main-nav ').removeClass('active');
    }
});


$(document).ready(function () {
    if (localStorage.getItem('darkMode') === 'enabled') {
        $('body').addClass('dark-mode');
    }
});


$(document).on('click', function (e) {
    if ($(e.target).closest('.toggle-mode').length) {
        $('body').toggleClass('dark-mode');

        // Save the mode in local storage
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
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