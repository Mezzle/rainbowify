$('h1,h2,h3,h4').filter(':not(:has(*))').each(function (el) {
        console.log(this);
        if ($(this).text().trim() !== "") {
            $(this).rainbow({
                colors: [
                    '#FF0000',
                    '#f26522',
                    '#fff200',
                    '#00a651',
                    '#28abe2',
                    '#2e3192',
                    '#6868ff'
                ],
                animate: true,
                animateInterval: 100,
                pad: false,
                pauseLength: 100
            })
        }
    }
);
