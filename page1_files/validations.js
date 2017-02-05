var fromYear="1900";var toYear="2100";var numbers="0123456789";var dividerdate="/";var dividerhour=":";var decimalpoint=".";var phones="0123456789-()";var zipcodes="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-()";var alphanumberschars=" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";var AMPMHour="APM";var AMHour="AM";var PMHour="PM";var AMHourmin="am";var PMHourmin="pm";var space=" ";extArray=new Array(".gif",".jpg",".png");error=new createerror();errors=new Array();errors[1]="Incorrect day in a date input.";errors[2]="Illegal character in a date input.";errors[3]="Separators missing in a date input.";errors[4]="checkdate";errors[5]="Incorrect month in a date input.";errors[21]="Illegal character in an hour input.";errors[22]="Incorrect format for an hour input.";errors[23]="Incorrect hour value in an hour input. Must be 'HH'.";errors[24]="Incorrect minute value in an hour input. Must be 'MM'.";errors[25]="Incorrect seconds value in an hour input. Must be 'SS'.";errors[26]="Not allowed more than one space.";errors[27]="Incorrect format in an hour input. Must be 'AM' or 'PM' (e.g. HH:MM:SS AM).";errors[28]="Format 'AM' or 'PM' not allowed in an hour input.";errors[29]="Incorrect format in an hour input. Must be 'AM' or 'PM' (e.g. HH:MM AM).";errors[16]="Illegal character in a Telephone Number. You can only enter numbers (0-9) or dashes (-).";errors[17]="Please use just one dash per block of numbers (999-999-9999).";errors[18]="A Telephone Number can't start with a dash.";errors[19]="A Telephone Number can't finish with a dash.";errors[31]="Illegal character in a numeric input.";errors[32]="Illegal character. Must be +, - or a number.";errors[33]="Missing decimal portion.";errors[34]="Decimal places too big.";errors[35]="checkrangenumeric";errors[36]="checkrangenumeric";errors[37]="checkrangenumeric";errors[41]="Illegal character in a Telephone Number. You can only enter numbers (0-9), () or dashes (-).";errors[42]="Please use just one dash per block of numbers (999-999-9999).";errors[43]="A Telephone Number can't start with a dash.";errors[44]="A Telephone Number can't finish with a dash.";errors[51]="Illegal character in an email input.";errors[61]="The maximum length for this field is ";errors[62]="The minimum length for this field is ";errors[63]="checkrangelength";errors[64]="The field is empty.";errors[71]="Incorrect Format. (###-##-####) for Social Security Number.";errors[81]="Illegal character in a ZIP Code. You can only enter numbers, letters, () or dashes (-).";errors[82]="A ZIP Code can't start with a dash.";errors[83]="A ZIP Code can't finish with a dash.";errors[91]="The CUIT/CUIL is not correct.";errors[101]="Please only upload files that end in types:  "+(extArray.join("  "))+"\nPlease select a new "+"file to upload and submit again.";errors[102]="Please only upload files with a valid name before the extension. E.G.: Image.jpg \nPlease select a new file to upload and submit again.";errors[111]="Please enter a Card Number.";errors[112]="Please enter the Expiration Year.";errors[113]="The Expiration Year is not valid.";errors[114]="This card has already expired.";errors[115]="This card number is not valid.";errors[116]="CheckCardNumber";function LTrim(str){var whitespace=new String(" \t\n\r");var s=new String(str);if(whitespace.indexOf(s.charAt(0))!=-1){var j=0,i=s.length;while(j<i&&whitespace.indexOf(s.charAt(j))!=-1)
j++;s=s.substring(j,i);}
return s;}
function RTrim(str){var whitespace=new String(" \t\n\r");var s=new String(str);if(whitespace.indexOf(s.charAt(s.length-1))!=-1){var i=s.length-1;while(i>=0&&whitespace.indexOf(s.charAt(i))!=-1)
i--;s=s.substring(0,i+1);}
return s;}
function Trim(str){return RTrim(LTrim(str));}
function replaceAll(str,from,to){var idx=str.indexOf(from);while(idx>-1){str=str.replace(from,to);idx=str.indexOf(from);}
return str;}
function createerror(){this.val=0;this.posicion=0;return this}
var isNav4=false,isNav5=false,isIE4=false;if(navigator.appName=="Netscape"){if(navigator.appVersion<"5"){isNav4=true;isNav5=false;}
else
if(navigator.appVersion>"4"){isNav4=false;isNav5=true;}}
else{isIE4=true;}
function LTrim(str){var whitespace=new String(" \t\n\r");var s=new String(str);if(whitespace.indexOf(s.charAt(0))!=-1){var j=0,i=s.length;while(j<i&&whitespace.indexOf(s.charAt(j))!=-1)
j++;s=s.substring(j,i);}
return s;}
function RTrim(str){var whitespace=new String(" \t\n\r");var s=new String(str);if(whitespace.indexOf(s.charAt(s.length-1))!=-1){var i=s.length-1;while(i>=0&&whitespace.indexOf(s.charAt(i))!=-1)
i--;s=s.substring(0,i+1);}
return s;}
function Trim(str){return RTrim(LTrim(str));}
function createerror(){this.val=0;this.posicion=0;return this}
var isNav4=false,isNav5=false,isIE4=false;if(navigator.appName=="Netscape"){if(navigator.appVersion<"5"){isNav4=true;isNav5=false;}
else
if(navigator.appVersion>"4"){isNav4=false;isNav5=true;}}
else{isIE4=true;}
function zips(sChar){return(zipcodes.indexOf(sChar)>=0)}
function isnumber(sChar){return(numbers.indexOf(sChar)>=0)}
function isalphanumeric(sChar){return(alphanumberschars.indexOf(sChar)>=0)}
function leapyear(iYear)
{if(((iYear%4==0)&&iYear%100!=0)||iYear%400==0)
return true;return false;}
function checkrangenumeric(fieldValue,error,nMin,nMax)
{errors[35]="The number must be bigger than ";errors[36]="The number must be lower than ";errors[37]="The number must be between ";if(fieldValue.length>0)
{if(isNaN(fieldValue)||fieldValue=="")
{error.val=31;return false;}
else
{var sRange='';if(typeof nMin!='undefined'){sRange='MIN';}
if(typeof nMax!='undefined'){sRange=sRange+'MAX';}
switch(sRange)
{case"MIN":if(fieldValue<nMin){errors[35]=errors[35]+nMin;error.val=35;return false;}else{return true;}
break;case"MAX":if(fieldValue>nMax){errors[36]=errors[36]+nMax;error.val=36;return false;}else{return true;}
break;case"MINMAX":if(fieldValue<nMin||fieldValue>nMax){errors[37]=errors[37]+nMin+" and "+nMax;error.val=37;return false;}else{return true;}
break;case"":return true;break;}}}
else
{return true;}}
function checkrealnumber(fieldValue,error,decallowed)
{if(typeof decallowed=='undefined'){decallowed=1;}
if(fieldValue.length>0)
{if(isNaN(fieldValue)||fieldValue==""){error.val=31;return false;}
else
{if(fieldValue.indexOf(decimalpoint)==-1)fieldValue+=decimalpoint;dectext=fieldValue.substring(fieldValue.indexOf(decimalpoint)+1,fieldValue.length);if(dectext.length==0){error.val=33;return false;}
if(dectext.length>decallowed){error.val=34;return false;}else{return true;}}}
else
{return true;}}
function checkblank(fieldValue,error)
{fieldValue=Trim(fieldValue);if(fieldValue.length==0){error.val=64;return false;}
for(var i=0;i<fieldValue.length;i++){if(fieldValue.charAt(i)!=' '&&fieldValue.charAt(i)!='\t'){return true;}}
error.val=64;return false;}
function checkemail(fieldValue,error){if(fieldValue.indexOf(" ")!=-1){error.val=51;return false;}
var bOk=syntaxEmail(fieldValue);if(!bOk){error.val=51;return false;}
return true;}
function syntaxEmail(str){supported=0;if(window.RegExp)
{var tempStr="a";var tempReg=new RegExp(tempStr);if(tempReg.test(tempStr))supported=1;}
if(!supported)return(str.indexOf(".")>2)&&(str.indexOf("@")>0);var r1=new RegExp("(@.*@)|(\\.\\.)|(@\\.)|(^\\.)");var r2=new RegExp("^[a-zA-Z0-9-'\+~]+(\.[a-zA-Z0-9-'\+~]+)*@([a-zA-Z_0-9-]+\.)+[a-zA-Z]{2,7}$");return(!r1.test(str)&&r2.test(str));}
function checknaturalnumber(fieldValue,error)
{for(var i=0;i<fieldValue.length;i++){if(!isnumber(fieldValue.charAt(i))){error.val=31;return false;}}
return true;}
function checkinteger(fieldValue,error)
{if(fieldValue.length>0){if(isNaN(fieldValue)||fieldValue==""){error.val=31;return false;}else{if(fieldValue.indexOf(decimalpoint)>-1){error.val=32;return false;}else{return true;}}}else{return true;}}
function phone(sChar){return(phones.indexOf(sChar)>=0)}
function checkrangelength(fieldValue,error,minlen,maxlen)
{errors[63]="The length for this field must be between "
if(fieldValue.length<minlen||fieldValue.length>maxlen){errors[63]=errors[63]+minlen+" and "+maxlen+"characters";error.val=63;return false;}
return true;}
function checkmaxlength(fieldValue,error,len)
{if(fieldValue.length>len){error.val=61;return false;}
return true;}
function checkminlength(fieldValue,error,len)
{if(fieldValue.length<len){error.val=62;return false;}
return true;}
function checkextensionfile(fieldValue,error)
{if(fieldValue.charAt(0)=="."){error.val=102;return false;}
allowSubmit=false;if(!fieldValue)return true;while(fieldValue.indexOf("\\")!=-1)
fieldValue=fieldValue.slice(file.indexOf("\\")+1);ext=fieldValue.slice(fieldValue.indexOf(".")).toLowerCase();for(var i=0;i<extArray.length;i++){if(extArray[i]==ext){allowSubmit=true;break;}}
if(allowSubmit){return true;}
else
{error.val=101;return false;}}
function checkphone(fieldValue,error,charsLen)
{if(charsLen==''||charsLen==0||typeof charsLen=='undefined'){charsLen=0;}
if(charsLen>0){if(!checkrangelength(fieldValue,error,0,charsLen)){return false;}}
var sep="-"
for(var i=0;i<fieldValue.length;i++)
{sep+="-";if(!phone(fieldValue.charAt(i)))
{error.val=41;return false;}
if(fieldValue.indexOf(sep)>=0)
{error.val=42;return false;}}
if(fieldValue.charAt(0)=="-")
{error.val=43;return false;}
if(fieldValue.charAt(fieldValue.length-1)=="-")
{error.val=44;return false;}
return true;}
function maximizepage()
{if(window.screen){aw=screen.availWidth;ah=screen.availHeight;window.moveTo(0,0);window.resizeTo(aw,ah);}}
function openwin(page,w,h,t,l,tb,mb,lc,dt,rz,sb,st){if(t==''||t==0){t=0;}
if(l==''||l==0){l=0;}
if(tb==''||tb==0||typeof tb=='undefined'){tb='no';}
if(mb==''||mb==0||typeof mb=='undefined'){mb='no';}
if(lc==''||lc==0||typeof lc=='undefined'){lc='no';}
if(dt==''||dt==0||typeof dt=='undefined'){dt='no';}
if(rz==''||rz==0||typeof rz=='undefined'){rz='yes';}
if(sb==''||sb==0||typeof sb=='undefined'){sb='yes';}
if(st==''||st==0||typeof st=='undefined'){st='no';}
win=window.open(page,"pag","top="+t+",left="+l+",width="+w+",height="+h+",toolbar="+tb+",menubar="+mb+",location="+lc+",directories="+dt+",resizable="+rz+",scrollbars="+sb+",status="+st);}
function openWindow(url,pagina,w,h)
{win=window.open(url,pagina,"top=0,left=100,width="+w+",height="+h+",toolbar=no,menubar=no,location=no,directories=no,resizable=yes,scrollbars=yes,status=no")}
function fncOpenWindow(url,pagina,w,h)
{win=window.open(url,pagina,"top=10,left=10,width="+w+",height="+h+",toolbar=no,menubar=no,location=no,directories=no,resizable=yes,scrollbars=yes,status=no")}
function checkdate(fieldValue,error,sFrom,sTo,EnglishFormat)
{errors[4]="Incorrect year in a date input. Must be between ";if(sFrom==''||sFrom==0||typeof sFrom=='undefined'){sFrom=fromYear;}
if(sTo==''||sTo==0||typeof sTo=='undefined'){sTo=toYear;}
if(typeof EnglishFormat=='undefined'){EnglishFormat=true;}
if((fieldValue.length==0)||(fieldValue.length!=10))
{error.val=1;error.posicion=1;return false;}
var nsep=0;for(var i=0;i<fieldValue.length;++i)
{var sChar=fieldValue.charAt(i);if(!isnumber(sChar)&&sChar!=dividerdate)
{error.val=2;return false;}
if(sChar==dividerdate)
nsep++}
if(nsep!=2)
{error.val=3;return false;}
if(EnglishFormat)
{var pos1=fieldValue.indexOf(dividerdate);var nMonth=fieldValue.substring(0,pos1);var pos2=fieldValue.indexOf(dividerdate,pos1+1);var nDay=fieldValue.substring(pos1+1,pos2);}
else
{var pos1=fieldValue.indexOf(dividerdate);var nDay=fieldValue.substring(0,pos1);var pos2=fieldValue.indexOf(dividerdate,pos1+1);var nMonth=fieldValue.substring(pos1+1,pos2);}
var nYear=fieldValue.substring(pos2+1,10);if(nYear<sFrom||nYear>sTo)
{errors[4]=errors[4]+sFrom+" and "+sTo + ".";error.val=4;error.posicion=1;return false;}
if(nMonth<1||nMonth>12)
{error.val=5;error.posicion=1;return false;}
if((nDay<1||nDay>31)||(nMonth==4&&nDay>30)||(nMonth==6&&nDay>30)||(nMonth==9&&nDay>30)||(nMonth==11&&nDay>30)||(nMonth==2&&leapyear(nYear)&&nDay>29)||(nMonth==2&&!leapyear(nYear)&&nDay>28))
{error.val=1;error.posicion=1;return false;}
return true}
function checkDate(fieldValue,error,sFrom,sTo,EnglishFormat)
{errors[4]="Incorrect year in a date input. Must be between ";if(sFrom==''||sFrom==0||typeof sFrom=='undefined'){sFrom=fromYear;}
if(sTo==''||sTo==0||typeof sTo=='undefined'){sTo=toYear;}
if(typeof EnglishFormat=='undefined'){EnglishFormat=true;}
if((fieldValue.length==0)||(fieldValue.length!=10))
{error.val=1;error.posicion=1;return false;}
var nsep=0;for(var i=0;i<fieldValue.length;++i)
{var sChar=fieldValue.charAt(i);if(!isnumber(sChar)&&sChar!=dividerdate)
{error.val=2;return false;}
if(sChar==dividerdate)
nsep++}
if(nsep!=2)
{error.val=3;return false;}
if(EnglishFormat)
{var pos1=fieldValue.indexOf(dividerdate);var nMonth=fieldValue.substring(0,pos1);var pos2=fieldValue.indexOf(dividerdate,pos1+1);var nDay=fieldValue.substring(pos1+1,pos2);}
else
{var pos1=fieldValue.indexOf(dividerdate);var nDay=fieldValue.substring(0,pos1);var pos2=fieldValue.indexOf(dividerdate,pos1+1);var nMonth=fieldValue.substring(pos1+1,pos2);}
var nYear=fieldValue.substring(pos2+1,10);if(nYear<sFrom||nYear>sTo)
{errors[4]=errors[4]+sFrom+" and "+sTo + ".";error.val=4;error.posicion=1;return false;}
if(nMonth<1||nMonth>12)
{error.val=5;error.posicion=1;return false;}
if((nDay<1||nDay>31)||(nMonth==4&&nDay>30)||(nMonth==6&&nDay>30)||(nMonth==9&&nDay>30)||(nMonth==11&&nDay>30)||(nMonth==2&&leapyear(nYear)&&nDay>29)||(nMonth==2&&!leapyear(nYear)&&nDay>28))
{error.val=1;error.posicion=1;return false;}
return true}
function checkdatecombo(nDay,nMonth,nYear,error)
{if((nDay<1||nDay>31)||(nMonth==4&&nDay>30)||(nMonth==6&&nDay>30)||(nMonth==9&&nDay>30)||(nMonth==11&&nDay>30)||(nMonth==2&&leapyear(nYear)&&nDay>29)||(nMonth==2&&!leapyear(nYear)&&nDay>28))
{error.val=1;return false;}
return true}
function checkhourminsec(fieldValue,error,TimeFormat)
{var nsep=0;var nesp=0;for(var i=0;i<fieldValue.length;++i)
{var sChar=fieldValue.charAt(i);if(TimeFormat=="12")
{if(!isnumber(sChar)&&sChar!=dividerhour&&sChar!="A"&&sChar!="P"&&sChar!="M"&&sChar!="a"&&sChar!="p"&&sChar!="m"&&sChar!=" "){error.val=21;return false;}}
else
{if(!isnumber(sChar)&&sChar!=dividerhour){error.val=21;return false;}}
if(sChar==dividerhour){nsep++;}
if(sChar==" "){nesp++;}}
if(nsep!=2){error.val=22;return false;}
var pos1=fieldValue.indexOf(dividerhour);var sHours=fieldValue.substring(0,pos1);var pos2=fieldValue.indexOf(dividerhour,pos1+1);var sMins=fieldValue.substring(pos1+1,pos2);var sSeconds=fieldValue.substring(pos2+1,8);if(TimeFormat=="12"){if(sHours>12||sHours.length!=2){error.val=23;return false;}}else{if(sHours>23||sHours.length!=2){error.val=23;return false;}}
if(sMins>59||sMins.length!=2){error.val=24;return false;}
if(sSeconds>59||sSeconds.length!=2){error.val=25;return false;}
if(sSeconds.charAt(0)==' '||sSeconds.charAt(1)==' '){error.val=25;return false;}
if(isNaN(sSeconds)){error.val=25;return false;}
var auxVal="";auxVal=fieldValue.toUpperCase();if(TimeFormat=="12"){if(nesp>1){error.val=26;return false;}
if(auxVal.indexOf(" AM")==-1&&auxVal.indexOf(" PM")==-1){error.val=27;return false;}}
else
{if(auxVal.indexOf("AM")>-1||auxVal.indexOf("PM")>-1){error.val=28;return false;}}
return true}
function checkhourmin(fieldValue,error,TimeFormat)
{var nsep=0;var nesp=0;for(var i=0;i<fieldValue.length;++i)
{var sChar=fieldValue.charAt(i);if(TimeFormat=="12"){if(!isnumber(sChar)&&sChar!=dividerhour&&sChar!="A"&&sChar!="P"&&sChar!="M"&&sChar!="a"&&sChar!="p"&&sChar!="m"&&sChar!=" "){error.val=21;return false;}}
else{if(!isnumber(sChar)&&sChar!=dividerhour){error.val=21;return false;}}
if(sChar==dividerhour){nsep++;}
if(sChar==" "){nesp++;}}
if(nsep!=1)
{error.val=22;return false;}
var pos1=fieldValue.indexOf(dividerhour);var sHours=fieldValue.substring(0,pos1);var sMins=fieldValue.substring(pos1+1,5);if(TimeFormat=="12"){if(sHours>12||sHours.length!=2){error.val=23;return false;}}else{if(sHours>23||sHours.length!=2){error.val=23;return false;}}
if(sMins>59||sMins.length!=2)
{error.val=24;return false;}
if(sMins.charAt(0)==' '||sMins.charAt(1)==' '){error.val=24;return false;}
if(isNaN(sMins)){error.val=24;return false;}
var auxVal="";auxVal=fieldValue.toUpperCase();if(TimeFormat=="12"){if(nesp>1){error.val=26;return false;}
if(auxVal.indexOf(" AM")==-1&&auxVal.indexOf(" PM")==-1){error.val=29;return false;}}
else{if(auxVal.indexOf("AM")>-1||auxVal.indexOf("PM")>-1){error.val=28;return false;}}
return true}
function checkHourMinute(fieldValue,error,TimeFormat)
{var nsep=0;var nesp=0;TimeFormat="12";for(var i=0;i<fieldValue.length;++i)
{var sChar=fieldValue.charAt(i);if(TimeFormat=="12"){if(!isnumber(sChar)&&sChar!=dividerhour&&sChar!="A"&&sChar!="P"&&sChar!="M"&&sChar!="a"&&sChar!="p"&&sChar!="m"&&sChar!=" "){error.val=21;return false;}}
else{if(!isnumber(sChar)&&sChar!=dividerhour){error.val=21;return false;}}
if(sChar==dividerhour){nsep++;}
if(sChar==" "){nesp++;}}
if(nsep!=1)
{error.val=22;return false;}
var pos1=fieldValue.indexOf(dividerhour);var sHours=fieldValue.substring(0,pos1);var sMins=fieldValue.substring(pos1+1,5);if(TimeFormat=="12"){if(sHours>12||sHours.length!=2||sHours<=0){error.val=23;return false;}}else{if(sHours>23||sHours.length!=2){error.val=23;return false;}}
if(sMins>59||sMins.length!=2)
{error.val=24;return false;}
if(sMins.charAt(0)==' '||sMins.charAt(1)==' '){error.val=24;return false;}
if(isNaN(sMins)){error.val=24;return false;}
var auxVal="";auxVal=fieldValue.toUpperCase();if(TimeFormat=="12"){if(nesp>1){error.val=26;return false;}
if(auxVal.indexOf(" AM")==-1&&auxVal.indexOf(" PM")==-1){error.val=29;return false;}}
else{if(auxVal.indexOf("AM")>-1||auxVal.indexOf("PM")>-1){error.val=28;return false;}}
return true}
function alphanumericmask(oField,val,e)
{var whichCode=(window.Event)?e.which:e.keyCode;var alphaCheck=" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";var sChar=val.charAt(val.length-1);if(alphaCheck.indexOf(sChar)<0)
{oField.value=oField.value.substr(0,iPos)+oField.value.substr(ipos+1,(oField.value.length-1));return false;}}
function naturalmask(oField,val,e)
{var whichCode=(window.Event)?e.which:e.keyCode;var alphaCheck="0123456789";var sChar=val.charAt(val.length-1);if(alphaCheck.indexOf(sChar)<0)
{oField.value=oField.value.substr(0,(val.length-1));return false;}}
function integermask(oField,val,e)
{var whichCode=(window.Event)?e.which:e.keyCode;var alphaCheck="0123456789+-";var sChar=val.charAt(val.length-1);if(alphaCheck.indexOf(sChar)<0)
{oField.value=oField.value.substr(0,(val.length-1));return false;}
if(whichCode==8)
return false;else
{if((sChar=="+"||sChar=="-")&&val.length>1)
{oField.value=oField.value.substr(0,(val.length-1));return false;}}}
function realmask(oField,val,e)
{var whichCode=(window.Event)?e.which:e.keyCode;var alphaCheck="0123456789.+-";var sChar=val.charAt(val.length-1);if(alphaCheck.indexOf(sChar)<0)
{oField.value=oField.value.substr(0,(val.length-1));return false;}
if(whichCode==8)
return false;else
{if((sChar=="+"||sChar=="-")&&val.length>1)
{oField.value=oField.value.substr(0,(val.length-1));return false;}
verificador=val.substr(0,(val.length-1));if(sChar=="."&&(verificador.indexOf(".")>=0||val=="."||val=="+."||val=="-."))
{oField.value=oField.value.substr(0,(val.length-1));return false;}}}
function phonemask(oField,val,e)
{var whichCode=(window.Event)?e.which:e.keyCode;var alphaCheck="0123456789-";var sChar=val.charAt(val.length-1);if(alphaCheck.indexOf(sChar)<0)
{oField.value=oField.value.substr(0,(val.length-1));return false;}
if(whichCode==8)
return false;else
{if(val.charAt(0)=="-")
{oField.value=oField.value.substr(0,(val.length-1));return false;}
if(sChar=="-"&&val.charAt(val.length-2)==sChar)
{oField.value=oField.value.substr(0,(val.length-1));return false;}}}
function zipcodemask(oField,val,e)
{var whichCode=(window.Event)?e.which:e.keyCode;var alphaCheck="0123456789-";var sChar=val.charAt(val.length-1);if(alphaCheck.indexOf(sChar)<0){oField.value=oField.value.substr(0,(val.length-1));return false;}
if(whichCode==8)
return false;else
{if(val.charAt(0)=="-"){oField.value=oField.value.substr(0,(val.length-1));return false;}
if(sChar=="-"&&val.charAt(val.length-2)==sChar){oField.value=oField.value.substr(0,(val.length-1));return false;}}}
function datemask(oField,val,e)
{var whichCode=(window.Event)?e.which:e.keyCode;if(val.length>8&&isNav4)
{if(val.indexOf("/")>=1)
return true;}
if(val.length==3&&val.charAt(val.length-1)=="/")
{return true;}
if(val.length==6&&val.charAt(val.length-1)=="/")
{return true;}
var alphaCheck="0123456789";var sChar=val.charAt(val.length-1);if(alphaCheck.indexOf(sChar)<0)
{oField.value=oField.value.substr(0,(val.length-1));return false;}
if(whichCode==8)
return false;else
{var strCheck='47,48,49,50,51,52,53,54,55,56,57,58,59,95,96,97,98,99,100,101,102,103,104,105';if(strCheck.indexOf(whichCode)!=-1)
{if(val.length==2)
{oField.value+="/";}
if(val.length==5)
{oField.value+="/";}
if(val.length==3&&val.length!="/")
{oField.value=oField.value.substr(0,(val.length-1))+"/"+oField.value.substr((val.length-1),val.length);}
if(val.length==6&&val.length!="/")
{oField.value=oField.value.substr(0,(val.length-1))+"/"+oField.value.substr((val.length-1),val.length);}}}}
function hourminmask(oField,val,e)
{var whichCode=(window.Event)?e.which:e.keyCode;if(val.length>8&&isNav4)
{if(val.indexOf(":")>=1)
return true;}
if(val.length==3&&val.charAt(val.length-1)==":")
{return true;}
if(val.length>5)
{oField.value=oField.value.substr(0,5);}
var alphaCheck="0123456789";var sChar=val.charAt(val.length-1);if(alphaCheck.indexOf(sChar)<0)
{oField.value=oField.value.substr(0,(val.length-1));return false;}
if(whichCode==8)
return false;else
{var strCheck='47,48,49,50,51,52,53,54,55,56,57,58,59,95,96,97,98,99,100,101,102,103,104,105';if(strCheck.indexOf(whichCode)!=-1)
{if(val.length==2)
{oField.value+=":";}
if(val.length==3&&val.length!=":")
{oField.value=oField.value.substr(0,(val.length-1))+":"+oField.value.substr((val.length-1),val.length);}}}}
function hourminsecmask(oField,val,e)
{var whichCode=(window.Event)?e.which:e.keyCode;if(val.length>8&&isNav4)
{if(val.indexOf(":")>=1)
return true;}
if(val.length==3&&val.charAt(val.length-1)==":")
{return true;}
if(val.length==6&&val.charAt(val.length-1)==":")
{return true;}
if(val.length>8)
{oField.value=oField.value.substr(0,8);}
var alphaCheck="0123456789";var sChar=val.charAt(val.length-1);if(alphaCheck.indexOf(sChar)<0)
{oField.value=oField.value.substr(0,(val.length-1));return false;}
if(whichCode==8)
return false;else
{var strCheck='47,48,49,50,51,52,53,54,55,56,57,58,59,95,96,97,98,99,100,101,102,103,104,105';if(strCheck.indexOf(whichCode)!=-1)
{if(val.length==2)
{oField.value+=":";}
if(val.length==5)
{oField.value+=":";}
if(val.length==3&&val.length!=":")
{oField.value=oField.value.substr(0,(val.length-1))+":"+oField.value.substr((val.length-1),val.length);}
if(val.length==6&&val.length!=":")
{oField.value=oField.value.substr(0,(val.length-1))+":"+oField.value.substr((val.length-1),val.length);}}}}
function transformdate(fieldValue,EnglishFormat)
{if(!EnglishFormat){var pos1=fieldValue.indexOf(dividerdate);var nDay=fieldValue.substring(0,pos1);var pos2=fieldValue.indexOf(dividerdate,pos1+1);var nMonth=fieldValue.substring(pos1+1,pos2);var nYear=fieldValue.substring(pos2+1,10);}
else
{var pos1=fieldValue.indexOf(dividerdate);var nMonth=fieldValue.substring(0,pos1);var pos2=fieldValue.indexOf(dividerdate,pos1+1);var nDay=fieldValue.substring(pos1+1,pos2);var nYear=fieldValue.substring(pos2+1,10);}
if(nDay<10)
{if(nDay.length==1)
{nDay="0"+nDay;}}
if(nMonth<10)
{if(nMonth.length==1)
{nMonth="0"+nMonth;}}
var cont=nYear+nMonth+nDay;return cont}
function transformhour(fieldValue)
{var pos1=fieldValue.indexOf(dividerhour);var sHours=fieldValue.substring(0,pos1);var sMins=fieldValue.substring(pos1+1,5);if(sHours<10)
{if(sHours.length==1)
{sHours="0"+sHours;}}
if(sMins<10)
{if(sMins.length==1)
{sMins="0"+sMins;}}
var cont=sHours+sMins;return cont;}
function comparetwodates(sDate1,sDate2,EnglishFormat)
{if(typeof EnglishFormat=='undefined'){EnglishFormat=true;}
var StartDate=transformdate(sDate1,EnglishFormat);var EndDate=transformdate(sDate2,EnglishFormat);if(StartDate>EndDate){return 1;}
if(StartDate<EndDate){return 2;}
if(StartDate==EndDate){return 0;}}
function comparetwohours(hour1,hour2)
{var timeStart=transformhour(hour1);var timeEnd=transformhour(hour2);if(timeStart>timeEnd){return 1;}
if(timeStart<timeEnd){return 2;}
if(timeStart==timeEnd){return 0;}}
function checkssn(fieldValue,error)
{if(fieldValue.length!=11){error.val=71;return false;}
var pos1=fieldValue.indexOf("-");var part1=fieldValue.substring(0,pos1);var pos2=fieldValue.indexOf("-",pos1+1);var part2=fieldValue.substring(pos1+1,pos2);var part3=fieldValue.substring(pos2+1,11);if(pos1==-1){var part1=fieldValue.substring(0,11);}
var bOK
bOK=checknaturalnumber(part1,error);if(!bOK){return false;}
if(part1.length!=3){error.val=71;return false;}
bOK=checknaturalnumber(part2,error);if(!bOK){return false;}
if(part2.length!=2){error.val=71;return false;}
bOK=checknaturalnumber(part3,error);if(!bOK){return false;}
if(part3.length!=4){error.val=71;return false;}
return true;}
function checkzipcode(fieldValue,error,charsLen)
{if(charsLen==''||charsLen==0||typeof charsLen=='undefined'){charsLen=0;}
if(charsLen>0){if(!checkrangelength(fieldValue,error,0,charsLen)){return false;}}
for(var i=0;i<fieldValue.length;i++)
{if(!zips(fieldValue.charAt(i))){error.val=81;return false;}}
if(fieldValue.charAt(0)=="-"){error.val=82;return false;}
if(fieldValue.charAt(fieldValue.length-1)=="-"){error.val=83;return false;}
return true;}
function validatecuit(fieldValue,error){var v2=0;var v3=0;if(!isNaN(fieldValue))
{v2=(Number(fieldValue.substr(0,1))*5+
Number(fieldValue.substr(1,1))*4+
Number(fieldValue.substr(2,1))*3+
Number(fieldValue.substr(3,1))*2+
Number(fieldValue.substr(4,1))*7+
Number(fieldValue.substr(5,1))*6+
Number(fieldValue.substr(6,1))*5+
Number(fieldValue.substr(7,1))*4+
Number(fieldValue.substr(8,1))*3+
Number(fieldValue.substr(9,1))*2)%11;v3=11-v2;switch(v3){case 11:v3=0;break;case 10:v3=9;break;}
if(fieldValue.substr(10,1)!=v3){error.val=91;return false;}
else{return true;}}
else
{error.val=31;return false;}}
var Cards=new makeArray(8);Cards[0]=new CardType("MasterCard","51,52,53,54,55","16");var MasterCard=Cards[0];Cards[1]=new CardType("VisaCard","4","13,16");var VisaCard=Cards[1];Cards[2]=new CardType("AmExCard","34,37","15");var AmExCard=Cards[2];Cards[3]=new CardType("DinersClubCard","30,36,38","14");var DinersClubCard=Cards[3];Cards[4]=new CardType("DiscoverCard","6011","16");var DiscoverCard=Cards[4];Cards[5]=new CardType("enRouteCard","2014,2149","15");var enRouteCard=Cards[5];Cards[6]=new CardType("JCBCard","3088,3096,3112,3158,3337,3528","16");var JCBCard=Cards[6];var LuhnCheckSum=Cards[7]=new CardType();function CheckCardNumber(sCardNumber,sExpYear,sExpMon,sCardType,error)
{var tmpyear;if(sCardNumber.length==0){error.val=111;return false;}
if(sExpYear.length==0){error.val=112;return false;}
if(sExpYear>96)
tmpyear="19"+sExpYear;else if(sExpYear<21)
tmpyear="20"+sExpYear;else{error.val=113;return false;}
tmpmonth=sExpMon;if(!(new CardType()).isExpiryDate(tmpyear,tmpmonth)){error.val=114;return false;}
card=sCardType;var retval=eval(card+".checkCardNumber(\""+sCardNumber+"\", "+tmpyear+", "+tmpmonth+");");cardname="";if(retval)
return true;else{for(var n=0;n<Cards.size;n++){if(Cards[n].checkCardNumber(sCardNumber,tmpyear,tmpmonth)){cardname=Cards[n].getCardType();break;}}
if(cardname.length>0){errors[116]="This looks like a "+cardname+" number, not a "+card+" number.";error.val=116;return false;}
else{error.val=115;return false;}}}
function CardType(){var n;var argv=CardType.arguments;var argc=CardType.arguments.length;this.objname="object CardType";var tmpcardtype=(argc>0)?argv[0]:"CardObject";var tmprules=(argc>1)?argv[1]:"0,1,2,3,4,5,6,7,8,9";var tmplen=(argc>2)?argv[2]:"13,14,15,16,19";this.setCardNumber=setCardNumber;this.setCardType=setCardType;this.setLen=setLen;this.setRules=setRules;this.setExpiryDate=setExpiryDate;this.setCardType(tmpcardtype);this.setLen(tmplen);this.setRules(tmprules);if(argc>4)
this.setExpiryDate(argv[3],argv[4]);this.checkCardNumber=checkCardNumber;this.getExpiryDate=getExpiryDate;this.getCardType=getCardType;this.isCardNumber=isCardNumber;this.isExpiryDate=isExpiryDate;this.luhnCheck=luhnCheck;return this;}
function checkCardNumber(){var argv=checkCardNumber.arguments;var argc=checkCardNumber.arguments.length;var cardnumber=(argc>0)?argv[0]:this.cardnumber;var year=(argc>1)?argv[1]:this.year;var month=(argc>2)?argv[2]:this.month;this.setCardNumber(cardnumber);this.setExpiryDate(year,month);if(!this.isCardNumber())
return false;if(!this.isExpiryDate())
return false;return true;}
function getCardType(){return this.cardtype;}
function getExpiryDate(){return this.month+"/"+this.year;}
function isCardNumber(){var argv=isCardNumber.arguments;var argc=isCardNumber.arguments.length;var cardnumber=(argc>0)?argv[0]:this.cardnumber;if(!this.luhnCheck())
return false;for(var n=0;n<this.len.size;n++)
if(cardnumber.toString().length==this.len[n]){for(var m=0;m<this.rules.size;m++){var headdigit=cardnumber.substring(0,this.rules[m].toString().length);if(headdigit==this.rules[m])
return true;}
return false;}
return false;}
function isExpiryDate(){var argv=isExpiryDate.arguments;var argc=isExpiryDate.arguments.length;year=argc>0?argv[0]:this.year;month=argc>1?argv[1]:this.month;if(!isNum(year+""))
return false;if(!isNum(month+""))
return false;today=new Date();expiry=new Date(year,month);if(today.getTime()>expiry.getTime())
return false;else
return true;}
function isNum(argvalue){argvalue=argvalue.toString();if(argvalue.length==0)
return false;for(var n=0;n<argvalue.length;n++)
if(argvalue.substring(n,n+1)<"0"||argvalue.substring(n,n+1)>"9")
return false;return true;}
function luhnCheck(){var argv=luhnCheck.arguments;var argc=luhnCheck.arguments.length;var CardNumber=argc>0?argv[0]:this.cardnumber;if(!isNum(CardNumber)){return false;}
var no_digit=CardNumber.length;var oddoeven=no_digit&1;var sum=0;for(var count=0;count<no_digit;count++){var digit=parseInt(CardNumber.charAt(count));if(!((count&1)^oddoeven)){digit*=2;if(digit>9)
digit-=9;}
sum+=digit;}
if(sum%10==0)
return true;else
return false;}
function makeArray(size){this.size=size;return this;}
function checkTelephone(parContent,error)
{var re=new RegExp(/^\(?\d{3}\)?\s|-\d{3}-\d{4}$/);if(parContent.match(re)){return true;}else{var re=new RegExp(/(\d|-|\(|\)|\+|\.){7,30}/);if(parContent.match(re)){return true;}}
return false;}
function setCardNumber(cardnumber){this.cardnumber=cardnumber;return this;}
function setCardType(cardtype){this.cardtype=cardtype;return this;}
function setExpiryDate(year,month){this.year=year;this.month=month;return this;}
function setLen(len){if(len.length==0||len==null)
len="13,14,15,16,19";var tmplen=len;n=1;while(tmplen.indexOf(",")!=-1){tmplen=tmplen.substring(tmplen.indexOf(",")+1,tmplen.length);n++;}
this.len=new makeArray(n);n=0;while(len.indexOf(",")!=-1){var tmpstr=len.substring(0,len.indexOf(","));this.len[n]=tmpstr;len=len.substring(len.indexOf(",")+1,len.length);n++;}
this.len[n]=len;return this;}
function setRules(rules){if(rules.length==0||rules==null)
rules="0,1,2,3,4,5,6,7,8,9";var tmprules=rules;n=1;while(tmprules.indexOf(",")!=-1){tmprules=tmprules.substring(tmprules.indexOf(",")+1,tmprules.length);n++;}
this.rules=new makeArray(n);n=0;while(rules.indexOf(",")!=-1){var tmpstr=rules.substring(0,rules.indexOf(","));this.rules[n]=tmpstr;rules=rules.substring(rules.indexOf(",")+1,rules.length);n++;}
this.rules[n]=rules;return this;}
function CurrencyFormatted(amount)
{var i=parseFloat(amount);if(isNaN(i)){i=0.00;}
var minus='';if(i<0){minus='-';}
i=Math.abs(i);i=parseInt((i+.005)*100);i=i/100;s=new String(i);if(s.indexOf('.')<0){s+='.00';}
if(s.indexOf('.')==(s.length-2)){s+='0';}
s=minus+s;return s;}