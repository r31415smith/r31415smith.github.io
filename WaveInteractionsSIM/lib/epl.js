if (navigator.appName.match(/Explorer/i)!=null){
window.browserFlag="IE";
}else{
window.browserFlag="NOT_IE";
}

// set up platform flag --------------------------------------------------------------
if(navigator.userAgent.match(/Android/i)!=null ){
window.platformFlag="AND"
}else if(navigator.userAgent.match(/IPhone/i)!=null||navigator.userAgent.match(/IPad/i)!=null||navigator.userAgent.match(/IPod/i)!=null ){
window.platformFlag="IOS"
}else{
window.platformFlag="DSK"	
}

/*============================================================================================*/
window.round = function(num){

var string = "";

if(num>=100000||num<=-100000){var string = num.toPrecision(3);}
else{var string=num.toString();}


// --- make sure the num is not an intager
if(num%1!=0){

if(Math.abs(num)>=10&&Math.abs(num)<100000){var string = num.toFixed(2);}
if(Math.abs(num)>=1&&Math.abs(num)<10){var string = num.toFixed(3);}
if(Math.abs(num)>=0.1&&Math.abs(num)<1){var string = num.toFixed(4);}
if(Math.abs(num)>=0.01&&Math.abs(num)<0.1){var string = num.toFixed(5);}
if(Math.abs(num)>=0.0001&&Math.abs(num)<0.01){var string = num.toFixed(6);}
if(Math.abs(num)<0.0001){var string = num.toExponential(2);}

}


return string;
}
/*============================================================================================*/
window.toSci = function(n){
var num = n;
var i = 0;

if(num>1){while(num/10>1){num = num/10;i = i+1;}}
if(num<-1){while(num/10<-1){num = num/10;i = i+1;}}
if(num<1&&num>0){while(num*10<10){num = num*10;i = i-1;}}
if(num>-1&&num<0){while(num*10>-10){num = num*10;i = i-1;}}

if(i!=0){
var rounded = Math.round(num*100)/100;
var str = rounded+' e'+i;
}else{var str = num;}
return str;	
}
/*============================================================================================*/
function parent(id){

this.parentDiv = document.getElementById(id);

this.add=function(obj){
this.parentDiv.appendChild(obj.htmlElement);
}

}
