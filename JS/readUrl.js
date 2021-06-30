// http://127.0.0.1:5500/?name=Stijn_van_der_Pouw&LinkedIn=https://www.linkedin.com/in/stijnvdpouw/&Facebook=https://www.facebook.com/stijn.vanderpouw/&Instagram=https://www.instagram.com/stijnvdpouw/&

const platformIcons = {
    LinkedIn: '/img/LinkedIn-icon.png',
    Facebook: '/img/facebook-logo.png',
    Instagram: '/img/instagram-logo.png',
}

function getIcon(label, i) {
    if (label in platformIcons) {
        return platformIcons[label]
    } else {
        // needs to return a img some way or another
        return "./img/person-icon.png"
    }
}

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
                '<a href="' + cardInfo[1] + '" class="list-group-item list-group-item-action" target="_blank" aria-current="true">' +
                '<div class="d-flex justify-content-between">' +
                '<img id="' + i + '" src=' + getIcon(cardInfo[0], i) + ' class="rounded float-left platformIcon">' +
                '<h5 class="mb-1 cardTitle">' + decodeURI(cardInfo[0]) + '</h5>' +
                //     <small>3 days ago</small>
                //     </div>
                // <p class="mb-1">Some placeholder content in a paragraph.</p>
                // <small>And some small print.</small>
                '</a>'
            )
            console.log('[server] found: ' + cardInfo[0]);
        }
    }
});