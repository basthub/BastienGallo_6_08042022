class sortMedia{
    constructor(medias){
    this.medias= medias;
    }

    sortSelecter(){
        const sortMenu = document.querySelector(".galerie_filter");
        const filterActive = document.querySelector(".filter--selected");
        const filterWrapped = document.querySelector(".filter_wrapped");
        

        sortMenu.focus();

        sortMenu.addEventListener("click", (event) => {
            filterWrapped.classList.toggle("filter_wrapped--active");

            let filterSelected = event.target.innerHTML;

            if (filterSelected ==="Date"){
                event.target.innerHTML = filterActive.innerHTML;
                filterActive.innerHTML = "Date";                
            }
            if (filterSelected ==="Titre"){
                event.target.innerHTML = filterActive.innerHTML;
                filterActive.innerHTML = "Titre";                
            }
            if (filterSelected ==="Popularité"){
                event.target.innerHTML = filterActive.innerHTML;
                filterActive.innerHTML = "Popularité";
            }
        });
        
    }
    
    sortBy(sortType){
        
        this.sortSelecter(); // to fix, not working
        switch (sortType){
            case 'Popularité':
                console.log("switch like "+sortType);
                return this.sortByLike();
            case 'Titre':
                console.log("switch title "+ sortType);
                return this.sortByTitle();
            case 'Date':
                console.log("switch date "+ sortType);
                return this.sortByDate();
            default:
                console.log("switch default "+ sortType);
                console.log(sortType);
                return this.sortByLike();
            }  
    }

    sortByLike(){
        console.log("sort by like");
        let array = Array.from(this.medias);
        array.sort(function compare(a, b){
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
        console.log(array);
        return array.reverse();
    }

    sortByTitle(){
        console.log("sort by title");
        let array = Array.from(this.medias);
        array.sort(function compare(a, b){
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
        console.log(array);
        return array;
        
    }
    
    sortByDate(){
        console.log("sort by date");
        let array = Array.from(this.medias);
        array.sort((a, b) => {
            if (a.date < b.date){
                return -1;
            }
        });
        console.log(array);
        return array.reverse();
    }
    
}


export default sortMedia
