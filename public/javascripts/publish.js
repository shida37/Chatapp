'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = document.getElementById('message').value;

    //空白であるかどうかチェック
    if (message == '' || message.match(/^[ 　\r\n\t]*$/)) {
        alert('メッセージを入力してください')
    }
    else {
        // 投稿内容を送信
        socket.emit('sendMessageEvent', message, userName);
        document.getElementById('message').value = '';
    }
    return false;
}

// Enterキーで送信, Enter+Shiftで改行
function publishEnter() {
    if (event.keyCode == 13 && !event.shiftKey) {
        publish()
        message.value = ''
        event.preventDefault()
    }
}

// 定型文機能（いのくち担当）
function template(template) {
    document.getElementById("message").value = template;
}

// 順番を並び替える
let sortOld = false;
function oldSort() {

    const sample = document.getElementById("thread");
    let i = 0;

    for (i = 1; i < sample.children.length; i++) {
        sample.insertBefore(sample.children[i], sample.children[0]);
    }

    if (sortOld) {
        //新しい順のとき
        document.getElementById("sort").value = '古い順にする';
        sortOld = false;
    } else {
        //古い順のとき
        document.getElementById("sort").value = '新しい順にする';
        sortOld = true;
    }
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data, name) {

    const userName = $('#userName').val();

    let now = new Date()
    let nowYear = now.getFullYear()
    let nowMonth = (now.getMonth() + 1)
    let nowday = now.getDate()
    let nowhours = now.getHours()
    let nowMinutes = now.getMinutes()
    let nowtime = nowYear + "年" + nowMonth + "月" + nowday + "日" + nowhours + "時" + nowMinutes + "分"

    //送信元によりクラス分岐
    let userClass = '';
    if (userName === name) {
        userClass = 'me';
    } else {
        userClass = 'you';
    }

    //挿入要素生成
    let dispMessage = '<div id="chat">' +
        '<div class = "thread_name_' + userClass + '">' + name + 'さん</div>' +
        '<div class = "thread_body_' + userClass + '">' + data + '<div class="dispTime">' + nowtime + '</div></div>' +
        '<button class="btn btn-danger btn-sm" onclick="deleteMemo(this)">投稿削除</button>'
    '</div>'

    //個別の投稿削除(いとう担当)
    $("#button").on("click", function () {
        $("#chat").remove();
    });

    //前挿入or後ろ挿入分岐
    if (sortOld) {
        $('#thread').append(dispMessage)
    } else {
        $('#thread').prepend(dispMessage)
    }
});

function deleteThread(button) {
    if (window.confirm('投稿を削除しますか？')) {
        let parent = button.parentNode;
        parent.remove();
    }
}

function sakuzyo() {
    const thread_body_me = document.getElementById('deleat').value;
    const thread_name_me = document.getElementById('deleat').value;

    socket.emit('sakuzyoEvent', thread_body_me, thread_name_me);
    console.log('sakuzyo')
}

socket.on('sakuzyoEvent', function sakuzyo(button) {
    const thread_body_me = document.getElementById('deleat').value;
    const thread_name_me = document.getElementById('deleat').value;

    console.log(button)
    $('.thread_name_me').remove();
    $('.thread_body_me').remove();
    $('.thread_name_you').remove();
    $('.thread_body_you').remove();
});

