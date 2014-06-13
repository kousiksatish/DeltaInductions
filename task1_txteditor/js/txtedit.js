
function Bold()
{
	var textarea = document.getElementById("area");
	var len = textarea.value.length;
	var start = textarea.selectionStart;
	var end = textarea.selectionEnd;
	var sel = textarea.value.substring(start, end);// This is the selected text
    var replace = '[b]' + sel + '[/b]';
    textarea.value =  textarea.value.substring(0,start) + replace + textarea.value.substring(end,len);
	// Here we are replacing the selected text with this one
}

function Underline()
{
	var textarea = document.getElementById("area");
	var len = textarea.value.length;
	var start = textarea.selectionStart;
	var end = textarea.selectionEnd;
	var sel = textarea.value.substring(start, end);
	var replace = '[u]' + sel + '[/u]';
	textarea.value =  textarea.value.substring(0,start) + replace + textarea.value.substring(end,len);
}

function Italics()
{
	var textarea = document.getElementById("area");
	var len = textarea.value.length;
	var start = textarea.selectionStart;
	var end = textarea.selectionEnd;
	var sel = textarea.value.substring(start, end);
	var replace = '[i]' + sel + '[/i]';
	textarea.value =  textarea.value.substring(0,start) + replace + textarea.value.substring(end,len);
}
function Quote()
{
	var textarea = document.getElementById("area");
	var len = textarea.value.length;
	var start = textarea.selectionStart;
	var end = textarea.selectionEnd;
	var sel = textarea.value.substring(start, end);
	var replace = '' + sel + '[/i]';
	textarea.value =  textarea.value.substring(0,start) + replace + textarea.value.substring(end,len);
}

function Code()
{
	var textarea = document.getElementById("area");
	var len = textarea.value.length;
	var start = textarea.selectionStart;
	var end = textarea.selectionEnd;
	var sel = textarea.value.substring(start, end);
	var replace = '[code]' + sel + '[/code]';
	textarea.value =  textarea.value.substring(0,start) + replace + textarea.value.substring(end,len);
}

function Dold()
{
	var i;
	var textarea = document.getElementById("area");
	var len = textarea.value.length;
	var start = textarea.selectionStart;
	var end = textarea.selectionEnd;
	var sel = textarea.value.substring(start, end);
	var len1 = sel.length;
	var temp="";
	for(i=0;i<len1;i+=2)
		temp+=sel.charAt(i).toUpperCase() + sel.charAt(i+1).toLowerCase();
    var replace = '[b]' + temp + '[/b]';
	textarea.value =  textarea.value.substring(0,start) + replace + textarea.value.substring(end,len);
	
}
function Ditalics()
{
	var i;
	var textarea = document.getElementById("area");
	var len = textarea.value.length;
	var start = textarea.selectionStart;
	var end = textarea.selectionEnd;
	var sel = textarea.value.substring(start, end);
	var len1 = sel.length;
	var temp="";
	for(i=0;i<len1;i+=2)
		temp+=sel.charAt(i).toUpperCase() + sel.charAt(i+1).toLowerCase();
    var replace = '[i]' + temp + '[/i]';
	textarea.value =  textarea.value.substring(0,start) + replace + textarea.value.substring(end,len);
	
}

function colourchange(col)
{
	var textarea = document.getElementById("area");
	var len = textarea.value.length;
	var start = textarea.selectionStart;
	var end = textarea.selectionEnd;
	var sel = textarea.value.substring(start, end);
	var replace = '[color:' + col + ']' + sel + '[/color]';
	textarea.value =  textarea.value.substring(0,start) + replace + textarea.value.substring(end,len);
}

function Preview()
{
	var textarea = document.getElementById("area");
	var half2 = document.getElementById("half2");
	x=textarea.value;
	x=x.replace(/\>/g,"&gt");   // prevent user from typing html tags
	x=x.replace(/\</g,"&lt");
	x = x.replace(/\n/g,"<br>"); //convert \n to break
	x = x.replace(/\    /g,'<span class="ind1" />'); //convert four space into a tab space
	x = x.split('[b]').join('<b>'); 
	x = x.split('[/b]').join('</b>');
	x = x.split('[u]').join('<u>');
	x = x.split('[/u]').join('</u>');
	x = x.split('[i]').join('<i>');
	x = x.split('[/i]').join('</i>');
	
	x = x.split('[code]').join('<div class="code">');
	x = x.split('[/code]').join('</div>');
	x = x.split('[/color]').join('</font>');
	x = x.split('[color:red]').join('<font color="red">');
	x = x.split('[color:yellow]').join('<font color="yellow">');
	x = x.split('[color:blue]').join('<font color="blue">');
	half2.innerHTML = x;
	
}
