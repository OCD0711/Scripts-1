/*

TieBa Checkin Get Cookie.

About the author:
Telegram channel: @NobyDa
Telegram bots: @NobyDa_bot

说明: 当打开贴吧应用程序，点击“我的” ，如果通知获得 cookie 成功，你可以使用签入脚本。 因为脚本会自动判断 cookie 是否被更新，所以你不需要手动禁用它。
请注意，以下配置只是一个本地脚本配置，请将此脚本放入 Quantumult x / script，cookie 脚本只适用于中国苹果商店的贴吧应用程序

[rewrite_local]
https?:\/\/c\.tieba\.baidu\.com\/c\/s\/login url script-response-body TieBa_GetCookie_QX.js

# MITM = c.tieba.baidu.com

*/

var headerCookie = $request.headers["Cookie"];

if (headerCookie) {
  if ($prefs.valueForKey("CookieTB") != undefined) {
    if ($prefs.valueForKey("CookieTB") != headerCookie) {
      if (headerCookie.indexOf("BDUSS") != -1) {
        var cookie = $prefs.setValueForKey(headerCookie, "CookieTB");
        if (!cookie) {
          $notify("更新贴吧Cookie失败‼️", "", "");
        } else {
          $notify("更新贴吧Cookie成功 🎉", "", "");
        }
      }
    }else{
      console.log("更新贴吧签到cookie", "没有变化,无需更新")
    }
  } else {
    if (headerCookie.indexOf("BDUSS") != -1) {
      var cookie = $prefs.setValueForKey(headerCookie, "CookieTB");
      if (!cookie) {
        $notify("首次写入贴吧Cookie失败‼️", "", "");
      } else {
        $notify("首次写入贴吧Cookie成功 🎉", "", "");
      }
    }
  }
}
$done({})