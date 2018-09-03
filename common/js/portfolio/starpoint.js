function starpoint(){
    $("#nav").hide();
    $(".jumbotron").hide();
    $(".container").hide();
    $("#footer").hide();

    $('body').prepend(
        '<div class="starpoint">' +
        '<img src="../common/img/portfolio/starpoint/porfotlio_starpoint.png" alt="Card image cap">' +
        '<div class="container">' +
            '<div class="row" >' +
                    '<h2 class="card-title">星辰點</h2>' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-sm-12 col-md-6">' +
                        '<img src="../common/img/portfolio/starpoint/porfotlio_starpoint_1.png"></img>' +
                    '</div>' +
                    '<div class="col-sm-12 col-md-6">' +
                        '<h5>裝置機構</h5>' +
                        '<p>使用方塊機構結合燈光互動，內部機構 使用棍子當軸心，轉動棍子使橢圓旋轉，' +
                            '利用橢圓的長短軸長度不同使方塊單位有升高 降低的變化，在整體會呈現高低起伏的擺動，' +
                            '藉由高低起伏讓球體滾動到洞裡，再經由感應啟動燈光。</p>' +
                    '</div>' +
                '</div>' +
                '<div class="row">' +
                    '<div clo-12>' +
                    '<h5>操作模式</h5>' +
                    '<p>使用方塊機構結合燈光互動，內部機構使用棍子當軸心，轉動棍子使橢圓旋轉，' +
                        '利用橢圓的長短軸長度不同使方塊單位有升高降低的變化，在整體會呈現高低起伏的擺動，' +
                        '藉由高低起伏讓球體滾動到洞裡，再經由感 應啟動燈光。</p>' +
                    '</div>' +
                    '<div class="col-12">' +
                        '<img src="../common/img/portfolio/starpoint/porfotlio_starpoint_interaction mode.png">' +
                    '</div>' +
            '</div>' +
        '</div>' +
        '<div id="clsoe"><p>X</p></div>' +
        '</div>'
)
$("#clsoe").click(function(){
    $(".starpoint").remove();
    $("#nav").show();
    $(".jumbotron").show();
    $(".container").show();
    $("#footer").show();
});
}
