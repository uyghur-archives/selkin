function ybbcode(temp) {

if (badwords!=''){    
var badword= badwords.split ('|'); 
for(i=0;i<badword.length;i=i+1) {
if (badword[i] !=""){temp = temp.replace(badword[i],"****");}
}
}

if (getCookie('ybbcode')!='0'){ //YBB-on-off
temp = temp.replace(/&amp;/ig,"&");
temp = temp.replace(/  /ig," ");
temp = temp.replace(/\[توم\]/ig,"<b>");
temp = temp.replace(/\[\/توم\]/ig,"<\/b>");
temp = temp.replace(/\[\/يانتذ\]/ig,"<i>");
temp = temp.replace(/\[\/يانتذ\]/ig,"<\/i>");
temp = temp.replace(/\[ظاسعزعق\]/ig,"<u>");
temp = temp.replace(/\[\/ظاسعزعق\]/ig,"<\/u>");
temp = temp.replace(/\[ظوسعزعق\]/ig,"<strike>");
temp = temp.replace(/\[\/ظوسعزعق\]/ig,"<\/strike>");
temp = temp.replace(/\[ظوتتذرا\]/ig,"<center>");
temp = temp.replace(/\[\/ظوتتذرا\]/ig,"<\/center>");
temp = temp.replace(/\[ظاقما\]/ig,"<marquee direction=right>");
temp = temp.replace(/\[\/ظاقما\]/ig,"<\/marquee>");
temp = temp.replace(/(\[font=)([^.:;`'"=\]]*)(\])/ig,"<FONT face='$2'>");
temp = temp.replace(/\[\/font\]/ig,"<\/FONT>");
temp = temp.replace(/(\[رةث=)([^.:;`'"=\]]*)(\])/ig,"<FONT COLOR='$2'>");
temp = temp.replace(/\[\/رةث]/ig,"<\/FONT>");
temp = temp.replace(/(\[size=)([0-9]*)(\])/ig,"<FONT size='$2'>");
temp = temp.replace(/\[\/size\]/ig,"<\/FONT>");
temp = temp.replace(/(\[ظذلعنعش\])([^]]*)(\[\/ظذلعنعش\])/ig,"<A TARGET=_blank HREF='$2'>$2</A>");
temp = temp.replace(/(\[ظذلعنعش=)([^]]*)(\])/ig,"<A TARGET=_blank HREF='$2'>");
temp = temp.replace(/\[\/ظذلعنعش\]/ig,"<\/A>");
temp = temp.replace(/(\[مةكتىص\])(\S+\@[^]]*)(\[\/مةكتىص\])/ig,"<a href=mailto:$2>$2</a>");
temp = temp.replace(/(\[كود\])([^]]*)(\[\/كود\])/ig,"<fieldset style='WIDTH:80%' align=center><legend align=right>ظاستعدعكعسع صعروضرامما كودع</legend><div dir=ltr>$2</div></fieldset>");
temp = temp.replace(/(\[شئظعر\])([^]]*)(\[\/شئظعر\])/ig,"	<table border='0' width='450' cellspacing='0' cellpadding='0' dir='rtl' align='center'><tr><td width='41'><img border='0' src='pic/ou.gif' width='41' height='47'></td><td background='pic/u.gif' align='center' style='font-family:; font-size: 14pt'>"+topic+"</td><td width='41'><img border='0' src='pic/su.gif' width='41' height='47'></td></tr><tr><td width='41' background='pic/o.gif'></td><td align='center'>$2</td><td width='41' background='pic/s.gif'></td></tr><tr><td width='41'><img border='0' src='pic/oa.gif' width='41' height='47'></td><td background='pic/t.gif'></td><td width='41'><img border='0' src='pic/sa.gif' width='41' height='47'></td></tr></table>");
temp = temp.replace(/(\[نةقعل\])(.*)(\[\/نةقعل\])/ig,"<fieldset style='WIDTH:85%' align=center><legend align=right>ظاستعدعكعسع نةقعل قعلعنغان مةزمذن </legend>$2</fieldset>");

temp = temp.replace(/(\[RM=([0-9]*)\,([0-9]*)\])([^]]*)(\[\/RM\])/ig,"<OBJECT classid=clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA width=$2 height=$3><PARAM NAME=SRC VALUE=$6><PARAM NAME=CONSOLE VALUE=Clip1><PARAM NAME=CONTROLS VALUE=imagewindow><PARAM NAME=AUTOSTART VALUE=true><\/OBJECT><br><OBJECT classid=CLSID:CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA height=60 width=500><PARAM NAME=SRC VALUE=$4><PARAM NAME=CONTROLS VALUE=ControlPanel,StatusBar><PARAM NAME=CONSOLE VALUE=Clip1><\/OBJECT>");
temp = temp.replace(/(\[MP=([0-9]*)\,([0-9]*)\])([^]]*)(\[\/MP\])/ig,"<object classid=CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95 width=$2 height=$3><param name=ShowStatusBar value=-1><param name=Filename value=$4><\/object>");
}

if (getCookie('ybbflash')!='0'){  //[FLASH]_on-off
temp = temp.replace(/(\[فعلةش=([0-9]*)\,([0-9]*)\])([^]]*)(\[\/فعلةش\])/ig,"<embed width=$2 height=$3 src='$4' wmode=transparent>");
}

if (getCookie('ybbimg')!='0'){  //[IMG]_on-off
temp = temp.replace(/(\[رةسعم\])([^]]*)(\[\/رةسعم\])/ig,"<img border=0 src='$2' onmousewheel='return yuzi_img(event,this)' onload='javascript:if(this.width>body.clientHeight)this.width=body.clientHeight'> ");
}



if (getCookie('ybbbrow')!='0'){  //Ipada_on-off
temp = temp.replace(/(\[em)([0-9]*)(\])/ig,"<IMG border=0 SRC=images/Emotions/$2.gif>");
}

//URL_ukux
temp = temp.replace(/([^]='])(| |<br>)((http|https|ftp|rtsp|mms):(\/\/|\\\\)[A-Za-z0-9\./=\?%\-&_~`@[\]\':+!]+)(| |<br>)/ig,"$1$2<A TARGET=_blank HREF='$3'>$3</A>");


return (temp);
}


function level(experience,membercode,username,moderated)
{
if (membercode=='0'){levelname="تةستعقلانمعغان";levelimage="<img src=images/level1.gif>";}
else
if (membercode=='2'){levelname="ظالاهعدة تةكلعص";levelimage="<img src=images/level14.gif>";}
else
if (membercode=='4'){levelname="باشقذر غذحع";levelimage="<img src=images/level16.gif>";}
else
if (membercode=='5'){levelname="مذنبةر باشلعقع";levelimage="<img src=images/level17.gif>";}
else
if(moderated.indexOf("|"+username+"|") != -1 && moderated!=""){levelname="مذنازعرة باشلعقع";levelimage="<img src=images/level15.gif>";}
else
if (experience< 100){levelname="يعثع";levelimage="<img src=images/level1.gif>";}
else
if (experience< 501){levelname="دةسلةصكع";levelimage="<img src=images/level2.gif>";}
else
if (experience< 1301){levelname="ظادةتتعكع";levelimage="<img src=images/level3.gif>";}
else
if (experience< 2601){levelname="ظوتتذرا";levelimage="<img src=images/level4.gif>";}
else
if (experience< 4501){levelname="ظالع";levelimage="<img src=images/level5.gif>";}
else
if (experience< 7001){levelname="كونا";levelimage="<img src=images/level6.gif>";}
else
if (experience< 11001){levelname="معس";levelimage="<img src=images/level7.gif>";}
else
if (experience< 19001){levelname="كىمىش";levelimage="<img src=images/level8.gif>";}
else
if (experience< 30001){levelname="ظالتذن";levelimage="<img src=images/level9.gif>";}
else
if (experience< 45001){levelname="ظاق ظالتذن";levelimage="<img src=images/level10.gif>";}
else
if (experience< 65001){levelname="ظالماس";levelimage="<img src=images/level11.gif>";}
else
if (experience< 90001){levelname="كأص هوسذللذق";levelimage="<img src=images/level12.gif>";}
else
if (experience> 90000){levelname="ظةدعب";levelimage="<img src=images/level13.gif>";}
return('');
}

//COOKIE
function getCookie (CookieName) { 
var CookieString = document.cookie; 
var CookieSet = CookieString.split (';'); 
var SetSize = CookieSet.length; 
var CookiePieces 
var ReturnValue = ""; 
var x = 0; 
for (x = 0; ((x < SetSize) && (ReturnValue == "")); x++) { 
CookiePieces = CookieSet[x].split ('='); 

if (CookiePieces[0].substring (0,1) == ' ') { 
CookiePieces[0] = CookiePieces[0].substring (1, CookiePieces[0].length); 
}

if (CookiePieces[0] == CookieName) {
ReturnValue = CookiePieces[1];
var value =ReturnValue
}


}
return value;
}