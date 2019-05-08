function toggleDiv(divID) {
    $("#" + divID).fadeToggle(1000, function() {
        if ($(this).is(':visible')){
            var resultDiv =  divID;
        }
    });
}

