class lightbox{
    constructor(medias, gallery){
        this.medias = medias;
        this.gallery = gallery;
    }


    render(){
        this.displayLightbox();
        //this.renderLightbox();
    }

    displayLightbox(){
        console.log("gallery suivante : "+this.gallery);
        const lightbox = document.getElementById('lightbox');
        let filteredMedias = this.gallery.filteredMedias;
        const mediaPreview = document.querySelectorAll(".media_preview");
        console.log('recup');
        console.log(mediaPreview);
        console.log('ok');
        mediaPreview.forEach(media =>{
            media.addEventListener('click', openLightbox);
        });
        console.log("media preview : "+mediaPreview);
        console.log("filtered media : "+filteredMedias);
        
        

        function openLightbox(event){
           console.log(event);
            console.log(mediaPreview);
            console.log(Array.from(mediaPreview).indexOf(event.target));  
    
            //DOM target//
            let targetClasses = event.target.className;
            let mediaTarget = targetClasses.includes('media_preview');
            const lightboxCloseBtn = document.querySelector('.lightbox__closebtn');
            const lightboxPreviousBtn = document.querySelector('.lightbox__previousbtn');
            const lightboxNextBtn = document.querySelector('.lightbox__nextbtn');

            lightboxCloseBtn.addEventListener('click', closeLightbox);
            lightboxNextBtn.addEventListener('click', nextLightbox);
            lightboxPreviousBtn.addEventListener('click', previousLightbox);

            const lightboxContainer = lightbox.querySelector('.lightbox__container');
            const mediaDisplay = document.createElement('div');

            let mediaIndex = Array.from(mediaPreview).indexOf(event.target);
            console.log('recup');
            console.log("index: "+mediaIndex);
            let media = filteredMedias[mediaIndex];
            console.log("target "+ event.target.className);
            

            if(mediaTarget){
                lightbox.classList.add('lightbox--active');
                console.log("openlightbox work et media ok");
                
                console.log(filteredMedias);
                console.log("mediadisplay "+mediaDisplay);
                mediaDisplay.classList.add('lightbox__medias--active');
                lightboxContainer.appendChild(mediaDisplay);
                mediaDisplay.classList.add('lightbox__medias');
                if (media.video){
                    mediaDisplay.innerHTML = `
                        <video controls src='../assets/medias/${media.video}' alt='${media.title}'></video>
                        <h2>${media.title} </h2>
                    `;

                }
                if (media.image){
                    mediaDisplay.innerHTML = `
                        <img src='./assets/medias/${media.image}' alt='${media.title}'/>
                        <h2>${media.title}</h2>
                    `;

                }
            };

        }    
           
            function closeLightbox(){
                let mediaDisplay = document.querySelector('.lightbox__medias--active');
                //mediaDisplay.classList.remove('lightbox__medias--active');
                mediaDisplay.remove('div');
                lightbox.classList.remove('lightbox--active');

                console.log('close btn work');
            };
            
            function nextLightbox(){
                console.log('next btn');
                /*let mediaDisplay = document.querySelector('.lightbox__medias--active');
                mediaDisplay.classList.remove('lightbox__medias--active');*/
            };
            
            function previousLightbox(){
                console.log('previous btn');
               /* let mediaDisplay = document.querySelector('.lightbox__medias--active');
                mediaDisplay.classList.remove('lightbox__medias--active');*/
            };

        
    }
    /*renderLightbox(){
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
    }*/
}

export default lightbox