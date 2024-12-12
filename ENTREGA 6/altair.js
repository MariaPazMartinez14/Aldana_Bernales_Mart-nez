(function(vegaEmbed) {
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "data": {"name": "data-fa794ceb432d2e43ed005cbdc4990698"}, "mark": "arc", "encoding": {"color": {"field": "Category", "type": "nominal"}, "theta": {"field": "Percentage", "type": "quantitative"}}, "title": "Porcentajes de Da\u00f1os", "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-fa794ceb432d2e43ed005cbdc4990698": [{"Category": "Da\u00f1o total", "Percentage": 20}, {"Category": "Da\u00f1os asegurados", "Percentage": 10}, {"Category": "Costo proyectado de reconstrucci\u00f3n", "Percentage": 10}, {"Category": "Respuesta OFDA/BHA", "Percentage": 15}, {"Category": "Contribuci\u00f3n AID", "Percentage": 15}, {"Category": "Muertes", "Percentage": 8}, {"Category": "Heridos", "Percentage": 5}, {"Category": "Personas afectadas", "Percentage": 4}, {"Category": "Personas sin hogar", "Percentage": 3}, {"Category": "Magnitud", "Percentage": 10}]}};
  var embedOpt = {"mode": "vega-lite"};

  function showError(el, error){
      el.innerHTML = ('<div class="error" style="color:red;">'
                      + '<p>JavaScript Error: ' + error.message + '</p>'
                      + "<p>This usually means there's a typo in your chart specification. "
                      + "See the javascript console for the full traceback.</p>"
                      + '</div>');
      throw error;
  }
  const el = document.getElementById('graficoaltair');
  vegaEmbed("#graficoaltair", spec, embedOpt)
    .catch(error => showError(el, error));
})(vegaEmbed);

var words = [{
  id: 1,
  word: 'Caso Helene 2024 - ',
  language: 'Categoría cuatro',
  description: 'El huracán Helene se formó a finales de septiembre de 2024 en el noroeste del mar Caribe, inicialmente a partir de una perturbación entre Jamaica y la península de Yucatán. Helene ganó fuerza rápidamente y se intensificó hasta convertirse en un huracán de categoría 4 con vientos de 140 mph. Dejó más de 200 muertos en el sureste de Estados Unidos, lo que lo convirtía en el ciclón más mortífero desde Katrina en 2005 (que llegó a ser un huracán de categoría 5, la máxima en la escala de intensidad, con vientos de más de 280 km/h).En general, se estima que el número de víctimas de un huracán de magnitud 4 ocila entre decenas y algunos cientos. Sin embargo, los fallecidos tras Helena fueron muchos más que el promedio de tormentas de esa categoría. Destacó por ser una de las más mortales debido a diversos factores como la densidad de población en las áreas afectadas, la preparación y respuesta de los sistemas de emergencia, el tiempo que el huracán permanece sobre una región, la cantidad de lluvias y las inundaciones resultantes, así como el nivel de vulnerabilidad de la infraestructura. Hubo desbordamientos de ríos, deslizamientos de tierra y una significativa destrucción de viviendas e infraestructura. Además, la falta de preparación y las limitadas capacidades de evacuación en algunas áreas también fueron factores que incrementaron la mortalidad, demostrando que la peligrosidad de un huracán va más allá de su intensidad.'
}, {
  word: 'Huracán Fifi (1974) - ',
  language: 'Baja magnitud, alta mortalidad',
  description: 'Un caso más extremo ocurrió 50 años atrás. El huracán Fifi, categoría 1 según la escala Saffir-Simpson, causó más de 8.000 muertes en América Central, afectando principalmente a Honduras. Los expertos sostienen que existen tres razones que explican los grandes daños. Aunque la intensidad del viento fue baja, el huracán produjo una enorme cantidad de lluvia (más de 500 mm en algunas áreas), lo que generó inundaciones y deslizamientos de tierra devastadores. Por otra parte, las regiones afectadas eran ya vulnerables por la pobreza y la falta de infraestructura adecuada. Finalmente, se identificó una vulnerabilidad geográfica de la zona, ya que muchas áreas montañosas y cercanas a ríos eran especialmente propensas a los desastres naturales cuando las lluvias eran tan intensas. No fue un huracán de gran magnitud en términos de vientos. La combinación de lluvias torrenciales y la vulnerabilidad de la región a desastres naturales fueron factores clave en el alto número de víctimas y daños.'
}, {
  word:'Huracán Dorian (2019) -',
  language:'Alta magnitud, baja mortalidad',
  description:'Dorian fue una tormenta de máxima intensidad, que no tuvo los efectos que se estimarían. Alcanzó vientos sostenidos de hasta 295 km/h, los más altos de la escala Saffir-Simpson y se reportaron alrededor de 70 muertes, una cifra relativamente baja para un huracán de categoría 5, considerando su magnitud. En comparación, el huracán Katrina de magnitud 5 causó más de 1.800 muertes. Hay tres razones que explican este inesperado resultado. Aunque fue extremadamente fuerte, su movimiento fue muy lento, permitiendo que las autoridades pudieran evacuar a las personas de las zonas más afectadas antes de que el huracán tocara tierra. Esto contribuyó a una baja mortalidad en áreas donde el huracán golpeó más fuerte.  Las Islas Bahamas y otras áreas afectadas ya estaban preparadas, ya que el huracán se formó con bastante anticipación y hubo tiempo para implementar evacuaciones y medidas de protección. Después de golpear las Bahamas, Dorian se desplazó hacia el norte y se debilitó antes de llegar a Estados Unidos, reduciendo el impacto en comparación con huracanes que permanecen más tiempo en tierra o en áreas densamente pobladas.'
}
];

var body = document.body,
    card = document.getElementById('card'),
    cardWord = document.getElementById('word'),
    cardLang = document.getElementById('language'),
    cardDesc = document.getElementById('card-description'),
    lastBtn = document.getElementById('last'),
    nextBtn = document.getElementById('next'),
    i = 0,
    numWords = words.length,
    cardUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/lightpaperfibers.png',
    cardImg = new Image();

cardWord.textContent = words[i].word;
cardLang.textContent = words[i].language;
cardDesc.textContent = words[i].description;

cardImg.onload = function() {
  card.style.background = "#FFF url(" + cardUrl + ") repeat fixed center";
}
cardImg.src = cardUrl;

document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '37') {
    goLeft();
  } else if (e.keyCode == '39') {
    goRight();
  }
}
lastBtn.addEventListener("click", function(e) {
  goLeft();
}, false);
nextBtn.addEventListener("click", function(e) {
  goRight();
}, false);

function goLeft() {
  if (i > 0)
    i--;
  else
    i = numWords - 1;
  changeCard();
}

function goRight() {
  if (i < numWords - 1)
    i++;
  else
    i = 0;
  changeCard();
}

function changeCard() {
  setTimeout(loadCard, 900);
  card.className += " fadeout";
  body.className += " fadeout";
}

function loadCard() {
  removeClass(card, "fadeout");
  cardWord.textContent = words[i].word;
  cardLang.textContent = words[i].language;
  cardDesc.textContent = words[i].description;
}

//Function to easily remove classes, it takes two parameters: 
//1. The element to have a class removed
//2. The name of the class we want to remove from our element
function removeClass(el, _class) {
  //Check if the element exists, 
  //if it has a class,
  //& specifically if it has the class we want to remove
  if (el && el.className && el.className.indexOf(_class) >= 0) {
    //Find the class to be removed (including any white space around it) using a regex search pattern
    var pattern = new RegExp('\\s*' + _class + '\\s*');
    //Replace that search with white space, therefore removing the class 
    el.className = el.className.replace(pattern, ' ');
  }

  
}
