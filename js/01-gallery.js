import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryMarkUp = makeGalleryMarkup(galleryItems);
galleryEl.innerHTML = galleryMarkUp;
galleryEl.addEventListener("click", onGalleryItemClick);

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="1280" height="auto">
  `);

  instance.show();
}
