import dataFetcher from "../services/DataFetcher.js";
import photographerCard from "../factories/photographerfactory.js";
import mediaList from "../factories/medialist.js";

class photographerHeader {
    
    constructor(photographer) {
        this.photographer = photographer;
    }

    render() {
        const photographerHeader = document.querySelector(".photograph-header");

        this.photographer.forEach((photographer) => {
            let params = (new URL(document.location)).searchParams;
            let photographerId = params.get('id');
            
            if(photographer.id == photographerId){
                const photographCard = new photographerCard(photographer);              
                photographerHeader.innerHTML = photographCard.render();
            }
        })
    }
}

    async function init() {
        const photographers = await dataFetcher.getPhotographersList();
        const photographHeader = new photographerHeader(photographers);
        photographHeader.render();
        const medias = await dataFetcher.getMediaList();
        const mediumList = new mediaList(medias);
        mediumList.render();
    };
    
    init();
    