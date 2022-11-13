'use strict';

module.exports = function (socket) {

    // 退室メッセージをクライアントに送信する
    socket.on('ExitName', function (data) {
        socket.broadcast.emit('ReceiveExitName', data);
    });
};
