//Preload//

var preloader = document.getElementById('loading');
function myFunction() {
  preloader.style.display = 'none';
}


//Scrolling//

$(function () {
  $('a[href*=#]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });
});


//FAQ//

// let h_faq_containers = document.getElementsByClassName('faq_container');
// for (i = 0; i < h_faq_containers.length; i++) {
//   h_faq_containers[i].addEventListener('click', function () {
//     let isActive = this.classList.contains("active");
//     for (let j = 0; j < h_faq_containers.length; j++) {
//       h_faq_containers[j].classList.remove('active');
//     }
//     if (isActive) {
//       this.classList.remove("active");
//     } else {
//       this.classList.add("active");
//     }
//   })
// }


