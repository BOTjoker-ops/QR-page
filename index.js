function newRow() {
    $('#newEntery').remove();
    $(".form-inline").append(
        '<input type="title" class="form-control mb-2 mr-sm-2 injectedForm" placeholder="Title">' +
        '<div class="input-group-text injectedForm">@</div>' +
        '<input type="link" class="form-control injectedForm" placeholder="www">' +
        '<button id="newEntery" onclick="newRow()" class="btn btn-primary mb-2 injectedForm">Add link</button>'
    )
    $("#newRowButton").replaceWith(
        '<button id="submitButton" type="submit" onclick="submitForm()" class="btn btn-primary mb-2">Submit</button>'
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

}