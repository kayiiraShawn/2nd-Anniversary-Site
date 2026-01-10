const pages = document.querySelectorAll('.page');
const btns = document.querySelectorAll('.btn');

let currentPage = 0;

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.toggle('active', i===index);
    })
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentPage < pages.length-1) {
            currentPage++;
            showPage(currentPage);
        }
    })
})

showPage(0);