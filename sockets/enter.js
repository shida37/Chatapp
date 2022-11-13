'use strict';

module.exports = function (socket) {

    // 入室メッセージをクライアントに送信する
    socket.on('EnterName', function (data) {
        socket.broadcast.emit('ReceiveEnterName', data);
    });
};