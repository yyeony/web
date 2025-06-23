
//네비게이션
$('.nav .bg').hide();
$('.nav li').hover(
    function(){
       
            $(this).find('.bg').slideDown(400);
                    
    },
    function(){
   
        $(this).find('.bg').css('display', 'none');   
}
);


// 검색창
$('.util li:nth-child(1) .search').hide()
$(document).ready(function() {
    // 첫 번째 <li>의 이미지를 클릭했을 때
    $('.util li:nth-child(1) img').click(function() {
        // 해당 이미지의 부모 요소인 <li> 안의 .search를 슬라이드 토글
        $(this).closest('li').find('.search').stop(true, true).fadeToggle(300); // 300ms 애니메이션
    });
});

// 추천아이템
$('.best_item').show();
$('.new_item').hide();
$('.change p:nth-child(2)').css('opacity' , '0.5')
    $('.change p:nth-child(1)').css('opacity' , '1')
$('.change p').eq(0).click(()=>{
    $('.best_item').show(); //.css('display' , 'block')
    $('.new_item').hide(); //.css('display' , 'none')
    $('.change p:nth-child(2)').css('opacity' , '0.5')
    $('.change p:nth-child(1)').css('opacity' , '1')
  });
  $('.change p').eq(1).click(()=>{
    $('.best_item').hide(); //.css('display' , 'none')
    $('.new_item').show(); //.css('display' , 'flex')
    $('.change p:nth-child(1)').css('opacity' , '0.5')
    $('.change p:nth-child(2)').css('opacity' , '1')
  });



  document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;  // 현재 배너 인덱스
    const banners = document.querySelectorAll('.banner_wrap > div');  // 배너 항목들
    const prevButton = document.querySelector('.prev');  // 이전 버튼
    const nextButton = document.querySelector('.next');  // 다음 버튼
    
    function changeBanner(newIndex) {
        // 이전 배너 숨기기
        banners[currentIndex].classList.remove('active');
        
        // 새로운 배너 표시
        currentIndex = newIndex;

        // 인덱스 범위 처리 (배너 순환)
        if (currentIndex < 0) {
            currentIndex = banners.length - 1;
        } else if (currentIndex >= banners.length) {
            currentIndex = 0;
        }

        // 새로운 배너를 보이게 하기
        banners[currentIndex].classList.add('active');
    }

    // 초기 배너 활성화
    changeBanner(currentIndex);

    // 이전 버튼 클릭 시
    prevButton.addEventListener('click', function () {
        changeBanner(currentIndex - 1);
    });

    // 다음 버튼 클릭 시
    nextButton.addEventListener('click', function () {
        changeBanner(currentIndex + 1);
    });

    // 자동 슬라이드 기능 추가 (5초마다 배너 변경)
    setInterval(function() {
        changeBanner(currentIndex + 1);
    }, 5000);  // 5초마다 배너 전환
});




function toggleImage() {
    const images = document.querySelectorAll('.rec_img img');
    images[0].classList.toggle('active');
    images[1].classList.toggle('active');
}



//   $('section a').eq(0).show();
// $('section a').eq(1).hide();
// $('section a').eq(2).hide();

// setInterval(()=>{
//  // fnfdto 
//   $('section a').eq(0).fadeOut(1000).next().fadeIn(1000).end().appendTo('section');
// } ,3000);


