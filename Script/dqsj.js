/*
DaQianShiJie unlock

QX：
^https:\/\/api\.mvmtv\.com\/index\.php.*(c=user.*a=info|a=addr.*vid=.*) url script-response-body dqsj.js

Surge & QX MITM = api.mvmtv.com
*/

let obj = JSON.parse($response.body);
let url = $request.url;
const play = 'vid=';
const vip = 'c=user';

if (url.indexOf(vip) != -1) {
       obj.data["is_expire"] = 5;
       } else if (url.indexOf(play) != -1) {
                 let playurl = obj.data.play[0].mp4
                 obj.data.play[0].sd = playurl;
                 obj.data.play[0].fhd = playurl;
                 obj.data.play[0].hd = playurl;
} 
$done({body: JSON.stringify(obj)});

