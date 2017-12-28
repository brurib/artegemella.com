var apiKey = 'AIzaSyCxxnl41PutJCkvnJQo9VO1MtWlYj2AQEo';
var quadri = {
    avvolge_catino: {id: '17sH1B7n-DxPerAMLqXHahIeUK_xDESCg', title:'Avvolge catino', thumb:'thumbs/Avvolge catino.png', tags:['Nature morte', 'Catini']},
    bacino: {id: '1cgUOaz2PD5K4vfSO45_1ZTLnO7GAKEm7', title: 'Bacino', thumb: 'thumbs/Bacino.png', tags:['Nature morte', 'Catini']},
    caco: {id: '1dOLPaUMMRrmgtLOcA4phbOn02_-RyRlw', title: 'Caco', thumb: 'thumbs/Caco.jpg', tags:['Nature morte']},
    catino_melagrana1: {id: '1tAyMjjIVpsQWygPbPJSDx2STXRMwEIzu', title: 'Catino con melagrana 1', thumb: 'thumbs/Catino con melagrana 1.jpg', tags:['Nature morte', 'Catini', 'Melagrane']},
    catino_melagrana2: {id: '1bPBHbzHHGoL_taGj47NDdIbRNvdIt-2L', title: 'Catino con melagrana 2', thumb: 'thumbs/Catino con melagrana 2.jpg', tags:['Nature morte', 'Catini', 'Melagrane']},
    cipolla_autunno: {id: '1gZSk5Mt2TAAvB18Yzajk7Rs3g0C2K8Ub', title: 'Cipolla autunno', thumb: 'thumbs/Cipolla autunno.jpg', tags:['Nature morte', 'Cipolle']},
    cipolla_inverno: {id: '1ZKw2bWhFVeMtVrT6jUf-7yUFYdeIM6h6', title: 'Cipolla inverno', thumb: 'thumbs/Cipolla inverno.jpg', tags:['Nature morte', 'Cipolle']},
    cipolla_primavera: {id: '1Qe5wguPkJSZNJ6TODSlcEb56_b0vD8va', title: 'Cipolla primavera', thumb: 'thumbs/Cipolla primavera.jpg', tags:['Nature morte', 'Cipolle']},
    copia: {id: '1EwHC7gGT-dbPNHHokJPBwqJJhibXGs0k', title: 'Copia', thumb: 'thumbs/Copia.jpg', tags:['Nature morte', 'Uova']},
    coppia: {id: '1V4fIC5VrApxyi9QadHiwarB7E9pGoepL', title: 'Coppia', thumb: 'thumbs/Coppia.jpg', tags:['Nature morte', 'Uova']},
    fichi_bianchi: {id: '1J1FCKyfeT8fJ_KK2ZV2a0bVYI_yP17gc', title: 'Fichi bianchi', thumb: 'thumbs/Fichi bianchi.jpg', tags:['Nature morte', 'Fichi']},
    fichi_neri: {id: '146VkSCOsQg5VbqAfC8JdBW7pointIXhD', title: 'Fichi neri', thumb: 'thumbs/Fichi neri.jpg', tags:['Nature morte', 'Fichi']},
    fiore_zucca: {id: '1VFTnVCUS5dj0ENGY5ZxsCxcqaDgXq9mX', title: 'Fiore di zucca', thumb: 'thumbs/Fiore di zucca.jpg', tags:['Nature morte', 'Fiori di zucca']},
    fresco: {id: '1wMUq52wAKFGDaZt2ut-qiF0lGDO8d8bI', title: 'Fresco', thumb: 'thumbs/Fresco.jpg', tags:['Nature morte', 'Uova']},
    gocce: {id: '1l2FPwnHgNWt1YtDhTo5Y6YSuK0_Jarg_', title: 'Gocce', thumb: 'thumbs/Gocce.jpg', tags:['Nature morte', 'Gocce']},
    goccia1: {id: '1hh3iEQTXUGVuuqSoKdqHByaN-t3jPNEd', title: 'Goccia 1', thumb: 'thumbs/Goccia 1.jpg', tags:['Nature morte', 'Gocce']},
    goccia2: {id: '1IeW-doCsknONzbs0mVZ7zdnZB79oZ4PQ', title: 'Goccia 2', thumb: 'thumbs/Goccia 2.jpg', tags:['Nature morte', 'Gocce']},
    goccia3: {id: '1XpnGtiuCEHyCtF9dPdoZaI25S5nSBNs1', title: 'Goccia 3', thumb: 'thumbs/Goccia 3.jpg', tags:['Nature morte', 'Gocce']},
    melagrana: {id: '1U3v8yZDx3SMcBYo0Y-VpnL83l1FxUka9', title: 'Melagrana', thumb: 'thumbs/Melagrana.jpg', tags:['Nature morte', 'Melagrane']},
    melagrane: {id: '1EnWQZhAz0eym2-VqxzRA-jBE5hJVS37R', title: 'Melagrane', thumb: 'thumbs/Melagrane.jpg', tags:['Nature morte', 'Melagrane']},
    natura_morta: {id: '1Y3SBgF-P8s3qYnKpcmpyvOB7vWI22g8i', title: 'Natura morta', thumb: 'thumbs/Natura morta.jpg', tags:['Nature morte', 'Catini']},
    offerta: {id: '1DHkzs48l1G_JtGOl_6CQkdsNqaye8hSw', title: 'Offerta', thumb: 'thumbs/Offerta.png', tags:['Nature morte', 'Fichi']},
    ovo_arancione: {id: '1I1ei5J6Ayvr3Rv6fkPMoKnuf-2lX5YSb', title: 'Ovo arancione', thumb: 'thumbs/Ovo arancione.jpg', tags:['Nature morte', 'Uova']},
    ovo_doro: {id: '18pH5yTBlseeV2xFBr8d63Ulb5JA6p7pz', title: 'Ovo d\'oro', thumb: 'thumbs/Ovo d_oro.jpg', tags:['Nature morte', 'Uova']},
    ovo: {id: '1y3pV9yVjh3EVR_5a_hBq_Q5vMlNKG0CM', title: 'Ovo', thumb: 'thumbs/Ovo.jpg', tags:['Nature morte', 'Uova']},
    perla: {id: '1ll-Qj9XwuDwPavUzVrKxpCF9m4ZoqVD8', title: 'Perla', thumb: 'thumbs/Perla.jpg', tags:['Nature morte']},
    scorti_fioritura: {id: '1BUHIYDgbVO_QZfxEH0m4LxhVMn2-HqsI', title: 'Scorti Fioritura', thumb: 'thumbs/Scorti Fioritura.jpg', tags:['Nature morte', 'Fiori di zucca']},
    scorti_sfioranti: {id: '1qqCO9neV6z8R8krZT4cSgs5OmnM2HuMl', title: 'Scorti Sfioranti', thumb: 'thumbs/Scorti Sfioranti.jpg', tags:['Nature morte', 'Fiori di zucca']},
    scorti_toccati: {id: '1ZiXJGYpQdb-Q_zt-tSmKZZXiQVoe77nP', title: 'Scorti Toccati', thumb: 'thumbs/Scorti Toccati.jpg', tags:['Nature morte', 'Fiori di zucca']},
    tavola: {id: '1fuY_Omqc87E-CMhkGMTd2S-iYflPjD2w', title: 'Tavola', thumb: 'thumbs/Tavola.jpg', tags:['Nature morte', 'Catini']},
    uovo: {id: '10b5FXxkP51MoTgcFpVnae0GOmYxJNFUk', title: 'Uovo', thumb: 'thumbs/Uovo.jpg', tags:['Nature morte', 'Uova']},
    zucca: {id: '15d2C1yjmqh4gzrPbp1FXT_0rbX52toXF', title: 'Zucca', thumb: 'thumbs/Zucca.jpg', tags:['Nature morte']}


};
var driveUrl = function (id){
    var url = "https://www.googleapis.com/drive/v3/files/" + id + "?alt=media&key=" + apiKey;
    return url;
}

var searchPainting = function(key,name,tags){
    var result = [];
    var quadriKeys = _.keys(quadri);
    for(var i = 0; i < quadriKeys.length ; i++){
        var painting = quadri[quadriKeys[i]];
        var valid = false;
        if(key){
            //todo
        }
        if(name){
            //todo
        }
        if(tags && tags.length > 0 && painting.tags && painting.tags.length > 0 ){
            for(var tag in tags){
                var found = painting.tags.indexOf(tags[tag]);
                if(found > -1){
                    valid = true;
                }
            }
        }
        if(valid){
            result.push(painting);
        } else if( !key && !name && (!tags || tags.length <= 0)){
            result.push(painting);
        }
    }
    return result;
}
