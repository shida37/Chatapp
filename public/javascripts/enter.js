'use strict';



// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = $('#userName').val();

// 入室メッセージイベントを送信する
socket.emit('EnterName', userName);

// サーバから受信した入室メッセージを画面上に表示する
socket.on('ReceiveEnterName', function (name) {
    // 投稿内容を送信
    let dispInfo = '<p>' + name + 'が入室しました' + '</p>';
    let enterUser = '<p>' + name + '</p>'

    //前挿入or後ろ挿入分岐
    if (sortOld) {
        $('#thread').append(dispInfo)
        $('#userName1').append(enterUser)
    } else {
        $('#thread').prepend(dispInfo)
        $('#userName1').prepend(enterUser)
    }});