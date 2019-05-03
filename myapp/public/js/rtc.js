   // init 
   var appid = "724c0ce49bd945bdbbdcab243b9a10d1";
   var client = AgoraRTC.createClient({
       mode: "live",
       codec: "vp8"
   });
   var channel = "testChannel";
   var uid = 0;
   var token = "";
   // init client
   client.init(appid, function () {
       console.log("init success");
       client.join(token, channel, uid, function (uid) {
           var videoConfig = {
               video: true,
               audio: true
           };
           var localStream = AgoraRTC.createStream(videoConfig);
           localStream.setVideoProfile("720p");
           localStream.on("accessAllowed", function () {
               console.log("media access Allowed");
           });
           localStream.on("accessDenied", function () {
               console.log("Please check your access right");
           });
           localStream.on("stopScreenSharing", function () {
               //    alert("手动停止屏幕共享！！！");
           })
           localStream.on('audioMixingPlayed', function (evt) {
               console.log(evt.type);
           });
           //    local stream play itself
           //    localStream.play('agora_local');

       });
   }, function () {
       console.log("init failed");
   });
   client.on('stream-published', function (evt) {
       console.log("Publish local stream successfully");
   }, function (err) {
       console.log("Fail to publish local stream")
   });
   client.on('stream-added', function (evt) {
       remoteStream = evt.stream;
       console.log("Stream with uid " + remoteStream.getId() + " has been added");
   });
   client.on('stream-subscribed', function (evt) {
       remoteStream = evt.stream;
       console.log("Stream with uid " + remoteStream.getId() + " has been subscribed");
       // remoteStream.play("remote_stream")
   });