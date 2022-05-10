import photographerCard from "./photographerfactory.js";

class photographerList {
    
    constructor(photographers) {
        this.photographers = photographers;
    }
    
    render() {
        const photographersSection = document.querySelector(".photographer_section");

        this.photographers.forEach((photographer) => {
            const photographCard = new photographerCard(photographer);              
            photographersSection.innerHTML += photographCard.render();
            
        })
    }
}

export default photographerList