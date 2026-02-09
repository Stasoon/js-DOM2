const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMore");
const clearBtn = document.getElementById("clearGallery");
const removeLastBtn = document.getElementById("removeLast");
const reverseBtn = document.getElementById("reverseGallery");
const shuffleBtn = document.getElementById("shuffleGallery");

let page = 1;

// ---- Функція запиту картинок ----
async function loadImages(count = 5) {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${count}`);
    const data = await response.json();
    page++; // наступна сторінка

    data.forEach(imgObj => {
        const img = document.createElement("img");
        img.src = imgObj.download_url;
        img.alt = "photo";
        gallery.appendChild(img);
    });
}

// ---- Кнопки ----

// загрузити ще
loadMoreBtn.addEventListener("click", () => loadImages());

// очистити
clearBtn.addEventListener("click", () => {
    gallery.innerHTML = "";
});

// видалити останню
removeLastBtn.addEventListener("click", () => {
    const items = gallery.querySelectorAll("img");
    if (items.length > 0) items[items.length - 1].remove();
});

// перевернути галерею
reverseBtn.addEventListener("click", () => {
    const items = Array.from(gallery.children);
    gallery.innerHTML = "";
    items.reverse().forEach(i => gallery.appendChild(i));
});

// перемішати
shuffleBtn.addEventListener("click", () => {
    const items = Array.from(gallery.children);
    gallery.innerHTML = "";
    items.sort(() => Math.random() - 0.5);
    items.forEach(i => gallery.appendChild(i));
});

// ---- При першому завантаженні ----
loadImages();

