const scriptURL = 'https://script.google.com/macros/s/AKfycbyAV_cJQIcy1zSacH1xjNb5iUsXB7zgZNTsuRWfPtcCqmfIiX2Vjsy1uKVKy0hbj4Yh/exec'
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})