$(document).ready(function(){
    // [대상 변경]
    // - .text() -- 텍스트를 변경, 태그를 텍스트로 인식(태그를 같이 쓸 수 없음)
    // 1. list의 첫번째 a의 글자를 'HOME' 이라고 변경
    $('.list li a:first').text('HOME');
    
    
    // - .html() -- 내용을 변경, 태그를 추가하여 변경 가능
    // 2. list 의 두번째 a를 ABOUT로 변경
    $('.list li:eq(1) a').html('<strong>ABOUT</strong>');
    
    
    // [태그 삽입]
    // - prepend() / append() : 타겟의 안쪽으로 맨앞 / 맨뒤에 태그 삽입
    // 맨 앞 / 맨 뒤
    // 3. list의 맨 앞에 'START'를 삽입 (li, a 다 설정)
    $('.list').prepend('<li><a href="#">START</a></li>')
//    $('.list').prepend("<li><a href='#'>START</a></li>")
    
    // 4. list의 맨 뒤에 'END'를 삽입
    $('.list').append('<li><a href="#">END</a></li>')
    
    
    // .before() / .after() : 타겟의 앞/뒤에 태그를 삽입(prepend, append랑은 조금 다름)
    // 5. menu3 앞에 'BOARD'를 삽입
    $('.list li:eq(3)').before('<li><a href="#">BOARE</a></li>')
    
    // 6. menu3 뒤에 'GALLERY'를 추가
    $('.list li:eq(4)').after('<li><a href="#">GALLERY</a></li>')
    
    
    /*
    .text - 글자변경
    .html - 태그추가
    .prepend - 맨앞에삽입
    .append - 맨뒤에삽입
    .before - 앞에삽입
    .after - 뒤에삽입
    */
});