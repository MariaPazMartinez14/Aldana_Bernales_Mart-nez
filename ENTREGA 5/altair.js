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