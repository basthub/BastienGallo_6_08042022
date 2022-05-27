class lightbox{
    constructor(medias){
        this.medias = medias;
    }


    render(){
        this.displayLightbox();
        this.renderLightbox();
    }

    displayLightbox(){
        const lightbox = document.getElementById('lightbox');
        
        document.body.addEventListener('click', openLightbox);

        function openLightbox(event){
            let lightboxMedias = document.querySelectorAll('.lightbox__medias');
            //DOM target//
            let targetClasses = event.target.className;
            let mediaTarget = targetClasses.includes('media_preview');
            const lightboxCloseBtn = targetClasses.includes('lightbox__closebtn');
            const lightboxPreviousBtn = targetClasses.includes('lightbox__previousbtn');
            const lightboxNextBtn = targetClasses.includes('lightbox__nextbtn');
            
            if(mediaTarget){
                lightbox.classList.add('lightbox--active');
                console.log("openlightbox work et media ok");

                lightboxMedias.forEach((medium) => {
                    let mediaType = medium.querySelector('img, video');
                    if (mediaType.src == event.target.src)
                        medium.classList.add('lightbox__medias--active')
                    
                });
            };

            if(lightboxCloseBtn){
                let mediaDisplay = document.querySelector('.lightbox__medias--active');
                mediaDisplay.classList.remove('lightbox__medias--active');
                lightbox.classList.remove('lightbox--active');

                console.log('close btn work');
            };
            
            if(lightboxNextBtn){
                console.log('next btn');
                /*let mediaDisplay = document.querySelector('.lightbox__medias--active');
                mediaDisplay.classList.remove('lightbox__medias--active');*/
            };
            
            if(lightboxPreviousBtn){
                console.log('previous btn');
               /* let mediaDisplay = document.querySelector('.lightbox__medias--active');
                mediaDisplay.classList.remove('lightbox__medias--active');*/
            };

        }
    }
    renderLightbox(){
        const lightbox = document.getElementById('lightbox');
        let medias = this.medias;

        medias.forEach((media) =>{
            const lightboxContainer = lightbox.querySelector('.lightbox__container');
            const mediaDisplay = document.createElement('div');

            if (media.video){
                mediaDisplay.innerHTML = `
                    <video controls src='../assets/medias/${media.video}' alt='${media.title}'></video>
                    <h2>${media.title} </h2>
                `;
                lightboxContainer.appendChild(mediaDisplay);
                mediaDisplay.classList.add('lightbox__medias');
            }
            if (media.image){
                mediaDisplay.innerHTML = `
                    <img src='./assets/medias/${media.image}' alt='${media.title}'/>
                    <h2>${media.title}</h2>
                `;
                lightboxContainer.appendChild(mediaDisplay);
                mediaDisplay.classList.add('lightbox__medias');
            }
        });
    }
}

export default lightbox