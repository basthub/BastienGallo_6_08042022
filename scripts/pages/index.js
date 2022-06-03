import DataFetcher from "../services/DataFetcher.js";
import PhotographerList from "../factories/Photographerlist.js";


    async function init() {
        const photographers = await DataFetcher.getPhotographersList();
        const photographList = new PhotographerList(photographers);
        photographList.render();
    };
    
    init();
    