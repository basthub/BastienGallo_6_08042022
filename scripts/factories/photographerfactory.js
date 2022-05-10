class photographerCard {
    
    constructor(photographer){
        this.photographer = photographer;
    }

    render() {
    
        const picture = `assets/photographers/${this.photographer.portrait}`;

        return `
        <article onclick="location.href='./photographer.html?id=${this.photographer.id}'">
            <img src="${picture}" />
            <h2>${this.photographer.name}</h2>
            <h3>${this.photographer.city + ", " + this.photographer.country}</h3>
            <p>${this.photographer.tagline}</p>
            <span>${this.photographer.price + "€/jour"}</span>
        </article>`;
        
    }
}


export default photographerCard
