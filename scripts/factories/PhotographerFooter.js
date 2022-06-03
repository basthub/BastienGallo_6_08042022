class PhotographerFooter {
    
    constructor(photographer, media) {
        this.photographer = photographer;
        this.media = media;

        const params = (new URL(document.location)).searchParams;
        const photographerId = params.get('id');
        
        this.filteredMedias = this.media.filter(media => media.photographerId == photographerId);
    }

    render(){
        
        const photographerFooter = document.querySelector("footer");
        const params = (new URL(document.location)).searchParams;
        const photographerId = params.get('id');
        
        let likeSum = this.filteredMedias.reduce((acc, curr)=> acc + curr.likes, 0);
        
        this.photographer.forEach((photographer) => {
            if(photographer.id == photographerId){
                let footerContent =  `
                    <div class="footer__container">
                        <div class="footer__like">
                            <span class='footer__likeCounter'>${likeSum}</span><i class="fa fa-heart"></i>
                        </div>
                        <span class='footer__price'>${photographer.price}€/jour</span>
                    </div>
                `;
                photographerFooter.innerHTML=footerContent;    
            }
        });
        
        

        
        const likes = document.querySelectorAll('.likes');
        let footerTotalLikes= document.querySelector(".footer__likeCounter");
        let totalLikes = parseInt(footerTotalLikes.innerHTML);
        likes.forEach((like) =>{
            like.addEventListener('click', () =>{
            const likesCounter = like.querySelector(".likes__counter");
            const heart = like.querySelector('.fa-heart');
            let likeOnMedia = parseInt(likesCounter.innerHTML);
            heart.classList.toggle('liked');
            
            let isLiked= heart.classList.contains('liked');
            likesCounter.innerHTML = isLiked ? ++likeOnMedia : --likeOnMedia;
            footerTotalLikes.innerHTML = isLiked ? ++totalLikes : --totalLikes;
            if(isLiked){
                heart.classList.replace("far", "fas"); 
            }
            else{
                heart.classList.replace("fas", "far");
            }
            });
        })   
        

       /* const likes = document.querySelectorAll(".likes");
        let footerLikesCounter = document.querySelector(".footer__likeCounter");
        let totalLikes = parseInt(footerLikesCounter.innerHTML);
        likes.forEach((like) =>{
            like.addEventListener('click', () =>{
                const likesCounter = like.querySelector('.likes__counter');
                const heart = like.querySelector('.fa-heart');
                let likeNumber = parseInt(likesCounter.innerHTML);
                heart.classList.toggle('liked')

                let isLiked = heart.classList.contains('liked')
                likesCounter.innerHTML = isLiked ? ++likeNumber : -- likeNumber;
                footerLikesCounter.innerHTML = isLiked ? totalLikes++ : totalLikes--;
            })
        })*/
        
    }

        
       
    
}

export default PhotographerFooter