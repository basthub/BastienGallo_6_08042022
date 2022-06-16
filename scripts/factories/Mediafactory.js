class MediaCard {
  constructor (media) {
    this.media = media
  }

  render () {
    let mediaType = ''
    if (this.media.image) {
      const image = `assets/medias/${this.media.image}`
      mediaType = `<img id= ${this.media.id} src="${image}" alt="Photography ${this.media.title}, Open closeup view" class="media_preview" tabindex="0"/>`
    } else {
      const video = `assets/medias/${this.media.video}`
      mediaType = `<video id= ${this.media.id} src="${video}" aria-label="Video ${this.media.title}, Open closeup view" class="media_preview" tabindex="0"></video>`
    }

    return `
            <div class="galerie_element">
            <article>
                ${mediaType}
                <div class="galerie_element_details">
                    <h3>${this.media.title}</h3>
                    <div class="likes"  aria-label="likes" tabindex="0">
                        <span class="likes__counter">${this.media.likes}</span>
                        <span id="heart" class="far fa-heart"></span>              
                    </div>
                </div>    
            </article>
            </div>`
  }
}

export default MediaCard
