const socket = io('https://webrtcv1demo.herokuapp.com/');
//div chat an khi chua nhap username
$('#divChat').hide();
socket.on('List_Online', arrUserInfo => {

        //Show div chat va hide div dang ky khi da dang ki username
        $('#divChat').show();
        $('#divRegister').hide();
        arrUserInfo.forEach(user => {
                const { ten, peerId } = user;
                $('#ulUser').append(`<button type="button" class="buttonUser" id="${peerId}">${ten}</button>`);
                
                var my_peer = $('#my-peer').val();
                $(`#${my_peer}`).css("background-color", "#ff8490");
                $(`#${my_peer}`).prop('disabled', true);
        });
        socket.on('have_a_register', user => {
                const { ten, peerId } = user;
                $('#ulUser').append(`<button type="button" class="buttonUser" id="${peerId}">${ten}</button>`);
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
// openStream()
// .then(stream => playStream('localStream', stream));

const peer = new Peer({ key: 'peerjs', host: 'mypeer33.herokuapp.com', secure: true, port: 443 });

peer.on('open', id => {
        $('#my-peer').val(id);
        $('#btnSignUp').click(() => {
                const username = $('#txtUsername').val();
                socket.emit('User_Register', { ten: username, peerId: id });
        });

});

//Local
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
// var arrId = [];
// var arrStream = [];
// var arrRemoteStream = [];
$('#ulUser').on('click', 'button', function () {
        $('#divChat').append(`<div class="col-lg-3"><video id="remoteStream${count_video}" class="w-100" controls></video><br></div>`);
        const id = $(this).attr('id');
        //arrId.push(id);
        //arrStream.push('stream'+count_video);
        //arrRemoteStream.push('remoteStream'+count_video);

        let remote = "remoteStream" + count_video;
                openStream()
                        .then(stream => {
                                playStream('localStream', stream);
                                peer.call(id, stream).on('stream', remoteStream => playStream(remote, remoteStream));
                        });
                        $(`#${id}`).prop('disabled', true);
                        $(`#${id}`).css("background-color", "#acacac");
        /*if (offer == 1) {
                openStream()
                        .then(stream => {
                                playStream('localStream', stream);
                                let call = peer.call(id, stream);
                                call.on('stream', remoteStream => playStream('remoteStream1', remoteStream));
                        });
        } else {
                let remote = "remoteStream"+count_video;
                openStream()
                        .then(stream => {
                                peer.call(id, stream).on('stream', remoteStream => playStream(remote, remoteStream));
                        });
        }*/
        offer = 2;
        count_video += 1;
});

var answer = 1;
//Remote
// peer.on('call', call => {
//         $('#divChat').append(`<div class="col-lg-3"><video id="remoteStream1" class="w-100" controls></video><br></div>`);
//         if (answer == 1) {
//                 openStream()
//                         .then(stream => {
//                                 playStream('localStream', stream);
//                                 call.answer(stream);
//                                 call.on('stream', remoteStream => playStream('remoteStream1', remoteStream));
//                         });
//         } else {
//                 openStream()
//                         .then(stream => {
//                                 playStream('localStream', stream);
//                                 call.answer(stream);
//                                 call1.answer(stream);
//                                 call1.on('stream', remoteStream1 => playStream('remoteStream1', remoteStream1));
//                                 call.on('stream', remoteStream => playStream('remoteStream2', remoteStream));
//                         });
//         }
//         answer = 2;
// });
peer.on('call', call => {
        $('#remove').remove();
        $('#remoteStream1').remove();
        $('#br').remove();
        $('#divChat').append(`<div class="col-lg-12" id="remove"><video id="remoteStream1" class="w-100" controls></video><br id="br"></div>`);
        if (answer == 1) {
                openStream()
                        .then(stream => {
                                playStream('localStream', stream);
                                call.answer(stream);
                                call.on('stream', remoteStream => playStream('remoteStream1', remoteStream));
                        });
        } else {
                openStream()
                        .then(stream => {
                                playStream('localStream', stream);
                                call.answer(stream);
                                call1.answer(stream);
                                call1.on('stream', remoteStream1 => playStream('remoteStream1', remoteStream1));
                                call.on('stream', remoteStream => playStream('remoteStream1', remoteStream));
                        });
        }
        answer = 2;
});