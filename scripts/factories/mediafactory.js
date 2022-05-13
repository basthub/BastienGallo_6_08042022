class mediaCard {
    
    constructor(media){
        this.media = media;
    }

    render() {
    
        const image = `assets/medias/${this.media.image}`;

        return `
        <div class="galerie_element">
        <article>
            <a><img id= ${this.media.photographerId} src="${image}" /></a>
            <div class="galerie_element_details">
                <h3>${this.media.title}</h3>
                <div class="likes">
                    <span class="likes--counter">${this.media.likes}</span>
                    <span class="fas fa-heart"></span>              
                </div>
            </div>    
        </article>
        </div>`;
        
    }
}


export default mediaCard
