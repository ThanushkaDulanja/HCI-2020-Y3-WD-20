function showGallery(argument) {
    //body
    let home = document.getElementById('home');
    let logoG = document.getElementById('logo-gallery');
    let gallery = document.getElementById('gallery');
    let slide = document.getElementById('slide');

    if(argument) {
        home.classList.add('hideHome');
        logoG.classList.add('logo-gallery-show');
        slide.classList.add('showSlide');
        gallery.classList.add('showGallery');
    } 
    else{
        home.classList.remove('hideHome');
        logoG.classList.remove('logo-gallery-show');
        slide.classList.remove('showSlide');
        gallery.classList.remove('showGallery');
    }
}