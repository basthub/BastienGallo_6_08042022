import Lightbox from "./Lightbox.js";
import Likes from "../utils/Likes.js"

class SortMedia{
    constructor(gallery){
    this.gallery= gallery;
    }

    render(){
        const sortMenu = document.querySelector("#filters");
        const filterActive = document.querySelector(".filter--selected");
        const filterWrapped = document.querySelectorAll(".filter_wrapped"); 
        

        sortMenu.addEventListener("click", (event) => {
            for (const filterWrap of filterWrapped){
                filterWrap.classList.toggle("filter_wrapped--active");
            }
            
            let filterSelected = event.target.innerHTML;
            
            const filters = ['Date', 'Titre', 'Popularité'];

            if (filters.includes(filterSelected)){
                event.target.innerHTML = filterActive.innerHTML;
                filterActive.innerHTML = filterSelected;
                this.sortBy(filterSelected);
                this.gallery.render();
                const lightboxRender = new Lightbox(this.medias, this.gallery);
                lightboxRender.render();
                const likesRender= new Likes(this.medias);
                likesRender.render();                 
            }   
        }); 
        
        sortMenu.addEventListener('keydown', (e) =>{
            if(e.key ==='Enter'){
                for (const filterWrap of filterWrapped){
                    filterWrap.classList.toggle("filter_wrapped--active");
                }
                    
                let filterSelected = e.target.innerHTML;
                    
                const filters = ['Date', 'Titre', 'Popularité'];
        
                if (filters.includes(filterSelected)){
                    e.target.innerHTML = filterActive.innerHTML;
                    filterActive.innerHTML = filterSelected;
                    this.sortBy(filterSelected);
                    this.gallery.render();
                    const lightboxRender = new Lightbox(this.medias, this.gallery);
                    lightboxRender.render();
                    const likesRender= new Likes(this.medias);
                    likesRender.render();            
                }   
            }
        });
    }
    
    sortBy(sortType){
        switch (sortType){
            case 'Popularité':
//                console.log("switch like "+sortType);
                return this.sortByLike();
            case 'Titre':
//                console.log("switch title "+ sortType);
                return this.sortByTitle();
            case 'Date':
//                console.log("switch date "+ sortType);
                return this.sortByDate();
            default:
//                console.log("switch default "+ sortType);
//                console.log(sortType);
                return this.sortByLike();
            }  
    }

    sortByLike(){
//        console.log("sort by like");
        this.gallery.filteredMedias.sort(function compare(a, b){
            if (a.likes < b.likes) {
                return -1;
            }
            else if(a.likes == b.likes){
                return 0;
            }
            else{
                return 1;
            }
        })
        this.gallery.filteredMedias.reverse();
    }

    sortByTitle(){
//        console.log("sort by title");
        this.gallery.filteredMedias.sort(function compare(a, b){
            if (a.title < b.title){
                return -1;
            }
            else if (a.title == b.title){
                return 0;
            }
            else{
                return 1;
            }
        })        
    }
    
    sortByDate(){
//        console.log("sort by date");
        this.gallery.filteredMedias.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        });
        this.gallery.filteredMedias.reverse();
    }
}

export default SortMedia