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
                    '<div class="row">' +
                    '<ul clo-12>' +
                        '<li>設計團隊：廖敏男、蔡東真、李嘉浤、倪珞婷、楊珮芸、李秉靜、王俊皓、陳柔涵、謝庭文、洪祥翰、夏群皓</li>' +
                        '<li>主要負責：互動機構設計、設計整合</li>' +
                        '<li>使用技術：Arduino、雷射切割、木工</li>' +
                        '<li>使用媒材：壓克力條、木板、密集板、led燈條、磁簧開關</li>' +
                    '</ul>' +
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
function light(){
    $("#nav").hide();
    $(".jumbotron").hide();
    $(".container").hide();
    $("#footer").hide();

    $('body').prepend(
        '<div class="lightbox">' +
            '<img src="../common/img/portfolio/lightbox/lightbox.png" alt="Card image cap">' +
        '<div class="container">' +
            '<div class="row" >' +
                    '<h2 class="card-title">錯視與空間互動燈箱</h2>' +
            '</div>' +
                '<div class="row">' +
                    '<div class="col-sm-12 col-md-12">' +
                        '<p>使巧妙結合壓克力與燈光之特性，在字網呈現剛硬與柔和效果，搭配黑色錯視線條，而' +
                            '在空間形成有趣的錯視互動效果，創造出人與空間獨特互動氣氛。</p>' +
                    '</div>' +
                '</div>' +
                '<div class="row">' +
                    '<ul clo-12>' +
                        '<li>主要負責:互動程式設計</li>' +
                        '<li>設計團隊：廖敏男、王旭嘉、陳思聰、范姜俊宇、張婷、林岩順、林筱晴、李怡葶</li>' +
                        '<li>使用技術：Arduino、人體紅外線感測、雷射切割</li>' +
                        '<li>使用媒材:壓克力板、木板、led燈條</li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
                '<div id="clsoe"><p>X</p></div>' +
        '</div>'
)
$("#clsoe").click(function(){
    $(".lightbox").remove();
    $("#nav").show();
    $(".jumbotron").show();
    $(".container").show();
    $("#footer").show();
});
}
function toys(){
    $("#nav").hide();
    $(".jumbotron").hide();
    $(".container").hide();
    $("#footer").hide();

    $('body').prepend(
        '<div class="toys">' +
            '<img src="../common/img/portfolio/toys/porfotlio_oldtimttoys.png" alt="Card image cap">' +
        '<div class="container">' +
            '<div class="row" >' +
                    '<h2 class="card-title">古童玩</h2>' +
            '</div>' +
            '<div class="row">' +
                '<div class="col-sm-12 col-md-6">' +
                    '<img src="../common/img/portfolio/toys/porfotlio_oldtimttoys_2.png">' +
                '</div>' +
                '<div class="col-sm-12 col-md-6">' +
                    '<img src="../common/img/portfolio/toys/porfotlio_oldtimttoys_3.png">' +
                '</div>' +
            '</div>' +
                '<div class="row">' +
                    '<div class="col-sm-12 col-md-12">' +
                        '<p>許多人事物及文化隨著時間而不 斷的在改變，不少文化都消失在歷史的塵埃，' +
                            '加上目前大部分人們所喜好都偏為電子產品，更已對古時的童玩 帶點了模糊印象，我們希望能透過拍' +
                            '攝紀錄片方式讓童玩保存下來，同時 也讓接觸過的人能再找回小時童玩回 憶，並加上互動設計點閱觀賞，' +
                            '每個人物都有代表的動作，滑鼠移過去會 有玩法的動態。</p>' +
                    '</div>' +
                '</div>' +
                '<div class="row">' +
                '<div class="col-12">' +
                    '<img src="../common/img/portfolio/toys/porfotlio_oldtimttoys_1.png">' +
                '</div>' +
            '</div>' +
                '<div class="row">' +
                    '<ul clo-12>' +
                        '<li>主要負責：互動程式設計</li>' +
                        '<li>導演：黃書廷、製片：王思涵、美術設計：蘇傳凱、動態設計：郭幸鴻、互動程式設計：廖敏男、指導老師：林皇耀</li>' +
                        '<li>使用軟體：Adobe Flash、Illustration</li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
                '<div id="clsoe"><p>X</p></div>' +
        '</div>'
)
$("#clsoe").click(function(){
    $(".toys").remove();
    $("#nav").show();
    $(".jumbotron").show();
    $(".container").show();
    $("#footer").show();
});
}
function idf(){
    $("#nav").hide();
    $(".jumbotron").hide();
    $(".container").hide();
    $("#footer").hide();

    $('body').prepend(
        '<div class="idf">' +
            '<img src="../common/img/portfolio/IDF/porfotlio_IDF.png" alt="Card image cap">' +
        '<div class="container">' +
            '<div class="row" >' +
                    '<h2 class="card-title">古童玩</h2>' +
            '</div>' +
            '<div class="row">' +
                '<div class="col-sm-12 col-md-6">' +
                    '<img src="../common/img/portfolio/IDF/porfotlio_IDF_1.png">' +
                '</div>' +
                '<div class="col-sm-12 col-md-6">' +
                    '<img src="../common/img/portfolio/IDF/porfotlio_IDF_2.png">' +
                '</div>' +
            '</div>' +
            '<div class="row">' +
                '<div class="col-sm-12 col-md-6">' +
                    '<img src="../common/img/portfolio/IDF/porfotlio_IDF_4.png">' +
                '</div>' +
                '<div class="col-sm-12 col-md-6">' +
                    '<img src="../common/img/portfolio/IDF/porfotlio_IDF_5.png">' +
                '</div>' +
            '</div>' +
                '<div class="row">' +
                    '<div class="col-sm-12 col-md-12">' +
                        '<p>掌握靈感的脈絡，承載創意工坊的歷史，互動螢幕記錄著從無到有的點' +
                            '點滴滴，達到承先啟後的作用。視覺以「點」元素為主，以簡單的動畫呈現' +
                            '，內容包含了原始的工坊創作理念、製作過程及製作團隊之介紹。</p>' +
                    '</div>' +
                '</div>' +
                '<div class="row">' +
                    '<ul clo-12>' +
                        '<li>主要負責：互動程式設計、設計整合</li>' +
                        '<li>設計團隊：廖敏男、陳思聰、林宴儀、楊惠中、柯怡安、顏千瑜</li>' +
                        '<li>使用軟體：Adobe Illustrator、Flash</li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
                '<div id="clsoe"><p>X</p></div>' +
        '</div>'
)
$("#clsoe").click(function(){
    $(".idf").remove();
    $("#nav").show();
    $(".jumbotron").show();
    $(".container").show();
    $("#footer").show();
});
}
function illusionchair(){
    $("#nav").hide();
    $(".jumbotron").hide();
    $(".container").hide();
    $("#footer").hide();

    $('body').prepend(
        '<div class="toys">' +
            '<img src="../common/img/portfolio/illusionchair/porfotlio_illusionchair.png" alt="Card image cap">' +
        '<div class="container">' +
            '<div class="row" >' +
                    '<h2 class="card-title">Illusion Chiar</h2>' +
            '</div>' +
                '<div class="row">' +
                    '<div class="col-sm-12 col-md-6">' +
                    '<img src="../common/img/portfolio/illusionchair/porfotlio_illusionchair_1.png">' +
                    '</div>' +
                    '<div class="col-sm-12 col-md-6">' +
                    '<p>Illusion Chiar 從點(point)線(line)面 (plane)構成(form)，一張生活常見的椅子結合藝' +
                        '術，形成一張錯覺椅子(illusion 面到3D立體，3D立體到 2D平面，' +
                        '利用壓克力製作連續性的結構之骨架，Chiar從點chiar)，2D平加上彎折的鐵線構成之表面，' +
                        '產生360度不同視角 的視覺變化。</p>' +
                        '<ul>' +
                            '<li>主要負責：產品實作</li>' +
                            '<li>設計團隊：廖敏男、李政節</li>' +
                            '<li>使用媒材：壓克力、鐵線</li>' +
                            '<li>使用軟體：Rhino、Grasshopper、Taca</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
            '</div>' +
                '<div id="clsoe"><p>X</p></div>' +
        '</div>'
)
$("#clsoe").click(function(){
    $(".toys").remove();
    $("#nav").show();
    $(".jumbotron").show();
    $(".container").show();
    $("#footer").show();
});
}
function circle(){
    $("#nav").hide();
    $(".jumbotron").hide();
    $(".container").hide();
    $("#footer").hide();

    $('body').prepend(
        '<div class="circle">' +
            '<img src="../common/img/portfolio/circle/porfotlio_circle_edge.png" alt="Card image cap">' +
        '<div class="container">' +
            '<div class="row" >' +
                    '<h2 class="card-title">圓緣</h2>' +
            '</div>' +
            '<div class="row">' +
                '<div class="col-sm-12 col-md-6">' +
                    '<img src="../common/img/portfolio/circle/porfotlio_circle_edge_1.png">' +
                '</div>' +
                '<div class="col-sm-12 col-md-6">' +
                    '<img src="../common/img/portfolio/circle/porfotlio_circle_edge_2.png">' +
                '</div>' +
            '</div>' +
                '<div class="row">' +
                    '<div class="col-sm-12 col-md-12">' +
                        '<p>將樟木樹枝以切面手法，進而取得大小不等同心“圓"為燈飾之元素，' +
                            '將同心圓的邊“緣"編織等拼接為燈罩，簍空細縫間漫射著暖光，營造出柔' +
                            '和氛圍，尋求自然間，樸實的美好。</p>' +
                    '</div>' +
                '</div>' +
                '<div class="row">' +
                    '<ul clo-12>' +
                        '<li>設計團隊：廖敏男、李桂嶷</li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
                '<div id="clsoe"><p>X</p></div>' +
        '</div>'
)
$("#clsoe").click(function(){
    $(".circle").remove();
    $("#nav").show();
    $(".jumbotron").show();
    $(".container").show();
    $("#footer").show();
});
}