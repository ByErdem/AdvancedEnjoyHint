var arrowColor;

function RegisterEvent() {

    //$("li[class*=CLASS][class*=QDMS]").click(function () {
    //    showHelper();
    //});

    //Iframe

    //$.ajax({
    //    type: "POST",
    //    url: url,
    //    data: data,
    //    contentType: "application/json; charset=utf-8",
    //    success: function (data) {


    //    },
    //    fail: function () {

    //    }

    //});

    $("#frMain").on("load", function () {
        showHelper();
    });

    $("#frMain").ready(function () {
        showHelper();
    });
}



function checkUrlFromIframe(url) {

    var value = $("#frMain").contents().find("form").attr("action");

    if (value.indexOf(url) > -1)
        return true;
    else
        return false;
}

function showHelper() {

    var enjoyhint_instance = new EnjoyHint({});
    var enjoyhint_script_steps = [];

    if (checkUrlFromIframe("Main.aspx")) {

        enjoyhint_script_steps = [
            {
                'click #qdmsLogoDiv': "Büyük şirketlerin ve devlet dairelerinin birimleri ve <br/> kurumları arasındaki evrak işlemlerini elektronik ortamda yaptığı <br/> sistemin adıdır. Entegre Yönetim Sistemi olarak tabir edilen QDMS <br/> her türlü yönetim sistemi standardının öngördüğü dokümantasyon altyapısını destekler ",
                'arrowColor': '0,255,0',
                "labelColor": '0,255,0',
                "xPos": "100",
                "yPos": "100",
                'showSkip': false
            },
            {
                'next #Menu1_ITCNT0_xteSearchBox_I': "Buradan aramak istediğiniz dokümanın ID'sini yazarak bulabilirsiniz.",
                'arrowColor': '0,255,0',
                "labelColor": '0,255,0',
            },
            {
                'next #Menu1_DXI2_': "Buradan favorilerle ilgili işlemler gerçekleştirebilirsiniz.",
                'arrowColor': '0,255,0',
                "labelColor": '0,255,0',
            },
            {
                'next #taskBlock_2-0': "Saklanan Dokümanlara tıkla.",
                'arrowColor': '0,255,0',
                "labelColor": '0,255,0',
            }
        ];
    }
    else if (checkUrlFromIframe("KlasorBelirleme.aspx?mode=Yeni")) {

        enjoyhint_script_steps = [
            {
                'click #ASPxRoundPanel1_RPC': "<div style='color:black;'>Lütfen bu sayfadan bir klasör seçiniz</div>",
                'arrowColor': '0,0,0',
                "labelColor": '0,0,0',
                "xPos": "500",
                "yPos": "200",
                "hideArrow": true,
                'showSkip': false

            },
            {
                'click #ASPxRoundPanel1_HTC_Td4': "Şimdi ileri butonuna tıklayınız.",
                'showSkip': false
            }
        ];
    }
    else if (checkUrlFromIframe("DokumanHazirlama.aspx?mode=Yeni")) {

        enjoyhint_script_steps = [
            {
                'next #ASPxRoundPanel15_pcDOKUMAN_HAZIRLAMA_ASPxRoundPanel1_txtDOC_KODU_I': "Lütfen öncelikle Doküman Kodu yazınız.",
                'showSkip': false
            },
            {
                'next #ASPxRoundPanel15_pcDOKUMAN_HAZIRLAMA_ASPxRoundPanel1_txtDOC_ADI_I': "Şimdi Doküman Adını giriniz.",
                'showSkip': false
            },
            {
                'click #imgASPxRoundPanel15_pcDOKUMAN_HAZIRLAMA_ASPxRoundPanel1_qscDOC_KONT_KISISelect': "Şimdi Kontrol edecek kişiyi seçiniz.",
                'showSkip': false
            },
            {
                'next #QdmsPopupControl1_PW-1': "Bu sayfadan arama yaparak istediğiniz kişiyi seçiniz.",
                'showSkip': false
            },
            {
                'click #ASPxRoundPanel15_pcDOKUMAN_HAZIRLAMA_T19': "Doküman sekmesine tıklayınız.",
                'showSkip': false
            },
            {
                'click #ASPxRoundPanel15_pcDOKUMAN_HAZIRLAMA_ASPxRoundPanel14_btnYTR': "Dosya ekle butonuna tıklayınız.",
                'showSkip': false
            },
            {
                'click #qpcSelectMultiPositionUserGroup_PW-1': "Şimdi buradan yüklemek istediğiniz bir dosya seçiniz.",
            },
        ];
    }

    enjoyhint_instance.set(enjoyhint_script_steps);
    enjoyhint_instance.run();



}