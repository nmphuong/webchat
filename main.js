const socket = io('https://webrtcv1demo.herokuapp.com/');
$('#divChat').hide();
socket.on('List_Online', arrUserInfo => {
        $('#divChat').show();
        $('#divRegister').hide();
        arrUserInfo.forEach(user => {
                const { ten, peerId } = user;
                $('#divUlUser').append(`<button type="button" class="buttonUser" id="${peerId}">${ten}</button>`);
                var my_peer = $('#my-peer').val();
                $(`#${my_peer}`).css("background-color", "#ff8490");
                $(`#${my_peer}`).prop('disabled', true);
        });
        socket.on('have_a_register', user => {
                const { ten, peerId } = user;
                $('#divUlUser').append(`<button type="button" class="buttonUser" id="${peerId}">${ten}</button>`);
        });
        socket.on('user_disconnect', peerId => {
                $(`#${peerId}`).remove();
        });
});
socket.on('register_fail', () => alert('Please choose another username!'));

function openStream() {
        const config = { audio: true, video: true };
        return navigator.mediaDevices.getUserMedia(config);
}

function playStream(idVideoTag, stream) {
        const video = document.getElementById(idVideoTag);
        video.srcObject = stream;
        video.play();
}

const peer = new Peer({ key: 'peerjs', host: 'mypeer33.herokuapp.com', secure: true, port: 443 });

peer.on('open', id => {
        $('#my-peer').val(id);
        $('#btnSignUp').click(() => {
                const username = $('#txtUsername').val();
                socket.emit('User_Register', { ten: username, peerId: id });
        });

});

$('#btnCall').click(() => {
        const id = $('#remoteId').val();
        openStream()
                .then(stream => {
                        playStream('localStream', stream);
                        const call = peer.call(id, stream);
                        call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
                });
});
var offer = 1;
var count_video = 1;
$('#ulUser').on('click', 'button', function () {
        $('#divUserScreen').append(`<div class="col-lg-4"><video id="remoteStream${count_video}" class="w-100" controls></video><br></div>`);
        const id = $(this).attr('id');

        console.log(id);

        let remote = "remoteStream" + count_video;
                openStream()
                        .then(stream => {
                                playStream('localStream', stream);
                                peer.call(id, stream).on('stream', remoteStream => playStream(remote, remoteStream));
                        });
                        $(`#${id}`).prop('disabled', true);
                        $(`#${id}`).css("background-color", "#acacac");
        offer = 2;
        count_video += 1;
});

var answer = 1;
peer.on('call', call => {
        $('#remove').remove();
        $('#remoteStream1').remove();
        $('#br').remove();
        $('#divUserScreen').append(`<div class="col-lg-4" id="remove"><video id="remoteStream1" class="w-100" controls></video><br id="br"></div>`);
        if (answer == 1) {
                $('.buttonUser').prop('disabled', true);
                $('.buttonUser').css("background-color", "#acacac");
                openStream()
                        .then(stream => {
                                playStream('remoteStream1', stream);
                                call.answer(stream);
                                call.on('stream', remoteStream => playStream('localStream', remoteStream));
                        });
        } else {
                $('.buttonUser').prop('disabled', true);
                $('.buttonUser').css("background-color", "#acacac");
                openStream()
                        .then(stream => {
                                playStream('remoteStream1', stream);
                                call.answer(stream);
                                call1.answer(stream);
                                call1.on('stream', remoteStream1 => playStream('localStream', remoteStream1));
                                call.on('stream', remoteStream => playStream('localStream', remoteStream));
                        });
        }
        answer = 2;
});