import dataFetcher from "../services/DataFetcher.js";
import photographerCard from "../factories/photographerfactory.js";
import mediaCard from "../factories/mediafactory.js";
import sortMedia from "../utils/SortMedia.js";

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
                let article = document.createElement("article");
                let articleContent = `
                    <h2>${photographer.name}</h2>
                    <h3>${photographer.city + ", " + photographer.country}</h3>
                    <p>${photographer.tagline}</p>
                    `   ;
                article.innerHTML =articleContent;
                photographerHeader.appendChild(article);

                let img = document.createElement("div");
                let imgContent = `
                    <img src='./assets/photographers/${photographer.portrait}' alt='${photographer.name}'></img>
                    `;
                img.innerHTML = imgContent;
                photographerHeader.appendChild(img)
              
            }
        })
    }
}

class galerie{
    constructor(media){
        this.media = media;
    }

    render(){
        
    const galerie = document.querySelector(".galerie_container");

    this.media.forEach((media) => {
        let params = (new URL(document.location)).searchParams;
        let photographerId = params.get('id');
        
        if(media.photographerId == photographerId){
            const mediumCard = new mediaCard(media);              
            galerie.innerHTML += mediumCard.render();
            
        }
    })
    }
}

    

    async function init() {
        const photographers = await dataFetcher.getPhotographersList();
        const photographHeader = new photographerHeader(photographers);
        photographHeader.render();
        const medias = await dataFetcher.getMediaList();
        const mediumList = new galerie(medias); // galerie media = idphotographer
        mediumList.render();
        const sortSelected = new sortMedia(mediumList);
        sortSelected.sortBy();
        //mediumList=sortSelected.sortBy(---);
    };
    
    init();
    