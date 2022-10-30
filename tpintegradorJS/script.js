const form  = document.getElementById('getPriceForm');

form.addEventListener('submit', (event) => {
    // handle the form data
    event.preventDefault();
    let value = parseInt(form.elements['inputCantidad'].value*form.elements['customerType'].value*200);
    form.elements['totalAPagar'].value = 'Total a Pagar: $'+value;
});