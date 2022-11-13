'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = document.getElementById('message').value;

    //空白であるかどうかチェック
    if (message == '' || message.match(/^[ 　\r\n\t]*$/)) {
        alert('メッセージを入力してください')
    }
    else {
        $('#memo').append('<p>' + '・' +
            '<span class="text col-xs-9">' + message + '             ' + '</span>' +
            '<button class="btn btn-danger btn-sm" onclick="deleteMemo(this)">メモ削除</button>' +
            '</span>' + '</p>');
        document.getElementById('message').value = '';
        /*
        // メモ内容を生成
        let dispMemo = '<p>' + userName +'さんのメモ : '+ message + '</p>';

        //前挿入or後ろ挿入分岐
        if (sortOld) {
            $('#thread').append(dispMemo)
        } else {
            $('#thread').prepend(dispMemo)
        }
        document.getElementById('message').value = '';
        */
    }
    return false;
}

function deleteMemo(button) {
    if (window.confirm('投稿を削除しますか？')) {
        let parent = button.parentNode;
        parent.remove();
    }
}

socket.on('ReceiveDeleatMemo', function deleatMemo(button) {
    const memo = document.getElementById('deleat').value;

    $('.memo').remove();
});