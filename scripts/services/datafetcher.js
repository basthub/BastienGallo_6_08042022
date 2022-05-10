class dataFetcher{
    static async getData(){
        try{
            const response = await fetch('./data/photographers.json');
            return await response.json();
        }
        catch{
            console.log("erreur");
        }
    }

    static async getPhotographersList(){
        return(await this.getData()).photographers;
    }
 
    static async getMediaList(){
        return (await this.getData()).media;
    }
}

export default dataFetcher;