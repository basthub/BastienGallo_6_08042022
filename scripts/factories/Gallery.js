import mediaCard from "./mediafactory.js";

class Gallery{
    constructor(media){
        this.media = media;
        
        const params = (new URL(document.location)).searchParams;
        const photographerId = params.get('id');

        this.filteredMedias = this.media.filter(media => media.photographerId == photographerId);
    }

    render(){
        
        const gallery = document.querySelector(".galerie_container");
        gallery.innerHTML = '';

        this.filteredMedias.forEach((media) => {
            const mediumCard = new mediaCard(media);              
            gallery.innerHTML += mediumCard.render();  
        })
    }
}

export default Gallery