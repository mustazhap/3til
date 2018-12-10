 $(document).ready(function(){

    //Settings
    var a;
    var blocks = [0,1,2];
    var owl = $('.owl-carousel');
    var siz = $(".block").width();
    for (i = 0; i < blocks.length; ++i) {
        switch (i) {
            case 0:
                $(".dict__col").eq(blocks[i]).css("left", "0");
            break;
            case 1:
            $(".dict__col").eq(blocks[i]).css("left", siz +45 + "px");
            break;
            case 2:
            $(".dict__col").eq(blocks[i]).css("left", (siz+45)*2 +"px");
            break;
        }
    }

    $(".dict__row").css("width", siz*3 + 90 + "px");

    // Burger menu
    var c = true;
    $(".burger" ).click(function(event) {
        $(this).toggleClass("burger_active"); 
        
        if (c){
        $("#burger-menu").css("right", "0");
        c = false;
        $("body").css("overflow", "hidden");
        }else{
        $("#burger-menu").css("right", "-100%");
        c = true;
        $("body").css("overflow", "auto");
        
        }
        event.stopPropagation();
    });
    $(".burger-menu" ).click(function(event) {
       
        
        event.stopPropagation();
    });
   
    // 
    
    $("#kaz").find("textarea").mlKeyboard({layout: 'es_ES',is_hidden: false});
    $("#rus").find("textarea").mlKeyboard({layout: 'es_ES',is_hidden: false});
    $("#eng").find("textarea").mlKeyboard({layout: 'es_ES',is_hidden: false});

    $(".ml").hide();
    // Virtual keyboard
    $('.keyboard').click(function(event){
        var element = $(this).attr("rel");
        var el = $(element).find("textarea");
        $(this).toggleClass("pin-active");
        console.log(element);
        switch (element) {
            case "#kaz":
                $(".ml").eq(0).show();
                var or = $(el).val();
                $(el).val('');
                $(el).focus().val(or);
            break;
            case "#rus":
                $(".ml").eq(1).show();
                var or = $(el).val();
                $(el).val('');
                $(el).focus().val(or);
            break;
            case "#eng":
                $(".ml").eq(2).show();
                var or = $(el).val();
                $(el).val('');
                $(el).focus().val(or);
            break;
        }
        
        event.stopPropagation();
    })
    // 

    $(".ml").find("ul").click(function(event){
        event.stopPropagation();
    });

    


    // Animation of blocks and pin
    $(".dict__col ").click(function(){
        a = $(this).index();
    
        
       
        if($(".dict__col").eq(blocks[0]).hasClass("pinned") && a !== blocks[0]){
            blocks = jQuery.grep(blocks, function(value) {
                return value != a;
            });
            var b0 = blocks[0];
            blocks = jQuery.grep(blocks, function(value) {
                return value != blocks[0];
            });
            blocks.unshift(a);
            blocks.unshift(b0);
            if($(".dict__col").eq(blocks[2]).hasClass("pinned") || $(".dict__col").eq(blocks[1]).hasClass("pinned")){
                for (i = 0; i < blocks.length; ++i) {
                    $(".dict__col").eq(i).removeClass("dict__col-active");
                    $(this).addClass("dict__col-active");
                    
                }
                return false;
            }
            else{
                var i;
                for (i = 0; i < blocks.length; ++i) {
                    $(".dict__col").eq(i).removeClass("dict__col-active");
                    $(this).addClass("dict__col-active");
                    owl.trigger('to.owl.carousel', [$(this).index(), 300]);

                    switch (i) {
                        case 0:
                            $(".dict__col").eq(blocks[i]).css("left", "0");
                        break;
                        case 1:
                        $(".dict__col").eq(blocks[i]).css("left", siz+45 + "px");
                        break;
                        case 2:
                        $(".dict__col").eq(blocks[i]).css("left", (siz+45)*2 +"px");
                        break;
                    }
                }
            }
        }if($(".dict__col").eq(blocks[0]).hasClass("pinned") && a === blocks[0]){
            for (i = 0; i < blocks.length; ++i) {
                $(".dict__col").eq(i).removeClass("dict__col-active");
                $(this).addClass("dict__col-active");
                
            }
            return false;
        }
        
        // Second
        if($(".dict__col").eq(blocks[1]).hasClass("pinned") && a === blocks[2]){
            var tem = blocks[0];
            var tem2 = blocks[2];
            blocks[2] = tem;
            blocks[0] = tem2;

            if($(".dict__col").eq(a).hasClass("pinned")){
                for (i = 0; i < blocks.length; ++i) {
                    $(".dict__col").eq(i).removeClass("dict__col-active");
                    $(this).addClass("dict__col-active");
                    
                }
                return false;
            }
            else{
                var i;
                for (i = 0; i < blocks.length; ++i) {
                    $(".dict__col").eq(i).removeClass("dict__col-active");
                    $(this).addClass("dict__col-active");
                    owl.trigger('to.owl.carousel', [$(this).index(), 300]);

                    switch (i) {
                        case 0:
                            $(".dict__col").eq(blocks[i]).css("left", "0");
                        break;
                        case 1:
                        $(".dict__col").eq(blocks[i]).css("left", siz+45 + "px");
                        break;
                        case 2:
                        $(".dict__col").eq(blocks[i]).css("left", (siz+45)*2 +"px");
                        break;
                    }
                }
            }
        }
        if($(".dict__col").eq(blocks[1]).hasClass("pinned") && a === blocks[1]){
           
                for (i = 0; i < blocks.length; ++i) {
                    $(".dict__col").eq(i).removeClass("dict__col-active");
                    $(this).addClass("dict__col-active");
                    
                }
               
        }
        if($(".dict__col").eq(blocks[2]).hasClass("pinned") && a === blocks[2]){
           
            for (i = 0; i < blocks.length; ++i) {
                $(".dict__col").eq(i).removeClass("dict__col-active");
                $(this).addClass("dict__col-active");
                
            }
           
    }
        if($(".dict__col").eq(blocks[2]).hasClass("pinned") && a === blocks[1]){
            var tem = blocks[0];
            var tem2 = blocks[1];
            blocks[1] = tem;
            blocks[0] = tem2;

            if($(".dict__col").eq(a).hasClass("pinned")){
                for (i = 0; i < blocks.length; ++i) {
                    $(".dict__col").eq(i).removeClass("dict__col-active");
                    $(this).addClass("dict__col-active");
                }
                return false;
            }
            else{
                var i;
                for (i = 0; i < blocks.length; ++i) {
                    $(".dict__col").eq(i).removeClass("dict__col-active");
                    $(this).addClass("dict__col-active");
                    
                        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
                       
                        switch (i) {
                            case 0:
                                $(".dict__col").eq(blocks[i]).css("left", "0");
                            break;
                            case 1:
                            $(".dict__col").eq(blocks[i]).css("left", siz +45+ "px");
                            break;
                            case 2:
                            $(".dict__col").eq(blocks[i]).css("left", (siz+45)*2 +"px");
                            break;
                        }
                }
            }
        }
        if(!$(".dict__col").eq(blocks[2]).hasClass("pinned") && !$(".dict__col").eq(blocks[0]).hasClass("pinned") && !$(".dict__col").eq(blocks[1]).hasClass("pinned")){
            blocks = jQuery.grep(blocks, function(value) {
                return value != a;
            });
            blocks.unshift(a);
            var i;
            for (i = 0; i < blocks.length; ++i) {
                $(".dict__col").eq(i).removeClass("dict__col-active");
                $(this).addClass("dict__col-active");
                owl.trigger('to.owl.carousel', [$(this).index(), 300]);

                switch (i) {
                    case 0:
                        $(".dict__col").eq(blocks[i]).css("left", "0");
                    break;
                    case 1:
                    $(".dict__col").eq(blocks[i]).css("left", siz+45 + "px");
                    break;
                    case 2:
                    $(".dict__col").eq(blocks[i]).css("left", (siz+45)*2 +"px");
                    break;
                }
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $(".dict__transcript").click(function(event){
        event.stopPropagation();
    })

    $(".dict__examples").click(function(event){
        event.stopPropagation();
    })

    $("textarea").click(function(event){
        event.stopPropagation();
    })

    $(".block__improve").click(function(event){
        event.stopPropagation();
    })
    // Кнопка Copy
    $(".copy").click(function(event){
        // Копирование в буфер
        var $temp = $("<input>");
        $("body").append($temp);
        var element = $(this).attr("rel");
        $temp.val($(element).find("textarea").val()).select();
        document.execCommand("copy");
        $temp.remove();

        // Подсказка
        var a = $(this);
        a.find(".copy-message").fadeIn();
        setTimeout(function(){
            a.find(".copy-message").fadeOut();
         }, 1000);
        event.stopPropagation(); 
    })
    // 

     // Кнопка Pin
     $(".pin").click(function(event){
        $($(this).attr("rel")).toggleClass("pinned");
        $(this).toggleClass("pin-active");
        event.stopPropagation(); 
    })
    // 
var sd = true;
    // Кнопка TextSize
    $(".textsize").click(function(event){
        for (i = 0; i < 3; ++i) {
            $(".textsize").eq(i).find(".textsize-pop").hide();
            $(".textsize").eq(i).removeClass("pin-active");
        }
        $(this).toggleClass("pin-active");
        $(this).find(".textsize-pop").show().css("display", "flex");

        event.stopPropagation(); 
    });
       
    $('.slider').val(parseInt($("textarea").css('font-size')));
    $(".slider").trigger('change');
    $('.slider').on('change', function () {
        var v = $(this).val();
        $("textarea").css('font-size', v + 'px')
        for (i = 0; i < 3; ++i) {
            $('.slider').eq(i).val(v);
        }
        // $('span').html(v);
    });
    // 
    var sd = true;
     // Кнопка Share
     $(".share").click(function(event){
        $(this).toggleClass("pin-active");
        
        if(sd){
            $(this).find(".share-pop").show().css("display", "flex");
            sd = false;
            }else{
                $(this).find(".share-pop").hide();
                sd = true;
            }
        event.stopPropagation(); 
    });
    $("body").click(function(){
        $(".share-pop").hide();
        $(".share").removeClass("pin-active");
        $(".textsize-pop").hide();
        $(".textsize").removeClass("pin-active");
        $("#burger-menu").css("right", "-100%");
        c = true;
        $("body").css("overflow", "auto");
        $(".ml").hide();
        $(".keyboard").removeClass("pin-active");
    })
 
    // 
    


    // Одинаковые высоты для колонок
    var maxheight = 0;
    $(".dict__transcript").each(function() {
    if($(this).height() > maxheight) { maxheight = $(this).height(); }
    });
    $(".dict__transcript").height(maxheight);

    $(".dict__examples").each(function() {
        if($(this).height() > maxheight) { maxheight = $(this).height(); }
        });
    $(".dict__examples").height(maxheight);

    // Высота для dict__row
    $(".dict__row").css("height", $(".dict__col").height());
    // 


});
