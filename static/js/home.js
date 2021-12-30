function state_politicians_detail() {
    $.ajax({
        url: "/politician-details",
        type: "GET",
        contentType: 'application/json',
        dataType: 'json',
        success: function (response) {
            window.location.href = response.redirect
        },
        error: function (error) {
            alert_message(500,error);
        }
    });
}