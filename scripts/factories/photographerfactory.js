class PhotographerCard {
    
    constructor(photographer){
        this.photographer = photographer;
    }

    render() {
    
        const picture = `assets/photographers/${this.photographer.portrait}`;

        return `
        <article>
            <a href="./photographer.html?id=${this.photographer.id}" aria-label="${this.photographer.name}">
                <img src="${picture}" alt="${this.photographer.name} profile picture"/>
                <h2>${this.photographer.name}</h2>
            </a>
            <h3>${this.photographer.city + ", " + this.photographer.country}</h3>
            <p>${this.photographer.tagline}</p>
            <span>${this.photographer.price + "€/jour"}</span>
        </article>`;
        
    }
}


export default PhotographerCard