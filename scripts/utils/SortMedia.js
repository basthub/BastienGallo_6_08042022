import Lightbox from './Lightbox.js'
import Likes from '../utils/Likes.js'

class SortMedia {
  constructor (gallery) {
    this.gallery = gallery
  }

  render () {
    const sortMenu = document.querySelector('#filters')
    const filterActive = document.querySelector('.filter--selected')
    const filterWrapped = document.querySelectorAll('.filter_wrapped')

    sortMenu.addEventListener('click', (event) => {
      for (const filterWrap of filterWrapped) {
        filterWrap.classList.toggle('filter_wrapped--active')
      }

      const filterSelected = event.target.innerHTML

      const filters = ['Date', 'Titre', 'Popularité']

      if (filters.includes(filterSelected)) {
        event.target.innerHTML = filterActive.innerHTML
        filterActive.innerHTML = filterSelected
        this.sortBy(filterSelected)
        this.gallery.render()
        const lightboxRender = new Lightbox(this.medias, this.gallery)
        lightboxRender.render()
        const likesRender = new Likes(this.medias)
        likesRender.render()
      }
    })

    sortMenu.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        for (const filterWrap of filterWrapped) {
          filterWrap.classList.toggle('filter_wrapped--active')
        }

        const filterSelected = e.target.innerHTML

        const filters = ['Date', 'Titre', 'Popularité']

        if (filters.includes(filterSelected)) {
          e.target.innerHTML = filterActive.innerHTML
          filterActive.innerHTML = filterSelected
          this.sortBy(filterSelected)
          this.gallery.render()
          const lightboxRender = new Lightbox(this.medias, this.gallery)
          lightboxRender.render()
          const likesRender = new Likes(this.medias)
          likesRender.render()
        }
      }
    })
  }

  sortBy (sortType) {
    switch (sortType) {
      case 'Popularité':
        return this.sortByLike()
      case 'Titre':
        return this.sortByTitle()
      case 'Date':
        return this.sortByDate()
      default:
        return this.sortByLike()
    }
  }

  sortByLike () {
    this.gallery.filteredMedias.sort(function compare (a, b) {
      if (a.likes < b.likes) {
        return -1
      } else if (a.likes === b.likes) {
        return 0
      } else {
        return 1
      }
    })
    this.gallery.filteredMedias.reverse()
  }

  sortByTitle () {
    this.gallery.filteredMedias.sort(function compare (a, b) {
      if (a.title < b.title) {
        return -1
      } else if (a.title === b.title) {
        return 0
      } else {
        return 1
      }
    })
  }

  sortByDate () {
    this.gallery.filteredMedias.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
    this.gallery.filteredMedias.reverse()
  }
}

export default SortMedia
