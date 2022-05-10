import mediaCard from "./mediafactory.js";

class mediaList {
    
    constructor(medias) {
        this.medias = medias;
    }
    
    render() {
        const mediaSection = document.querySelector(".galerie_elements");

        this.medias.forEach((media) => {
            const mediumCard = new mediaCard(media);              
            mediaSection.innerHTML += mediumCard.render();
            
        })
        
    }
}

export default mediaList
