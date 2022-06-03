import dataFetcher from "../services/DataFetcher.js";
import PhotographerHeader from "../factories/PhotographerHeader.js";
import Gallery from "../factories/Gallery.js";
import sortMedia from "../utils/SortMedia.js";
import lightbox from "../utils/lightbox.js";

    async function init() {
        const photographers = await dataFetcher.getPhotographersList();
        const photographerHeader = new PhotographerHeader(photographers);
        photographerHeader.render();

        const medias = await dataFetcher.getMediaList();

        const gallery = new Gallery(medias);
        gallery.render();

        const sortSelected = new sortMedia(gallery);
        //sortSelected.sortBy();
        
        const lightboxRender = new lightbox(medias, gallery);
        lightboxRender.render();
    };
    
    init();
    