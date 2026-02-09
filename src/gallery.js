export function renderImages(gallery, images) {
    images.forEach(imgObj => {
        const img = document.createElement("img");
        img.src = imgObj.download_url;
        img.alt = "photo";
        gallery.appendChild(img);
    });
}

export function clearGallery(gallery) {
    gallery.innerHTML = "";
}

export function removeLastImage(gallery) {
    const imgs = gallery.querySelectorAll("img");
    if (imgs.length > 0) imgs[imgs.length - 1].remove();
}

export function reverseGallery(gallery) {
    const items = Array.from(gallery.children);
    gallery.innerHTML = "";
    items.reverse().forEach(i => gallery.appendChild(i));
}

export function shuffleGallery(gallery) {
    const items = Array.from(gallery.children);
    gallery.innerHTML = "";
    items.sort(() => Math.random() - 0.5);
    items.forEach(i => gallery.appendChild(i));
}
