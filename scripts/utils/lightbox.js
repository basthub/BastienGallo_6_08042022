class lightbox{
    constructor(medias, gallery){
        this.medias = medias;
        this.gallery = gallery;
    }


    render(){
 
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
            

            let mediaIndex = Array.from(mediaPreview).indexOf(event.target);
            console.log("index: "+mediaIndex);
            let media = filteredMedias[mediaIndex];
            console.log("target "+ event.target.className);
            

            if(mediaTarget){
                lightbox.classList.add('lightbox--active');
                console.log("openlightbox work");
                const mediaDisplay = lightboxContainer;//document.createElement('div');
                console.log("filteredMedias : "+filteredMedias);
                console.log("mediadisplay "+mediaDisplay);
                //mediaDisplay.classList.add('lightbox__medias', 'lightbox__medias--active');
                //lightboxContainer.appendChild(mediaDisplay);
                
                if (media.video){
                    mediaDisplay.innerHTML = `
                    <div class='lightbox__medias lightbox__medias--active'>
                        <video controls src='../assets/medias/${media.video}' alt='${media.title}'></video>
                        <h2>${media.title} </h2>
                    </div>
                    `;

                }
                if (media.image){
                    mediaDisplay.innerHTML = `
                    <div class='lightbox__medias lightbox__medias--active'>
                        <img src='./assets/medias/${media.image}' alt='${media.title}'/>
                        <h2>${media.title}</h2>
                    </div>
                    `;

                }
            };

            
           
            function closeLightbox(){
                let mediaDisplay = document.querySelector('.lightbox__medias--active');
                //mediaDisplay.remove('div');
                lightbox.classList.remove('lightbox--active');
                                console.log('close btn work');
            };
            
            function nextLightbox(){
                console.log('next btn');
                let mediaDisplay = document.querySelector('.lightbox__medias--active');
            console.log("index: "+mediaIndex);
            mediaDisplay.classList.remove('lightbox__medias--active');
            mediaIndex++;
            console.log("new index : "+mediaIndex);

            let media = filteredMedias[mediaIndex];
            let maxMedia = filteredMedias.length;
            maxMedia--;
            console.log("medias : "+ maxMedia);
            if (mediaIndex >= maxMedia ) {
                mediaIndex = 0;
            console.log('work');
            }
            
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
            mediaDisplay.classList.add('lightbox__medias--active');
            };
            
            function previousLightbox(){
                console.log('previous btn');
                let mediaDisplay = document.querySelector('.lightbox__medias--active');
            console.log("index: "+mediaIndex);
            mediaDisplay.classList.remove('lightbox__medias--active');
            mediaIndex--;
            console.log("new index : "+mediaIndex);
            let media = filteredMedias[mediaIndex];
            let maxMedia = filteredMedias.length;
            maxMedia--;
            console.log("medias : "+ maxMedia);
            if (mediaIndex <= 0 ) {
                mediaIndex = maxMedia;
            console.log('work');
            }
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
            mediaDisplay.classList.add('lightbox__medias--active');
            };
        }
        
    }
}

export default lightbox