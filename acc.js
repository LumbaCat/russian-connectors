class Mot {
  constructor(fr, ru) {
  	this.fr = fr;
	this.ru = ru;
	
  }
}

var sections = new Array(10);
for (var i = 0; i < 10; i++)
{
	sections[i] = new Array();
}


function construireListes(){
	sections[0].push(new Mot("malgré","несмотря на"));
sections[0].push(new Mot("bien que (familier)","хоть"));
sections[0].push(new Mot("néanmoins","тем не менее"));
sections[0].push(new Mot("de manière urgente","срочно"));
sections[0].push(new Mot("en aucun cas","ни в коем случае"));
sections[0].push(new Mot("il faut","должно"));
sections[0].push(new Mot("dehors","на улице"));
sections[0].push(new Mot("autour du monde","вокруг света"));
sections[0].push(new Mot("chez moi","в гости"));
sections[0].push(new Mot("là bas (une position)","там"));
sections[0].push(new Mot("ici (position)","здесь"));
sections[0].push(new Mot("au-dessus","над"));
sections[1].push(new Mot("d'ici","отсюда"));
sections[1].push(new Mot("dans la mesure où","поскольку"));
sections[1].push(new Mot("à cause de","из-за того, что"));
sections[1].push(new Mot("c’est que","ведь"));
sections[1].push(new Mot("dès lors","следовательно"));
sections[1].push(new Mot("par conséquent","стало быть"));
sections[1].push(new Mot("c’est pourquoi","оттого"));
sections[1].push(new Mot("non seulement… mais","Не только ... но"));
sections[1].push(new Mot("ni … ni …","ни … ни …"));
sections[1].push(new Mot("ou bien … ou bien …","или … или …"));
sections[1].push(new Mot("tantôt … tantôt …","то … то …"));
sections[1].push(new Mot("il n'y a pas longtemps","Недавно"));
sections[2].push(new Mot("à temps","вовремя"));
sections[2].push(new Mot("tous les soirs","Каждый вечер"));
sections[2].push(new Mot("en même temps","заодно"));
sections[2].push(new Mot("Est-ce que ? (→rép négative)","неужели"));
sections[2].push(new Mot("à qui","Кому"));
sections[2].push(new Mot("qui","кто"));
sections[2].push(new Mot("lequel","какой"));
sections[2].push(new Mot("quand ","когда"));
sections[2].push(new Mot("quoi ","Что"));
sections[2].push(new Mot("combien ","Сколько "));
sections[2].push(new Mot("pourquoi","пoчему"));
sections[2].push(new Mot("beaucoup","много"));
sections[3].push(new Mot("un peu","Немного"));
sections[3].push(new Mot("ne plus","Больше не"));
sections[3].push(new Mot("déjà","уже"));
sections[3].push(new Mot("avec un tel","С таким"));
sections[3].push(new Mot("entre","между"));
sections[3].push(new Mot("parce que","потому что"));
sections[3].push(new Mot("personne","никто"));
sections[3].push(new Mot("quelque chose","Что-то"));
sections[3].push(new Mot("rien","ничего"));
sections[3].push(new Mot("tout","всё"));
sections[3].push(new Mot("chaque","каждый"));
sections[3].push(new Mot("encore, a nouveau","ещё раз"));
sections[4].push(new Mot("surtout","Главное"));
sections[4].push(new Mot("voila pourquoi","вот почему"));
sections[4].push(new Mot("alors","значит"));
sections[4].push(new Mot("ensuite","потом"));
sections[4].push(new Mot("jamais","никогда"));
sections[4].push(new Mot("à un moment ou à un autre","Когда-нибудь"));
sections[4].push(new Mot("en ce moment","сейчас"));
sections[4].push(new Mot("tout le temps","Всë время"));
sections[4].push(new Mot("longtemps","давно"));
sections[4].push(new Mot("même si","Даже если"));
sections[4].push(new Mot("par exemple","Например"));
sections[4].push(new Mot("au fait","кстати"));
sections[5].push(new Mot("quelque part","где-то"));
sections[5].push(new Mot("nulle part","нигде, никуда"));
sections[5].push(new Mot("maintenant","теперь"));
sections[5].push(new Mot("il paraît","говорят"));
sections[5].push(new Mot("quelque chose d autre","что-то другое"));
sections[5].push(new Mot("d'abord","сначала"));
sections[5].push(new Mot("pourquoi faire","зачем же"));
sections[5].push(new Mot("quelqu’un","кто-то"));
sections[5].push(new Mot("c’est pourquoi","поэтому"));
sections[5].push(new Mot("donc","итак"));
sections[5].push(new Mot("aussi","также"));
sections[5].push(new Mot("de plus","кроме того"));
sections[6].push(new Mot("par ailleurs","причём"));
sections[6].push(new Mot("presque","почти"));
sections[6].push(new Mot("d'habitude","как правило"));
sections[6].push(new Mot("ensemble","вместе"));
sections[6].push(new Mot("peu","мало"));
sections[6].push(new Mot("plus que tout","больше всего"));
sections[6].push(new Mot("quelques","несколько"));
sections[6].push(new Mot("du tout","совсем"));
sections[6].push(new Mot("superlatif : le plus","Самый, самая, самое"));
sections[6].push(new Mot("entre parenthèses","между прочим"));
sections[6].push(new Mot("plus ou moins","более или менее"));
sections[6].push(new Mot("autant qu'on veut","сколько угодно"));
sections[7].push(new Mot("d'une façon ou d'une autre","так или иначе"));
sections[7].push(new Mot("de toute façon","в любом случае"));
sections[7].push(new Mot("tout à fait (+adj)","вполне"));
sections[7].push(new Mot("comme","так как"));
sections[7].push(new Mot("toujours","всегда"));
sections[7].push(new Mot("souvent","часто"));
sections[7].push(new Mot("parfois","иногда"));
sections[7].push(new Mot("bientôt","скоро"));
sections[7].push(new Mot("tôt","рано"));
sections[7].push(new Mot("tard","поздно"));
sections[7].push(new Mot("avant","перед"));
sections[7].push(new Mot("après","после"));
sections[8].push(new Mot("plus tard","позже"));
sections[8].push(new Mot("ces derniers temps","в последнее время"));
sections[8].push(new Mot("en arrière (il y a)","Назад"));
sections[8].push(new Mot("depuis","поскольку"));
sections[8].push(new Mot("n'importe où","где-нибудь"));
sections[8].push(new Mot("autour de moi","вокруг меня"));
sections[8].push(new Mot("dans les environs","вокруг кругом"));
sections[8].push(new Mot("à côté","рядом"));
sections[8].push(new Mot("près de nous","близко от нас"));
sections[8].push(new Mot("proche","возле"));
sections[8].push(new Mot("partout","везде"));
sections[8].push(new Mot("dans le but de","чтобы"));
sections[9].push(new Mot("etc","и так далее"));
sections[9].push(new Mot("en-dessous","под"));
sections[9].push(new Mot("soit … soit …","либо … либо …"));
sections[9].push(new Mot("peut être … ou bien ….","не то … не то …"));
sections[9].push(new Mot("bien que","хотя"));
sections[9].push(new Mot("cependant","однако"));
sections[9].push(new Mot("en revanche","зато"));
sections[9].push(new Mot("au contraire","наоборот"));
sections[9].push(new Mot("d'un côté...de l'autre","с одной стороны … c другой стороны"));
sections[9].push(new Mot("alors que","тогда как"));
sections[9].push(new Mot("c'est-à-dire","то есть"));
sections[9].push(new Mot("en fait","На самом деле"));
	
}

construireListes()



//afficher(mots);
var ops = new Array(sections.length);
var opInner = ["section 1", "section 2", "section 3",
				"section 4", "section 5", "section 6",
				"section 7", "section 8", "section 9", "section 10"];           

for (var i=0; i<ops.length; i++){
	ops[i] = document.createElement("option");
    ops[i].value = i;
    ops[i].innerHTML  = opInner[i];
    document.getElementById("sections").appendChild(ops[i]);
}

var ops2 = new Array(2);
var op2Inner = ["Français", "Russe"];           

for (var i=0; i<ops2.length; i++){
    ops2[i] = document.createElement("option");
    ops2[i].value = i+1;
    ops2[i].innerHTML  = op2Inner[i];
    document.getElementById("mode").appendChild(ops2[i]);
}



function nbAlea(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
  }

function condition(tableau){
	var result = 1;
	for(var i=0; i<tableau.length; i++){
		for(var j=0; j<tableau.length; j++){
			if(i != j){
				if(tableau[i] == tableau[j]){
					result = 0;
				}
			}	
		}
	}
	return result;
}

var ks = new Array();
function unicite(k, ks){
	var retour = 0;
	var indic = 0;
	for (var i = 0; i<ks.length; i++){
		if (k == ks[i]){
			indic++;
		}
	}
	if(indic > 0){
		retour = 1;
	}
	return retour;
}

var marche = 0
function commencer(){
	if (marche == 0){
		// récupère données
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;

		// nb aleatoire
		do{
			var k = nbAlea(0, sections[section].length-1);
		}while(unicite(k, ks)&&(ks.length<12));
		if(ks.length>11){
			ks=[];
		}
		ks.push(k);
		

		document.getElementById('reponse').innerHTML = k;
		// ajout "mot"
		var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;
		document.getElementById("mot").innerHTML = mot;

		radioboxes(section, mode, k);

		// empêcher de rajouter des radiobox
		marche = 1;
	}else{
		var start = document.getElementById("start");
		var suppr = document.getElementById("coeur");
		start.removeChild(suppr); 

		// ajout <coeur>
		var coeur = document.createElement("ul");
		coeur.setAttribute("id", "coeur");
		document.getElementById("start").appendChild(coeur);

		// récupère données
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;

		// nb aleatoire
		do{
			var k = nbAlea(0, sections[section].length-1);
		}while(unicite(k, ks)&&(ks.length<12));
		if(ks.length>11){
			ks=[];
		}
		ks.push(k);
		
		document.getElementById('reponse').innerHTML = k;
		// ajout "mot"
		var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;
		
		document.getElementById("mot").innerHTML = mot;

		radioboxes(section, mode, k);

	}
}


function rootCommencer(){
	// ajout <p>
	var p = document.getElementById('consignes')
	p.innerHTML  = "<i> Selectionnez la bonne traduction et changez de section après 20 bonnes réponses.</i>";

	document.getElementById('sol').innerHTML = "";
	document.getElementById('score').innerHTML = "";
	document.getElementById('reponse').innerHTML = "";
	document.getElementById('points').innerHTML = 0;
	document.getElementById('tour').innerHTML = 0;

	commencer();
}


function radioboxes(section, mode, k){

	// récupération mot
	var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;

	// 5 nb aleatoires entre 1 et 5
	var radioValue = new Array(5);

	//defini la place de la trad correcte
	var bonneRep = nbAlea(0, 4);
	radioValue[bonneRep] = k;
	
	do{
		for(var i=0; i<radioValue.length; i++){
			if(i != bonneRep){
				radioValue[i] = nbAlea(0, sections[section].length-1);
			}
		}
		
	}while (condition(radioValue) == 0);
		// ajout <radio>
		var radios = new Array(5);
		var radioId = ["a", "b", "c", "d", "e"];  
		var radioLabel = new Array(5); 

		for(var i=0; i<radioLabel.length; i++){
			radioLabel[i] = (mode == 1)?  sections[section][radioValue[i]].ru : sections[section][radioValue[i]].fr;
		}


		
		var divs = new Array(5);

		for (var i=0; i<radios.length; i++){
			radios[i] = document.createElement("button");
			radios[i].setAttribute("class", "styled");
			radios[i].setAttribute("onclick", "verifier(this.id)");

			radios[i].setAttribute("id", radioId[i]);
			radios[i].setAttribute("value", radioValue[i]);
			radios[i].setAttribute("name", "selection");

			
			radios[i].innerHTML  = radioLabel[i];

			divs[i] = document.createElement("div");
			divs[i].setAttribute("class", "formu");
			divs[i].appendChild(radios[i]);
			

			document.getElementById("coeur").appendChild(divs[i]);
		}

		// ajout <button>
		arreter= document.createElement("button");
		arreter.setAttribute("onclick", "document.location.reload(false)");
		arreter.setAttribute("class", "styledArret");
		arreter.innerHTML  = "Arrêter";
		document.getElementById("coeur").appendChild(arreter);

}


function verifier(id) {
		var bouton = document.getElementById(id);
		var tour = document.getElementById('tour').innerHTML;
		var points = document.getElementById('points').innerHTML;
		var k = document.getElementById('reponse').innerHTML;
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;
		var valeur = bouton.value;
		
		var motFr = sections[section][k].fr;
		var motRu = sections[section][k].ru;

		tour++;
		document.getElementById('tour').innerHTML = tour;
		document.getElementById('sol').innerHTML = (mode == 1)? `${motFr} = ${motRu}.` : `${motRu} = ${motFr}.`;
		if(k == valeur){
			document.getElementById('sol').setAttribute("class", "vert");
			points++;
			document.getElementById('points').innerHTML = points;
		}else{
			document.getElementById('sol').setAttribute("class", "rouge");
		}
		document.getElementById('score').innerHTML = `${points} / ${tour} essais`;

		if(points > 19){
			if(points == tour){
				document.getElementById('score').innerHTML = `${points} / ${tour} essais <br><br>Félicitation! Vous avez le<br>score parfait!`;
			}else{
				document.getElementById('score').innerHTML = `${points} / ${tour} essais <br><br>Bravo! Votre score est <br>supérieur à 20.`;
			}
		}
		
		commencer();
}

var voir = 0;
function voirMots(){
	if(voir%2 == 0){
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;
		var tableauFr = new Array(sections[section].length+1);
		var tableauRu = new Array(sections[section].length+1);

		tableauFr[0]="Français";
		tableauRu[0]="Russe";
		for(var i=1; i<sections[section].length+1; i++){
			tableauFr[i]=sections[section][i-1].fr;
			tableauRu[i]=sections[section][i-1].ru;
		}
		
		var table = document.createElement("table");
		table.setAttribute("id", "tb");

		for (var i = 0; i<sections[section].length+1; i++){
			var tr = document.createElement("tr");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");

			construireTab();
			
			tr.appendChild(td1);
			
			tr.appendChild(td2);

			table.appendChild(tr);
		}
		document.getElementById("table").appendChild(table);

		var v = document.getElementById("voir");
		v.innerHTML = "Cacher";

	}else{
		var tb = document.getElementById("tb");
		document.getElementById("table").removeChild(tb);

		var v = document.getElementById("voir");
		v.innerHTML = "Voir mots";
	}
	voir++;

	function construireTab() {
		if (i == 0) {
			if (mode == 1) {
				td1.innerHTML = tableauFr[i];
				td1.setAttribute("class", "francaisTitre");
				td2.innerHTML = tableauRu[i];
				td2.setAttribute("class", "russeTitre");
			}
			else {
				td1.innerHTML = tableauRu[i];
				td1.setAttribute("class", "russeTitre");
				td2.innerHTML = tableauFr[i];
				td2.setAttribute("class", "francaisTitre");
			}
		}
		else if (mode == 1) {
			td1.innerHTML = tableauFr[i];
			td1.setAttribute("class", "francais");
			td2.innerHTML = tableauRu[i];
			td2.setAttribute("class", "russe");
		}
		else {
			td1.innerHTML = tableauRu[i];
			td1.setAttribute("class", "russe");
			td2.innerHTML = tableauFr[i];
			td2.setAttribute("class", "francais");
		}
	}
}





