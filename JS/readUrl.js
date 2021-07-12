// http://192.168.178.55/QR-page/?name=Stijn%20van%20der%20Pouw&LinkedIn=https://www.linkedin.com/in/stijnvdpouw/&Facebook=https://www.facebook.com/stijn.vanderpouw/&Instagram=https://www.instagram.com/stijnvdpouw/&

$(function () {
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    if (hashes.length <= 1) {
        hashes = ["name=Stijn van der Pouw", "LinkedIn=https://www.linkedin.com/in/stijnvdpouw/", "&"];
    }
    
    for (var i = 0; i < hashes.length - 1; i++) {
        cardInfo = hashes[i].split('=');
        if (cardInfo[0] == "name") {
            document.getElementById("nameDisplay").innerHTML = decodeURI(cardInfo[1]);
        } else {
            $("#links").append(
                '<a href="' + cardInfo[1] + '" class="list-group-item list-group-item-action" target="_blank">' +
                '<img id="' + i + '" src=https://s2.googleusercontent.com/s2/favicons?domain='+ cardInfo[1] + ' class="float-left">' +
                '<h5 class="mb-1 cardTitle">' + decodeURI(cardInfo[0]) + '</h5>' +
                '</a>'
            )}
    }
});