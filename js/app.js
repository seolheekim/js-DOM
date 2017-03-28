/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/


var tay = "Tay-Tay"

var changeName1 = document.getElementById("name1");

changeName1.innerHTML = tay;

/*2. Replace the n/a with the following: 

Project Manager*/

var pm = "Project Manager";

var changePosition = document.getElementById("position2");

changePosition.innerHTML = pm;


/*3. Replace the n/a with the following:

Concatenation*/
var conCat = "Concatenation";

var changeConcat = document.getElementById("alias3");

changeConcat.innerHTML = conCat;

/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var snoop = "Lorizzle owned gangsta sit amizzle, sheezy for sure dawg";

var changeSnoop = document.getElementsByClassName("profile");

changeSnoop[0].innerHTML = snoop;


/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

var samJack = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

var changeSam = document.getElementsByClassName("profile");

changeSam[2].innerHTML = samJack;


/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/
 
var newNameBox = document.getElementById("name7");

newNameBox.innerHTML = "Chuck Norris";


/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var alias8 = document.getElementById("aliasBox");

alias8.innerHTML = "The Purple Monster";


//Final Boss
/*8. Create your own profile.*/

var myImage = document.getElementsByClassName("s3.amazonaws.com/lawgical/assets/data/2689/original.pn")[2];
myImage.innerHTML = "http://completepuppytraining.com/CompletePuppyTrainingPackage/3Reer-p.png";

var myName = document.createElement("div");
myName.id = "name9";
myName.innerHTML = "Seolhee Kim";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(myName);

var myPosition = document.createElement("div");
myPosition.id = "position9";
myPosition.innerHTML = "Web Desiner/Soon to be Developer";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(myPosition);

var myAlias = document.createElement("div");
myAlias.id = "alias9";
myAlias.innerHTML = "Bring It On";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(myAlias);

var myBio = document.createElement("div");
myBio.id = "bio9";
myBio.innerHTML = "I am bring my game face, ready or not here I come!";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(myBio);