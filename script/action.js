$('.icon_music').click(function(){
    $(this).toggleClass('on');
    // $('audio').fadeToggle()

    var audio = $('audio#music')[0];

        if (audio.pause) {
            audio.play();
        } else {
            audio.pause();

        }

        $('.wrap').toggleClass('on');
        $('.text_box').toggleClass('on');
    })

    window.addEventListener('load', function() {
        const textBox = document.querySelector('.text_box');
        const spans = textBox.querySelectorAll('span');
        
        spans.forEach((span, index) => {
            span.style.transitionDelay = `${index * 0.1}s`;  // 각 글자에 0.1초 간격으로 딜레이 적용
        });
    
        textBox.classList.add('on');
    });
    


