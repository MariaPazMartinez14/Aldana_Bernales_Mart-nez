# Repositorio - Margarita Bernales D. 

### Limpiar la base fue simple, pero me tomó mucho tiempo. En especial la parte en que tuve que corroborar los nombres neutros. 

#### Lo primero que hice fue determinar qué variables son relevantes para el proyecto, para luego eliminar las que no lo eran y descomprimir o volver más la tabla. 

#### Eliminé las columnas: Historic, Clasification key, Disaster Group, Disaster Subgroup, External IDs, Origin, Associated Types, Appeal, Declaration, River Basin, Admin Units, Entry Date, Last Update. 

#### A continuación, eliminé manualmente todas las filas que no dijeran Storm bajo el indicador Disaster Type para dejar sólo los datos donde podría encontrar ciclones, lo cual tomó demasiado tiempo ya que la base tiene información de casi 120 años. Después, eliminé todas las filas que no tuvieran información en la columna Event Name, porque sin esa información el suceso no es útil para nuestra investigación. 

##### *Es importante tener en cuenta que el sistema de nombramiento para estos fenómenos no ha existido desde siempre, ni tampoco ha sido siempre igual. 

#### Luego eliminé la columna Disaster type, ya que ahora todos los registros son del tipo storm. También borré la columna DisNo. porque tengo otra que indica las fechas y esa no hace más que estorbar. 

#### Eliminé las columnas End Year, End Month y End Day ya que no son relevantes para la investigación. También la columa Magnitude Scale, ya que simplifiqué el asunto indicando la escala en la columna Magnitude. 

#### Eliminé las columnas Subregion y location para simplificar la tabla, y finalmente eliminé la columna Disaster Subtype porque el único que analizaremos es Tropical Cyclone. 

#### Me faltaría determinar cuáles tienen nombre femenino. Para eso, fui pintando con rosado todas las de ese grupo. Después, anoté aquellos nombres que me producían duda, y corroboré uno a uno su procedencia mediante una intensa búsqueda de Google. Así, terminé de marcar todas los femeninos, y saqué la distinción rosada de la tabla para que no fuese tan pesada para la vista. Además, dejé una tabla aparte con los datos corroborados. 

#### Mi siguiente paso fue reestructurar la tabla. Cambié el orden de las columnas y agregué dos nuevas al inicio: Count -para efectos prácticos- y Gender – para distinguirlo fácilmente y poder aplicar funciones en la tabla dinámica. De ésta manera, los sucesos se mantienen ordenados por fecha, y el orden de las columnas es el siguiente: 
#### 1.	Count
#### 2.	Year
#### 3.	Start month
#### 4.	Gender
#### 5.	Name
#### 6.	Country
#### 7.	Region
#### 8.	OFDA/BHA Response
#### 9.	AID Contribution
#### 10. Magnitude (Kph)
#### 11.	Total Deaths
#### 12.	No. Injured
#### 13.	No. Affected
#### 14.	No. Homeless
#### 15.	Total Affected
#### 16.	Reconstruction Costs
#### 17.	Reconstruction costs, Adjusted
#### 18.	Insured Damage
#### 19.	Insured Damage, Adjusted
#### 20.	Total Damage
#### 21.	Total Damage, Adjusted 

##### *Lo que aún no descifro es cómo fusionar las columnas Year y Start Month. Tampoco sé cómo indicar que algunos nombres aparecen repetidos, ya que significa que el mismo ciclón pasó por más de un lugar. También me gustaría poder crear algo así como un índice de gravedad de cada suceso, que cosidere las variables de daño más importantes. 

#### Con la base limpia, seleccioné los datos y cree una tabla de Excel para así poder crear una tabla dinámica en otra hoja y poder manipular los datos más fácilmente. 

##### *Me falta desarrollar soltura para usar las funciones tanto en GoogleColab como en Excel, para sacarle el máximo provecho a los datos. 

### POR QUÉ ESCOGÍ ESTA [BASE](https://www.emdat.be/ ):
#### La base es del International Disaster Database (EM-DAT), Centre for Research on the Epidemiology of Disasters. Esta es una organización que maneja información oficial y de amplia gama, lo que resulta perfecto para nuestra investigación. Al registrarte en la plataforma, tienes acceso a un filtro de datos, para luego recibir una base descargable que se ajuste a lo que estás buscando. 
##### *Además, la organización está en línea con [Github](https://github.com/em-dat/ ) (lo que me imagino podría tener alguna utilidad en este proyecto).

##### Otras páginas útiles para definir el proyecto fueron las siguientes:
#### https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4151744/

##### https://www.commonlit.org/en/texts/stereotypes-might-make-female-hurricanes-deadlier
##### https://www.aoml.noaa.gov/general/lib/lib1/nhclib/E-resources.html

##### https://reliefweb.int/disasters (Monitorea los desastres en tiempo real). 

##### https://www.scirp.org/journal/paperinformation?paperid=119525

### PREGUNTAS QUE PUEDE RESPONDER MI BASE:
#### -	¿Cuántos ciclones han sido nombrados con nombres femeninos? 
#### -	¿Cuántos ciclones tropicales ha habido desde 1928 hasta el presente?
#### -	¿En qué región son más comunes los ciclones tropicales?
#### -	¿Cuál es la relación entre el total de muertos y el costo de reparación de los ciclones? 
##### Entre otras…. 
