var p = opener;

var sno = 0;
function DATA(n,u,o)
{
  o = o || 0;
  var ht = '<input type="checkbox"> <font face="Webdings">&macr;</font> <font color=#ffffff>'+(sno+1)+'.</font><a href="javascript:void(golist(0,true,'+sno+'))" oncontextmenu="golist(0,false,'+sno+')" title="单击右键将此项目追加到播放列表" u="'+u+'" o="'+o+'">'+n+'</a><br>';
  document.write(ht);
  sno++;
}			
var data = DATA;
function START(){}
function END(){}


function golist(fs,tg,da)
{
  var dali = new Array();
  var ni = bbo.getElementsByTagName("INPUT");
  var na = bbo.getElementsByTagName("A");
  if(na.length<1) return;

  switch(fs)
  {
   case 0:
    dali[0] = da;
    break;
   case 1:
    for(var ii=0; ii<ni.length; ii++)
      if(ni[ii].checked)
        dali[dali.length] = ii;
    if(dali.length<1)
    {
      alert("请先选择要播放的项目！");
      return;
    }
    break;
   case 2:
    for(var ii=0; ii<ni.length; ii++)
      dali[dali.length] = ii;
    break;
  } 
  if(p.urld==null)
    tg = true;
  p.newlist(tg);
  for(var ii=0; ii<dali.length; ii++)
  {
    var a = na[dali[ii]];
    p.addlist(a.innerText, a.u, a.o-0);
  }
  p.playlist(tg);
  qbqc();
}



function fxxz()
{
 var plop = bbo.getElementsByTagName("INPUT");
 for(var ii=0; ii<plop.length; ii++)
   plop[ii].checked = !plop[ii].checked;
}

function qbqc()
{
 var plop = bbo.getElementsByTagName("INPUT");
 for(var ii=0; ii<plop.length; ii++)
   plop[ii].checked = false;
}


