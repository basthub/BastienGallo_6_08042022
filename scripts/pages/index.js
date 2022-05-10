import dataFetcher from "../services/datafetcher.js";
import photographerFactory from "../factories/photographer.js";

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        const photographers = await dataFetcher.getPhotographersList();
        displayData(photographers);
    };
    
    init();
    