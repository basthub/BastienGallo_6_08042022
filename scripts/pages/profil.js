import photographerFactory from "../factories/photographer.js";
async function getPhotographers() {

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
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    