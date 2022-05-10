class mediaCard {
    
    constructor(media){
        this.media = media;
    }

    render() {
    
        const image = `assets/medias/${this.media.image}`;

        return `
        <article>
            <img id= ${this.media.id} src="${image}" />
            <h3>${this.media.title}</h3>
            <div class="likes">
                <span class="likes--counter">${this.media.likes}</span>
                <span class="fas fa-heart"></span>              
            </div>
        </article>`;
        
    }
}


export default mediaCard
