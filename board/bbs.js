/// <reference path="./jquery.d.ts"/>

let bbs = [];

//입력 창 눌러 팝업 열고 닫기
$('.insert .btninsert').on('click', function(){
    $('.popinput .submit').text('저장')
    $('.popinput').show('easeOutQuint');
});

$('.popinput img').on('click', ()=>{
    $('.popinput').hide('easeOutQuint');
})


$('.popinput .submit').on('click' , ()=>{
    let $username = $('#username');

    if($username.val() == ''){            
        $username.addClass('err');  
        $username.focus();      
        return;
    }else{
        $username.removeClass('err')
    }


     let $usersubject = $('#usersubject');

    if($usersubject.val() == ''){            
        $usersubject.addClass('err');  
        $usersubject.focus();      
        return;
    }else{
        $usersubject.removeClass('err')
    }


    let $regdate = $('#regdate');

    if($regdate.val() == ''){            
        $regdate.addClass('err');  
        $regdate.focus();      
        return;
    }else{
        $regdate.removeClass('err')
    }


    let $usercontent = $('#usercontent');

    if($usercontent.val() == ''){            
        $usercontent.addClass('err');  
        $usercontent.focus();      
        return;
    }else{
        $usercontent.removeClass('err')
    }
    if($('.popinput .submit').text() == '닫기'){
        $('.popinput').slideUp();
    }else if($('.popinput .submit').text() == '저장'){
        bbsProcess('i')
    }else if($('.popinput .submit').text() == '수정'){
        bbsProcess('u', Number($('#seq').val()))
    }
    bbsList();
});


//입력 완료 후 목록 추가하는 방법
function bbsProcess(flag, index = null){

    let username = $('#username').val();
    let usersubject = $('#usersubject').val();
    let regdate = $('#regdate').val();
    let usercontent = $('#usercontent').val();

    let newPost = {
        username,
        usersubject,
        regdate,
        usercontent
    };
    console.log(newPost);
    

    if(flag == 'i'){
        newPost.hit = 0;
        bbs.push(newPost);
        bbsList();
        
    }else if(flag == 'u'){
       Object.assign(bbs[index], newPost);
    }
}

function bbsList(search = false){
    let list;
    
    if(search == false){    
        list =  $.map(bbs , function(post ,index){
                return postRow(post, index);   
            });
    }else{
         list =  $.map(search , function(post ,index){
            return postRow(post, index);   
        });
    }
    $('main li').remove()   
    $('main ul').append(list)
}

function postRow(post, index){
    return `
     <li>
        <p>${index+1}</p>
        <p>${post.usersubject}</p>
        <p>${post.username}</p>
        <p>${post.regdate}</p>
        <p>${post.hit}</p>
        <p>
            <button class="btnview" data-seq="${index}" >보기</button>
            <button class="btnedit" data-seq="${index}">수정</button>
            <button class="btndel" data-seq="${index}">삭제</button>
        </p>
    </li>
    `;

}


$('main ul').delegate('.btnview', 'click', function(){
  //  alert($(this).data('seq'));
  let index = Number($(this).data('seq'))
  bbs[index].hit = bbs[index].hit+1;
  let username = bbs[index].username;
  let usercontent= bbs[index].usercontent;
  let usersubject= bbs[index].usersubject;
  let regdate= bbs[index].regdate;

  $('.popinput #username').val(username);
  $('.popinput #usercontent').val(usercontent);
  $('.popinput #usersubject').val(usersubject);
  $('.popinput #regdate').val(regdate);

  $('.popinput').slideDown();
  bbsList();
  $('.popinput .submit').text('닫기');

})


// 수정 하는 방법
$('main ul').delegate('.btnedit', 'click', function(){

     let index = Number($(this).data('seq'))
  bbs[index].hit = bbs[index].hit+1;
  let username = bbs[index].username;
  let usercontent= bbs[index].usercontent;
  let usersubject= bbs[index].usersubject;
  let regdate= bbs[index].regdate;

  $('.popinput #username').val(username);
  $('.popinput #usercontent').val(usercontent);
  $('.popinput #usersubject').val(usersubject);
  $('.popinput #regdate').val(regdate);

  $('.popinput').slideDown();

    $('#seq').val(index);
    $('.popinput .submit').text('수정');
});


// 삭제 하는 방법
$('main ul').delegate('.btndel', 'click', function(){
    let index = Number($(this).data('seq'))
    if(confirm('삭제하시겠습니까?')){
        bbs.splice(index, 1);
        bbsList();
    }
})



$('.search img').on('click',()=>{
    let $search = $('#search_input');

    if($search.val()==''){
        bbsList();
    }else{
        let keyword = bbs.filter((item)=>{
            return item.usersubject.includes($search.val());
        })
        console.log(keyword);
        
        if(keyword.length > 0){
            bbsList(keyword);
             }else{
                $('main li').remove();
                $('main ul').append(`
                    <li>
                        <p style = "width:100%; text-align:center;">검색 결과가 없습니다</p>
                    </li>
                `);
             }
        // bbsList(keyword)
    }
})