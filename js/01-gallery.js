import { galleryItems } from './gallery-items.js';
// Change code below this line

// import * as basicLightbox from 'basiclightbox'





const gallery = document.querySelector('.gallery')

const res = galleryItems.reduce((acc, el) =>
    acc += `<div class="gallery__item">
<a class="gallery__link" href="${el.original}">
  <img
    class="gallery__image"
    src="${el.preview}"
    data-source="${el.original}"
    alt="${el.description}"
  />
</a>
</div>`
    , '')

gallery.insertAdjacentHTML('afterbegin', res)


gallery.addEventListener('click', handlerGallery)

let instance;

function handlerGallery(event) {
    event.preventDefault()

    if (event.target.className !== 'gallery') {

        instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" />
      `)
        instance.show()
        // window.addEventListener('keydown', handlerKey)   

    }
  

}
  


// {
	
// 	onShow =>  {
    
//   },
	
// 	onClose =>{ window.removeEventListener('keydown', handlerKey)}
// }


// function handlerKey(event) {
//     if (event.key === 'Escape') {
//         instance.close()
//     }
    

// }

