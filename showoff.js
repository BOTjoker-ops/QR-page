// http://127.0.0.1:5500/?name=Stijn_van_der_Pouw&LinkedIn=https://www.linkedin.com/in/stijnvdpouw/&Facebook=https://www.facebook.com/stijn.vanderpouw/&Instagram=https://www.instagram.com/stijnvdpouw/&

const platformIcons = {
    LinkedIn: '/img/icons/LinkedIn-icon.png',
    Facebook: '/img/icons/facebook-logo.png',
    Instagram: '/img/icons/instagram-logo.png',
}

function getIcon(platform) {
    if (platform in platformIcons) {
        return platformIcons[platform]
    } else {
        // needs to return a img some way or another
        return ''
    }
}

$(function () {
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    if (hashes.length <= 1) {
        hashes = ["name=Stijn_van_der_Pouw", "LinkedIn=https://www.linkedin.com/in/stijnvdpouw/", "Facebook=https://www.facebook.com/stijn.vanderpouw/&"];
    }
    for (var i = 0; i < hashes.length - 1; i++) {
        pair = hashes[i].split('=');
        if (pair[0] == "name") {
            document.getElementById("nameDisplay").innerHTML = pair[1]
        } else {
            $("#links").append(
                '<a href="' + pair[1] + '" class="list-group-item list-group-item-action" target="_blank" aria-current="true">' +
                '<div class="d-flex justify-content-between">' +
                '<img src=' + getIcon(pair[0]) + ' class="rounded float-left platformIcon">' +
                '<h5 class="mb-1 cardTitle">' + pair[0] + '</h5>' +
                //     <small>3 days ago</small>
                //     </div>
                // <p class="mb-1">Some placeholder content in a paragraph.</p>
                // <small>And some small print.</small>
                '</a>'
            )
            console.log('[server] found: ' + pair[0]);
        }
    }
});