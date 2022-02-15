const { Pokedex } = require("../../models");

// empty array for the trainer's pokemon's id (max of 6 pokemon)
var chosen = [];

// empty array containing the team picked by user
var team;

pokemonSelectionHandler();

function pokemonSelectionHandler() {
    $('.pokemonCard').click(function( ) {
        var emptySlot = chosen.indexOf(null);
        
        if (emptySlot === -1 && chosen.length < 6) {

            chosen.push('span', this).toExponential();
        }
        conversionsAndCalculations();

        addPokemon();
    })
};

function addPokemon() {
    for (var i = 0; i < 6; i++) {
       //Per team member
       if (chosen[i]) {
          //Add description and closing icon
          $(`.chosen:eq(${i}) .description`)
             .html(`<span>#${team[i].id}</span> ${team[i].name}`)
             .append("<i class='close icon'></i>");
          //Add pokemon image
          $(`.chosen:eq(${i}) img`).attr('src', team[i].image);
          //Add eventListener to each existing closing icon that will remove said team member when clicked
          $(`.chosen:eq(${i}) .close.icon`).click(removePokemon.bind(null, i));
 
          //Adding type icons
          $(`.type-one:eq(${i})`).text(teamTypesEntries[i].type1.name);
          if (teamTypes[i].type2) {
             $(`.type-two:eq(${i})`).text(teamTypesEntries[i].type2.name);
          }
          //Adding super-effective icons
          $(`.super-effective:eq(${i})`).html('super-effective against <i class="fas fa-fist-raised"></i>');
          $(`.super-effective-one:eq(${i})`).text(teamTypesEntries[i].type1.superEffective.join(' '));
          //Adding Not-very-effective icons
          $(`.not-effective:eq(${i})`).html('not-very-effective against <i class="fas fa-heart-broken"></i>');
          $(`.not-effective-one:eq(${i})`).text(teamTypesEntries[i].type1.notEffective.join(' '));
          //Adding No-effect icons
          $(`.no-effect:eq(${i})`).html('no-effect against<i class="fas fa-skull"></i>');
          $(`.no-effect-one:eq(${i})`).text(teamTypesEntries[i].type1.noEffect.join(' '));
          //Same for type 2, if it exists
          if (teamTypes[i].type2) {
             $(`.super-effective-two:eq(${i})`).text(teamTypesEntries[i].type2.superEffective.join(' '));
             $(`.not-effective-two:eq(${i})`).text(teamTypesEntries[i].type2.notEffective.join(' '));
             $(`.no-effect-two:eq(${i})`).text(teamTypesEntries[i].type2.noEffect.join(' '));
          }
          //Additional styling
          $(`.team:eq(${i}) .segment`).css({ backgroundColor: teamTypesEntries[i].type1.color, border: 'none' });
          $(`.chosen:eq(${i})`).css('border', 'none');
          if (teamTypes[i].type2) {
             $(`.type-two:eq(${i})`)
                .addClass('type-icon')
                .css('color', teamTypesEntries[i].type2.color);
             $(`.team:eq(${i}) .segment`).css({
                backgroundImage: `linear-gradient(to bottom right, ${teamTypesEntries[i].type1.color},${
                   teamTypesEntries[i].type2.color
                })`,
                border: 'none'
             });
          }
          $(`.type-one:eq(${i})`)
             .addClass('type-icon')
             .css('color', teamTypesEntries[i].type1.color);
          $(`.chosen:eq(${i}) img`).css('margin-top', '0');
          $(`.chosen:eq(${i}) .description`).css('height', '1.7em');
       }
    }
 }

 function removePokemon(index) {
    //Remove this pokemon from the chosen array according to the index passed in
    //Retain the indexes of other remaining team members using null
    chosen[index] = null;
    //Update the team's pokemon entries to reflect this removal
    conversionsAndCalculations();
    //Remove this team pokemon's closing icon and its eventListener
    $(`.chosen:eq(${index}) .description .close.icon`).remove();
    //Remove this team pokemon's name
    $(`.chosen:eq(${index}) .description`).html('');
    //Change back this team pokemon's image to the default
    $(`.chosen:eq(${index}) img`).attr(
       'src',
       'https://i.gifer.com/SodH.gif'
    );
 
    //Remove added styling
    $(`.ui.grid.team-member:eq(${index}) .details`)
       .find('.type-one,.type-two,h5,p')
       .text('');
    $(`.team:eq(${index}) .ui.segment`).css({
       background: 'none',
       backgroundColor: 'white',
       border: '1px solid rgba(34, 36, 38, 0.15)'
    });
    $(`.chosen:eq(${index})`).css('border', '2px solid black');
    $(`.type-one:eq(${index})`).removeClass('type-icon');
    $(`.type-two:eq(${index})`).removeClass('type-icon');
 
    $(`.chosen:eq(${index}) img`).css('margin-top', '1em');
    $(`.chosen:eq(${index}) .description`).css('height', '1em');
 }