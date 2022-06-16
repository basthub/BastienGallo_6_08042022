class Lightbox {
  constructor (medias, gallery) {
    this.medias = medias
    this.gallery = gallery
  }

  render () {
    const lightbox = document.getElementById('lightbox')
    const filteredMedias = this.gallery.filteredMedias
    const mediaPreview = document.querySelectorAll('.media_preview')

    mediaPreview.forEach(media => {
      media.addEventListener('click', openLightbox)
      media.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          openLightbox(e)
        }
      })
    })

    function openLightbox (event) {
      document.querySelector('#header').setAttribute('aria-hidden', 'true')
      document.querySelector('#main').setAttribute('aria-hidden', 'true')
      document.querySelector('#lightbox').setAttribute('aria-hidden', 'false')

      const targetClasses = event.target.className
      const mediaTarget = targetClasses.includes('media_preview')

      const lightboxCloseBtn = document.querySelector('.lightbox__closebtn')
      const lightboxPreviousBtn = document.querySelector('.lightbox__previousbtn')
      const lightboxNextBtn = document.querySelector('.lightbox__nextbtn')

      lightboxCloseBtn.addEventListener('click', closeLightbox)
      lightboxNextBtn.addEventListener('click', nextLightbox)
      lightboxPreviousBtn.addEventListener('click', previousLightbox)

      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          if (!lightboxPreviousBtn.disabled) {
            previousLightbox(e)
          }
        }
        if (e.key === 'ArrowRight') {
          if (!lightboxNextBtn.disabled) {
            nextLightbox(e)
          }
        }
        if (e.key === 'Escape') {
          closeLightbox(e)
        }
      })

      const lightboxContainer = lightbox.querySelector('.lightbox__container')

      let mediaIndex = Array.from(mediaPreview).indexOf(event.target)
      const media = filteredMedias[mediaIndex]

      initNavButtons(mediaIndex, filteredMedias)

      if (mediaTarget) {
        lightbox.classList.add('lightbox--active')

        const mediaDisplay = lightboxContainer

        if (media.video) {
          mediaDisplay.innerHTML = `
                    <div class='lightbox__medias lightbox__medias--active'>
                        <video controls src='../assets/medias/${media.video}' alt='${media.title}'></video>
                        <h2>${media.title} </h2>
                    </div>
                    `
        }

        if (media.image) {
          mediaDisplay.innerHTML = `
                    <div class='lightbox__medias lightbox__medias--active'>
                        <img src='./assets/medias/${media.image}' alt='${media.title}'/>
                        <h2>${media.title}</h2>
                    </div>
                    `
        }
      };

      function closeLightbox () {
        document.querySelector('#header').setAttribute('aria-hidden', 'false')
        document.querySelector('#main').setAttribute('aria-hidden', 'false')
        document.querySelector('#lightbox').setAttribute('aria-hidden', 'true')

        lightbox.classList.remove('lightbox--active')
      };

      function nextLightbox () {
        const mediaDisplay = document.querySelector('.lightbox__medias--active')

        mediaDisplay.classList.remove('lightbox__medias--active')
        mediaIndex++

        const maxMedia = filteredMedias.length - 1

        if (mediaIndex >= maxMedia) {
          mediaIndex = maxMedia
        }

        initNavButtons(mediaIndex, filteredMedias)
        initMediaType(filteredMedias[mediaIndex])
      };

      function previousLightbox () {
        const mediaDisplay = document.querySelector('.lightbox__medias--active')

        mediaDisplay.classList.remove('lightbox__medias--active')
        mediaIndex--

        if (mediaIndex <= 0) {
          mediaIndex = 0
        }

        initNavButtons(mediaIndex, filteredMedias)
        initMediaType(filteredMedias[mediaIndex])
      };

      function initMediaType (media) {
        const mediaDisplay = document.querySelector('.lightbox__medias')
        if (media.video) {
          mediaDisplay.innerHTML = `
                        <video controls src='../assets/medias/${media.video}' alt='${media.title}'></video>
                        <h2>${media.title} </h2>
                    `
        }
        if (media.image) {
          mediaDisplay.innerHTML = `
                        <img src='./assets/medias/${media.image}' alt='${media.title}'/>
                        <h2>${media.title}</h2>
                    `
        }

        mediaDisplay.classList.add('lightbox__medias--active')
      }

      function initNavButtons (currentIndex, filteredMedias) {
        const previousButton = document.querySelector('.lightbox__previousbtn')
        previousButton.classList.remove('lightbox__previousbtn--disabled')
        previousButton.disabled = false

        const nextButton = document.querySelector('.lightbox__nextbtn')
        nextButton.classList.remove('lightbox__nextbtn--disabled')
        nextButton.disabled = false

        if (currentIndex == 0) {
          previousButton.classList.add('lightbox__previousbtn--disabled')
          previousButton.disabled = true
        }

        if (currentIndex == filteredMedias.length - 1) {
          nextButton.classList.add('lightbox__nextbtn--disabled')
          nextButton.disabled = true
        }
      }
    }
  }
}

export default Lightbox
