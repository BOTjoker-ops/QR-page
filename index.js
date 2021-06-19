function newRow() {
    $('#newEntery').remove();
    $(".form-inline").append(
        '<input type="title" class="form-control col injectedForm" placeholder="Title">' +
        '<input type="link" class="form-control col injectedForm" placeholder="www">' +
        '<button id="newEntery" onclick="newRow()" class="btn btn-primary injectedForm">Add link</button>' +
        ' <div class="w-100"></div>'
    )
    $("#initButton").replaceWith(
        '<button id="submitButton" type="submit" onclick="submitForm()" class="btn btn-primary">Generate QR-code</button>'
    )
}

function submitForm() {
    var values = [];
    var inputs = $('input')
    .not(':input[type=button], :input[type=submit], :input[type=reset]');

    $(inputs).each(function (e) {
        var value = $(this).val();
        values.push(value);
    })
    console.log(values);
    $('#cardForm').trigger("reset");
    $('.injectedForm').remove();
    $("#submitButton").replaceWith(
       '<button id="newRowButton" onclick="newRow()" class="btn btn-primary mb-2">Add link</button>'
        )
    // generateQR(values);
}

