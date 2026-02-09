import { loadImages } from "./api.js";
import {
    renderImages,
    clearGallery,
    removeLastImage,
    reverseGallery,
    shuffleGallery
} from "./gallery.js";

const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMore");
const clearBtn = document.getElementById("clearGallery");
const removeLastBtn = document.getElementById("removeLast");
const reverseBtn = document.getElementById("reverseGallery");
const shuffleBtn = document.getElementById("shuffleGallery");

// ---- кнопки ----

loadMoreBtn.addEventListener("click", async () => {
    const images = await loadImages();
    renderImages(gallery, images);
});

clearBtn.addEventListener("click", () => clearGallery(gallery));

removeLastBtn.addEventListener("click", () => removeLastImage(gallery));

reverseBtn.addEventListener("click", () => reverseGallery(gallery));

shuffleBtn.addEventListener("click", () => shuffleGallery(gallery));

// ---- старт ----
(async () => {
    const images = await loadImages();
    renderImages(gallery, images);
})();