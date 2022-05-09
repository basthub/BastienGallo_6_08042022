import photographerFactory from "../factories/photographer.js";
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    let response = await fetch('./data/photographers.json');
    let data = '';
    try {
        data = await response.json();
    }
  
    catch { 
        let errorPage = new PageError();
        errorPage.buildIndex();
    }

    return data;
}
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    