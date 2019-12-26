function lann_r(lzzo)			
{
  lzzo.style.backgroundImage = "url('pic/tt/tt10.gif')";
}
function lann_c(lzzo)			
{
  lzzo.style.backgroundImage = "url('pic/tt/tt11.gif')";
}
function lann_x(lzzo)			
{
  lzzo.style.backgroundImage = "url('pic/tt/tt12.gif')";
}

function listniu(lname,lsmm,lsmw,lcoo,ltid)
{
  var mm = '<tr><td height=8></td></tr><tr><td width=3></td><td width=31 height=32 title='+lsmm+' ONCLICK='+lcoo+' ID=linu_'+ltid+' style="background-image:url(pic/tt/tt11.gif);cursor: hand" onmouseover=lann_r(this);ansmw("'+lsmw+'"); onmouseout=lann_c(this);ansmw(""); onmousedown=lann_x(this);ansmw("'+lsmw+'"); onmouseup=lann_r(this);ansmw("'+lsmw+'"); align=center valign=middle>'+lname+'</td></tr><tr><td height=8></td></tr>';
 document.write(mm);
}

function ansmw(smcs)
{
  ansmzj.innerText = (smcs=="")?"暂无对应按钮操作！！":smcs;
}

function gann_r(gzzo)			
{
 gzzo.style.filter = "";
 gzzo.style.filter = "light()";
 gzzo.filters.light.addAmbient(250,250,153,98);
 ansmw("关闭选单窗口！！");
}

function gann_c(gzzo)			
{
 gzzo.style.filter = "";
 ansmw("");
}

function gann_x(gzzo)			
{
 gzzo.style.filter = "";
 gzzo.style.filter = "light()";
 gzzo.filters.light.addAmbient(90,252,144,89);
 ansmw("关闭选单窗口！！");
}