
function toggleFilter() {
    const modal = document.getElementById('filterModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}


window.onclick = function(event) {
    const modal = document.getElementById('filterModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}


document.querySelectorAll('.category-buttons button, .property-types button').forEach(button => {
    button.addEventListener('click', () => {
       
        button.parentElement.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        button.classList.add('active');
    });
});


const priceSlider = document.querySelector('.price-slider');
const minPriceInput = document.querySelector('.price-inputs input:first-child');
const maxPriceInput = document.querySelector('.price-inputs input:last-child');

priceSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    maxPriceInput.value = new Intl.NumberFormat().format(value);
});


document.querySelector('.clear-btn').addEventListener('click', () => {
  
    document.querySelectorAll('.category-buttons button, .property-types button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.category-buttons button:first-child, .property-types button:first-child').forEach(btn => {
        btn.classList.add('active');
    });
    priceSlider.value = 500000;
    minPriceInput.value = '5,000';
    maxPriceInput.value = '100,000';
});