import dataFetcher from "../services/datafetcher.js";
import photographerFactory from "../factories/photographer.js";


    async function displayData(photographers) {
        const photographHeader = document.querySelector(".photograph-header");
        //récupère l'id dans l'url
        let params = (new URL(document.location)).searchParams;
        let photographId = params.get('id');
        console.log(photographId);

        // cherche un id correspondant à celui de l'url
        let findPhotographer = photographers.find(photographer => photographer.id == photographId);
        console.log(findPhotographer);
        
        const photographerModel = photographerFactory(findPhotographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographHeader.appendChild(userCardDOM);        
    };

    async function init() {
        // Récupère les datas des photographes
        const photographers = await dataFetcher.getPhotographersList();
        displayData(photographers);
    };
    
    init();
    