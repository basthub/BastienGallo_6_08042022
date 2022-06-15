import ContactForm from "../utils/ContactForm.js";
class PhotographerHeader {
    
    constructor(photographer) {
        this.photographer = photographer;

        const params = (new URL(document.location)).searchParams;
        const photographerId = params.get('id');

        this.filteredPhotographer = this.photographer.filter(photographer => photographer.id == photographerId);
    }

    render() {
        const photographerHeader = document.querySelector(".photograph-header");

        this.filteredPhotographer.forEach((photographer) => {           
            
                let headerContent = `
                <article>
                    <h1>${photographer.name}</h1>
                    <h3>${photographer.city + ", " + photographer.country}</h3>
                    <p>${photographer.tagline}</p>
                </article>
                <button class="contact_button" aria-label="Open ${photographer.name} contact form">Contactez-moi</button>
                <div>
                    <img src='./assets/photographers/${photographer.portrait}' alt='Photo de ${photographer.name}'></img>
                </div>
                `;
                photographerHeader.innerHTML=headerContent;    
                const contactFormRender = new ContactForm(this.photographer);
                contactFormRender.render();
            }
        )
    }
}

export default PhotographerHeader