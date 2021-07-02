const domainName = '127.0.0.1:5500'

function newRow() {
    $('#newEntry').remove();
    $(".form-inline").append(
        '<input type="label" class="form-control col injectedForm" placeholder="Label">' +
        '<input type="link" class="form-control col injectedForm" placeholder="www" value="https://">' +
        '<button id="newEntry" onclick="newRow()" class="btn btn-primary injectedForm">Add link</button>' +
        ' <div class="w-100"></div>'
    )
    $("#initButton").replaceWith(
        '<br>'
    )
}

function makeURL() {

    var validUrl = 'http://' + domainName + '/?name='
    var data = [];
    var inputs = $('input')
        .not(':input[type=button], :input[type=submit], :input[type=reset]');

    $(inputs).each(function (e) {
        data.push($(this).val());
    })
    data.forEach(function (x, i) {
        x = encodeURI(x)
        if (i != 0) {
            if (i % 2 == 0 && x != '') {
                validUrl = validUrl.concat(x + '=');
            }
            if (i % 2 != 0 && x != '') {
                validUrl = validUrl.concat(x + '&');
            }
        } else {
            validUrl = validUrl.concat(x);
        }
    })

    // Reset form
    $('#cardForm').trigger("reset");
    $('.injectedForm').remove();
    $("#submitButton").replaceWith(
        '<button id="initButton" onclick="newRow()" class="btn btn-primary">Add link</button>'
    )
        return validUrl
}
