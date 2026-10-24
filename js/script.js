const enemigos = [
    {nombre: "Jabali", vida: 10, daño: 10, peligro: "🟢 Baja", debilidad: "Fuego", resistencia: "-", inmunidad: "Espíritu", foto: "../image/enemigos/jabali.webp", bioma: "pradera"},
    {nombre: "Nixe", vida: 5, daño: 6, peligro: "🟢 Baja", debilidad: "Fuego", resistencia: "Veneno", inmunidad: "Espíritu", foto:"../image/enemigos/nixe.webp", bioma: "pradera"},
    {nombre: "Enanillogris", vida: 20, daño: 5, peligro: "🟢 Baja", debilidad: "Fuego", resistencia: "Veneno", inmunidad: "Espíritu", foto:"../image/enemigos/enanillogris.webp", bioma: "pradera"},

    {nombre: "Grisucio", vida: 40, daño: 14, peligro: "🟢 Baja", debilidad: "Fuego", resistencia: "Veneno", inmunidad: "Espíritu", foto:"../image/enemigos/grisucio.webp", bioma:"bosque-negro"},
    {nombre: "Esqueleto", vida: 40, daño: 25, peligro: "🟡 Media", debilidad: "Contundente", resistencia: "Perforante", inmunidad: "Veneno", foto:"../image/enemigos/esqueleto.webp", bioma:"bosque-negro"},
    {nombre: "Grisucio Chaman", vida: 60, daño: 30, peligro: "🟠 Alta", debilidad: "Fuego", resistencia: "Veneno", inmunidad: "Espíritu", foto:"../image/enemigos/grisucio-chaman.webp", bioma:"bosque-negro"},
    {nombre: "Grisucio Bruto", vida: 150, daño: 30, peligro: "🟠 Alta", debilidad: "Fuego", resistencia: "Veneno", inmunidad: "Espíritu", foto:"../image/enemigos/grisucio-bruto.webp", bioma:"bosque-negro"},
    {nombre: "Fantasma", vida: 60, daño: 25, peligro: "🟠 Alta", debilidad: "Espíritu", resistencia: "Contundente", inmunidad: "Veneno", foto:"../image/enemigos/fantasma.webp", bioma:"bosque-negro"},
    {nombre: "Restos Rancios", vida: 100, daño: 30, peligro: "🟠 Alta", debilidad: "Contundente", resistencia: "Perforante", inmunidad: "Veneno", foto:"../image/enemigos/restos-rancios.webp", bioma:"bosque-negro"},
    {nombre: "Oso", vida: 800, daño: 55, peligro: "🔴 Muy Alta", debilidad: "Fuego", resistencia: "Contundente", inmunidad: "Espíritu", foto:"../image/enemigos/oso.webp", bioma:"bosque-negro"},
    {nombre: "Troll", vida: 600, daño: 70, peligro: "🔴 Muy Alta", debilidad: "Perforante", resistencia: "Contundente", inmunidad: "Espíritu", foto:"../image/enemigos/troll.webp", bioma:"bosque-negro"},

    {nombre: "Serpiente", vida: 400, daño: 70, peligro: "🔴 Muy Alta", debilidad: "Escarcha", resistencia: "Veneno", inmunidad: "Fuego", foto:"../image/enemigos/serpiente.webp", bioma:"oceano"},

    {nombre: "Surtling", vida: 20, daño: 40, peligro: "🟢 Baja", debilidad: "Escarcha", resistencia: "-", inmunidad: "Fuego", foto:"../image/enemigos/surtling.webp", bioma:"pantano"},
    {nombre: "Babosa", vida: 50, daño: 90, peligro: "🟡 Media", debilidad: "Contundente", resistencia: "Fuego", inmunidad: "Veneno", foto:"../image/enemigos/babosa.webp", bioma:"pantano"},
    {nombre: "Sanguijuela", vida: 60, daño: 70, peligro: "🟡 Media", debilidad: "-", resistencia: "Veneno", inmunidad: "Fuego", foto:"../image/enemigos/sanguijuela.webp", bioma:"pantano"},
    {nombre: "Draugr", vida: 100, daño: 48, peligro: "🟡 Media", debilidad: "-", resistencia: "Fuego", inmunidad: "Veneno", foto:"../image/enemigos/draugr.webp", bioma:"pantano"},
    {nombre: "Exudador", vida: 150, daño: 115, peligro: "🟠 Alta", debilidad: "Contundente", resistencia: "Fuego", inmunidad: "Veneno", foto:"../image/enemigos/exudador.webp", bioma:"pantano"},
    {nombre: "Draugr Élite", vida: 200, daño: 58, peligro: "🟠 Alta", debilidad: "-", resistencia: "Fuego", inmunidad: "Veneno", foto:"../image/enemigos/draugr-elite.webp", bioma:"pantano"},
    {nombre: "Espectro", vida: 100, daño: 60, peligro: "🟠 Alta", debilidad: "Fuego", resistencia: "Contundente", inmunidad: "Escarcha", foto:"../image/enemigos/espectro.webp", bioma:"pantano"},
    {nombre: "Abominación", vida: 800, daño: 80, peligro: "🔴 Muy Alta", debilidad: "Fuego", resistencia: "Contundente", inmunidad: "Veneno", foto:"../image/enemigos/abominacion.webp", bioma:"pantano"},

    {nombre: "Murcielago", vida: 10, daño: 20, peligro: "🟢 Baja", debilidad: "Fuego", resistencia: "Perforación", inmunidad: "Escarcha", foto:"../image/enemigos/murcielago.webp", bioma:"montaña"},
    {nombre: "Draco", vida: 100, daño: 90, peligro: "🟢 Baja", debilidad: "Fuego", resistencia: "-", inmunidad: "Escarcha", foto:"../image/enemigos/draco.webp", bioma:"montaña"},
    {nombre: "Lobo", vida: 80, daño: 70, peligro: "🟡 Media", debilidad: "-", resistencia: "-", inmunidad: "Espiritu", foto:"../image/enemigos/lobo.webp", bioma:"montaña"},
    {nombre: "Ulv", vida: 50, daño: 70, peligro: "🟡 Media", debilidad: "Veneno", resistencia: "Fuego", inmunidad: "-", foto:"../image/enemigos/ulv.webp", bioma:"montaña"},
    {nombre: "Cultista", vida: 200, daño: 50, peligro: "🟠 Alta", debilidad: "Veneno", resistencia: "-", inmunidad: "Fuego", foto:"../image/enemigos/cultista.webp", bioma:"montaña"},
    {nombre: "Fenring", vida: 300, daño: 95, peligro: "🟠 Alta", debilidad: "Fuego", resistencia: "Veneno", inmunidad: "-", foto:"../image/enemigos/fenring.webp", bioma:"montaña"},
    {nombre: "Golem de piedra", vida: 800, daño: 110, peligro: "🔴 Muy Alta", debilidad: "Pico", resistencia: "Perforación", inmunidad: "Escarcha", foto:"../image/enemigos/golem-de-piedra.webp", bioma:"montaña"},

    {nombre: "Bulto", vida: 100, daño: 50, peligro: "🟡 Media", debilidad: "Contundente", resistencia: "Escarcha", inmunidad: "Veneno", foto:"../image/enemigos/bulto.webp", bioma:"llanura"},
    {nombre: "Fulling", vida: 175, daño: 85, peligro: "🟡 Media", debilidad: "-", resistencia: "-", inmunidad: "Espíritu", foto:"../image/enemigos/fulling.webp", bioma:"llanura"},
    {nombre: "Fulling Chaman", vida: 100, daño: 100, peligro: "🟡 Media", debilidad: "-", resistencia: "-", inmunidad: "Espíritu", foto:"../image/enemigos/fulling-chaman.webp", bioma:"llanura"},
    {nombre: "Muersquito", vida: 10, daño: 90, peligro: "🟠 Alta", debilidad: "-", resistencia: "-", inmunidad: "Espíritu", foto:"../image/enemigos/muersquito.webp", bioma:"llanura"},
    {nombre: "Luey", vida: 1000, daño: 130, peligro: "🟠 Alta", debilidad: "Fuego", resistencia: "Contundente", inmunidad: "Espíritu", foto:"../image/enemigos/luey.webp", bioma:"llanura"},
    {nombre: "Fulling Berserker", vida: 800, daño: 130, peligro: "🔴 Muy Alta", debilidad: "-", resistencia: "-", inmunidad: "Espíritu", foto:"../image/enemigos/fulling-berserker.webp", bioma:"llanura"},
    {nombre: "Vil", vida: 1200, daño: 150, peligro: "🔴 Muy Alta", debilidad: "Fuego", resistencia: "Escarcha", inmunidad: "Veneno", foto:"../image/enemigos/vil.webp", bioma:"llanura"},

    {nombre: "Raza Buscador", vida: 20, daño: 60, peligro: "🟢 Baja", debilidad: "-", resistencia: "Contundente", inmunidad: "Espíritu", foto:"../image/enemigos/raza-buscador.webp", bioma:"tierras-nubladas"},
    {nombre: "Picaro Dvergr", vida: 350, daño: 110, peligro: "⚖️ Neutral", debilidad: "-", resistencia: "-", inmunidad: "Espíritu", foto:"../image/enemigos/picaro-dvergr.webp", bioma:"tierras-nubladas"},
    {nombre: "Mago Dvergr", vida: 350, daño: 200, peligro: "⚖️ Neutral", debilidad: "-", resistencia: "Escarcha", inmunidad: "Espíritu", foto:"../image/enemigos/mago-dvergr.webp", bioma:"tierras-nubladas"},
    {nombre: "Garrapata", vida: 50, daño: 50, peligro: "🟡 Media", debilidad: "Perforación", resistencia: "-", inmunidad: "Espíritu", foto:"../image/enemigos/garrapata.webp", bioma:"tierras-nubladas"},
    {nombre: "Buscador", vida: 200, daño: 120, peligro: "🟡 Media", debilidad: "-", resistencia: "Contundente", inmunidad: "Espíritu", foto:"../image/enemigos/buscador.webp", bioma:"tierras-nubladas"},
    {nombre: "Soldado Buscador", vida: 1500, daño: 120, peligro: "🟠 Alta", debilidad: "-", resistencia: "Contundente", inmunidad: "Espíritu", foto:"../image/enemigos/soldado-buscador.webp", bioma:"tierras-nubladas"},
    {nombre: "Gjall", vida: 1500, daño: 80, peligro: "🔴 Muy Alta", debilidad: "-", resistencia: "Fuego", inmunidad: "Espíritu", foto:"../image/enemigos/gjall.webp", bioma:"tierras-nubladas"},

    {nombre: "Mancha de lava", vida: 300, daño: 70, peligro: "🟢 Baja", debilidad: "Escarcha", resistencia: "Perforación", inmunidad: "Fuego", foto:"../image/enemigos/mancha-de-lava.webp", bioma:"tierras-de-ceniza"},
    {nombre: "Buican", vida: 200, daño: 110, peligro: "🟢 Baja", debilidad: "Escarcha", resistencia: "-", inmunidad: "Veneno", foto:"../image/enemigos/buican.webp", bioma:"tierras-de-ceniza"},
    {nombre: "Crispante Carbonizado", vida: 220, daño: 100, peligro: "🟡 Media", debilidad: "Espíritu", resistencia: "Perforación", inmunidad: "Veneno", foto:"../image/enemigos/crispante-carbonizado.webp", bioma:"tierras-de-ceniza"},
    {nombre: "Arquero Carbonizado", vida: 200, daño: 90, peligro: "🟡 Media", debilidad: "Espíritu", resistencia: "Perforación", inmunidad: "Veneno", foto:"../image/enemigos/arquero-carbonizado.webp", bioma:"tierras-de-ceniza"},
    {nombre: "Ballesta", vida: 400, daño: 120, peligro: "🟡 Media", debilidad: "-", resistencia: "Perforación", inmunidad: "Veneno", foto:"../image/enemigos/ballesta.webp", bioma:"tierras-de-ceniza"},
    {nombre: "Fauceseosas", vida: 1100, daño: 140, peligro: "🟡 Media", debilidad: "Escarcha", resistencia: "Veneno", inmunidad: "Fuego", foto:"../image/enemigos/fauceseosas.webp", bioma:"tierras-de-ceniza"},
    {nombre: "Cenicerdo", vida: 800, daño: 150, peligro: "🟠 Alta", debilidad: "-", resistencia: "Fuego", inmunidad: "Espíritu", foto:"../image/enemigos/cenicerdo.webp", bioma:"tierras-de-ceniza"},
    {nombre: "Guerrero Carbonizado", vida: 600, daño: 160, peligro: "🟠 Alta", debilidad: "Espíritu", resistencia: "Perforación", inmunidad: "Veneno", foto:"../image/enemigos/guerrero-carbonizado.webp", bioma:"tierras-de-ceniza"},
    {nombre: "Brujo Carbonizado", vida: 600, daño: 100, peligro: "🟠 Alta", debilidad: "Espíritu", resistencia: "Perforación", inmunidad: "Veneno", foto:"../image/enemigos/brujo-carbonizado.webp", bioma:"tierras-de-ceniza"},
    {nombre: "Morgen", vida: 1600, daño: 160, peligro: "🔴 Muy Alta", debilidad: "Rayo", resistencia: "Contundente", inmunidad: "-", foto:"../image/enemigos/morgen.webp", bioma:"tierras-de-ceniza"},
    {nombre: "Valquiria Caida", vida: 1500, daño: 140, peligro: "🔴 Muy Alta", debilidad: "Espíritu", resistencia: "Fuego", inmunidad: "Veneno", foto:"../image/enemigos/valquiria-caida.webp", bioma:"tierras-de-ceniza"},
];

for (const enemigo of enemigos) {
    const contenedor = document.getElementById(enemigo.bioma);
    contenedor.innerHTML += `
    <div class="bloque">
        <h4>${enemigo.nombre}</h4>
        <img src="${enemigo.foto}" alt="${enemigo.nombre}, enemigo de ${enemigo.bioma}">
        <div class="fila">
            <p>Base HP: ❤️ ${enemigo.vida}</p>
            <p>Daño base: ⚔️ ${enemigo.daño}</p>
        </div>
        <div class="intro">
            <p>Peligro: ${enemigo.peligro}</p>
            <p>Debilidad: 🎯 ${enemigo.debilidad}</p>
            <p>Resistencia: 💪 ${enemigo.resistencia}</p>
            <p>Inmunidad: ❌ ${enemigo.inmunidad}</p>
        </div>
    </div>`;
}