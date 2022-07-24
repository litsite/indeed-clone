
let searchInput = document.getElementById('job-search');

function myFunction() {
    let cardsTitle = document.querySelectorAll('.job-card h3');
    let filter = searchInput.value.toUpperCase();

    for (let i = 0; i < cardsTitle.length; i++) {
        let txtValue = cardsTitle[i].textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cardsTitle[i].parentElement.style.display = 'block';    
        } else {
            cardsTitle[i].parentElement.style.display = 'none';
        }
    }
}

// searchInput.addEventListener('input', myFunction);
