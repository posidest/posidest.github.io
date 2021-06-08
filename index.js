window.addEventListener('DOMContentLoaded', (e) => {

   const about = document.getElementById('about')
   const aboutBtn = document.getElementById('about-btn')
   const hideBtn = document.getElementById('hide-btn')
   
   aboutBtn.addEventListener('click', (e) => {
      about.classList.remove('hidden')
      aboutBtn.classList.add('hidden')
      hideBtn.classList.remove('hidden')
   })

   hideBtn.addEventListener('click', (e) => {
      about.classList.add('hidden')
      aboutBtn.classList.remove('hidden')
      hideBtn.classList.add('hidden')
   })

})

