
$(document).ready(async function () {
    $('html *').each(async function () {
            const element = $(this);
            if (!element.attr('id')) return;
            const paths = [
                    `/pages/${element.attr('id')}.html`,
                    `/component/${element.attr('id')}.html`,
                    `https://ntp-md.github.io/mod-tools/component/${element.attr('id')}.html`
            ];

            for (const filePath of paths) {
                    try {
                            const response = await $.get(filePath);
                            element.html(response);
                            break; // Stop trying other paths
                    } catch (error) {
                            console.error(`Failed to load from path: ${filePath}`, error);
                    }
            }
    });
});

