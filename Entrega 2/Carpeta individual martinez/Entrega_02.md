# Entrega individual: María Paz Martínez 
 
 Personalmente escogí una de las bases que nos linkeó usted, llamada "NOAA Atlantic Hurricane dataset". La informacón es útil ya que contiene más de 19.000 datos cuantitativos que contribuyen con nuestra investigación: nombre del huracán, año, día, mes, hora, latitud, longuitd, categoría, estatus. 

 ## Proceso limpieza base de datos:

 1. Cambiar puntos por comas en las columnas de latitud y longitud para tener los datos como números para generar posibles estadísticas.

  2. Eliminación de filas con valores NaN en las columnas tropicalstorm_force_diameter	 y hurricane_force_diameter. En donde se pasan de 19066 datos a 9554.

  3. Se decidió mantener los datos vacíos de la columna category ya que, sino la base de datos quedaría muy pequeña, reduciendo a cerca de 2000 datos de los 9554 que se tenían anteriormente. Tampoco se eliminó toda la columna ya que se podría hacer un análisis especifico de estos 2000 en relación a las categorías de los huracanes (1,2,3,4,5).



Con esta base de datos podríamos sustentar nuestro sub-tema 3 y comparar las caracteristcas de los huracanes femenismos versus masculinos y poder caracterizarlos. 


