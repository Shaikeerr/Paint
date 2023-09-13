

let couleur;
let largeur=3

function entierAlea(max) {
    return Math.floor(Math.random() * max);
}

let svg = d3.select("svg")
let color = document.getElementById("couleur")

svg.on("mousemove", function(e) {    // e contient les informations sur le click
    if (e.buttons == 1) {
    let pointer = d3.pointer(e); // d3.pointer(e) renvoie les coordonnées du click par rapport au svg (tableau de deux case [x,y])
    svg.append("circle")
        .attr("transform", `translate(${pointer[0]}, ${pointer[1]})rotate(0)`)
        .attr("r", largeur)
        .attr("fill", couleur)
    }
} )

d3.select('#couleur')
  .on('change', function() {      
    couleur = d3.select(this).property('value');
        console.log(couleur)
});

d3.select('#largeur')
    .on('change', function() {
        largeur = d3.select(this).property('value');
        largeur_size = d3.select('#largeur-size');
        largeur_size.html(largeur)
    })