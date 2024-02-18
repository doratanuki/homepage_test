function test(){
    var ScrollTop = $(window).scrollTop();
    var WindowHeight = $(window).height();
    var ScrollBottom = ScrollTop + WindowHeight
    
    //section1
    var sec1_top = $("#section1").offset().top
    var sec1_height = $("#section1").innerHeight()
    var sec1_bottom = sec1_top + sec1_height
    var v1 = ScrollTop - sec1_height
    $("#section1").css("background-position",`0px ${ScrollTop - 200}px`)


    //section2
    var sec2_top = $("#section2").offset().top


    //section3
    var sec3_top = $("#section3").offset().top

    console.log("scrollTop",ScrollTop)
    console.log("sec1_top:",sec1_top)
    console.log("sec1_height:",sec1_height)
    console.log("sec1_bottom",sec1_bottom)
    console.log("v1",v1)
}



$(window).scroll(function(){
    test();
});