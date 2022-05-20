class sortMedia{
    constructor(medias){
    this.medias= medias;
    }

    render(){
        const sortMenu = document.querySelector(".galerie_filter");
        const filterActive = document.querySelector(".filter--selected");
        const filterWrapped = document.querySelector(".filter_wrapped");

        sortMenu.focus();

        sortMenu.addEventListener("click", (event) => {
            console.log("click");
            filterWrapped.className +="--active";

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



    
}


export default sortMedia;