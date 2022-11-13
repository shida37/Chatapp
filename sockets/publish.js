'use strict';

module.exports = function (socket, io) {

    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data, name) {
        if (!data) {
            return;
        }

        console.log('クライアントの入力値：' + data);

        // 全クライアントが受信するメッセージ表示イベント（receiveMessageEvent）を送信する
        io.sockets.emit(`receiveMessageEvent`, data, name);
    });

    socket.on('sakuzyoEvent', function (sakuzyo) {
        if (!sakuzyo) {
            return;
        }

        console.log(sakuzyo);
        io.sockets.emit(`sakuzyoEvent`, sakuzyo);
    });

    socket.on('deleatMemo', function (deleatMemo) {
        if (!deleatMemo) {
            return;
        }
        io.sockets.emit(`ReceiveDeleatMemo`, deleatMemo);
    });
};


