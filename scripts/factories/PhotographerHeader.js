class PhotographerHeader {
    
    constructor(photographer) {
        this.photographer = photographer;
    }

    render() {
        const photographerHeader = document.querySelector(".photograph-header");

        this.photographer.forEach((photographer) => {
            let params = (new URL(document.location)).searchParams;
            let photographerId = params.get('id');
            
            if(photographer.id == photographerId){
                let article = document.createElement("article");
                let articleContent = `
                    <h2>${photographer.name}</h2>
                    <h3>${photographer.city + ", " + photographer.country}</h3>
                    <p>${photographer.tagline}</p>
                    `   ;
                article.innerHTML =articleContent;
                photographerHeader.appendChild(article);

                let img = document.createElement("div");
                let imgContent = `
                    <img src='./assets/photographers/${photographer.portrait}' alt='${photographer.name}'></img>
                    `;
                img.innerHTML = imgContent;
                photographerHeader.appendChild(img)
              
            }
        })
    }
}

export default PhotographerHeader