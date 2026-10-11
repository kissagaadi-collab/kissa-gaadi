var $=function(s){return document.querySelector(s)};
var words=["Social media","Visual design","Reels","Brand stories","Content calendars","Campaigns","Logos & looks"];
$("#mq").innerHTML=(words.concat(words).concat(words).concat(words)).map(function(w){return "<span>"+w+" ✦</span>"}).join("");
var cards=[["01","Social strategy","Plans with a pulse: what to say, when to say it and who needs to hear it.","We map your audience, build a posting rhythm and review what lands, so each month gets smarter.","#b88a44","#2a1d14"],
["02","Visual design","Posts, carousels and brand looks that are unmistakably yours.","Colour, type and layout kept consistent across every feed, story and poster you put out.","#a68d78","#2a1d14"],
["03","Content & reels","Short videos and captions with a voice people want to follow.","Scripts, shoots and edits that turn a small idea into something thumb-stopping.","#9b6c55","#fffef7"],
["04","Brand stories","The heart of the brand, told in a way that sticks.","We dig out what makes you different and shape it into a story you can keep telling.","#9bb7d4","#2a1d14"]];
$("#cards").innerHTML=cards.map(function(c){return '<button class="flip rv"><div class="f"><div class="face"><div class="n">'+c[0]+'</div><div><h3>'+c[1]+'</h3><p>'+c[2]+'</p></div></div><div class="face back" style="background:'+c[4]+';color:'+c[5]+';border-color:'+c[4]+'"><h3>'+c[1]+'</h3><p>'+c[3]+'</p></div></div></button>'}).join("");
document.querySelectorAll(".flip").forEach(function(b){b.addEventListener("click",function(){b.classList.toggle("on")})});
var stops=[["Listen","A relaxed chat about your brand, your people and where you want to be."],["Map","We chart the route: the platforms, the look, the message and the calendar."],["Make","Designs, copy and videos get built, polished and lined up for you."],["Ride","We post, watch the response and tune the route as we go."]];
$("#stops").innerHTML=stops.map(function(s,i){return '<div class="stop"><h3>'+(i+1)+'. '+s[0]+'</h3><p>'+s[1]+'</p></div>'}).join("");
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("seen")})},{threshold:.2});
document.querySelectorAll(".rv,.stop").forEach(function(el){io.observe(el)});
var tm;window.addEventListener("scroll",function(){var r=$("#ride");r.classList.add("go");clearTimeout(tm);tm=setTimeout(function(){r.classList.remove("go")},160);var h=document.documentElement.scrollHeight-innerHeight;var p=h>0?scrollY/h:0;$("#ride").style.left="calc("+(p*100)+"% - "+(p*64)+"px)"},{passive:true});
var st=$("#stamp");
if(matchMedia("(hover:hover) and (pointer:fine)").matches)document.addEventListener("mousemove",function(e){var x=(e.clientX/innerWidth-.5)*16,y=(e.clientY/innerHeight-.5)*-16;st.style.transform="rotateY("+x+"deg) rotateX("+y+"deg)"});
$("#theme").addEventListener("click",function(){var r=document.documentElement;var dark=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=dark?"light":"dark"});
$("#f").addEventListener("submit",function(ev){ev.preventDefault();
var b=encodeURIComponent($("#m").value+"\n\n— "+$("#n").value+" ("+$("#e").value+")");
$("#msg").textContent="Opening your email app… your postcard is on its way!";
location.href="mailto:kissagaadi@gmail.com?subject="+encodeURIComponent("Hello from "+$("#n").value)+"&body="+b});

var CL=["#b88a44","#9bb7d4","#a68d78","#9b6c55","#f6efdc"],T=[],cur=0;
function tbg(c,d,k){var a=CL[c],b=CL[d];return k==0?a:k==1?"radial-gradient(circle,"+b+" 0 36%,"+a+" 37%)":k==2?"repeating-linear-gradient(45deg,"+a+" 0 9px,"+b+" 9px 18px)":"radial-gradient("+b+" 20%,transparent 22%) 0 0/14px 14px,"+a}
var PR=[["Mosaic","Mix shapes and colours so the eye keeps moving.",function(i){return[i%4,(i+2)%5,i%4]}],["Rhythm","Alternate loud and calm tiles for a steady beat.",function(i){return i%2?[4,3,0]:[0,1,1]}],["Spotlight","One hero tile, with everything else playing support.",function(i){return i==4?[0,3,1]:[4,2,0]}]];
function paint(){$("#fg").innerHTML="";T.forEach(function(t,i){var b=document.createElement("button");b.className="tile";b.setAttribute("aria-label","Tile "+(i+1));b.style.background=tbg(t[0],t[1],t[2]);b.onclick=function(){t[0]=(t[0]+1)%5;t[1]=(t[1]+2)%5;t[2]=(t[2]+1)%4;b.style.background=tbg(t[0],t[1],t[2])};$("#fg").appendChild(b)})}
function pick(i){cur=i;T=[];for(var k=0;k<9;k++)T.push(PR[i][2](k));paint();$("#cap").innerHTML="<h3>"+PR[i][0]+"</h3><p>"+PR[i][1]+"</p><p class='hint'>Tap any tile to restyle it.</p>";document.querySelectorAll("[data-g]").forEach(function(c){c.classList.toggle("on",+c.dataset.g==i)})}
$("#tabs").innerHTML=PR.map(function(g,i){return '<button class="chip" data-g="'+i+'">'+g[0]+'</button>'}).join("")+'<button class="chip" id="shuf">Shuffle ↻</button>';
document.querySelectorAll("[data-g]").forEach(function(c){c.onclick=function(){pick(+c.dataset.g)}});
$("#shuf").onclick=function(){T=T.map(function(){return[Math.random()*5|0,Math.random()*5|0,Math.random()*4|0]});paint()};pick(0);
function burst(h,n,ch){for(var k=0;k<n;k++){var e=document.createElement("i");e.className="fh";e.textContent=ch||"♥";e.style.color=CL[k%4==1?3:k%4];e.style.left=(15+Math.random()*60)+"%";e.style.top="20%";e.style.animationDelay=(k*.07)+"s";h.appendChild(e);setTimeout(function(x){x.remove()},1500,e)}}
document.querySelectorAll(".ico,.sp").forEach(function(el){el.onclick=function(){burst(el,5,el.dataset.c)}});
var lc=0;$("#like").onclick=function(){lc++;$("#lc").textContent=lc;burst($("#phone"),3)};
var bt;function beep(){var b=$("#bubble");b.classList.add("on");clearTimeout(bt);bt=setTimeout(function(){b.classList.remove("on")},1800)}
$(".stampwrap").onclick=beep;
if(matchMedia("(hover:hover) and (pointer:fine)").matches)document.addEventListener("mousemove",function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;document.querySelectorAll(".blob,.ico").forEach(function(b){var k=+b.dataset.s;b.style.transform="translate("+x*k+"px,"+y*k+"px)"})});
