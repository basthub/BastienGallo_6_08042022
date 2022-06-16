import DataFetcher from '../services/DataFetcher.js'
import PhotographerHeader from '../factories/PhotographerHeader.js'
import Gallery from '../factories/Gallery.js'
import Likes from '../utils/Likes.js'
import SortMedia from '../utils/SortMedia.js'
import Lightbox from '../utils/Lightbox.js'
import PhotographerFooter from '../factories/PhotographerFooter.js'

async function init () {
  const photographers = await DataFetcher.getPhotographersList()
  const photographerHeader = new PhotographerHeader(photographers)
  photographerHeader.render()

  const medias = await DataFetcher.getMediaList()

  const gallery = new Gallery(medias)
  gallery.render()

  const sortRender = new SortMedia(gallery, medias)
  sortRender.render()

  const lightboxRender = new Lightbox(medias, gallery)
  lightboxRender.render()

  const photographerFooter = new PhotographerFooter(photographers, medias)
  photographerFooter.render()
  const likesRender = new Likes(medias)
  likesRender.render()
};

init()
