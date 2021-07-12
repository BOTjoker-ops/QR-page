var port = location.port || (location.protocol === 'https:' ? '443' : '80');
var publicIp = '82.217.9.42/QR-page'
const domainName = publicIp

function newRow() {
    $('#newEntry').remove();
    $(".form-inline").append(
        '<input type="label" class="form-control col injectedForm" placeholder="Label">' +
        '<input type="link" class="form-control col injectedForm" value="https://">' +
        '<button id="newEntry" onclick="newRow()" class="btn btn-primary injectedForm">Add link</button>' +
        ' <div class="w-100 injectedForm"></div>'
    )
    $("#initButton").remove()
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
            validUrl = validUrl.concat(x + '&picture=');
        }
    })

    // Reset form
    $('#cardForm').trigger("reset");
    $('.injectedForm').remove();
    $("#cardForm").append(
        '<button id="initButton" onclick="newRow()" class="btn btn-primary">Add link</button>'
    )
    return validUrl
}


// Copyable qr-code
//Cross-browser function to select content
function SelectText(element) {
    var doc = document;
    if (doc.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

$(".copyable").click(function (e) {
    //Make the container Div contenteditable
    $(this).attr("contenteditable", true);
    //Select the image
    SelectText($(this).get(0));
    //Execute copy Command
    //Note: This will ONLY work directly inside a click listenner
    document.execCommand('copy');
    //Unselect the content
    window.getSelection().removeAllRanges();
    //Make the container Div uneditable again
    $(this).removeAttr("contenteditable");
    //Success!!
    alert("QR-code is copied to your clipboard!");
});