// This is index.html js script
let slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {

}

//const slideInterval = setInterval(() => nextSlide(1), 1000);

document.getElementById('send-inquiry-form').addEventListener("click", () => sendForm());

function seendForm() {
    let date = Date();
    let Nama = document.forms['inquiry-form']['name'];
    let TanggalLahir = document.forms['inquiry-form']['date'];
    let Jeniskelamin = document.forms['inquiry-form']['gender'];
    let Pesan = document.forms['inquiry-form']['Message'];
    if (Nama.value == '' && Pesan.value == '') {
        alert('inputan kosong!');
    } else{
        document.getElementById(current-time).innerHTML = date;
    }
    return false;

}