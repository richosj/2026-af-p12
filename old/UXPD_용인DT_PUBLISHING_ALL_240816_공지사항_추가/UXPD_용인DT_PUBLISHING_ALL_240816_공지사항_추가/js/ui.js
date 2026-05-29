$(document).ready(function(){
    var linetime;

    $(".main-header").mouseenter(function(){
		$(this).addClass("depth");

        linetime = setTimeout(function(){
            $(".logotxt,.notice-list").show();
        },100);
	});

    $(".main-header").mouseleave(function(){
        clearTimeout(linetime);

        $(this).removeClass("depth");
        $(".logotxt,.notice-list").hide();
	});

    $(".menu li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(".main-header").removeClass("depth");
        $(".logotxt,.notice-list").hide();
    });

    //filter
    $(".result-filter").click(function(){
        $(".filter-pop").show();
    });

    $(".filter-close").click(function(){
        $(".filter-pop").hide();
    });
});