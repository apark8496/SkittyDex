// Team INFO

exports = {};
var weaknesses = {};

var POKE_TYPES =
[
    "Normal", "Fire","Water", "Grass","Electric", "Ice","Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy",
];

var POKE_ABILITY =
{
    Aftermath: [""],AngerPoint: [""], Anticipation: [""], BadDreams: [""], Download: [""], DrySkin: [""], Filter: [""], FlowerGift: [""],
    Forewarn: [""], Frisk: [""], Gluttony: [""], Heatproof: [""], HoneyGather: [""], Hydration: [""], IceBody: [""], IronFist: [""], Klutz: [""],
    LeafGuard: [""], MagicGuard: [""], MoldBreaker: [""], MotorDrive: [""], Multitype: [""], NoGuard: [""], Normalize: [""],
    PoisonHeal: [""],QuickFeet: [""], Reckless: [""], Rivalry: [""], Scrappy: [""], Simple: [""], SkillLink: [""], SlowStart: [""],
    Sniper: [""], SnowCloak: [""], SnowWarning: [""], SolarPower: [""], SolidRock: [""], Stall: [""], Steadfast: [""], StormDrain: [""],
    SuperLuck: [""], TangledFeet: [""], Technician: [""], TintedLens: [""], Unaware: [""], Unburden: [""],

}










function showPokemon()
{
	var poke = [];
	weaknesses = {};
	// Clear table
	$("#pokeBody").empty();
	var out = document.getElementById("pokeBody");
	
	// Populate poke array with all Pokemon input boxes, trimming out dashes and spaces
	poke[0] = $("#poke0").val().toLowerCase();
	poke[1] = $("#poke1").val().toLowerCase();
	poke[2] = $("#poke2").val().toLowerCase();
	poke[3] = $("#poke3").val().toLowerCase();
	poke[4] = $("#poke4").val().toLowerCase();
	poke[5] = $("#poke5").val().toLowerCase();
    poke[6] = $("#poke6").val().toLowerCase();
}   