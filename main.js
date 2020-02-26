// const socket = io('https://webrtcv1demo.herokuapp.com/');
// $('#divChat').hide();
// //$('#phuong').hide();
// socket.on('List_Online', arrUserInfo => {

//         //$('#phuong').show();
//         $('#divRegister').hide();
//         //$('#phuong').click(() => {
//         $('#divChat').show();
//         //$('#phuong').hide();
//         //});
//         arrUserInfo.forEach(user => {
//                 const { ten, peerId } = user;
//                 $('#divUlUser').append(`<button type="button" class="buttonUser" id="${peerId}">${ten}</button>`);
//                 var my_peer = $('#my-peer').val();
//                 PeerIdBoss = my_peer;
//                 $(`#${my_peer}`).css("background-color", "#ff8490");
//                 $(`#${my_peer}`).prop('disabled', true);
//         });
//         socket.on('have_a_register', user => {
//                 //$('#phuong').click(() => {
//                 const { ten, peerId } = user;
//                 $('#divUlUser').append(`<button type="button" class="buttonUser" id="${peerId}">${ten}</button>`);
//                 //});
//                 // $('#refresh').click(() => {
//                 //         const { ten, peerId } = user;
//                 //         $('#divUlUser').append(`<button type="button" class="buttonUser" id="${peerId}">${ten}</button>`);
//                 // });
//         });
//         socket.on('user_disconnect', peerId => {
//                 $(`#${peerId}`).remove();
//                 $(`.video${peerId}`).remove();
//                 $(`.div${peerId}`).remove();
//                 $(`.br${peerId}`).remove();
//         });
// });
// socket.on('register_fail', () => alert('Please choose another username!'));

// function openStream() {
//         const config = { audio: true, video: true };
//         return navigator.mediaDevices.getUserMedia(config);
// }

// function playStream(idVideoTag, stream) {
//         const video = document.getElementById(idVideoTag);
//         video.srcObject = stream;
//         video.play();
// }

// const peer = new Peer({ key: 'peerjs', host: 'mypeer33.herokuapp.com', secure: true, port: 443 });

// peer.on('open', id => {
//         $('#my-peer').val(id);
//         $('#btnSignUp').click(() => {
//                 const username = $('#txtUsername').val();
//                 socket.emit('User_Register', { ten: username, peerId: id });
//         });

// });

// $('#btnCall').click(() => {
//         const id = $('#remoteId').val();
//         openStream()
//                 .then(stream => {
//                         playStream('localStream', stream);
//                         const call = peer.call(id, stream);
//                         call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
//                 });
// });
// var offer = 1;
// var count_video = 1;
// $('#ulUser').on('click', 'button', function () {
//         const id = $(this).attr('id');
//         $('#divUserScreen').append(`<div class="col-lg-2 col-2 div${id}"><video id="remoteStream${count_video}" class="w-100 video${id}" controls></video><br class="br${id}"></div>`);

//         let remote = "remoteStream" + count_video;
//         openStream()
//                 .then(stream => {
//                         playStream('localStream', stream);
//                         peer.call(id, stream).on('stream', remoteStream => playStream(remote, remoteStream));
//                 });
//         $(`#${id}`).prop('disabled', true);
//         $(`#${id}`).css("background-color", "#acacac");
//         offer = 2;
//         count_video += 1;
// });

// var answer = 1;
// peer.on('call', call => {
//         $('#remove').remove();
//         $('#remoteStream1').remove();
//         $('#br').remove();
//         $('#divUserScreen').append(`<div class="col-lg-2 col-2" id="remove"><div class="content-video w-100"><video id="remoteStream${answer}" class="w-100 rounded-circle" controls></video></div><br id="br"></div>`);
//         $('.buttonUser').prop('disabled', true);
//         $('.buttonUser').css("background-color", "#acacac");
//         openStream()
//                 .then(stream => {
//                         playStream('remoteStream1', stream);
//                         call.answer(stream);
//                         call.on('stream', remoteStream => playStream('localStream', remoteStream));
//                 });
//         answer = 2;
// });



// const socket = io('https://webrtcv1demo.herokuapp.com/');
// $('#divChat').hide();
// //$('#phuong').hide();
// socket.on('List_Online', arrUserInfo => {

//         //$('#phuong').show();
//         $('#divRegister').hide();
//         //$('#phuong').click(() => {
//         $('#divChat').show();
//         //$('#phuong').hide();
//         //});
//         arrUserInfo.forEach(user => {
//                 const { ten, peerId } = user;
//                 $('#divUlUser').append(`<button type="button" class="buttonUser" id="${peerId}">${ten}</button>`);
//                 var my_peer = $('#my-peer').val();
//                 PeerIdBoss = my_peer;
//                 $(`#${my_peer}`).css("background-color", "#ff8490");
//                 $(`#${my_peer}`).prop('disabled', true);
//         });
//         socket.on('have_a_register', user => {
//                 //$('#phuong').click(() => {
//                 const { ten, peerId } = user;
//                 $('#divUlUser').append(`<button type="button" class="buttonUser" id="${peerId}">${ten}</button>`);
//                 //});
//                 // $('#refresh').click(() => {
//                 //         const { ten, peerId } = user;
//                 //         $('#divUlUser').append(`<button type="button" class="buttonUser" id="${peerId}">${ten}</button>`);
//                 // });
//         });
//         socket.on('user_disconnect', peerId => {
//                 $(`#${peerId}`).remove();
//                 $(`.video${peerId}`).remove();
//                 $(`.div${peerId}`).remove();
//                 $(`.br${peerId}`).remove();
//         });
// });
// socket.on('register_fail', () => alert('Please choose another username!'));

// function openStream() {
//         const config = { audio: true, video: true };
//         return navigator.mediaDevices.getUserMedia(config);
// }

// function playStream(idVideoTag, stream) {
//         const video = document.getElementById(idVideoTag);
//         video.srcObject = stream;
//         video.play();
// }

// const peer = new Peer({ key: 'peerjs', host: 'mypeer33.herokuapp.com', secure: true, port: 443 });

// peer.on('open', id => {
//         $('#my-peer').val(id);
//         $('#btnSignUp').click(() => {
//                 const username = $('#txtUsername').val();
//                 socket.emit('User_Register', { ten: username, peerId: id });
//         });

// });

// $('#btnCall').click(() => {
//         const id = $('#remoteId').val();
//         openStream()
//                 .then(stream => {
//                         playStream('localStream', stream);
//                         const call = peer.call(id, stream);
//                         call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
//                 });
// });
// var offer = 1;
// var count_video = 1;
// $('#ulUser').on('click', 'button', function () {
//         const id = $(this).attr('id');
//         $('#divUserScreen').append(`<div class="col-lg-2 col-2 div${id}"><video id="remoteStream${count_video}" class="w-100 video${id}" controls></video><br class="br${id}"></div>`);

//         let remote = "remoteStream" + count_video;
//         openStream()
//                 .then(stream => {
//                         playStream('localStream', stream);
//                         peer.call(id, stream).on('stream', remoteStream => playStream(remote, remoteStream));
//                 });
//         $(`#${id}`).prop('disabled', true);
//         $(`#${id}`).css("background-color", "#acacac");
//         offer = 2;
//         count_video += 1;
// });

// var answer = 1;
// peer.on('call', call => {
//         $('#remove').remove();
//         $('#remoteStream1').remove();
//         $('#br').remove();
//         $('#divUserScreen').append(`<div class="col-lg-2 col-2" id="remove"><div class="content-video w-100"><video id="remoteStream${answer}" class="w-100 rounded-circle" controls></video></div><br id="br"></div>`);
//         $('.buttonUser').prop('disabled', true);
//         $('.buttonUser').css("background-color", "#acacac");
//         openStream()
//                 .then(stream => {
//                         playStream('remoteStream1', stream);
//                         call.answer(stream);
//                         call.on('stream', remoteStream => playStream('localStream', remoteStream));
//                 });
//         answer = 2;
// });


const socket = io('https://webrtcv1demo.herokuapp.com/');
$('#divChat').hide();
$('#divRegister').show();

socket.on('List_Online', arrUserInfo => {
        $('#divRegister').hide();
        $('#divChat').show();
        arrUserInfo.forEach(user => {
                const { ten, peerId } = user;
                $('#divForUser').append(`<div class="col-2 p-1 screenUserRemote" id="screenUserRemote${peerId}"><div class="w-100" id="childScreenUserRemote${peerId}"><div class="screenForVideo${peerId}"><video id="remoteStream${peerId}" controls class="w-100 rounded" style="height: 50px;"></video></div><button id="${peerId}"><small class="small${peerId}" id="${peerId}">${ten}</small></button></div></div>`);
        });
        socket.on('have_a_register', user => {
                const { ten, peerId } = user;
                $('#divForUser').append(`<div class="col-2 p-1 screenUserRemote" id="screenUserRemote${peerId}"><div class="w-100" id="childScreenUserRemote${peerId}"><div class="screenForVideo${peerId}"><video id="remoteStream${peerId}" controls class="w-100 rounded" style="height: 50px;"></video></div><button id="${peerId}"><small class="small${peerId}" id="${peerId}">${ten}</small></button></div></div>`);
        });
        socket.on('user_disconnect', peerId => {
                $(`#remoteStream${peerId}`).remove();
                $(`#screenUserRemote${peerId}`).remove();
                $(`#childScreenUserRemote${peerId}`).remove();
                $(`#screenForVideo${peerId}`).remove();
                $(`#userNameLogged${peerId}`).remove();
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
        $('#remoteId').val(id);
        $('#btnRegister').click(() => {
                const username = $('#txtUsernameRegister').val();
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

$('#divForUser').on('click', 'button', function () {
        let id = $(this).attr('id');
        let remoteStreamUserId = 'remoteStream' + id;
        openStream()
                .then(stream => {
                        playStream('localStream', stream);
                        peer.call(id, stream).on('stream', remoteStream => playStream(remoteStreamUserId, remoteStream));
                });
});
peer.on('call', call => {
        let remoteStream_id = "remoteStream" + call.provider.socket.id;
        openStream()
                .then(stream => {
                        playStream(remoteStream_id, stream);
                        call.answer(stream);
                        call.on('stream', remoteStream => playStream('localStream', remoteStream));
                });
});