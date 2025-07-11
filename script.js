
//header 스크롤 시 변화
window.addEventListener('scroll', function () {
  const header = document.querySelector('header')
  if (window.scrollY > 100) {
    header.classList.add('on')
  } else {
    header.classList.remove('on')
  }
})


//네비게이션 해당 페이지로 이동
const menuLi = document.querySelectorAll('.menu li')

menuLi.forEach(item => {
  item.addEventListener('click', () => {
    const targetSelector = item.getAttribute('data-target')
    const targetElement = document.querySelector(targetSelector)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  })
})



//about 후버 애니메이션
const contentTitle1 = document.querySelector('.c_txt2 h1:nth-child(1)')
const contentBox1 = document.querySelector('.c1')

contentBox1.classList.add('show');
contentTitle1.style.color = 'black';


contentTitle1.addEventListener('mouseenter', () => {
  contentBox1.classList.add('show')
});

const contentTitle2 = document.querySelector('.c_txt2 h1:nth-child(2)')
const contentBox2 = document.querySelector('.c2')

contentTitle2.addEventListener('mouseenter', () => {
  contentBox2.classList.add('show')
  contentTitle1.style.color = '';
});

contentTitle2.addEventListener('mouseleave', () => {
  contentBox2.classList.remove('show')
  contentTitle1.style.color = 'black';
});


const contentTitle3 = document.querySelector('.c_txt2 h1:nth-child(3)')
const contentBox3 = document.querySelector('.c3')

contentTitle3.addEventListener('mouseenter', () => {
  contentBox3.classList.add('show')
  contentTitle1.style.color = '';
});

contentTitle3.addEventListener('mouseleave', () => {
  contentBox3.classList.remove('show')
  contentTitle1.style.color = 'black';
});


const contentTitle4 = document.querySelector('.c_txt2 h1:nth-child(4)')
const contentBox4 = document.querySelector('.c4')

contentTitle4.addEventListener('mouseenter', () => {
  contentBox4.classList.add('show')
  contentTitle1.style.color = '';
});

contentTitle4.addEventListener('mouseleave', () => {
  contentBox4.classList.remove('show')
  contentTitle1.style.color = 'black';
});



//work 모바일 크기로 열기
function wbtn2() {
  const url = './work/book/index.html';
  const windowName = 'MobileView'
  const features = 'width=400,height=932,toolbar=no,location=no,resizable=yes,scrollbars=no';

  window.open(url, windowName, features);

}
function wbtn2a() {
  const url = './work/book/persona.jpg';
  const windowName = 'MobileView'
  const features = 'width=680,height=1413,toolbar=no,location=no,resizable=yes,scrollbars=no';

  window.open(url, windowName, features);

}
function wbtn2b() {
  const url = './work/book/storyboard.jpg';
  const windowName = 'MobileView'
  const features = 'width=880,height=1000,toolbar=no,location=no,resizable=yes,scrollbars=no';

  window.open(url, windowName, features);

}





// DETAIL 스크롤 애니메이션
window.addEventListener('scroll', () => {
  const boxes = document.querySelectorAll('.dcontent li');
  const triggerBottom = window.innerHeight * 0.6;

  boxes.forEach((box, i) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('visible');
    } else {
      box.classList.remove('visible');
    }
  });
});










//스크롤 텍스트 애니메이션
console.log("스크립트 실행됨");

const articles = document.querySelectorAll(".about .txt1");

console.log("감지할 요소 개수:", articles.length); // 1이 찍혀야 정상

const articleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log("요소 감지됨:", entry.target, "isIntersecting:", entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      articleObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

articles.forEach(article => articleObserver.observe(article));


// ABOUT
const aboutTxt = document.querySelectorAll(".about .txt1");
const observerAbout = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observerAbout.unobserve(entry.target); // 한 번만 실행
    }
  });
}, { threshold: 0.3 });

aboutTxt.forEach(el => observerAbout.observe(el));

// WORK
const workTxt = document.querySelectorAll(".work .txt1");
const observerWork = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observerWork.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

workTxt.forEach(el => observerWork.observe(el));

// YEON
const yeonTxt = document.querySelectorAll(".yeon .txt1");
const observerYeon = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observerYeon.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

yeonTxt.forEach(el => observerYeon.observe(el));

// YEON
const footerTxt = document.querySelectorAll("footer .f_ani");
const observerFooter = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observerYeon.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

footerTxt.forEach(el => observerFooter.observe(el));






//모바일 메뉴 오픈할때
const menuBtn = document.querySelector('.nav_icon img');
const closeBtn = document.querySelector('.close');
const navMenu = document.querySelector('header nav ul');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  navMenu.classList.add('active');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
  overlay.classList.remove('active');
})







