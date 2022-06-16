class ContactForm {
  constructor (photographer) {
    this.photographer = photographer

    const params = (new URL(document.location)).searchParams
    const photographerId = params.get('id')

    this.filteredPhotographer = this.photographer.filter(photographer => photographer.id == photographerId)
  }

  render () {
    const formContainer = document.querySelector('.contact_modal__container')
    this.filteredPhotographer.forEach((photographer) => {
      const formContent = `
                <header>
                    <h1>Contactez-moi<br />
                    ${photographer.name}</h1>
                    <button class="contact_modal__closebtn" aria-label="close contact form"><span class="fa-solid fa-xmark"></span></button>
                </header>
                <form id="contactform">
                    <div>
                        <label for="firstname">Prénom</label>
                        <input type="text" id="firstname" aria-label="firstname" />
                    </div>
                    <div>
                        <label for="lastname">Nom</label>
                        <input type="text" id="lastname" aria-label="lastname" />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" id="email" aria-label="email" />
                    </div>
                    <div>
                        <label for="message">Votre Message</label>
                        <textarea id="message" type ="text" cols ="10" rows="5" aria-label="your message"></textarea>
                    </div>
                    <button type="submit" id="submit_btn" aria-label="send">Envoyer</button>
                </form>
            `
      formContainer.innerHTML = formContent
    })
    // OpenModal
    const contactBtn = document.querySelector('.contact_button')
    contactBtn.addEventListener('click', openModal)
    contactBtn.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        openModal()
      }
    })

    function openModal () {
      document.querySelector('#header').setAttribute('aria-hidden', 'true')
      document.querySelector('#main').setAttribute('aria-hidden', 'true')

      const contactModal = document.getElementById('contact_modal')
      contactModal.setAttribute('aria-hidden', 'false')
      contactModal.classList.add('contact_modal--active')
    }
    // CloseModal

    const closeBtn = document.querySelector('.contact_modal__closebtn')
    closeBtn.addEventListener('click', closeModal)
    closeBtn.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        closeModal()
      }
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    })

    function closeModal () {
      const contactModal = document.getElementById('contact_modal')
      contactModal.setAttribute('aria-hidden', 'true')
      contactModal.classList.remove('contact_modal--active')
      document.querySelector('#header').setAttribute('aria-hidden', 'false')
      document.querySelector('#main').setAttribute('aria-hidden', 'false')
    }

    const submitBtn = document.querySelector('#submit_btn')
    submitBtn.addEventListener('click', submit)

    function submit (e) {
      e.preventDefault()
      if (isFormValid()) {
        closeModal()
        document.getElementById('contactform').reset()
        showValidMessage()
      } else {
        // show error message
      }
    }

    function isFormValid () {
      const firstname = document.getElementById('firstname')
      const lastname = document.getElementById('lastname')
      const email = document.getElementById('email')
      const message = document.getElementById('message')
      // const errorMessage = document.querySelector('error_message');

      let errors = 0
      if (!firstname.value.trim()) {
        console.log('firstName vide')
        document.getElementById('firstname').setAttribute('required', '')
        errors++
      }
      if (!lastname.value.trim()) {
        console.log('lastName vide')
        document.getElementById('lastname').setAttribute('required', '')
        errors++
      }
      if (!email.value.trim()) {
        console.log('email vide')
        document.getElementById('email').setAttribute('required', '')
        errors++
      }
      const emailReg = /^\S+@\S+\.\S+$/
      if (!emailReg.test(email.value.trim())) {
        console.log('email invalide')
        document.getElementById('email').setAttribute('required', '')
        errors++
      }
      if (!message.value.trim()) {
        console.log('message vide')
        document.getElementById('message').setAttribute('required', '')
        errors++
      }

      return errors === 0
    }
    function showValidMessage () {
      const successMessage = document.querySelector('#success_message')
      successMessage.style.display = 'block'
      successMessage.innerHTML = `
                <p class='success_message'>Votre message a bien été envoyé</p>
                `
      setTimeout(
        function () {
          const successMessage = document.querySelector('#success_message')
          successMessage.style.transition = 'opacity ' + 2 + 's'
          successMessage.style.opacity = 0
          successMessage.addEventListener('transitionend', function () {
            successMessage.style.display = 'none'
          })
        }, 2000
      )
    }
  }
}

export default ContactForm