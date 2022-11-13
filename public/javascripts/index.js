'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();

    // ユーザ名が未入力でないかチェックする
    if (userName === '' || userName.match(/^[ 　\r\n\t]*$/)) {
        alert('ユーザ名を入力して下さい')
    }
    else {
        //form要素の送信
        $('form').submit();
    }
}
