document.addEventListener('DOMContentLoaded', () => {
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const answer = header.nextElementSibling;
            const icon = header.querySelector('.faq-icon');

            document.querySelectorAll('.faq-answer').forEach(a => {
                if (a !== answer) {
                    a.classList.remove('active');
                    a.previousElementSibling.querySelector('.faq-icon').src = './assets/images/icon-plus.svg';
                }
            });

            answer.classList.toggle('active');

            if (answer.classList.contains('active')) {
                icon.src = './assets/images/icon-minus.svg';
            } else {
                icon.src = './assets/images/icon-plus.svg';
            }
        });
    });
});