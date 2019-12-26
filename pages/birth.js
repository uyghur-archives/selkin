function getpet (birthday) {
abc=birthday.split("-")
if (abc.length < 3){return("");}
birthyear=(abc[0]*1)
b="XTIQqKYTAyak";
birthpet=b.substr([birthyear%12],1)
return(birthpet);
}



function astro(birth)
{
abc=birth.split("-")
if (abc.length < 3){return("");}
mm=(abc[1]*1)
dd=(abc[2]*1)
if (mm=='1'){
if(dd>=21){return('<img src=images/star/h.gif >');}
else{return('<img src=images/star/g.gif >');}
}

if (mm=='2'){
if(dd>=20){return('<img src=images/star/i.gif >');}
else{return('<img src=images/star/h.gif >');}
}

if (mm=='3'){
if(dd>=21){return('<img src=images/star/^.gif >');}
else{return('<img src=images/star/i.gif ');}
}

if (mm=='4'){
if(dd>=21){return('<img src=images/star/_.gif >');}
else{return('<img src=images/star/^.gif >');}
}

if (mm=='5'){
if(dd>=22){return('<img src=images/star/`.gif >');}
else{return('<img src=images/star/_.gif >');}
}

if (mm=='6'){
if(dd>=22){return('<img src=images/star/a.gif >');}
else{return('<img src=images/star/`.gif >');}
}

if (mm=='7'){
if(dd>=23){return('<img src=images/star/b.gif >');}
else{return('<img src=images/star/a.gif >');}
}

if (mm=='8'){
if(dd>=24){return('<img src=images/star/c.gif >');}
else{return('<img src=images/star/b.gif >');}
}

if (mm=='9'){
if(dd>=24){return('<img src=images/star/d.gif >');}
else{return('<img src=images/star/c.gif >');}
}

if (mm=='10'){
if(dd>=24){return('<img src=images/star/e.gif >');}
else{return('<img src=images/star/d.gif >');}
}

if (mm=='11'){
if(dd>=23){return('<img src=images/star/f.gif >');}
else{return('<img src=images/star/e.gif >');}
}

if (mm=='12'){
if(dd>=22){return('<img src=images/star/g.gif >');}
else{return('<img src=images/star/f.gif >');}
}

}