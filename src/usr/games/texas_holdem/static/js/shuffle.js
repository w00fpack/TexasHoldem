var botarray = [1,2,3,4,5,6,7,8];
function shufflebots(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

	// Pick a remaining element...
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	// And swap it with the current element.
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
  }

  return array;
}
shufflebots(botarray);


function display_allpokerchips() {
	 for (var i=0; i < 20;i++) {
		document.write("<img src='static/images/thepokerchipred.png' id='mypokerchipred" + i + "' style='display:none;width:32px;height:32px;-webkit-filter: drop-shadow(0px 0px 1px #000);filter: drop-shadow(0px 0px 1px #000);z-index:9999999;'>");
	}
	 for (var i=0; i < 20;i++) {
		document.write("<img src='static/images/thepokerchipblue.png' id='mypokerchipblue" + i + "' style='display:none;width:32px;height:32px;-webkit-filter: drop-shadow(0px 0px 1px #000);filter: drop-shadow(0px 0px 1px #000);z-index:9999999;'>");
	}
	 for (var i=0; i < 20;i++) {
		document.write("<img src='static/images/thepokerchipgreen.png' id='mypokerchipgreen" + i + "' style='display:none;width:32px;height:32px;-webkit-filter: drop-shadow(0px 0px 1px #000);filter: drop-shadow(0px 0px 1px #000);z-index:9999999;'>");
	}
	 for (var i=0; i < 20;i++) {
		document.write("<img src='static/images/thepokerchipblack.png' id='mypokerchipblack" + i + "' style='display:none;width:32px;height:32px;-webkit-filter: drop-shadow(0px 0px 1px #000);filter: drop-shadow(0px 0px 1px #000);z-index:9999999;'>");
	}
	 for (var i=0; i < 20;i++) {
		document.write("<img src='static/images/thepokerchipgold.png' id='mypokerchipgold" + i + "' style='display:none;width:32px;height:32px;-webkit-filter: drop-shadow(0px 0px 1px #000);filter: drop-shadow(0px 0px 1px #000);z-index:9999999;'>");
	}
}

function display_player_chips($player) {
// Here has to be some error!!! //
	 for (var i=0; i < 20;i++) {
		document.write("<img class='chip' src='static/images/thepokerchipred.png' id='" + $player +"chipred" + i + "'>");
	}
	 for (var i=0; i < 20; i++) {
		document.write("<img class='chip' src='static/images/thepokerchipblue.png' id='" + $player +"chipblue" + i + "'>");
	}
	 for (var i=0; i < 20;i++) {
		document.write("<img class='chip' src='static/images/thepokerchipgreen.png' id='" + $player +"chipgreen" + i + "'>");
	}
	 for (var i=0; i < 20;i++) {
		document.write("<img class='chip' src='static/images/thepokerchipblack.png' id='" + $player +"chipblack" + i + "'>");
	}
	 for (var i=0; i < 20;i++) {
		document.write("<img class='chip' src='static/images/thepokerchipgold.png' id='" + $player +"chipgold" + i + "'>");
	}
}

function display_players()
{
	for ($player=1; $player < 10; $player++)
	{
	document.write(" \
	   <div id='seat" + $player + "' class='seat'> \
			<div class='holecards' id='bcplayer'> \
				<div class='card holecard1' id='bplayer1'></div> \
				<div class='card holecard2' id='bplayer2'></div> \
						<span class='speech-bubble' style='display:none' id='botspeech" + $player +"'></span> \
			</div> \
			<div class='name-chips' id='botnamechips'>");
		$playernum = $player - 1;
	document.write(" \
		<img src='' id='avatar" + botarray[$playernum] + "' class='avatar'> \
				<div class='player-name' id='bplayername'></div> \
				<div class='chips' id='bplayerchips'></div> \
			<div id='button" + $player + "' class='seat" + $player + "-button'> \
			</div> \
			<div class='mychips'>");
	display_player_chips('bot' + $player);
	document.write(" \
				</div> \
			</div> \
   <div class='bet' id='bbet" + $player +"'></div> \
		</div>");
	}
}
var dragonoff = 0;
var draggable = $('#cheatsheet'); //element

draggable.on('mousedown', function(e){

	if (dragonoff == 1)
	{
	var dr = $(this).addClass("drag").css("cursor","move");
	height = dr.outerHeight();
	width = dr.outerWidth();
	ypos = dr.offset().top + height - e.pageY,
	xpos = dr.offset().left + width - e.pageX;
	$(document.body).on('mousemove', function(e){
		var itop = e.pageY + ypos - height;
		var ileft = e.pageX + xpos - width;


		if(dr.hasClass("drag")){
			dr.offset({top: itop,left: ileft});

		}
	}).on('mouseup', function(e){
			dr.removeClass("drag");

	});
	}
});
function lock() {

	var zzz = document.getElementById("lock");
	if (zzz.checked == true)
	{
// Remove the event handler from <div>
	document.getElementById("cheatsheet").style.cursor = "default";
	dragonoff = 0;
	}
	if (zzz.checked == false)
	{
// Attach an event handler to <div>
	dragonoff = 1;
	document.getElementById("cheatsheet").style.cursor = "move";
	}
}

function prechecksound ()
{
var soundstatus = getLocalStorage("soundstatus");
  if (soundstatus === null) {  // first time
	 soundz = 0;
  }
  else soundz = soundstatus;

if (soundz == 0)
{
 document.getElementById("sound").checked = true;
 audio1 = new Audio('sounds/winner.wav');
 audio2 = new Audio('sounds/allin.wav');
 audio3 = new Audio('sounds/fold.wav');
 audio4 = new Audio('sounds/raise.wav');
 audio5 = new Audio('sounds/chips.wav');
 audio6 = new Audio('sounds/chipsmed.wav');
 audio7 = new Audio('sounds/check.wav');
 audio8 = new Audio('sounds/call.wav');
 var audio = document.getElementById("casino");
 audio.src = 'casino.ogg';
 audio.load();
 audio.play();
}

if (soundz == 1)
{
 document.getElementById("sound").checked = false;
audio1 = new Audio('');
audio2 = new Audio('');
audio3 = new Audio('');
audio4 = new Audio('');
audio5 = new Audio('');
audio6 = new Audio('');
audio7 = new Audio('');
audio8 = new Audio('');
 document.getElementById("casino").src = "";
}

}

function checksound() {
	var j = document.getElementById("sound");
	if (j.checked == true)
	{

 audio1 = new Audio('sounds/winner.wav');
 audio2 = new Audio('sounds/allin.wav');
 audio3 = new Audio('sounds/fold.wav');
 audio4 = new Audio('sounds/raise.wav');
 audio5 = new Audio('sounds/chips.wav');
 audio6 = new Audio('sounds/chipsmed.wav');
 audio7 = new Audio('sounds/check.wav');
 audio8 = new Audio('sounds/call.wav');
 var audio = document.getElementById("casino")
 audio.src = 'casino.ogg';
 audio.load();
 audio.play();
 setLocalStorage("soundstatus", 0);
	}
	if (j.checked == false)
	{

audio1 = new Audio('');
audio2 = new Audio('');
audio3 = new Audio('');
audio4 = new Audio('');
audio5 = new Audio('');
audio6 = new Audio('');
audio7 = new Audio('');
audio8 = new Audio('');
 document.getElementById("casino").src = "";
  setLocalStorage("soundstatus", 1);
	}

}

function checktable() {

var feltcolor = getLocalStorage("currenttable");
  if (feltcolor === null) {  // first time
	 currenttable = 0;
  }
  else currenttable = feltcolor;

if (currenttable == 0)
{
document.getElementById("poker_table").style.backgroundImage = "url('static/images/poker_table.png')";
}
if (currenttable == 1)
{
document.getElementById("poker_table").style.backgroundImage = "url('static/images/poker_table_red.png')";
}
if (currenttable == 2)
{
document.getElementById("poker_table").style.backgroundImage = "url('static/images/poker_table_blue.png')";
}
if (currenttable == 3)
{
document.getElementById("poker_table").style.backgroundImage = "url('static/images/poker_table_black.png')";
}
}

function changetable() {

var feltcolor = getLocalStorage("currenttable");
  if (feltcolor === null) {  // first time
	 currenttable = 0;
  }
  else currenttable = feltcolor;

if (currenttable == 0)
{
document.getElementById("poker_table").style.backgroundImage = "url('static/images/poker_table_red.png')";
}
if (currenttable == 1)
{
document.getElementById("poker_table").style.backgroundImage = "url('static/images/poker_table_blue.png')";
}
if (currenttable == 2)
{
document.getElementById("poker_table").style.backgroundImage = "url('static/images/poker_table_black.png')";
}
if (currenttable == 3)
{
document.getElementById("poker_table").style.backgroundImage = "url('static/images/poker_table.png')";
}
currenttable++;
if (currenttable == 4)
currenttable = 0;
setLocalStorage("currenttable", currenttable);
}
