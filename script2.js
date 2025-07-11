/////////sub1

// 클릭시 팝업 나오는 방법
// document.querySelector('.content1 .con1').addEventListener('click', () => {
//   document.querySelector(' .con1_pop1').classList.add('active');
//   document.querySelector('.con1_pop1').style.display='block'
//   document.querySelector('.pop_bg').style.display='block'
// });

// document.querySelector('.close').addEventListener('click', () => {
//   document.querySelector('.con1_pop1').style.display = 'none';
//   document.querySelector('.pop_bg').style.display='none'
// });

// document.querySelector('.content1 .con2').addEventListener('click', () => {
//   document.querySelector('.con1_pop2').classList.add('active');
//   document.querySelector('.con1_pop2').style.display = 'block';
//   document.querySelector('.pop_bg').style.display='block'
// });

// document.querySelector('.con1_pop2 .close').addEventListener('click', () => {
//   document.querySelector('.con1_pop2').style.display = 'none';
//   document.querySelector('.pop_bg').style.display='none'
// });


// document.querySelector('.content1 .con3').addEventListener('click', () => {
//   document.querySelector('.con1_pop3').classList.add('active');
//   document.querySelector('.con1_pop3').style.display = 'block';
//   document.querySelector('.pop_bg').style.display='block'
// });

// document.querySelector('.con1_pop3 .close').addEventListener('click', () => {
//   document.querySelector('.con1_pop3').style.display = 'none';
//   document.querySelector('.pop_bg').style.display='none'
// });



/////////////// 클릭시 팝업 나오는 방법
function setupPopup(triggerSelector, popupSelector) {
  // 팝업 열기
  document.querySelector(triggerSelector).addEventListener('click', () => {
    const popup = document.querySelector(popupSelector);
    popup.classList.add('active');
    popup.style.display = 'block';
    document.querySelector('.pop_bg').style.display = 'block';
  });

  // 팝업 닫기
  document.querySelector(`${popupSelector} .close`).addEventListener('click', () => {
    const popup = document.querySelector(popupSelector);
    popup.style.display = 'none';
    document.querySelector('.pop_bg').style.display = 'none';
  });
}

// 팝업 설정 (필요한 만큼 추가)
setupPopup('.content1 .con1', '.con1_pop1');
setupPopup('.content1 .con2', '.con1_pop2');
setupPopup('.content1 .con3', '.con1_pop3');
setupPopup('.content1 .con4', '.con1_pop4');
setupPopup('.content1 .con5', '.con1_pop5');
setupPopup('.content1 .con6', '.con1_pop6');

setupPopup('.content2 .con1', '.con2_pop1');
setupPopup('.content2 .con2', '.con2_pop2');
setupPopup('.content2 .con3', '.con2_pop3');

setupPopup('.content3 .con1', '.con3_pop1');
setupPopup('.content3 .con2', '.con3_pop2');
setupPopup('.content3 .con3', '.con3_pop3');
setupPopup('.content3 .con4', '.con3_pop4');
setupPopup('.content3 .con5', '.con3_pop5');
setupPopup('.content3 .con6', '.con3_pop6');

setupPopup('.content4 .con1', '.con4_pop1');
setupPopup('.content4 .con2', '.con4_pop2');
setupPopup('.content4 .con3', '.con4_pop3');




////////////클릭시 변경 되는 모듈
const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')
const content3 = document.querySelector('.content3')
const content4 = document.querySelector('.content4')
const banner = document.querySelector('.banner')
const package = document.querySelector('.package')
const product = document.querySelector('.product')
const yeon = document.querySelector('.yeon')

// content1.classList.add('show');
content4.style.display='block'
yeon.style.color = 'black';

document.querySelector('.banner').addEventListener('click',()=>{
    content1.style.display='block'
    content2.style.display='none'
    content3.style.display='none'
    content4.style.display='none'
    banner.style.color = 'black'
    package.style.color = 'rgb(237, 237, 237)'
    product.style.color = 'rgb(237, 237, 237)'
    yeon.style.color = 'rgb(237, 237, 237)'
})

document.querySelector('.package').addEventListener('click',()=>{
  content1.style.display='none'
  content2.style.display='block'
  content3.style.display='none'
  content4.style.display='none'
  banner.style.color = 'rgb(237, 237, 237)'
  package.style.color = 'black'
  product.style.color = 'rgb(237, 237, 237)'
  yeon.style.color = 'rgb(237, 237, 237)'
    // content2.style.display='block'
    // package.style.color = 'black'
    // banner.style.color = 'rgb(237, 237, 237)'
})

document.querySelector('.product').addEventListener('click',()=>{
  content1.style.display='none'
  content2.style.display='none'
  content3.style.display='block'
  content4.style.display='none'
  banner.style.color = 'rgb(237, 237, 237)'
  package.style.color = 'rgb(237, 237, 237)'
  product.style.color = 'black'
  yeon.style.color = 'rgb(237, 237, 237)'
})
document.querySelector('.yeon').addEventListener('click',()=>{
  content1.style.display='none'
  content2.style.display='none'
  content3.style.display='none'
  content4.style.display='block'
  banner.style.color = 'rgb(237, 237, 237)'
  package.style.color = 'rgb(237, 237, 237)'
  product.style.color = 'rgb(237, 237, 237)'
  yeon.style.color = 'black'
})



//