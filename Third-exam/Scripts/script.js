// выбираем все id якоря
const anchors = document.querySelectorAll('a[href*="#"]')

// проходим по массиву якорей
for (let anchor of anchors) {
    // добавляем событие, которое вызвано функцией
    anchor.addEventListener('click', function (e) {
        // если собитие не обрабатывается явно, то действие по-умолчанию выполняется иначе (или совсем не выполняется) 
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substring(1);

        // прокручиваем элемент родителя к выделеному элементу
        document.getElementById(blockID).scrollIntoView({
            // плавная прокрутка
            behavior: 'smooth',
            // к началу выделеного блока
            block: 'start'
        })
    })
}

//////////////////////////////

const swiper = new Swiper('.sw1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
let swiper2 = new Swiper('.sw2', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 2000
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 2000
        },
      },
      1065: {
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
          delay: 2000
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
        autoplay: {
          delay: 2000
        },
      },
      256: {
        slidesPerView: 1,
        autoplay: {
          delay: 2000
        },
      }
    }
    
})


/////////////////////////////////////////////


$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
      $('.navigation').addClass('scroll');
  } else {
      $('.navigation').removeClass('scroll')
  }
});

/////////////////////////////////////////////

document.querySelector('.gallery')
    .addEventListener('click', () => {
        document.querySelector('.module_gallery_bg').style.display = 'flex';
    });
document.querySelector('.menu')
    .addEventListener('click', () => {
        document.querySelector('.header').classList.toggle('active');

    });
document.querySelector('.close', )
    .addEventListener('click', () => {
        document.querySelector('.module_gallery_bg').style.display = 'none';
    });
document.querySelector('.module_gallery_bg', )
    .addEventListener('click', () => {
        document.querySelector('.module_gallery_bg').style.display = 'none';
    });