$(document).ready(function(){
    // 헤더보이기
    var $header = $('header');
    // 스크롤 시 나타나게
    var $blog_inner = $('.blog_inner');
    var $explanation = $('div.exp');
    var $contact = $('.contact');
    

    $(document).scroll(function(){
        var $scrollTop = $(this).scrollTop();
        if($scrollTop > 0){
            // scrollTop이 생김 0보다 크면
            $header.addClass('sticky');
            // 클래스명 추가
        }else{
            $header.removeClass('sticky');
            // 클래스명 지우기
        }
        // 설명란 살리고 없애기
        var $explanationView = $explanation.offset().top - 150;
        console.log($explanationView);
        console.log($scrollTop);
        if($scrollTop > $explanationView){
            $explanation.addClass('lanation');
            if($scrollTop <= 800){
                $explanation.removeClass('lanation');
            }else if($scrollTop >= 800 && $scrollTop < 1300){
                $('.plana').addClass('animateIn');
                $('.asolution').removeClass('animateIn');
            }else if($scrollTop > 1350 && $scrollTop < 2100){
                $('.plana').removeClass('animateIn');
                $('.asolution').addClass('animateIn');
                $('.Training').removeClass('animateIn');
            }else if($scrollTop > 2100 && $scrollTop < 3200){
                $('.asolution').removeClass('animateIn');
                $('.Training').addClass('animateIn');
                $('.min-ji07').removeClass('animateIn');
            }else if($scrollTop > 3300 && $scrollTop < 4000){
                $('.Training').removeClass('animateIn');
                $('.min-ji07').addClass('animateIn');
            }else if($scrollTop > 4100){
                $explanation.removeClass('lanation');
            }
        }

        // 스크롤 시 나타나게
        var $blogView = $blog_inner.offset().top - 500;
        // .blog_inner 의 top위치 - 400
        var $projectExecuted = false;
        // 화면에서 떨어진 거리 
        if(!$projectExecuted){ // $projectExecuted가 false일 때
            if($scrollTop > $blogView){
                // 스크롤 값이 blogView보다 크면
                $blog_inner.addClass('active');
                $projectExecuted = true; // $projectExecuted가 true로 변경
            }
        }
    });

    // 메뉴버튼 눌렀을 때 메뉴 창 띄우기
    $('.menu_button').click(function(){
        $('.menu').show();
    })
    $('.menu').click(function(){
        $('.menu').hide();
    })

    // 소개
    $('.about_me').click(function(){
        $('.popup').show();
        $('.popup_inner').show();
    })
    $('.popup_cross').click(function(){
        $('.popup').hide();
    })

    
    // 스크롤 부드럽게 이동
    $('.menu a').click(function(){
        var page = $(this).attr('href');
        var $about = '#sec';
        var $portefolio = '#exp';
        var $blog = '#blog';
        var $contact = '#footer';
        if(page == $about){
            $('html, body').animate({
                scrollTop: $($about).offset().top
            }, 500);
        }else if(page == $portefolio){
            $('html, body').animate({
                scrollTop: $($portefolio).offset().top
            }, 500);
        }else if(page == $blog){
            $('html, body').animate({
                scrollTop: $($blog).offset().top
            }, 500);
        }else if(page == $contact){
            $('html, body').animate({
                scrollTop: $($contact).offset().top
            }, 500);
        }else{
        }
    });
});

// 마우스커서 효과
$(document).mousemove(function(e){
    $('.mouse').css("top", e.pageY);
    $('.mouse').css("left", e.pageX);
});

// 타이핑효과
var str = "PORTFOLIO";
var num = 0;
setInterval(function(){
    if(num < 9)
        $('.title').append(str[num]);
        // $('.title').css('transition', '2s');
    num++;
}, 400);

// 이미지로드 로딩화면
$(function(){ 
    // 본문의 이미지가 로드 되는 상황을 모니터(실시간 파악)
    // 진행률에 따라 막대가 늘어나야, 숫자 변경
    // 이미지 모두 로드되어 진행률이 100이 되면 모니터링을 중지하고 검은화면을 위로
    var $container = $('#progress'),
    $progressBar = $container.find('.progress-bar'),
    $progressText = $container.find('.progress-text'),

    // 제이쿼리 문법1
    // $('body').imagesLoaded( function() {
    //     // images have loaded
    // });

    // 자바스크립트 문법2 1과 2는 같은 것임
    imgLoad = imagesLoaded('body'),
    imgTotal = imgLoad.images.length; // 전체 이미지 갯수
    // console.log(imgTotal);
    // function onAlways( instance ) {
    // console.log('all images are loaded');
    // }
    // // bind with .on()
    // // always안에 이벤트 명을 바꾸ㅓ주면 됨
    // imgLoad.on( 'always', onAlways );

    imgLoaded = 0, // 열자마자 하나도 안 읽었다 로드한 이미지 갯수
    current = 0, // 이미지 로드 진행률

    progressTimer = setInterval(updateProgress, 1000/60); // 1초를 60으로 나눔

    // 이미지가 로드할 때 마다 로드한 이미지 갯수를 늘려준다.
    imgLoad.on( 'progress', function() {
        imgLoaded++;
        // console.log(imgLoaded);
    });

    function updateProgress(){
        // 진행률을 파악하는 함수
        // bar와 text를 변경 해주는 함수
        // 100 / 7 * 100
        var target = (imgLoaded/imgTotal) * 100;
        $progressBar.css({width:target + '%'});
        $progressText.text(Math.floor(target) + '%');

        if(target == 100){
            // 함수 멈추기
            clearInterval(progressTimer);
            $container.addClass('progress-complete');
            $progressBar.add($progressText).delay(500).animate({opacity:0}, 250,
                function(){
                    $container.animate({top:'-100%'}, 1000, 'easeInOutQuint'); 
                    // 1초에 걸쳐서 올라감
                }
            );
        }
    }; 

    var $charts = $('.chart');
    // charts 들 마다 할 일
    $charts.each(function(){
        var $this = $(this),
            $circleLeft = $this.find('.left .circle-mask-inner'),
            $circleRight = $this.find('.right .circle-mask-inner'),
            $percentContainer = $this.find('.percent-number'),
            $percentNumber = $percentContainer.text();
            // 시작하자마자는 0
            $circleLeft.add($circleRight).css({transform: 'rogate(0)'});
            // console.log($this + ": this값");
            $percentContainer.text(0);
            // console.log($percentNumber);
            // console.log($circleLeft, $circleRight, $percentContainer, $percentNumber);

            $({rate: 0}).animate({rate:$percentNumber},{
                duration: 2500,
                // progress 는 진행중 할일
                progress: function(){
                    // 숫자불러오기
                    // var now = this.rate;
                    var now = Math.floor(this.rate),
                        deg = now * 360 / 100,
                        degRight = Math.min(deg, 180),
                        // Math.min은 작은값
                        degLeft = Math.max(deg - 180, 0);

                        // https://www.youtube.com/watch?v=8zYMoENzM8A&t=648s 1시간8분부터보기
                        // 각도 변수명
                        // console.log(now);
                    $percentContainer.text(now);
                    $circleLeft.css({transform:'rotate(' + degLeft + 'deg)'});
                    $circleRight.css({transform:'rotate(' + degRight + 'deg)'});
                    
                }
            })

    });
    
}); // document ready


