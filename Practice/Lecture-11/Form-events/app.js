const form = document.getElementById('form')
const submit = document.getElementById('submit');

submit.addEventListener('click', function(e){
    e.preventDefault();
    console.log(form[0])
    console.log(form[1])
    console.log(form[2])
})