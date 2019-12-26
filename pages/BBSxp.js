var i=0;
var ii=3;
var kj=1;
var is_max=1;

function yuzi_img(e, o)
{
var zoom = parseInt(o.style.zoom, 10) || 100;
zoom += event.wheelDelta / 12;
if (zoom > 0) o.style.zoom = zoom + '%';
return false;
}

function min_yuzi(){
if(top!=self){
if(kj==1){parent.main_frame.rows='0,*';}
if(getCookie('frame')=='1'){parent.main_frame.rows='50%,*';}
}
}

function img(){if(top!=self){parent.main_frame.rows='*,20';parent.yuzi_frame.kj=1}}

function mid_f(){
if(top!=self){
if(is_max==0){
parent.main_frame.rows='0,*';is_max =1;
document.mid.title="ظاستعغا";
document.mid.src="images/bbs_mid.gif";
parent.yuzi_frame.kj=0;
}else{
parent.main_frame.rows='50%,*';is_max =0;
document.mid.title="حوثايتعش";
document.mid.src="images/bbs_most.gif";
parent.yuzi_frame.kj=0;
}
}
}

function heartBeat(){
diffY=document.body.scrollTop;
percent=.1*(diffY-lastScrollY);
if(percent>0)percent=Math.ceil(percent);
else percent=Math.floor(percent);
document.all.yuzi.style.pixelTop+=percent;
lastScrollY=lastScrollY+percent;
}


function ShowPost(id,username,content,posttime,honor,userface,sex,birthday,experience,membercode,faction,consort,money,postcount,regtime,userlife,usermail,userhome,sign)
{
document.write("<table class=a2 cellspacing=1 cellpadding=0 width=97% align=center border=0><tr><td valign=top height=1><table style=BORDER-COLLAPSE: cellspacing=0 cellpadding=3 width=100% border=0 height=1%>");
ii++
if(ii==5){ii=3}
document.write("<tr class=a"+ii+"><td valign=top width=140 rowspan=4 height=200>");
document.write("<table cellspacing=0 cellpadding=0 width=98% align=center border=0><tr><td>");
document.write("<table border=0 cellspacing=0 width=95%><tr><td align=center><font style=font-size:12pt>"+username+"</font><br>"+honor+"</td><td align=right valign=top width=40>");

if (""+sex+""!=''){
document.write("<img src=images/"+sex+".gif> ")
}

document.write(astro("+birthday+"));
document.write("</td></tr></table>");

if (getCookie('showface')!='0'){
document.write("<table width=98% border=0><tr><td align=middle><img src='"+userface+"' alt='بعلضة صعروضراممعلعرع' onload='javascript:if(this.width>100)this.width=100;if(this.height>100)this.height=100;'></td></tr></table>")
}

document.write("<br>"+level(experience,membercode,username,moderated)+levelimage+"<br>دةرعجة : "+levelname+"<br>");
if (""+faction+"" !="") {document.write("ضورذه:<a title=bilge style=cursor:hand onclick=\"javascript:open('faction.asp?menu=look&faction="+faction+"','','toolbar=no')\">"+faction+"</a><br>");}
document.write("تةجرعبة &nbsp;"+experience+" <br> صذل &nbsp;"+money+" <br>يوللانما  "+postcount+" صارحة<br>");
document.write("تعزعم ؤاقتع "+regtime+"<br>");
document.write("تةجرعبة: <img border=0 src=images/bar1.gif width="+userlife/2+" height=9 alt='"+userlife+"'><br>");
if(onlinelist.indexOf("|"+username+"|") == -1 ){
document.write(" هالةت: <img border=0 src=images/offline1.gif alt='يوق '><br>");
}else{
document.write("هالةت: <img border=0 src=images/online1.gif alt='مذنبةردة'><br>");
}

document.write("</td></tr></table></td><td valign=bottom align=middle rowspan=4><table height=100% class=a2 border=0 cellspacing=0 cellpadding=0 width=1><tr><td width=1></td></tr></table></td><td valign=top align=left colspan=3><table cellspacing=0 cellpadding=0 width=100% border=0>");
document.write("<tr><td><select onchange='bilge"+id+".style.fontSize=this.value' style='width: 40' dir=ltr><option value='9pt' selected>9</option><option value='12pt'>12</option><option value='14pt'>14</option><option value='18pt'>18</option><option value='36pt'>36</option></select> <a name="+id+"></a><a onclick=document.location='loading.htm' target=yuzi_frame href='Profile.asp?username="+username+"'><img alt='"+username+"نعث ماتعريالع  ' src=images/Profile.gif border=0></a> &nbsp;<a style=cursor:hand onclick=\"javascript:open('friend.asp?menu=post&incept="+username+"','','width=320,height=170')\"><img src=images/pm.gif border=0 alt='"+username+" ضة ظذحذر يوللاش '></a> &nbsp;<a href='friend.asp?menu=add&username="+username+"'><img alt='دوستلعشعش ' src=images/friend.gif border=0></a> &nbsp;<a onclick=document.location='loading.htm' target=yuzi_frame href='searchok.asp?search=author&searchxm=username&content="+username+"'><img alt='"+username+"نعث يوللانمعسعنع ظعزدةش' src=images/find.gif border=0></a> &nbsp;<a href=mailto:"+usermail+"><img alt='"+usermail+"' src=images/email.gif border=0></a> ");

if (userhome!="" && userhome!="http://"){
document.write(" &nbsp; <a target=_blank href="+userhome+"><img alt='"+userhome+"' src=images/homepage.gif border=0></a>&nbsp; ");
}
i=i+1
document.write("<a href='javascript:copyText(document.all.bilge"+id+")'><img alt='كأحىرىش' src=images/copy.gif border=0></a> &nbsp;<a onclick=document.location='loading.htm' target=yuzi_frame href='retopic.asp?id="+topicid+"&retopicid="+id+"&quote=1&topic="+topic+"'><img  src=images/reply.gif border=0 alt='ظعنكاس ظىحىن نةقعل قعلعش '></a> &nbsp;<a onclick=document.location='loading.htm' target=yuzi_frame href='retopic.asp?id="+topicid+"&topic="+topic+"'><img src=images/replynow.gif border=0 alt='ظعنكاس قايتذرذش '></a></td><td align=right>[ <font color=red><b>"+i+"</b>.قةؤةت]</font>&nbsp;</td></tr><tr valign=top><td colspan=2 style=wword-break:break-all><hr width=100% color=777777 size=1>");

if(badlist.indexOf(username) == -1 ){
document.write(ybbcode("<span id='bilge"+id+"'>"+content+"</span>"));
}else{
document.write("<span>==============================<br><font color=RED>بذ ظةزانعث يوللانمعسع سىزىلدع </font><br>==============================</span>")
}
document.write("</td></tr></table></td></tr><tr class=a"+ii+"><td valign=bottom>")
document.write("<table cellspacing=0 cellpadding=0 width=100%><tr><td align=right valign=bottom colspan=3>")
document.write("<hr width=100% color=777777 size=1></td></tr><tr class=a"+ii+"><td valign=bottom rowspan=3><a onclick=document.location='loading.htm' target=yuzi_frame href='EditTopic.asp?id="+topicid+"&retopicid="+id+"&topic="+topic+"'><img src=images/edit.gif border=0></a> <a target=yuzi_frame onclick=checkclick('Rastinla_Oquremsiz?')  href=manage.asp?menu=deltopic&id="+topicid+"&retopicid="+id+"><img src=images/del.gif border=0></a></td><td valign=bottom><img src=images/posttime.gif> ؤاقتع : <font dir=ltr>"+posttime+"</font></td><td valign=bottom><img src=images/ip.gif> IP:<a href=manage.asp?menu=lookip&id="+topicid+"&retopicid="+id+">خاتعرلةندع</a></td></tr></table></td></tr></table></td></tr></table>");
}



function ShowForum(ID,topic,newtopic,username,Views,icon,toptopic,locktopic,pollresult,goodtopic,replies,lastname,lasttime)
{
topic = topic.replace(key_word,"<font color=red>"+key_word+"<\/font>");
if (toptopic == 2) {reimage="<img src=images/top.gif>"}
else
if (toptopic == 1) {reimage="<img src=images/f_top.gif>"}
else
if (locktopic== 1) {reimage="<img src=images/f_locked.gif>"}
else
if (pollresult!= '') {reimage="<img src=images/f_poll.gif>"}
else
if ((replies>15) || (Views>150)) {reimage="<img src=images/f_hot.gif>"}
else
if (replies>0) {reimage="<img src=images/f_new.gif>"}
else{reimage="<img src=images/f_norm.gif>"}

if (goodtopic== 1) {reimage2="<img src=images/topicgood.gif>"}
else
if (username == cookieusername) {reimage2="<img src=images/my.gif>"}
else{reimage2=""}

if (replies>0) {reimage3=replies}
else{reimage3="-"}

document.write("<tr height=25><td align=middle width=3% class=a4>"+reimage+"</td>");
document.write("<td width=3% class=a3 align=center>"+reimage2+"</td>");
document.write("<td class=a4 width=45%>&nbsp;<img loaded=no src=images/plus.gif id=followImg"+ID+" style=cursor:hand; onclick=loadThreadFollow("+ID+")> <a target=_blank href=ShowPost.htm?id="+ID+"><img border=0 src=images/brow/"+icon+".gif></a> <a onclick=min_yuzi() target=message href=ShowPost.asp?id="+ID+">"+topic+"</a>");

if (replies > 30) {
var topicpage=""
var tol=replies/30+1;

for (var i=1; i < tol; i++) {
if(i<4 || i>=tol-2){
topicpage=topicpage+"<a onclick=min_yuzi() target=message href=ShowPost.asp?id="+ID+"&topage="+ i +">"+ i +"</a>";
}
if (i >= tol-3  && i<tol-2 && i>3){topicpage=topicpage+" ... ";}
}
document.write(" ( <img src=images/multipage.gif> "+topicpage+")");
}

document.write(" "+newtopic+"</td><td align=middle width=9% class=a3><a href=Profile.asp?username="+username+">"+username+"</a></td><td align=middle width=6% class=a4>"+reimage3+"</td><td align=middle width=7% class=a3>"+Views+"</td><td width=27% class=a4>&nbsp;<a href=Profile.asp?username="+lastname+">"+lastname+"</a>&nbsp; &nbsp;<font dir=ltr>"+lasttime+" </font></td></tr>");
document.write("<tr height=25 style=display:none id=follow"+ID+"><td width=3% class=a4> </td><td width=3% class=a3> </td><td id=followTd"+ID+" align=left class=a4 width=94% colspan=5><div onclick=loadThreadFollow("+ID+")><table width=100% cellpadding=10><tr><td width=100%>ظئحعلعؤاتعدذ  . . . </td></tr></table></div></td></tr>");
}


function ShowList(pass,id,bbsname,icon,intro,moderated,today,toltopic,tolrestore,lasttime,lastname,lasttopic,password)
{


document.write("<tr><td width=5% align=middle bgcolor=FFFFFF>")

if(password==1){
document.write("<img src=images/pass4.gif>")
}else{
document.write("<img src=images/pass"+pass+".gif>")
}

document.write("</td><td bgcolor=FFFFFF>")

document.write("<table border=0 width=100% cellspacing=0 cellpadding=3><tr><td valign=top><a href=ShowForum.asp?forumid="+id+">"+bbsname+"</a></td><td rowspan=2 align=right>")

if (icon!=''){
document.write("<img src="+icon+" onload='javascript:if(this.width>100)this.width=100;if(this.height>60)this.height=60;'>")
}

document.write("</td><td rowspan=2 width=35%>تعما:<font class=9>"+lasttopic+"</font><br>يوللعغذحع:<a href=Profile.asp?username="+lastname+" title='بعلضة صعروضراممعلعرع'>"+lastname+"</a><br>ؤاقتع:<font dir=ltr title=2004.02.05>"+lasttime+"</font></td></tr><tr><td>"+intro+"</td></tr><tr class=a3><td colspan=3><table border=0 width=100% cellspacing=0><tr><td width=40%  title=htp://www.bilge.cn> باشقذرغذحع :")

var list= moderated.split ('|'); 
for(i=0;i<list.length;i=i+1) {
if (list[i] !=''){
document.write("<a href=profile.asp?username="+list[i]+">"+list[i]+"</a> ")
}
}

document.write("</td><td width=20%> بىضىنكع تعما : <font color=red>"+today+"</font></td><td width=20%>ظومومع تعما : "+toltopic+"</td><td width=20%>يوللانما : "+tolrestore+" صارحة</td></tr></table></td></tr></table></td></tr>")


}

function loadThreadFollow(ino,online){
	var targetImg =eval("followImg" + ino);
	var targetDiv =eval("follow" + ino);
		if (targetDiv.style.display!='block'){
			targetDiv.style.display="block";
			targetImg.src="images/minus.gif";
			if (targetImg.loaded=="no"){document.frames["hiddenframe"].location.replace("loading.asp?id="+ino+"&forumid="+online+"");}
		}else{
			targetDiv.style.display="none";
			targetImg.src="images/plus.gif";
		}
}
document.write("<iframe height=0 width=0 name=hiddenframe></iframe>")

tPopWait=0;
tPopShow=5000;
showPopStep=20;
popOpacity=90;

sPop=null;
curShow=null;
tFadeOut=null;
tFadeIn=null;
tFadeWaiting=null;

document.write("<style type='text/css'id='defaultPopStyle'>");
document.write(".cPopText {background-color: #f8f8f3; color:#030303;border: 1px #000000 solid; padding-right: 4px; padding-left: 4px;  padding-top: 3px; padding-bottom: 1px; filter: Alpha(Opacity=0)}");
document.write("</style>");
document.write("<div  dir=rtl id='dypopLayer' style='position:absolute;z-index:1000;' class='cPopText'></div>");

function showPopupText(){
var o=event.srcElement;
	MouseX=event.x;
	MouseY=event.y;
	if(o.alt!=null && o.alt!=""){o.dypop=o.alt;o.alt=""};
        if(o.title!=null && o.title!=""){o.dypop=o.title;o.title=""};
	if(o.dypop!=sPop) {
			sPop=o.dypop;
			clearTimeout(curShow);
			clearTimeout(tFadeOut);
			clearTimeout(tFadeIn);
			clearTimeout(tFadeWaiting);	
			if(sPop==null || sPop=="") {
				dypopLayer.innerHTML="";
				dypopLayer.style.filter="Alpha()";
				dypopLayer.filters.Alpha.opacity=0;	
				}
			else {
				if(o.dyclass!=null) popStyle=o.dyclass 
					else popStyle="cPopText";
				curShow=setTimeout("showIt()",tPopWait);
			}
	}
}



function showIt(){
		dypopLayer.className=popStyle;
		dypopLayer.innerHTML=sPop;
		popWidth=dypopLayer.clientWidth;
		popHeight=dypopLayer.clientHeight;
		if(MouseX+12+popWidth>document.body.clientWidth) popLeftAdjust=-popWidth-30
			else popLeftAdjust=0;
		if(MouseY+12+popHeight>document.body.clientHeight) popTopAdjust=-popHeight-30
			else popTopAdjust=0;
		dypopLayer.style.left=MouseX+12+document.body.scrollLeft+popLeftAdjust;
		dypopLayer.style.top=MouseY+12+document.body.scrollTop+popTopAdjust;
		dypopLayer.style.filter="Alpha(Opacity=0)";
		fadeOut();
}

function fadeOut(){
	if(dypopLayer.filters.Alpha.opacity<popOpacity) {
		dypopLayer.filters.Alpha.opacity+=showPopStep;
		tFadeOut=setTimeout("fadeOut()",1);
		}
		else {
			dypopLayer.filters.Alpha.opacity=popOpacity;
			tFadeWaiting=setTimeout("fadeIn()",tPopShow);
			}
}

function fadeIn(){
	if(dypopLayer.filters.Alpha.opacity>0) {
		dypopLayer.filters.Alpha.opacity-=1;
		tFadeIn=setTimeout("fadeIn()",1);
		}
}
document.onmouseover=showPopupText;

