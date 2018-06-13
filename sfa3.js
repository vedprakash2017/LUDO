
	{ var k=2,a1=0;a2=0;b1=0;b2=0;result=0;var roll1;
var L,T,nav;
var LE,TE;a=0;
var z=0;
ac1=0;
ac2=0;
bc1=0;
bc2=0;
input=1;
function v4()
{	
	$("#bb2").fadeOut(500);
	$("#bb2").animate({ top: '3.8vw', left: '31%'}, 0);
	$("#bb2").fadeIn(500);
	
	input=1;
}

function re(){
	
	$("#aa1").animate({ top: '40vw', left: '75%'}, 1);
	$("#aa2").animate({ top: '40vw', left: '79%'}, 1);
	$("#bb1").animate({ top: '3.8vw', left: '23.5%'}, 1);
	$("#bb2").animate({ top: '3.8vw', left: '19%'}, 1);
	var z=0;
	ac1=0;
	ac2=0;
	bc1=0;
	bc2=0;
	a1=0;
	a2=0;
	b1=0;
	b2=0;
}
function LT()
{
	
					
				var x = $(nav).position();
						
						var xl=Math.ceil(x.left);
						var xt=Math.ceil(x.top);
						
						if(((xl>467)&&(xl<487))&&((xt>605)&&(xt<625)))
						{LE=477; TE=59;}
						if(((xl>1027)&&(xl<1047))&&((xt>49)&&(xt<69)))
						{LE=1037; TE=615;}
						if(((xt>605)&&(xt<625))&&((xl>1027)&&(xl<1047)))
						{LE=477; TE=615;}
						if(((xt>49)&&(xt<69))&&((xl>467)&&(xl<487)))
						{LE=1037; TE=59;}					
						else
						{
						if((xl>467)&&(xl<487))
						{LE=477; TE=59;}
						if((xl>1027)&&(xl<1047))
						{LE=1037; TE=615;}
						if((xt>605)&&(xt<625))
						{LE=477; TE=615;}
						if((xt>49)&&(xt<69))
						{LE=1037; TE=59;}
						}
						
}
function d1()
{document.getElementById("status").innerText = "";}


function d()
{	document.getElementById("status").innerText = "Chose One of your Token";
	a=0;
	$("#aa1").click(function(){ if((a==0)&&(z==1)&&(ac1==0)){nav=aa1; over(); a++; d1(); input=1;}});
	$("#aa2").click(function(){ if((a==0)&&(z==1)&&(ac2==0)){ if(a2==1){ nav=aa2; over(); a++; d1(); input=1;} if(a2==0){v2(); a2=1; a++; d1(); input=1;} input=1; }});
	
	$("#bb1").click(function(){ if((a==0)&&(z==2)&&(bc1==0)){nav=bb1; over(); a++; d1(); input=1;}});
	$("#bb2").click(function(){ if((a==0)&&(z==2)&&(bc2==0)){ if(b2==1){ nav=bb2; over(); a++; d1();input=1;} if(b2==0){v4(); b2=1; a++; d1(); input=1;} input=1;}});
}


function over()
{	input=1;
	var x = $(nav).position();
	L=Math.ceil(x.left);
	T=Math.ceil(x.top);
	LT();
	var i=1;
	
	var l1=LE/15.4+'vw';
	var t1=TE/15.4+'vw';
	
	if((Math.ceil(T)>(TE-10))&&(Math.ceil(T)<(TE+10)))
	{   if(TE==59) i=-1;
	
		if((roll1*80.8)<Math.abs(L-LE))
		{	
			result=(L-(i)*roll1*80.5)/15.4+'vw';
			$(nav).animate({left:result},1);
		}
		
		else 
		{	
			var k=$(nav);
			k.animate({ left: l1}, 0.6);
			result=(TE-(i)*(roll1*80-Math.abs(L-LE)))/15.4+"vw";
			k.animate({ top: result},1);
		}
	}
	else
	{if(LE==477) i=-1;

		if((roll1*80.8)<Math.abs(T-TE))
		{	i=1;
			if((LE>1027)&&(LE<1047)) i=-1;
			result=(T-(i)*roll1*80)/15.4+'vw';
			$(nav).animate({top:result},1);
		}
		
		else if(!((((nav==aa1)||(nav==aa2))&&(LE==1037))||(((nav==bb1)||(nav==bb2))&&(LE==477))))
		{	
			var k=$(nav);
			k.animate({ top: t1}, 0.4);
			result=(LE-(i)*(roll1*80-Math.abs(T-TE)))/15.4+"vw";
			k.animate({ left: result}, 1);
		}
		else if(((LE==1037)&&((nav==aa1)||(nav==aa2))&&((roll1*80 >(TE-T-20))&&(roll1*80 <(TE-T+20))))||((LE==477)&&((nav==bb1)||(nav==bb2))&&((roll1*80 >(Math.abs(TE-T)-20))&&(roll1*80 <(Math.abs(TE-T)+20)))))
		{
			if(nav==aa1){ac1=1;i=-1;}
			if(nav==aa2){ac2=1;i=-1;}
			if(nav==bb1){bc1=1;}
			if(nav==bb2){bc2=1;}
			if(LE==477){i=1;}
			++roll1;
		
			result=(T-(i)*roll1*80)/15.4+'vw';
			$(nav).animate({top:result},1);
				
			if(nav==aa2){ $(nav).animate({top:result,left:'58vw'},1 );}
			var aa11 = $(n1).position();
			var aa22 = $(n2).position();
			
			if((ac1==1)&&(ac2==1))
			{alert("Congratulations  !!! Red token won the game"); re();}
			if((bc1==1)&&(bc2==1))
			{alert("Congratulations  !!! Blue token won the game"); re();}
		}
	}
	
}
	

function roll()
{  
					
					
	
			if((ac1==1)&&(ac2==1))
			{alert("Congratulations  !!! Red token won the game"); re();}
			if((bc1==1)&&(bc2==1))
			{alert("Congratulations  !!! Blue token won the game"); re();}				
	var x=k;
	if((document.getElementById("pi").value<7)&&(document.getElementById("pi").value>0))
		var roll = document.getElementById("pi").value;
	else
		var roll = Math.floor(Math.random()*6+1);
	
	roll1=roll;
	
	document.getElementById("val").innerText = roll; 
	a=0;
	if((x%2==0)) 
	{	input=0;
		if(roll!=6)
		{ 
			document.getElementById("turn").innerText = "Now Player B Turn";
			k++ ;
		}
		else
			document.getElementById("turn").innerText = "Now Player A Turn";		
		if(ac1==1)
		{
			nav=aa2; over();
		}
		else if(ac2==1)
		{
			nav=aa1; over();
		}			
		if((roll==6) && (a1==0))
				{
					
					v1();
					a1=1;
				}
		else if((roll==6) &&(a2==0))
				{	
					z=1;
					d();
					
					
				}
		else if(a1==1)
				{
					
					if(a2==1)
					{
						
						document.getElementById("status").innerText = "Chose One of your Token";
						
						d();
						z=1;
			

					}
					else
					{
						nav=aa1;
						over();
					}
					
					/*var x = $("#aa1").position();
					alert("Top position: " + Math.ceil(x.top) + " Left position: "); +Math.ceil(x.left)}*/	
				}
			
			else if((a1!=-1)||(a2!=-1))
			{input=1;}
				
	}
	else
	{		input=0;
		if(roll!=6)
		{	
			document.getElementById("turn").innerText = "Now Player A Turn";
			k++;
		}
		else
			document.getElementById("turn").innerText = "Now Player B Turn";
		
		if(bc1==1)
		{
			nav=bb1; over();
		}
		else if(bc2==1)
		{
			nav=bb1; over();
		}	
		else if((roll==6) && (b1==0))
				{
					
					v3();
					b1=1;
				}
		else if((roll==6) &&(b2==0))
				{	z=2;
					d();
					
				}
		else if(b1==1)
				{
					
					if(b2==1){
						
						document.getElementById("status").innerText = "Chose One of your Token";
						z=2;
						d();
						
					}
					else
					{ nav=bb1; over(); }
					
					/*var x = $("#aa1").position();
					alert("Top position: " + Math.ceil(x.top) + " Left position: "); +Math.ceil(x.left)}*/	
				}
		else{input=1;}
	}
	
	

}
function v1()
{
	$("#aa1").fadeOut(500);
	var k=67.5+'vw';
	$("#aa1").animate({ top: '40vw',left: k }, 0);
	$("#aa1").fadeIn(500);
	input=1;

	

}

function v2()
{
	$("#aa2").fadeOut(500);
	$("#aa2").animate({ top: '40vw', left: '67.5%'}, 0);
	$("#aa2").fadeIn(500);
	input=1;

}
function v3()
{
	$("#bb1").fadeOut(500);
	$("#bb1").animate({ top: '3.8vw', left: '31%'}, 0);
	$("#bb1").fadeIn(500);
	input=1;
1
}
function ved()
{
	if(input==1)
	{
		roll();
	}
	else
	{
		document.getElementById("status").innerText = "Chose One of your Token \n PLease click on Token";
	}
	
}
}
