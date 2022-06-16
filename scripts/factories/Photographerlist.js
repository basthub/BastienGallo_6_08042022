import PhotographerCard from './Photographerfactory.js'

class PhotographerList {
  constructor (photographers) {
    this.photographers = photographers
  }

  render () {
    const photographersSection = document.querySelector('.photographer_section')

    this.photographers.forEach((photographer) => {
      const photographCard = new PhotographerCard(photographer)
      photographersSection.innerHTML += photographCard.render()
    })
  }
}

export default PhotographerList
