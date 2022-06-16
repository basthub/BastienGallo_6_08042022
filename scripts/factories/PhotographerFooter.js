class PhotographerFooter {
  constructor (photographer, medias) {
    this.photographer = photographer
    this.medias = medias

    const params = (new URL(document.location)).searchParams
    const photographerId = params.get('id')

    this.filteredMedias = this.medias.filter(medias => medias.photographerId == photographerId)
  }

  render () {
    const photographerFooter = document.querySelector('footer')
    const params = (new URL(document.location)).searchParams
    const photographerId = params.get('id')

    const likeSum = this.filteredMedias.reduce((acc, curr) => acc + curr.likes, 0)

    this.photographer.forEach((photographer) => {
      if (photographer.id == photographerId) {
        const footerContent = `
                    <div class="footer__container">
                        <div class="footer__like">
                            <span class='footer__likeCounter'>${likeSum}</span><i class="fa fa-heart"></i>
                        </div>
                        <span class='footer__price'>${photographer.price}€/jour</span>
                    </div>
                `
        photographerFooter.innerHTML = footerContent
      }
    })
  }
}

export default PhotographerFooter
