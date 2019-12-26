skins=""
var undefined
if (getCookie('skins')!=undefined){skins=getCookie('skins')}

function valigntop(){
document.write("<table cellpadding=0 cellspacing=0 width=97% align=center><tr><td><img src=images/skins/"+skins+"/T_left.gif></td><td width=100% background=images/skins/"+skins+"/T_bg.gif></td><td><img src=images/skins/"+skins+"/T_right.gif></td></tr></table>")
}

function valignbottom(){
document.write("<table cellpadding=0 cellspacing=0 width=97% align=center><tr><td><img src=images/skins/"+skins+"/B_left.gif></td><td width=100% background=images/skins/"+skins+"/B_bg.gif></td><td><img src=images/skins/"+skins+"/B_right.gif></td></tr></table>")
}

