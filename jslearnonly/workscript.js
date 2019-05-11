var button1 = document.getElementById('btn_one');
var button2 = document.getElementById('btn_two');
var button3 = document.getElementById('btn_three');


button1.addEventListener('click', function () {
    //нашли наш контейнер
    var exemple;
     var ta = document.getElementById('one_block');
    //производим его выделение
    var range = document.createRange();
    range.selectNode(ta);
    window.getSelection().addRange(range);

    //пытаемся скопировать текст в буфер обмена
    try {
        document.execCommand('copy');
    } catch (err) {
        alert('Can`t copy, boss');
    }
    //очистим выделение текста, чтобы пользователь "не парился"
    window.getSelection().removeAllRanges();
});

button2.addEventListener('click', function () {
    //нашли наш контейнер
    var exemple;
     var ta = document.getElementById('two_block');
    //производим его выделение
    var range = document.createRange();
    range.selectNode(ta);
    window.getSelection().addRange(range);

    //пытаемся скопировать текст в буфер обмена
    try {
        document.execCommand('copy');
    } catch (err) {
        alert('Can`t copy, boss');
    }
    //очистим выделение текста, чтобы пользователь "не парился"
    window.getSelection().removeAllRanges();
});


button3.addEventListener('click', function () {
    //нашли наш контейнер
    var exemple;
     var ta = document.getElementById('three_block');
    //производим его выделение
    var range = document.createRange();
    range.selectNode(ta);
    window.getSelection().addRange(range);

    //пытаемся скопировать текст в буфер обмена
    try {
        document.execCommand('copy');
    } catch (err) {
        alert('Can`t copy, boss');
    }
    //очистим выделение текста, чтобы пользователь "не парился"
    window.getSelection().removeAllRanges();
});







// function copy(divID) {
//     let textarea = document.getElementById(divID);
//     textarea.select();
//     document.execCommand("copy");
// }



// $(document).ready(function (divID) {
//     $("#" + divID).click(function () {
//         $("#one_block").select();
//         document.execCommand('copy');
//     });
// })