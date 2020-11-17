
// credit card
var cleaveCreditCard = new Cleave('.input-credit-card', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
    document.getElementById('numberCard').innerHTML= type;
    }
});

document.querySelector('.button-credit-card').addEventListener('click', function() {
    alert(cleaveCreditCard.getRawValue());
    alert('Achat validé');
});

// phone
var cleavePhone = new Cleave('.input-phone', {
    phone: true,
    phoneRegionCode: 'FR'
});
// set phone region code    https://github.com/nosir/cleave.js/blob/master/doc/public-methods.md#setphoneregioncoderegioncode

// date
var cleaveDate = new Cleave('.input-date', {
    date: true
});

