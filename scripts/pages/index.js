import dataFetcher from "../services/datafetcher.js";
import photographerList from "../factories/photographerlist.js";


    async function init() {
        const photographers = await dataFetcher.getPhotographersList();
        const photographList = new photographerList(photographers);
        photographList.render();
    };
    
    init();
    