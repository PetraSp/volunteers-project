// function startMap() {
//   var BCN = {
//   	lat: 41.384433,
//   	lng: 2.176923};
//
//     var map = new google.maps.Map(
//     document.getElementById('map'),
//     {
//       zoom: 13,
//       center: BCN
//     });
//
//   var infoWindow = new google.maps.InfoWindow();
//
//   var NursingHome1 = new google.maps.Marker({
//   position: {
//   	lat: 41.392589,
//     lng: 2.184317
//   },
//   map: map,
//   title: "Grup Ballesol",
//   description: "La residencia de ancianos Ballesol Almogávares está ubicado en la calle Almogávares de Barcelona y cuenta con rápidas y fáciles comunicaciones de transporte público tanto para las personas mayores como para sus familiares. Tiene una superficie total de 9.181 m2 con una capacidad de 194 plazas residenciales tanto para personas con plena autonomía como para personas en situación de dependencia física y/o psíquica.",
//
//   address:"'Gran Via de les Corts Catalanes, 669, 08010 Barcelona'",
//
//   phone: "932 65 53 07",
//   website: "<www.residenciarogerdeflor.es"
//
//
//   });
//
//   NursingHome1.addListener("click", function(){
//     console.log("hello");
//   });
//
//
//   var NursingHome2 = new google.maps.Marker({
//   position: {
//     lat: 41.395513,
//     lng: 2.187789
//   },
//   map: map,
//   title: "Residencia La Trobada",
//   description: "Residencia La trobada es un Centro Geriátrico adaptado para personas válidas, dependientes y todo tipo de demencias. En un ambiente familiar y lleno de calor de hogar, usted puede disfrutar de todos los cuidados que necesita, tener una asistencia sanitaria al instante, llevar una dieta alimentaria de acuerdo a sus necesidades y, lo más importante de todo, vivir dentro de una gran familia teniendo a los suyos muy cerca de usted. En La Trobada encontrará ese estilo de vida que usted necesita.",
//
//   address: "'Carrer de Joan d'Àustria, 105, 08018 Barcelona'",
//
//   phone: "933 09 16 77",
//   website: "www.residencialatrobada.com"
//   });
//
//   var NursingHome3 = new google.maps.Marker({
//   position: {
//     lat: 41.391931,
//     lng: 2.170988
//   },
//   map: map,
//   description: `Gran Vida es una residencia para la tercera edad ubicada en el corazón de Barcelona, junto a Plaza Cataluña, que pertenece al grupo Gran Vida.
// Este centro es especial por su ubicación en el centro de la ciudad condal, y por la belleza de su edificio.
// Tiene más de 25 años de referencia, muy conocida en la zona y en Barcelona, y muchas familias confían en ella para que sus familiares estén como en casa. Es un lugar de tranquilidad en medio del caos de Barcelona.
// Es una de nuestras residencias más acogedoras y familiares. Gran Vida habla por sí misma.
// Este centro cuenta con 17 plazas.`,
//   title: "Residéncia La Comtal - Group Gran",
//   address: "'Gran Via de les Corts Catalanes, 637. 08010 Barcelona, 08010 Barcelona'",
//   phone: "933 01 91 79",
//   website: "-------"
//   });
//
//
//
//   var NursingHome4 = new google.maps.Marker({
//   position: {
//     lat: 41.413629,
//     lng: 2.156834
//   },
//   map: map,
//   description: `La residencia de ancianos SARquavitae La Salut Josep Servat nace gracias a los esfuerzos conjuntos del Colegio Oficial de Médicos de Barcelona (COMB) y SARquavitae. Se trata de un edificio de nueva construcción con amplios espacios interiores y exteriores totalmente equipados para su máximo confort. Nuestros residentes pueden pasear y disfrutar del aire libre por su magnífico jardín.
//
//                 La residencia de ancianos tiene una distribución pensada para asegurar un cuidado personalizado. Cuenta con distintas unidades de convivencia para que los residentes puedan vivir según sus necesidades. Las unidades son independientes unas de las otras y disponen de su propio comedor y sala de estar.`,
//   title:        "SARquavitae Residencia de ancianos La Salut Josep Servat",
//   address: "'Carrer d'Antequera, 8, 08024 Barcelona'",
//
//   phone: "932 85 75 12",
//   website: "www.sarquavitae.es"
//   });
//
//   var NursingHome5 = new google.maps.Marker({
//   position: {
//     lat: 41.395279,
//     lng: 2.147650
//   },
//   map: map,
//   description:`Persohome es una agencia de servicios de ayuda a domicilio formada por un equipo de especialistas en la selección de personal doméstico.
// Nuestro objetivo es seleccionar para usted a las profesionales que mejor se adapten a las necesidades de su hogar, de su negocio y/o de su familia.
// Para su tranquilidad, estamos avalados por el Servei d’Ocupació de Catalunya, garantía de que actuamos siempre dentro del marco de la legalidad. Además, todos nuestros servicios están garantizados y respaldados por contrato.`,
//   title: "Persohome",
//   address: "'Carrer Muntaner, 267 1º 2ª, 08021 Barcelona'",
//   phone: "618 75 28 13",
//   website: "www.persohome.es"
//   });
//
//   var NursingHome6 = new google.maps.Marker({
//   position: {
//     lat: 41.396116,
//     lng: 2.176575
//   },
//   map: map,
//   description:`Residència Roger de Flor: La nostra filosofía, i el nostre objectiu principal és assegurar el benestar i la qualitat de vida de les persones grans.`,
//   title: "Residència Geriàtrica Roger de Flor",
//
//   address: "'Gran Via de les Corts Catalanes, 669, 08010 Barcelona'",
//
//   phone: "932 65 53 07",
//   website:"www.residenciarogerdeflor.es"
//   });
//
//   var NursingHome7 = new google.maps.Marker({
//   position: {
//     lat: 41.375437,
//     lng: 2.128196
//   },
//   map: map,
//   description:`Trabajamos cada día para conseguir, como principal objetivo, que nuestros mayores disfruten de la máxima comodidad e independencia en sus casas. No sólo pensando en los usuarios de la tercera edad sinó también en sus familiares y cuidadores. `,
//   title: "Seniorsants",
//
//   address: "'Carrer de Sants, 313, 08028 Barcelona'",
//
//   phone: "933 31 87 83",
//   website: "www.seniorsants.com"
//
//   });
//
//
//   var nursingHomes = [NursingHome1, NursingHome2, NursingHome3, NursingHome4, NursingHome5, NursingHome6, NursingHome7];
//
//   var homeFunction = function (item) {
//
//     google.maps.event.addListener(item, 'click', function() {
//       console.log(infoWindow);
//       infoWindow.setContent(item.title);
//       infoWindow.open(map, this);
//
//     });

   $.ajax({
       url: "http://localhost:3000/search/json",
       type: "get",
       success: function(response){
        console.log("response",response);
         response.forEach(function(response){
          console.log(response);
             let position = {
               lat: response.location.coordinates[1],
               lng: response.location.coordinates[0]
             };
             var pin = new google.maps.Marker({ position, map});
             var contentString ='<div class="pin-google"><h5>' + response.fullname + '</h5>' ;




             google.maps.event.addListener(pin, 'click', function() {
             infoWindow.setContent(contentString);
                           infoWindow.open(map, this);
               });


         });
       },
       error: function(error){
         console.log(error);
       }

     //  var NursingHome1 = new google.maps.Marker({
     //   position: {
     //     lat: 41.392589,
     //     lng: 2.184317
     //   },
     //   map: map,
     //   title: "Grup Ballesol",
     //   description: "La residencia de ancianos Ballesol Almogávares está ubicado en la calle Almogávares de Barcelona y cuenta con rápidas y fáciles comunicaciones de transporte público tanto para las personas mayores como para sus familiares. Tiene una superficie total de 9.181 m2 con una capacidad de 194 plazas residenciales tanto para personas con plena autonomía como para personas en situación de dependencia física y/o psíquica.",
     //   address:"'Gran Via de les Corts Catalanes, 669, 08010 Barcelona'",
     //   phone: "932 65 53 07",
     //   website: "<www.residenciarogerdeflor.es"


     //   });


     //   NursingHome1.addListener("click", function(){
     //     console.log("hello");
     //   });

     //   var NursingHome2 = new google.maps.Marker({
     //   position: {
     //     lat: 41.395513,
     //     lng: 2.187789
     //   },
     //   map: map,
     //   title: "Residencia La Trobada",
     //   description: "Residencia La trobada es un Centro Geriátrico adaptado para personas válidas, dependientes y todo tipo de demencias. En un ambiente familiar y lleno de calor de hogar, usted puede disfrutar de todos los cuidados que necesita, tener una asistencia sanitaria al instante, llevar una dieta alimentaria de acuerdo a sus necesidades y, lo más importante de todo, vivir dentro de una gran familia teniendo a los suyos muy cerca de usted. En La Trobada encontrará ese estilo de vida que usted necesita.",
     //   address: "'Carrer de Joan d'Àustria, 105, 08018 Barcelona'",
     //   phone: "933 09 16 77",
     //   website: "www.residencialatrobada.com"
     //   });

     //   var NursingHome3 = new google.maps.Marker({
     //   position: {
     //     lat: 41.391931,
     //     lng: 2.170988
     //   },
     //   map: map,
     //   description: `Gran Vida es una residencia para la tercera edad ubicada en el corazón de Barcelona, junto a Plaza Cataluña, que pertenece al grupo Gran Vida.
     // Este centro es especial por su ubicación en el centro de la ciudad condal, y por la belleza de su edificio.
     // Tiene más de 25 años de referencia, muy conocida en la zona y en Barcelona, y muchas familias confían en ella para que sus familiares estén como en casa. Es un lugar de tranquilidad en medio del caos de Barcelona.
     // Es una de nuestras residencias más acogedoras y familiares. Gran Vida habla por sí misma.
     // Este centro cuenta con 17 plazas.`,
     //   title: "Residéncia La Comtal - Group Gran",
     //   address: "'Gran Via de les Corts Catalanes, 637. 08010 Barcelona, 08010 Barcelona'",
     //   phone: "933 01 91 79",
     //   website: "-------"
     //   });



     //   var NursingHome4 = new google.maps.Marker({
     //   position: {
     //     lat: 41.413629,
     //     lng: 2.156834
     //   },
     //   map: map,
     //   description: `La residencia de ancianos SARquavitae La Salut Josep Servat nace gracias a los esfuerzos conjuntos del Colegio Oficial de Médicos de Barcelona (COMB) y SARquavitae. Se trata de un edificio de nueva construcción con amplios espacios interiores y exteriores totalmente equipados para su máximo confort. Nuestros residentes pueden pasear y disfrutar del aire libre por su magnífico jardín.
     //                 La residencia de ancianos tiene una distribución pensada para asegurar un cuidado personalizado. Cuenta con distintas unidades de convivencia para que los residentes puedan vivir según sus necesidades. Las unidades son independientes unas de las otras y disponen de su propio comedor y sala de estar.`,
     //   title:        "SARquavitae Residencia de ancianos La Salut Josep Servat",
     //   address: "'Carrer d'Antequera, 8, 08024 Barcelona'",
     //   phone: "932 85 75 12",
     //   website: "www.sarquavitae.es"
     //   });

     //   var NursingHome5 = new google.maps.Marker({
     //   position: {
     //     lat: 41.395279,
     //     lng: 2.147650
     //   },
     //   map: map,
     //   description:`Persohome es una agencia de servicios de ayuda a domicilio formada por un equipo de especialistas en la selección de personal doméstico.
     // Nuestro objetivo es seleccionar para usted a las profesionales que mejor se adapten a las necesidades de su hogar, de su negocio y/o de su familia.
     // Para su tranquilidad, estamos avalados por el Servei d’Ocupació de Catalunya, garantía de que actuamos siempre dentro del marco de la legalidad. Además, todos nuestros servicios están garantizados y respaldados por contrato.`,
     //   title: "Persohome",
     //   address: "'Carrer Muntaner, 267 1º 2ª, 08021 Barcelona'",
     //   phone: "618 75 28 13",
     //   website: "www.persohome.es"
     //   });

     //   var NursingHome6 = new google.maps.Marker({
     //   position: {
     //     lat: 41.396116,
     //     lng: 2.176575
     //   },
     //   map: map,
     //   description:`Residència Roger de Flor: La nostra filosofía, i el nostre objectiu principal és assegurar el benestar i la qualitat de vida de les persones grans.`,
     //   title: "Residència Geriàtrica Roger de Flor",
     //   address: "'Gran Via de les Corts Catalanes, 669, 08010 Barcelona'",
     //   phone: "932 65 53 07",
     //   website:"www.residenciarogerdeflor.es"
     //   });

     //   var NursingHome7 = new google.maps.Marker({
     //   position: {
     //     lat: 41.375437,
     //     lng: 2.128196
     //   },
     //   map: map,
     //   description:`Trabajamos cada día para conseguir, como principal objetivo, que nuestros mayores disfruten de la máxima comodidad e independencia en sus casas. No sólo pensando en los usuarios de la tercera edad sinó también en sus familiares y cuidadores. `,
     //   title: "Seniorsants",
     //   address: "'Carrer de Sants, 313, 08028 Barcelona'",
     //   phone: "933 31 87 83",
     //   website: "www.seniorsants.com"

     //   });


     //   var nursingHomes = [NursingHome1, NursingHome2, NursingHome3, NursingHome4, NursingHome5, NursingHome6, NursingHome7];

     //   var homeFunction = function (item) {

     //     google.maps.event.addListener(item, 'click', function() {
     //       console.log(infoWindow);
     //       infoWindow.setContent(item.title);
     //       infoWindow.open(map, this);

     //     });

     //     google.maps.event.addListener(item, 'click', function() {
     //       console.log(item)
     //       var address = "<i class=material-icons>place</i>" + ' ' + item.address + '</br>';
     //       var phone = "<i class=material-icons>phone</i>" + ' ' + item.phone + '</br>';
     //       var search = "<i class=material-icons>search</i>" + ' ' + item.website + '</br>';
     //       var breakLine = "</br>";
     //       $("#info-box").text(item.description);
     //       $("#info-box").append(breakLine);
     //       $("#info-box").append(address);
     //       // $("#info-box").text(item.place);
     //       // $("#info-box").append(breakLine);
     //       $("#info-box").append(phone);
     //       // $("#info-box").text(item.phone);
     //       // $("#info-box").append(breakLine);
     //       $("#info-box").append(search);
     //       // $("#info-box").text(item.website);
     //       infoWindow.setContent(item.title);
     //       infoWindow.open(map, this);
     //     });
     //   };
     //   nursingHomes.forEach(homeFunction);
     // }
     //
     // <i class="material-icons">home</i>
     // <i class="material-icons">search</i>
     // <i class="material-icons">cloud</i>
     // <i class="material-icons">delete</i>
}
$(document).ready(function(){

startMap();
});
