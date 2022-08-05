const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector(".gallery");

const createImagesGallery = (images) => {
  return images.map(({url, alt}) => {
  
    const itemGalleryEl = document.createElement("li");
    itemGalleryEl.classList.add("gallery__item")
    const imageItemGalleryEl = document.createElement("img");
    imageItemGalleryEl.setAttribute("src", url);
    imageItemGalleryEl.setAttribute("alt", alt);
    imageItemGalleryEl.setAttribute("width", 320);
    imageItemGalleryEl.setAttribute("height", 200);
    
    itemGalleryEl.append(imageItemGalleryEl);
  
    return itemGalleryEl
  })
}

const itemsGalleryEl = createImagesGallery(images)

galleryEl.append(...itemsGalleryEl)

