// Filter Images
function filterImages(category, button) {

    let images = document.querySelectorAll(".image-box");
    let buttons = document.querySelectorAll(".filter-buttons button");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    images.forEach(image => {

        if (category === "all" || image.classList.contains(category)) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }

    });
}


// Open Full Size Image
let galleryImages = document.querySelectorAll(".image-box img");

galleryImages.forEach(image => {

    image.addEventListener("click", function() {

        document.getElementById("lightbox").style.display = "flex";

        document.getElementById("largeImage").src = this.src;

    });

});


// Close Full Size Image
function closeImage() {

    document.getElementById("lightbox").style.display = "none";

}