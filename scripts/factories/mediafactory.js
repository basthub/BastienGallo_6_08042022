class MediaCard {
    
    constructor(media){
        this.media = media;
    }

    render() {
        if (this.media.image){
            const image = `assets/medias/${this.media.image}`;

            return `
            <div class="galerie_element">
            <article>
                <img id= ${this.media.id} src="${image}" alt="${this.media.title}" class="media_preview" />
                <div class="galerie_element_details">
                    <h3>${this.media.title}</h3>
                    <div class="likes">
                        <span class="likes__counter">${this.media.likes}</span>
                        <span id="heart" class="far fa-heart"></span>              
                    </div>
                </div>    
            </article>
            </div>`;
        }
        
        if (this.media.video){
            const video = `assets/medias/${this.media.video}`;

            return `
            <div class="galerie_element">
            <article>
                <video id= ${this.media.id} src="${video}" alt="${this.media.title}" class="media_preview"></video>
                <div class="galerie_element_details">
                    <h3>${this.media.title}</h3>
                    <div class="likes">
                        <span class="likes__counter">${this.media.likes}</span>
                        <span id="heart" class="far fa-heart"></span>              
                    </div>
                </div>    
            </article>
            </div>`;    
        }
    }
}


export default MediaCard
