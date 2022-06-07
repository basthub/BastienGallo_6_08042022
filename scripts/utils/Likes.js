class Likes{
    constructor(medias){
        this.medias= medias;
    }

    render(){
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
    }
}

export default Likes