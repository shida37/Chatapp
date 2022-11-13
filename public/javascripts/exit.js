'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = $('#userName').val();
    // 退室メッセージイベントを送信する
    socket.emit('ExitName', userName);
    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('ReceiveExitName', function (name) {
    // 投稿内容を送信
    let dispInfo = '<p>' + name + 'が退室しました' + '</p>';

    //前挿入or後ろ挿入分岐
    if (sortOld) {
        $('#thread').append(dispInfo)
    } else {
        $('#thread').prepend(dispInfo)
    }});
