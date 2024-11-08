
$(document).ready(function () {
    // The base URL of your GitHub Pages site
    var baseURL = 'https://ntp-md.github.io/mod-tools';

    // Loop through all elements with href or src attributes
    $('a[href^="/"], img[src^="/"], link[href^="/"], script[src^="/"], iframe[src^="/"], source[src^="/"], audio[src^="/"], video[src^="/"]').each(function () {
        var $el = $(this);

        // Loop through the attributes of each element
        $.each(this.attributes, function () {
            // Check if the attribute is href or src and if it starts with "/"
            if (this.specified && (this.name === 'href' || this.name === 'src') && this.value.startsWith('/')) {
                var newURL = baseURL + this.value; // Prepend the base URL to the root-relative URL

                // Update the href or src attribute with the new URL
                $el.attr(this.name, newURL);
            }
        });
    });

    // For debugging, log image paths to console to see if they're correctly updated
    $('img[src^="/"]').each(function () {
        var currentSrc = $(this).attr('src');
        console.log('Original image src: ', currentSrc);

        // Ensure the src gets updated
        if (currentSrc.startsWith('/')) {
            var newSrc = baseURL + currentSrc;
            $(this).attr('src', newSrc);
            console.log('Updated image src: ', newSrc);
        }
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