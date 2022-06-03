import DataFetcher from "../services/DataFetcher.js";
import PhotographerHeader from "../factories/PhotographerHeader.js";
import Gallery from "../factories/Gallery.js";
import SortMedia from "../utils/SortMedia.js";
import Lightbox from "../utils/Lightbox.js";

    async function init() {
        const photographers = await DataFetcher.getPhotographersList();
        const photographerHeader = new PhotographerHeader(photographers);
        photographerHeader.render();

        const medias = await DataFetcher.getMediaList();

        const gallery = new Gallery(medias);
        gallery.render();

        const sortSelected = new SortMedia(gallery);
        //sortSelected.sortBy();
        
        const lightboxRender = new Lightbox(medias, gallery);
        lightboxRender.render();
    };
    
    init();
    