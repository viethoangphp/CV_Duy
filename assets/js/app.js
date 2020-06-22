$(window).ready(function(){
    $(window).scroll(function(){
        var run_bar = $('body,html').scrollTop();
        if( run_bar > 400 ){
            $('#content #skill-level #skill-level-item #skill-out-bar .skill-length-60').animate(
                {
                    width: '120px' ,
                },
                    1000
            )
            $('#content #skill-level #skill-level-item #skill-out-bar .skill-length-80').animate(
                {
                    width: '150px' ,
                },
                    1000
            )
            $('#content #skill-level #skill-level-item #skill-out-bar .skill-length-50').animate(
                {
                    width: '100px' ,
                },
                    1000
            )
        }
    })
    return false;
});