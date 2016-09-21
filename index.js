$(document).ready(function()  {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2tzaHVsdGlzIiwiYSI6ImNpdDJ3a2JtYTB0cHEycHFwOW5uMGV5cHkifQ.sUGo-LKDrCEO_LEhsCmqXQ';
  // This shows the map
  var map = new mapboxgl.Map({
    // container id specified in the HTML
    container: 'map',
    style: 'mapbox://styles/skshultis/cit4ctt95000d2xo1mcmu1pes',
    // initial position and zoom
    center: [-76.995845, 38.892523],
    zoom: 11.3
  });

  map.on('load', function () {
    // Add a GeoJSON source containing place coordinates and information.
    map.addSource("places", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9809942,38.8495655 ]
             },
             "properties": {
             "id":295461,
             "date":"7/30/16",
             "time":"12:17 AM",
             "offense":"ROBBERY",
             "address":"3156 3248  BLOCK OF STANTON ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01441244,38.89955377 ]
             },
             "properties": {
             "id":295470,
             "date":"7/30/16",
             "time":"1:34 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"200 - 299 BLOCK OF MASSACHUSETTS AVENUE NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02500437,38.95843932 ]
             },
             "properties": {
             "id":295477,
             "date":"7/30/16",
             "time":"3:27 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"800  - 899 BLOCK OF MADISON STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93002157,38.89290354 ]
             },
             "properties": {
             "id":295478,
             "date":"7/30/16",
             "time":"3:34 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"200 - 299 BLOCK OF 50TH STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0275732,38.9181176 ]
             },
             "properties": {
             "id":295482,
             "date":"7/30/16",
             "time":"4:25 AM",
             "offense":"ROBBERY",
             "address":"1100 - 1199 BLOCK OF V STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02781806,38.95461918 ]
             },
             "properties": {
             "id":295483,
             "date":"7/30/16",
             "time":"4:27 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"5300  - 5399 BLOCK OF GEORGIA AVENUE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02969993,38.95781665 ]
             },
             "properties": {
             "id":295485,
             "date":"7/30/16",
             "time":"4:32 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"5600  - 5699 BLOCK OF 13TH STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9884354,38.85417879 ]
             },
             "properties": {
             "id":295489,
             "date":"7/30/16",
             "time":"5:15 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2400 - 2599 BLOCK OF ELVANS ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02721648,38.95026832 ]
             },
             "properties": {
             "id":295491,
             "date":"7/30/16",
             "time":"5:38 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4900  - 4999 BLOCK OF GEORGIA AVENUE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02532463,38.91811811 ]
             },
             "properties": {
             "id":295495,
             "date":"7/30/16",
             "time":"6:09 AM",
             "offense":"ROBBERY",
             "address":"900 - 999 BLOCK OF V STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0121827,38.87139381 ]
             },
             "properties": {
             "id":295507,
             "date":"7/30/16",
             "time":"11:24 AM",
             "offense":"ROBBERY",
             "address":"1500 - 1599 BLOCK OF 1ST STREET SW",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99089538,38.89709502 ]
             },
             "properties": {
             "id":295526,
             "date":"7/30/16",
             "time":"2:21 PM",
             "offense":"ROBBERY",
             "address":"1100 - 1199 BLOCK OF MARYLAND AVENUE NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93860452,38.91175385 ]
             },
             "properties": {
             "id":295531,
             "date":"7/30/16",
             "time":"3:45 PM",
             "offense":"ROBBERY",
             "address":"4300 - 4499 BLOCK OF PONDS STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99618501,38.92696697 ]
             },
             "properties": {
             "id":295537,
             "date":"7/30/16",
             "time":"4:17 PM",
             "offense":"SEX ABUSE",
             "address":"2900 - 2999 BLOCK OF 7TH STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99789419,38.84700863 ]
             },
             "properties": {
             "id":295545,
             "date":"7/30/16",
             "time":"5:06 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"500 599  BLOCK OF LEBAUM STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98306647,38.90376934 ]
             },
             "properties": {
             "id":295551,
             "date":"7/30/16",
             "time":"5:52 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1400 - 1498 BLOCK OF HOLBROOK STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00907496,38.89988761 ]
             },
             "properties": {
             "id":295559,
             "date":"7/30/16",
             "time":"6:51 PM",
             "offense":"ROBBERY",
             "address":"710 - 799 BLOCK OF NORTH CAPITOL STREET",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9853866,38.83363919 ]
             },
             "properties": {
             "id":295560,
             "date":"7/30/16",
             "time":"7:08 PM",
             "offense":"ROBBERY",
             "address":"1200 - 1221 BLOCK OF SOUTHERN AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9897371,38.85520587 ]
             },
             "properties": {
             "id":295564,
             "date":"7/30/16",
             "time":"7:48 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2400 - 2699 BLOCK OF POMEROY ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97483672,38.89861508 ]
             },
             "properties": {
             "id":295567,
             "date":"7/30/16",
             "time":"8:18 PM",
             "offense":"ROBBERY",
             "address":"1920 - 2099 BLOCK OF BENNING ROAD NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93832492,38.88842204 ]
             },
             "properties": {
             "id":295571,
             "date":"7/30/16",
             "time":"8:37 PM",
             "offense":"ROBBERY",
             "address":"4400 - 4499 BLOCK OF A STREET SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99510451,38.86398302 ]
             },
             "properties": {
             "id":295577,
             "date":"7/31/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"INTERSTATE 295 SOUTHBOUND AND RAMP TO HOWARD ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94345607,38.90052288 ]
             },
             "properties": {
             "id":295589,
             "date":"7/31/16",
             "time":"2:38 AM",
             "offense":"ROBBERY",
             "address":"4100 - 4199 BLOCK OF HUNT PLACE NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01614735,38.97562861 ]
             },
             "properties": {
             "id":295592,
             "date":"7/31/16",
             "time":"3:14 AM",
             "offense":"ROBBERY",
             "address":"200  - 299 BLOCK OF CEDAR STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0209129,38.89479637 ]
             },
             "properties": {
             "id":295596,
             "date":"7/31/16",
             "time":"3:36 AM",
             "offense":"ROBBERY",
             "address":"600 - 699 BLOCK OF D STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.04136897,38.90606938 ]
             },
             "properties": {
             "id":295598,
             "date":"7/31/16",
             "time":"3:57 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1200 - 1219 BLOCK OF CONNECTICUT AVENUE NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02395776,38.93399105 ]
             },
             "properties": {
             "id":295599,
             "date":"7/31/16",
             "time":"4:04 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3528 - 3598 BLOCK OF GEORGIA AVENUE NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01518533,38.90192287 ]
             },
             "properties": {
             "id":295600,
             "date":"7/31/16",
             "time":"4:26 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"900 - 999 BLOCK OF 3RD STREET NW",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03526657,38.92237647 ]
             },
             "properties": {
             "id":295601,
             "date":"7/31/16",
             "time":"4:38 AM",
             "offense":"SEX ABUSE",
             "address":"2400 - 2537 BLOCK OF 15TH STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.04475664,38.92140032 ]
             },
             "properties": {
             "id":295602,
             "date":"7/31/16",
             "time":"4:41 AM",
             "offense":"ROBBERY",
             "address":"1800 - 1899 BLOCK OF MINTWOOD PLACE NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02757277,38.91700057 ]
             },
             "properties": {
             "id":295609,
             "date":"7/31/16",
             "time":"6:08 AM",
             "offense":"ROBBERY",
             "address":"1100 - 1199 BLOCK OF U STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02873097,38.92966599 ]
             },
             "properties": {
             "id":295612,
             "date":"7/31/16",
             "time":"6:27 AM",
             "offense":"SEX ABUSE",
             "address":"1100 - 1299 BLOCK OF KENYON STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9462254,38.88185884 ]
             },
             "properties": {
             "id":295644,
             "date":"7/31/16",
             "time":"2:33 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"500 - 599 BLOCK OF RIDGE ROAD SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98691774,38.90020252 ]
             },
             "properties": {
             "id":295645,
             "date":"7/31/16",
             "time":"2:57 PM",
             "offense":"ROBBERY",
             "address":"1300 - 1399 BLOCK OF H STREET NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00809919,38.83467579 ]
             },
             "properties": {
             "id":295662,
             "date":"7/31/16",
             "time":"5:32 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3800 - 3845 BLOCK OF SOUTH CAPITOL STREET",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9476552,38.89666025 ]
             },
             "properties": {
             "id":295667,
             "date":"7/31/16",
             "time":"5:50 PM",
             "offense":"SEX ABUSE",
             "address":"4000 - 4121 BLOCK OF MINNESOTA AVENUE NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.95866013,38.88363855 ]
             },
             "properties": {
             "id":295668,
             "date":"7/31/16",
             "time":"6:00 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3300 - 3399 BLOCK OF ELY PLACE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.96796452,38.85067068 ]
             },
             "properties": {
             "id":295670,
             "date":"7/31/16",
             "time":"6:22 PM",
             "offense":"SEX ABUSE",
             "address":"3200 - 3299 BLOCK OF 28TH STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00430328,38.91628308 ]
             },
             "properties": {
             "id":295679,
             "date":"7/31/16",
             "time":"7:33 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"140 - 199 BLOCK OF TODD PLACE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.04236972,38.92162642 ]
             },
             "properties": {
             "id":295681,
             "date":"7/31/16",
             "time":"7:59 PM",
             "offense":"ROBBERY",
             "address":"2400 - 2499 BLOCK OF 18TH STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.987817,38.83236927 ]
             },
             "properties": {
             "id":295682,
             "date":"7/31/16",
             "time":"8:01 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4300 4399  BLOCK OF WHEELER ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98873829,38.83297293 ]
             },
             "properties": {
             "id":295683,
             "date":"7/31/16",
             "time":"8:11 PM",
             "offense":"ROBBERY",
             "address":"4214 4299  BLOCK OF WHEELER ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97278189,38.84566321 ]
             },
             "properties": {
             "id":295693,
             "date":"7/31/16",
             "time":"10:19 PM",
             "offense":"ROBBERY",
             "address":"3400 - 3683 BLOCK OF 22ND STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99557552,38.89891498 ]
             },
             "properties": {
             "id":295697,
             "date":"7/31/16",
             "time":"10:26 PM",
             "offense":"ROBBERY",
             "address":"700 - 799 BLOCK OF G STREET NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02431258,38.92600962 ]
             },
             "properties": {
             "id":295702,
             "date":"7/31/16",
             "time":"11:41 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"700 - 999 BLOCK OF GIRARD STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97836978,38.91851522 ]
             },
             "properties": {
             "id":295703,
             "date":"7/31/16",
             "time":"11:55 PM",
             "offense":"SEX ABUSE",
             "address":"1840 1897  BLOCK OF MONTANA AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99496481,38.89511342 ]
             },
             "properties": {
             "id":295715,
             "date":"8/1/16",
             "time":"6:14 AM",
             "offense":"ROBBERY",
             "address":"400 - 407 BLOCK OF 8TH STREET NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99558837,38.87753809 ]
             },
             "properties": {
             "id":295719,
             "date":"8/1/16",
             "time":"7:57 AM",
             "offense":"ROBBERY",
             "address":"700 - 799 BLOCK OF L STREET SE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98196664,38.92193899 ]
             },
             "properties": {
             "id":295728,
             "date":"8/1/16",
             "time":"10:13 AM",
             "offense":"ROBBERY",
             "address":"1500 - 1699 BLOCK OF MONTANA AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92757584,38.8835063 ]
             },
             "properties": {
             "id":295738,
             "date":"8/1/16",
             "time":"11:53 AM",
             "offense":"ROBBERY",
             "address":"5100 - 5299 BLOCK OF D STREET SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9824679,38.89997673 ]
             },
             "properties": {
             "id":295746,
             "date":"8/1/16",
             "time":"12:59 PM",
             "offense":"ROBBERY",
             "address":"1500 - 1599 BLOCK OF BENNING ROAD NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97923289,38.84523213 ]
             },
             "properties": {
             "id":295747,
             "date":"8/1/16",
             "time":"1:56 PM",
             "offense":"ROBBERY",
             "address":"3400 - 3499 BLOCK OF STANTON ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0600259,38.90930429 ]
             },
             "properties": {
             "id":295763,
             "date":"8/1/16",
             "time":"4:14 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3000 - 3043 BLOCK OF P STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0281431,38.95968174 ]
             },
             "properties": {
             "id":295768,
             "date":"8/1/16",
             "time":"5:34 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"5700  - 5899 BLOCK OF GEORGIA AVENUE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99209366,38.90251814 ]
             },
             "properties": {
             "id":295773,
             "date":"8/1/16",
             "time":"6:39 PM",
             "offense":"ROBBERY",
             "address":"1000 - 1099 BLOCK OF K STREET NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99143101,38.94849655 ]
             },
             "properties": {
             "id":295778,
             "date":"8/1/16",
             "time":"8:25 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4900 - 4928 BLOCK OF SOUTH DAKOTA AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01388844,38.81347831 ]
             },
             "properties": {
             "id":295782,
             "date":"8/1/16",
             "time":"8:43 PM",
             "offense":"SEX ABUSE",
             "address":"1 - 99 BLOCK OF DC VILLAGE LANE SW",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97728902,38.94476522 ]
             },
             "properties": {
             "id":295785,
             "date":"8/1/16",
             "time":"8:52 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4427 - 4599 BLOCK OF 19TH PLACE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02192864,38.8991292 ]
             },
             "properties": {
             "id":295789,
             "date":"8/1/16",
             "time":"9:05 PM",
             "offense":"ROBBERY",
             "address":"700 - 799 BLOCK OF 7TH STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97994123,38.90707491 ]
             },
             "properties": {
             "id":295795,
             "date":"8/1/16",
             "time":"10:09 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1240 - 1299 BLOCK OF 16TH STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.04274626,38.93417487 ]
             },
             "properties": {
             "id":295799,
             "date":"8/2/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"1800 - 1899 BLOCK OF NEWTON STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03552841,38.9155751 ]
             },
             "properties": {
             "id":295800,
             "date":"8/2/16",
             "time":"12:43 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1500 - 1599 BLOCK OF T STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.04256038,38.91260901 ]
             },
             "properties": {
             "id":295801,
             "date":"8/2/16",
             "time":"12:49 AM",
             "offense":"ROBBERY",
             "address":"1800 - 1899 BLOCK OF R STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94249122,38.88184805 ]
             },
             "properties": {
             "id":295803,
             "date":"8/2/16",
             "time":"2:02 AM",
             "offense":"SEX ABUSE",
             "address":"4300 - 4339 BLOCK OF F STREET SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01017101,38.82519873 ]
             },
             "properties": {
             "id":295804,
             "date":"8/2/16",
             "time":"2:57 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"20 - 199 BLOCK OF FORRESTER STREET SW",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.04255062,38.91558177 ]
             },
             "properties": {
             "id":295805,
             "date":"8/2/16",
             "time":"3:01 AM",
             "offense":"ROBBERY",
             "address":"1800 - 1899 BLOCK OF T STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.04663979,38.90910321 ]
             },
             "properties": {
             "id":295806,
             "date":"8/2/16",
             "time":"3:14 AM",
             "offense":"ROBBERY",
             "address":"1400 - 1499 BLOCK OF 21ST STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94089679,38.90052162 ]
             },
             "properties": {
             "id":295807,
             "date":"8/2/16",
             "time":"3:17 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4200 - 4399 BLOCK OF HUNT PLACE NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98291604,38.90607546 ]
             },
             "properties": {
             "id":295811,
             "date":"8/2/16",
             "time":"4:56 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1300 - 1399 BLOCK OF CHILDRESS STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97483672,38.89861508 ]
             },
             "properties": {
             "id":295822,
             "date":"8/2/16",
             "time":"8:18 AM",
             "offense":"ROBBERY",
             "address":"1920 - 2099 BLOCK OF BENNING ROAD NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97987574,38.8940398 ]
             },
             "properties": {
             "id":295871,
             "date":"8/2/16",
             "time":"7:26 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"300 - 399 BLOCK OF 17TH PLACE NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92481017,38.90494448 ]
             },
             "properties": {
             "id":295877,
             "date":"8/2/16",
             "time":"8:21 PM",
             "offense":"SEX ABUSE",
             "address":"1104 - 1109 BLOCK OF EASTERN AVENUE NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01941879,38.91112877 ]
             },
             "properties": {
             "id":295891,
             "date":"8/2/16",
             "time":"11:27 PM",
             "offense":"ROBBERY",
             "address":"500 - 599 BLOCK OF Q STREET NW",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03181247,38.93457472 ]
             },
             "properties": {
             "id":295893,
             "date":"8/2/16",
             "time":"11:46 PM",
             "offense":"ROBBERY",
             "address":"1328 - 1399 BLOCK OF OTIS PLACE NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02091655,38.90724592 ]
             },
             "properties": {
             "id":295894,
             "date":"8/3/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"600 - 699 BLOCK OF N STREET NW",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9812553,38.86425828 ]
             },
             "properties": {
             "id":295895,
             "date":"8/3/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"1600 - 1699 BLOCK OF V STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02092518,38.89734573 ]
             },
             "properties": {
             "id":295897,
             "date":"8/3/16",
             "time":"12:10 AM",
             "offense":"ROBBERY",
             "address":"600 - 699 BLOCK OF F STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.95678987,38.88879067 ]
             },
             "properties": {
             "id":295900,
             "date":"8/3/16",
             "time":"12:51 AM",
             "offense":"SEX ABUSE",
             "address":"3400 - 3499 BLOCK OF A STREET SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98525321,38.92184937 ]
             },
             "properties": {
             "id":295903,
             "date":"8/3/16",
             "time":"1:47 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2400 - 2499 BLOCK OF 14TH STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.04577546,38.90253214 ]
             },
             "properties": {
             "id":295904,
             "date":"8/3/16",
             "time":"2:05 AM",
             "offense":"ROBBERY",
             "address":"2000 - 2099 BLOCK OF K STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97327986,38.90019119 ]
             },
             "properties": {
             "id":295905,
             "date":"8/3/16",
             "time":"3:06 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2100 - 2399 BLOCK OF H STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98007676,38.9171913 ]
             },
             "properties": {
             "id":295906,
             "date":"8/3/16",
             "time":"3:24 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1600 - 1779 BLOCK OF NEW YORK AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98639672,38.91204845 ]
             },
             "properties": {
             "id":295908,
             "date":"8/3/16",
             "time":"4:03 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1800 - 1899 BLOCK OF KENDALL STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99723763,38.84529701 ]
             },
             "properties": {
             "id":295909,
             "date":"8/3/16",
             "time":"4:47 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2918 - 2999 BLOCK OF MARTIN LUTHER KING JR AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94089618,38.9012603 ]
             },
             "properties": {
             "id":295910,
             "date":"8/3/16",
             "time":"5:04 AM",
             "offense":"ROBBERY",
             "address":"4200 - 4399 BLOCK OF NANNIE HELEN BURROUGHS AVENUE NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.987817,38.83236927 ]
             },
             "properties": {
             "id":295911,
             "date":"8/3/16",
             "time":"5:30 AM",
             "offense":"ROBBERY",
             "address":"4300 4399  BLOCK OF WHEELER ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.06919384,38.91119097 ]
             },
             "properties": {
             "id":295916,
             "date":"8/3/16",
             "time":"8:06 AM",
             "offense":"SEX ABUSE",
             "address":"1600 - 1627 BLOCK OF 35TH STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00722478,38.95765805 ]
             },
             "properties": {
             "id":295922,
             "date":"8/3/16",
             "time":"9:52 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"11  - 99 BLOCK OF LONGFELLOW STREET NE",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03364247,38.90192802 ]
             },
             "properties": {
             "id":295932,
             "date":"8/3/16",
             "time":"12:14 PM",
             "offense":"ROBBERY",
             "address":"900 - 999 BLOCK OF 15TH STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.95291512,38.89164483 ]
             },
             "properties": {
             "id":295936,
             "date":"8/3/16",
             "time":"12:37 PM",
             "offense":"ROBBERY",
             "address":"100 - 199 BLOCK OF 36TH STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98269586,38.86319551 ]
             },
             "properties": {
             "id":295945,
             "date":"8/3/16",
             "time":"2:04 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2200 - 2231 BLOCK OF 16TH STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98007676,38.9171913 ]
             },
             "properties": {
             "id":295947,
             "date":"8/3/16",
             "time":"2:11 PM",
             "offense":"ROBBERY",
             "address":"1600 - 1779 BLOCK OF NEW YORK AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.95290537,38.90641854 ]
             },
             "properties": {
             "id":295958,
             "date":"8/3/16",
             "time":"4:44 PM",
             "offense":"ROBBERY",
             "address":"3400 3752  BLOCK OF HAYES STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98811129,38.86334933 ]
             },
             "properties": {
             "id":295963,
             "date":"8/3/16",
             "time":"6:11 PM",
             "offense":"ROBBERY",
             "address":"1300 - 1341 BLOCK OF VALLEY PLACE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0501484,38.89782329 ]
             },
             "properties": {
             "id":295972,
             "date":"8/3/16",
             "time":"8:26 PM",
             "offense":"ROBBERY",
             "address":"600 - 699 BLOCK OF 23RD STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02606173,38.94721478 ]
             },
             "properties": {
             "id":295991,
             "date":"8/3/16",
             "time":"11:08 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"900  - 999 BLOCK OF CRITTENDEN STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93659697,38.90026713 ]
             },
             "properties": {
             "id":295998,
             "date":"8/4/16",
             "time":"2:28 AM",
             "offense":"ROBBERY",
             "address":"800 - 819 BLOCK OF 46TH STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0229556,38.90210176 ]
             },
             "properties": {
             "id":296065,
             "date":"8/4/16",
             "time":"8:42 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"700 - 899 BLOCK OF K STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9907763,38.83730618 ]
             },
             "properties": {
             "id":296073,
             "date":"8/4/16",
             "time":"11:22 PM",
             "offense":"ROBBERY",
             "address":"900 - 1299 BLOCK OF VALLEY AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97728869,38.90957874 ]
             },
             "properties": {
             "id":296076,
             "date":"8/5/16",
             "time":"12:07 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1280 - 1699 BLOCK OF BLADENSBURG ROAD NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03993107,38.91187125 ]
             },
             "properties": {
             "id":296080,
             "date":"8/5/16",
             "time":"1:19 AM",
             "offense":"ROBBERY",
             "address":"1700 - 1789 BLOCK OF CORCORAN STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94592285,38.90087538 ]
             },
             "properties": {
             "id":296085,
             "date":"8/5/16",
             "time":"2:42 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"740 - 899 BLOCK OF KENILWORTH AVENUE NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97444791,38.92204569 ]
             },
             "properties": {
             "id":296087,
             "date":"8/5/16",
             "time":"3:16 AM",
             "offense":"ROBBERY",
             "address":"2400 - 2499 BLOCK OF QUEENS CHAPEL ROAD NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9745143,38.92987394 ]
             },
             "properties": {
             "id":296088,
             "date":"8/5/16",
             "time":"4:52 AM",
             "offense":"ROBBERY",
             "address":"2100 - 2199 BLOCK OF RHODE ISLAND AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99847018,38.84634201 ]
             },
             "properties": {
             "id":296089,
             "date":"8/5/16",
             "time":"6:00 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"500 - 699 BLOCK OF MELLON STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99407813,38.88382588 ]
             },
             "properties": {
             "id":296090,
             "date":"8/5/16",
             "time":"7:16 AM",
             "offense":"ROBBERY",
             "address":"822 - 825 BLOCK OF PENNSYLVANIA AVENUE SE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00151302,38.92559775 ]
             },
             "properties": {
             "id":296096,
             "date":"8/5/16",
             "time":"10:07 AM",
             "offense":"ROBBERY",
             "address":"300 - 399 BLOCK OF FRANKLIN STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.95050055,38.86627619 ]
             },
             "properties": {
             "id":296102,
             "date":"8/5/16",
             "time":"10:49 AM",
             "offense":"ROBBERY",
             "address":"3820 - 3899 BLOCK OF ALABAMA AVENUE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98261309,38.91918254 ]
             },
             "properties": {
             "id":296129,
             "date":"8/5/16",
             "time":"1:37 PM",
             "offense":"ROBBERY",
             "address":"1400 - 1499 BLOCK OF W STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.06513988,38.96672045 ]
             },
             "properties": {
             "id":296133,
             "date":"8/5/16",
             "time":"3:03 PM",
             "offense":"ROBBERY",
             "address":"3200  - 3299 BLOCK OF OLIVER STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94721173,38.90397484 ]
             },
             "properties": {
             "id":296136,
             "date":"8/5/16",
             "time":"3:21 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3500 - 3899 BLOCK OF JAY STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92922886,38.90183936 ]
             },
             "properties": {
             "id":296144,
             "date":"8/5/16",
             "time":"5:37 PM",
             "offense":"ROBBERY",
             "address":"4916 - 5067 BLOCK OF JAY STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01997385,38.95807094 ]
             },
             "properties": {
             "id":296146,
             "date":"8/5/16",
             "time":"6:19 PM",
             "offense":"ROBBERY",
             "address":"5606  - 5617 BLOCK OF 5TH STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0209259,38.89981402 ]
             },
             "properties": {
             "id":296157,
             "date":"8/5/16",
             "time":"8:05 PM",
             "offense":"ROBBERY",
             "address":"600 - 699 BLOCK OF H STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93376895,38.90414816 ]
             },
             "properties": {
             "id":296160,
             "date":"8/5/16",
             "time":"8:09 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1010 1099  BLOCK OF 48TH STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01119545,38.89545531 ]
             },
             "properties": {
             "id":296167,
             "date":"8/5/16",
             "time":"11:42 PM",
             "offense":"ROBBERY",
             "address":"400 - 499 BLOCK OF NEW JERSEY AVENUE NW",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99268143,38.9043829 ]
             },
             "properties": {
             "id":296170,
             "date":"8/6/16",
             "time":"1:45 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1100 - 1199 BLOCK OF WEST VIRGINIA AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03238533,38.92615179 ]
             },
             "properties": {
             "id":296172,
             "date":"8/6/16",
             "time":"2:20 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2801 - 2899 BLOCK OF 14TH STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98920549,38.86615105 ]
             },
             "properties": {
             "id":296173,
             "date":"8/6/16",
             "time":"2:40 AM",
             "offense":"ROBBERY",
             "address":"2000 2098  BLOCK OF MARTIN LUTHER KING JR AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97136259,38.8516625 ]
             },
             "properties": {
             "id":296184,
             "date":"8/6/16",
             "time":"4:55 AM",
             "offense":"ROBBERY",
             "address":"2337 - 2435 BLOCK OF ALABAMA AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98525315,38.8663398 ]
             },
             "properties": {
             "id":296187,
             "date":"8/6/16",
             "time":"7:14 AM",
             "offense":"ROBBERY",
             "address":"1909 - 1999 BLOCK OF 14TH STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99847018,38.84634201 ]
             },
             "properties": {
             "id":296192,
             "date":"8/6/16",
             "time":"9:04 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"500 - 699 BLOCK OF MELLON STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97994123,38.90707491 ]
             },
             "properties": {
             "id":296194,
             "date":"8/6/16",
             "time":"9:49 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1240 - 1299 BLOCK OF 16TH STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00839448,38.89720317 ]
             },
             "properties": {
             "id":296197,
             "date":"8/6/16",
             "time":"10:27 AM",
             "offense":"ROBBERY",
             "address":"1 - 99 BLOCK OF MASSACHUSETTS AVENUE NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.04382224,38.92085117 ]
             },
             "properties": {
             "id":296215,
             "date":"8/6/16",
             "time":"4:07 PM",
             "offense":"ROBBERY",
             "address":"1851 - 1875 BLOCK OF COLUMBIA ROAD NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02712626,38.95570934 ]
             },
             "properties": {
             "id":296217,
             "date":"8/6/16",
             "time":"4:35 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"5400  - 5499 BLOCK OF ILLINOIS AVENUE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93659697,38.90026713 ]
             },
             "properties": {
             "id":296230,
             "date":"8/6/16",
             "time":"8:10 PM",
             "offense":"SEX ABUSE",
             "address":"800 - 819 BLOCK OF 46TH STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.07875916,38.94879463 ]
             },
             "properties": {
             "id":296232,
             "date":"8/6/16",
             "time":"9:13 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4500 - 4599 BLOCK OF 40TH STREET NW",
             "ward":3
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00350797,38.92263397 ]
             },
             "properties": {
             "id":296238,
             "date":"8/6/16",
             "time":"11:38 PM",
             "offense":"ROBBERY",
             "address":"2500 - 2549 BLOCK OF 2ND STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92123928,38.90214053 ]
             },
             "properties": {
             "id":296239,
             "date":"8/7/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"900 - 915 BLOCK OF EASTERN AVENUE NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97748755,38.9005344 ]
             },
             "properties": {
             "id":296240,
             "date":"8/7/16",
             "time":"12:33 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"800 - 827 BLOCK OF 18TH STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9925384,38.83892783 ]
             },
             "properties": {
             "id":296241,
             "date":"8/7/16",
             "time":"12:36 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"900 - 1099 BLOCK OF MISSISSIPPI AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99199806,38.82982024 ]
             },
             "properties": {
             "id":296243,
             "date":"8/7/16",
             "time":"1:59 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"800 - 899 BLOCK OF H R DRIVE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98529006,38.91088624 ]
             },
             "properties": {
             "id":296251,
             "date":"8/7/16",
             "time":"4:23 AM",
             "offense":"ROBBERY",
             "address":"1800 - 1899 BLOCK OF WEST VIRGINIA AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99614321,38.84683742 ]
             },
             "properties": {
             "id":296254,
             "date":"8/7/16",
             "time":"4:39 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2732 - 2899 BLOCK OF MARTIN LUTHER KING JR AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98685899,38.84368379 ]
             },
             "properties": {
             "id":296255,
             "date":"8/7/16",
             "time":"4:41 AM",
             "offense":"ROBBERY",
             "address":"1300 - 1367 BLOCK OF SAVANNAH STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02499739,38.90565064 ]
             },
             "properties": {
             "id":296257,
             "date":"8/7/16",
             "time":"4:50 AM",
             "offense":"SEX ABUSE",
             "address":"900 - 999 BLOCK OF M STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02192864,38.8991292 ]
             },
             "properties": {
             "id":296273,
             "date":"8/7/16",
             "time":"11:04 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"700 - 799 BLOCK OF 7TH STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.017795,38.9188762 ]
             },
             "properties": {
             "id":296277,
             "date":"8/7/16",
             "time":"11:53 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2100 - 2199 BLOCK OF 4TH STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99897619,38.9056443 ]
             },
             "properties": {
             "id":296296,
             "date":"8/7/16",
             "time":"4:28 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"500 - 599 BLOCK OF M STREET NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00826018,38.83247772 ]
             },
             "properties": {
             "id":296304,
             "date":"8/7/16",
             "time":"5:23 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3846 3999  BLOCK OF SOUTH CAPITOL STREET",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.08530189,38.95991525 ]
             },
             "properties": {
             "id":296306,
             "date":"8/7/16",
             "time":"6:17 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"5300 - 5399 BLOCK OF WISCONSIN AVENUE NW",
             "ward":3
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01395201,38.90313014 ]
             },
             "properties": {
             "id":296324,
             "date":"8/7/16",
             "time":"9:44 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1000 - 1099 BLOCK OF NEW JERSEY AVENUE NW",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01366276,38.89770714 ]
             },
             "properties": {
             "id":296335,
             "date":"8/8/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"500 - 721 BLOCK OF 2ND STREET NW",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0281431,38.95968174 ]
             },
             "properties": {
             "id":296336,
             "date":"8/8/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"5700  - 5899 BLOCK OF GEORGIA AVENUE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00204325,38.91664347 ]
             },
             "properties": {
             "id":296340,
             "date":"8/8/16",
             "time":"12:31 AM",
             "offense":"ROBBERY",
             "address":"1922 - 1999 BLOCK OF 3RD STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02191981,38.90791235 ]
             },
             "properties": {
             "id":296346,
             "date":"8/8/16",
             "time":"3:28 AM",
             "offense":"ROBBERY",
             "address":"1300 - 1399 BLOCK OF 7TH STREET NW",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03079337,38.89831645 ]
             },
             "properties": {
             "id":296350,
             "date":"8/8/16",
             "time":"4:49 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1300 - 1399 BLOCK OF G STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92418791,38.89380974 ]
             },
             "properties": {
             "id":296353,
             "date":"8/8/16",
             "time":"7:19 AM",
             "offense":"ROBBERY",
             "address":"5300 - 5399 BLOCK OF CLAY TERRACE NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94489316,38.9056223 ]
             },
             "properties": {
             "id":296378,
             "date":"8/8/16",
             "time":"12:23 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4000 - 4199 BLOCK OF MEADE STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00768402,38.82971216 ]
             },
             "properties": {
             "id":296389,
             "date":"8/8/16",
             "time":"2:02 PM",
             "offense":"ROBBERY",
             "address":"4037 4199  BLOCK OF SOUTH CAPITOL STREET",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.91959018,38.89237434 ]
             },
             "properties": {
             "id":296402,
             "date":"8/8/16",
             "time":"3:43 PM",
             "offense":"ROBBERY",
             "address":"200 - 399 BLOCK OF 57TH STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01518422,38.89673405 ]
             },
             "properties": {
             "id":296420,
             "date":"8/8/16",
             "time":"7:24 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"500 - 598 BLOCK OF 3RD STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98691774,38.90020252 ]
             },
             "properties": {
             "id":296423,
             "date":"8/8/16",
             "time":"8:30 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1300 - 1399 BLOCK OF H STREET NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03461421,38.93257408 ]
             },
             "properties": {
             "id":296426,
             "date":"8/8/16",
             "time":"8:50 PM",
             "offense":"ROBBERY",
             "address":"1400 - 1599 BLOCK OF NEWTON STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98293011,38.89546361 ]
             },
             "properties": {
             "id":296430,
             "date":"8/8/16",
             "time":"10:34 PM",
             "offense":"ROBBERY",
             "address":"1500 - 1599 BLOCK OF ISHERWOOD STREET NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94721173,38.90397484 ]
             },
             "properties": {
             "id":296434,
             "date":"8/9/16",
             "time":"2:56 AM",
             "offense":"ROBBERY",
             "address":"3500 - 3899 BLOCK OF JAY STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99183662,38.83163093 ]
             },
             "properties": {
             "id":296435,
             "date":"8/9/16",
             "time":"3:03 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"812 - 899 BLOCK OF BARNABY STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97319827,38.87187783 ]
             },
             "properties": {
             "id":296441,
             "date":"8/9/16",
             "time":"5:54 AM",
             "offense":"SEX ABUSE",
             "address":"1500 - 1513 BLOCK OF 23RD STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93080774,38.8786077 ]
             },
             "properties": {
             "id":296477,
             "date":"8/9/16",
             "time":"1:00 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"5000 - 5099 BLOCK OF H STREET SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99015629,38.90661679 ]
             },
             "properties": {
             "id":296479,
             "date":"8/9/16",
             "time":"1:03 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1400 - 1415 BLOCK OF WEST VIRGINIA AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0175812,38.89358979 ]
             },
             "properties": {
             "id":296490,
             "date":"8/9/16",
             "time":"3:15 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"300 - 599 BLOCK OF C STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00748447,38.90373429 ]
             },
             "properties": {
             "id":296506,
             "date":"8/9/16",
             "time":"6:53 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1 - 99 BLOCK OF L STREET NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00970617,38.96372943 ]
             },
             "properties": {
             "id":296508,
             "date":"8/9/16",
             "time":"7:06 PM",
             "offense":"ROBBERY",
             "address":"6000  - 6129 BLOCK OF KANSAS AVENUE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99618485,38.92991268 ]
             },
             "properties": {
             "id":296523,
             "date":"8/9/16",
             "time":"9:36 PM",
             "offense":"ROBBERY",
             "address":"3200 - 3299 BLOCK OF 7TH STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97507927,38.89730891 ]
             },
             "properties": {
             "id":296530,
             "date":"8/9/16",
             "time":"11:23 PM",
             "offense":"ROBBERY",
             "address":"2000 - 2099 BLOCK OF GALES STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98887574,38.91177846 ]
             },
             "properties": {
             "id":296533,
             "date":"8/10/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"900 - 1020 BLOCK OF MOUNT OLIVET ROAD NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93601039,38.91159932 ]
             },
             "properties": {
             "id":296534,
             "date":"8/10/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"4500 - 4599 BLOCK OF QUARLES STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01467158,38.92639858 ]
             },
             "properties": {
             "id":296535,
             "date":"8/10/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"100 - 299 BLOCK OF MICHIGAN AVENUE NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02750571,38.95239421 ]
             },
             "properties": {
             "id":296536,
             "date":"8/10/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"5100  - 5199 BLOCK OF GEORGIA AVENUE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98807372,38.88135713 ]
             },
             "properties": {
             "id":296540,
             "date":"8/10/16",
             "time":"12:57 AM",
             "offense":"ROBBERY",
             "address":"1300 - 1318 BLOCK OF PENNSYLVANIA AVENUE SE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99952952,38.9168777 ]
             },
             "properties": {
             "id":296541,
             "date":"8/10/16",
             "time":"1:21 AM",
             "offense":"ROBBERY",
             "address":"1900 - 2099 BLOCK OF 5TH STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92579559,38.88862195 ]
             },
             "properties": {
             "id":296573,
             "date":"8/10/16",
             "time":"3:21 PM",
             "offense":"ROBBERY",
             "address":"1 - 99 BLOCK OF 53RD STREET SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98695921,38.92564208 ]
             },
             "properties": {
             "id":296590,
             "date":"8/10/16",
             "time":"6:11 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1300 - 1399 BLOCK OF FRANKLIN STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01755845,38.89481493 ]
             },
             "properties": {
             "id":296605,
             "date":"8/10/16",
             "time":"9:43 PM",
             "offense":"SEX ABUSE",
             "address":"300 - 498 BLOCK OF INDIANA AVENUE NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0020868,38.82870345 ]
             },
             "properties": {
             "id":296617,
             "date":"8/10/16",
             "time":"11:44 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4000 - 4399 BLOCK OF 3RD STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.06612692,38.91125581 ]
             },
             "properties": {
             "id":296619,
             "date":"8/11/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"1600 - 1639 BLOCK OF 33RD STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98928103,38.90020276 ]
             },
             "properties": {
             "id":296624,
             "date":"8/11/16",
             "time":"1:57 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1200 - 1299 BLOCK OF H STREET NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01829787,38.90132787 ]
             },
             "properties": {
             "id":296625,
             "date":"8/11/16",
             "time":"2:34 AM",
             "offense":"SEX ABUSE",
             "address":"443 - 499 BLOCK OF I STREET NW",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9973283,38.88514123 ]
             },
             "properties": {
             "id":296641,
             "date":"8/11/16",
             "time":"11:29 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"600 - 669 BLOCK OF PENNSYLVANIA AVENUE SE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92770168,38.89581183 ]
             },
             "properties": {
             "id":296642,
             "date":"8/11/16",
             "time":"11:39 AM",
             "offense":"ROBBERY",
             "address":"332 - 599 BLOCK OF 51ST STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9884354,38.85417879 ]
             },
             "properties": {
             "id":296648,
             "date":"8/11/16",
             "time":"12:39 PM",
             "offense":"ROBBERY",
             "address":"2400 - 2599 BLOCK OF ELVANS ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02704929,38.90491149 ]
             },
             "properties": {
             "id":296649,
             "date":"8/11/16",
             "time":"1:08 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1101 - 1199 BLOCK OF 11TH STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01467158,38.92639858 ]
             },
             "properties": {
             "id":296651,
             "date":"8/11/16",
             "time":"1:52 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"100 - 299 BLOCK OF MICHIGAN AVENUE NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97207959,38.87412066 ]
             },
             "properties": {
             "id":296653,
             "date":"8/11/16",
             "time":"2:06 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2300 2399  BLOCK OF PENNSYLVANIA AVENUE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.05967659,38.90521468 ]
             },
             "properties": {
             "id":296655,
             "date":"8/11/16",
             "time":"2:14 PM",
             "offense":"ROBBERY",
             "address":"3000 - 3049 BLOCK OF M STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03994009,38.92796913 ]
             },
             "properties": {
             "id":296658,
             "date":"8/11/16",
             "time":"2:44 PM",
             "offense":"ROBBERY",
             "address":"1600 - 1899 BLOCK OF HOBART STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9881684,38.8664122 ]
             },
             "properties": {
             "id":296662,
             "date":"8/11/16",
             "time":"3:43 PM",
             "offense":"ROBBERY",
             "address":"1100 - 1299 BLOCK OF U STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00747338,38.90790516 ]
             },
             "properties": {
             "id":296671,
             "date":"8/11/16",
             "time":"5:47 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1 - 98 BLOCK OF NEW YORK AVENUE NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.96584019,38.86031811 ]
             },
             "properties": {
             "id":296692,
             "date":"8/11/16",
             "time":"9:09 PM",
             "offense":"ROBBERY",
             "address":"2800 - 2999 BLOCK OF ALABAMA AVENUE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99862033,38.82605497 ]
             },
             "properties": {
             "id":296696,
             "date":"8/11/16",
             "time":"11:04 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4284 4293  BLOCK OF 6TH STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02191749,38.90034533 ]
             },
             "properties": {
             "id":296698,
             "date":"8/11/16",
             "time":"11:43 PM",
             "offense":"ROBBERY",
             "address":"800 - 899 BLOCK OF 7TH STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9640464,38.85313786 ]
             },
             "properties": {
             "id":296704,
             "date":"8/12/16",
             "time":"1:24 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3000 - 3199 BLOCK OF NAYLOR ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99183662,38.83163093 ]
             },
             "properties": {
             "id":296706,
             "date":"8/12/16",
             "time":"2:38 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"812 - 899 BLOCK OF BARNABY STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.96584019,38.86031811 ]
             },
             "properties": {
             "id":296707,
             "date":"8/12/16",
             "time":"3:13 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2800 - 2999 BLOCK OF ALABAMA AVENUE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0455933,38.91334655 ]
             },
             "properties": {
             "id":296708,
             "date":"8/12/16",
             "time":"3:56 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1700 - 1799 BLOCK OF CONNECTICUT AVENUE NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92513308,38.89387341 ]
             },
             "properties": {
             "id":296711,
             "date":"8/12/16",
             "time":"5:28 AM",
             "offense":"ROBBERY",
             "address":"270 - 325 BLOCK OF 53RD STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02199287,38.92047897 ]
             },
             "properties": {
             "id":296716,
             "date":"8/12/16",
             "time":"6:42 AM",
             "offense":"ROBBERY",
             "address":"2300 2349  BLOCK OF GEORGIA AVENUE NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92871142,38.88895708 ]
             },
             "properties": {
             "id":296745,
             "date":"8/12/16",
             "time":"2:16 PM",
             "offense":"ROBBERY",
             "address":"5000 - 5069 BLOCK OF CENTRAL AVENUE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02092518,38.89734573 ]
             },
             "properties": {
             "id":296762,
             "date":"8/12/16",
             "time":"4:31 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"600 - 699 BLOCK OF F STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99152521,38.83539644 ]
             },
             "properties": {
             "id":296763,
             "date":"8/12/16",
             "time":"4:33 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"900 - 911 BLOCK OF VARNEY STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94889652,38.88567959 ]
             },
             "properties": {
             "id":296766,
             "date":"8/12/16",
             "time":"5:13 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"153 - 399 BLOCK OF RIDGE ROAD SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00785039,38.87647492 ]
             },
             "properties": {
             "id":296767,
             "date":"8/12/16",
             "time":"5:28 PM",
             "offense":"ROBBERY",
             "address":"16 - 49 BLOCK OF M STREET SE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00905347,38.91222905 ]
             },
             "properties": {
             "id":296775,
             "date":"8/12/16",
             "time":"7:24 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1621 - 1699 BLOCK OF NORTH CAPITOL STREET",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98296521,38.89331962 ]
             },
             "properties": {
             "id":296781,
             "date":"8/12/16",
             "time":"9:13 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1500 - 1599 BLOCK OF C STREET NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94956562,38.8848421 ]
             },
             "properties": {
             "id":296784,
             "date":"8/12/16",
             "time":"9:40 PM",
             "offense":"ROBBERY",
             "address":"3700 - 3899 BLOCK OF D STREET SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98467733,38.86488036 ]
             },
             "properties": {
             "id":296792,
             "date":"8/13/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"1400 - 1499 BLOCK OF V STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97432179,38.85594219 ]
             },
             "properties": {
             "id":296793,
             "date":"8/13/16",
             "time":"12:15 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2300 - 2399 BLOCK OF RAYNOLDS PLACE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97726094,38.88812983 ]
             },
             "properties": {
             "id":296794,
             "date":"8/13/16",
             "time":"12:21 AM",
             "offense":"ROBBERY",
             "address":"100 - 199 BLOCK OF 19TH STREET SE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99873552,38.8243884 ]
             },
             "properties": {
             "id":296797,
             "date":"8/13/16",
             "time":"1:16 AM",
             "offense":"ROBBERY",
             "address":"600 - 699 BLOCK OF GALVESTON PLACE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00809919,38.83467579 ]
             },
             "properties": {
             "id":296804,
             "date":"8/13/16",
             "time":"2:54 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3800 - 3845 BLOCK OF SOUTH CAPITOL STREET",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01618831,38.90192273 ]
             },
             "properties": {
             "id":296815,
             "date":"8/13/16",
             "time":"6:11 AM",
             "offense":"ROBBERY",
             "address":"900 - 999 BLOCK OF 4TH STREET NW",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0372766,38.90699862 ]
             },
             "properties": {
             "id":296816,
             "date":"8/13/16",
             "time":"6:11 AM",
             "offense":"ROBBERY",
             "address":"1600 - 1614 BLOCK OF RHODE ISLAND AVENUE NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.04168793,38.91920343 ]
             },
             "properties": {
             "id":296820,
             "date":"8/13/16",
             "time":"7:28 AM",
             "offense":"ROBBERY",
             "address":"2200 - 2299 BLOCK OF 18TH STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02091496,38.90181388 ]
             },
             "properties": {
             "id":296830,
             "date":"8/13/16",
             "time":"12:20 PM",
             "offense":"ROBBERY",
             "address":"600 - 699 BLOCK OF MASSACHUSETTS AVENUE NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97923289,38.84523213 ]
             },
             "properties": {
             "id":296833,
             "date":"8/13/16",
             "time":"12:52 PM",
             "offense":"ROBBERY",
             "address":"3400 - 3499 BLOCK OF STANTON ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.96937156,38.84702264 ]
             },
             "properties": {
             "id":296836,
             "date":"8/13/16",
             "time":"1:19 PM",
             "offense":"ROBBERY",
             "address":"3400 - 3465 BLOCK OF 25TH STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00110838,38.86071046 ]
             },
             "properties": {
             "id":296847,
             "date":"8/13/16",
             "time":"3:48 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2638 - 2699 BLOCK OF FIRTH STERLING AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02704466,38.92309933 ]
             },
             "properties": {
             "id":296854,
             "date":"8/13/16",
             "time":"4:51 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2500 - 2599 BLOCK OF 11TH STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97113954,38.91895507 ]
             },
             "properties": {
             "id":296855,
             "date":"8/13/16",
             "time":"4:52 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2100 - 2198 BLOCK OF BLADENSBURG ROAD NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97497386,38.86916669 ]
             },
             "properties": {
             "id":296888,
             "date":"8/13/16",
             "time":"11:45 PM",
             "offense":"ROBBERY",
             "address":"1700 1713  BLOCK OF 22ND STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03644098,38.94134761 ]
             },
             "properties": {
             "id":296892,
             "date":"8/14/16",
             "time":"12:39 AM",
             "offense":"ROBBERY",
             "address":"4100  - 4199 BLOCK OF 16TH STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.04166296,38.91593341 ]
             },
             "properties": {
             "id":296893,
             "date":"8/14/16",
             "time":"12:47 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1900 - 1923 BLOCK OF 18TH STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00446043,38.84779229 ]
             },
             "properties": {
             "id":296896,
             "date":"8/14/16",
             "time":"1:42 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"200 - 399 BLOCK OF OAKWOOD STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.07247902,38.93301616 ]
             },
             "properties": {
             "id":296897,
             "date":"8/14/16",
             "time":"2:05 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3201 - 3299 BLOCK OF WISCONSIN AVENUE NW",
             "ward":3
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99376364,38.9215889 ]
             },
             "properties": {
             "id":296899,
             "date":"8/14/16",
             "time":"3:05 AM",
             "offense":"ROBBERY",
             "address":"2300 - 2499 BLOCK OF WASHINGTON PLACE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97362907,38.85988773 ]
             },
             "properties": {
             "id":296900,
             "date":"8/14/16",
             "time":"3:18 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2443 2499  BLOCK OF SKYLAND PLACE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92293527,38.89026863 ]
             },
             "properties": {
             "id":296902,
             "date":"8/14/16",
             "time":"3:30 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1 - 99 BLOCK OF 55TH STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.96996113,38.8694808 ]
             },
             "properties": {
             "id":296903,
             "date":"8/14/16",
             "time":"4:05 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2500 - 2699 BLOCK OF R STREET SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02885478,38.91700756 ]
             },
             "properties": {
             "id":296908,
             "date":"8/14/16",
             "time":"4:54 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1200 - 1299 BLOCK OF U STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98114729,38.83694468 ]
             },
             "properties": {
             "id":296913,
             "date":"8/14/16",
             "time":"7:09 AM",
             "offense":"ROBBERY",
             "address":"1300 1899  BLOCK OF SOUTHERN AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01263568,38.95659461 ]
             },
             "properties": {
             "id":296922,
             "date":"8/14/16",
             "time":"12:07 PM",
             "offense":"ROBBERY",
             "address":"100  - 199 BLOCK OF KENNEDY STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0327373,38.93921374 ]
             },
             "properties": {
             "id":296929,
             "date":"8/14/16",
             "time":"2:08 PM",
             "offense":"ROBBERY",
             "address":"3900  - 3999 BLOCK OF 14TH STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9884354,38.85417879 ]
             },
             "properties": {
             "id":296937,
             "date":"8/14/16",
             "time":"3:36 PM",
             "offense":"ROBBERY",
             "address":"2400 - 2599 BLOCK OF ELVANS ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97417991,38.8978312 ]
             },
             "properties": {
             "id":296942,
             "date":"8/14/16",
             "time":"5:34 PM",
             "offense":"ROBBERY",
             "address":"600 - 669 BLOCK OF 21ST STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0244086,38.93697271 ]
             },
             "properties": {
             "id":296962,
             "date":"8/14/16",
             "time":"8:31 PM",
             "offense":"ROBBERY",
             "address":"3700  - 3799 BLOCK OF GEORGIA AVENUE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03342162,38.97188653 ]
             },
             "properties": {
             "id":296966,
             "date":"8/14/16",
             "time":"10:02 PM",
             "offense":"ROBBERY",
             "address":"6707  - 6799 BLOCK OF 14TH STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03157008,38.96022136 ]
             },
             "properties": {
             "id":296967,
             "date":"8/14/16",
             "time":"10:13 PM",
             "offense":"ROBBERY",
             "address":"1300  - 1399 BLOCK OF NICHOLSON STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01170312,38.89831091 ]
             },
             "properties": {
             "id":296969,
             "date":"8/14/16",
             "time":"10:32 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"80 - 99 BLOCK OF G STREET NW",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01835866,38.9135702 ]
             },
             "properties": {
             "id":296970,
             "date":"8/14/16",
             "time":"10:52 PM",
             "offense":"ROBBERY",
             "address":"420 - 499 BLOCK OF RHODE ISLAND AVENUE NW",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03030154,38.93457512 ]
             },
             "properties": {
             "id":296971,
             "date":"8/14/16",
             "time":"10:54 PM",
             "offense":"ROBBERY",
             "address":"1300 - 1327 BLOCK OF OTIS PLACE NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99419737,38.83489213 ]
             },
             "properties": {
             "id":296972,
             "date":"8/14/16",
             "time":"11:09 PM",
             "offense":"ROBBERY",
             "address":"3700 3851  BLOCK OF 9TH STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0281431,38.95968174 ]
             },
             "properties": {
             "id":296974,
             "date":"8/15/16",
             "time":"12:07 AM",
             "offense":"SEX ABUSE",
             "address":"5700  - 5899 BLOCK OF GEORGIA AVENUE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97764001,38.9290368 ]
             },
             "properties": {
             "id":296975,
             "date":"8/15/16",
             "time":"12:09 AM",
             "offense":"ROBBERY",
             "address":"1802 - 1999 BLOCK OF IRVING STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9907763,38.83730618 ]
             },
             "properties": {
             "id":296976,
             "date":"8/15/16",
             "time":"12:30 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"900 - 1299 BLOCK OF VALLEY AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00167263,38.84726988 ]
             },
             "properties": {
             "id":296979,
             "date":"8/15/16",
             "time":"2:25 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"400 - 499 BLOCK OF NEWCOMB STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02776418,38.96436613 ]
             },
             "properties": {
             "id":296980,
             "date":"8/15/16",
             "time":"2:55 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"6100  - 6199 BLOCK OF GEORGIA AVENUE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98028597,38.869483 ]
             },
             "properties": {
             "id":296983,
             "date":"8/15/16",
             "time":"3:27 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1700 - 1721 BLOCK OF R STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00477791,38.94409171 ]
             },
             "properties": {
             "id":296986,
             "date":"8/15/16",
             "time":"4:55 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"100 - 199 BLOCK OF WEBSTER STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03195478,38.91755797 ]
             },
             "properties": {
             "id":297012,
             "date":"8/15/16",
             "time":"12:42 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2000 - 2099 BLOCK OF 14TH STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97398947,38.85103252 ]
             },
             "properties": {
             "id":297058,
             "date":"8/15/16",
             "time":"8:56 PM",
             "offense":"ROBBERY",
             "address":"2200 - 2209 BLOCK OF ALABAMA AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99154036,38.90191454 ]
             },
             "properties": {
             "id":297067,
             "date":"8/15/16",
             "time":"10:44 PM",
             "offense":"ROBBERY",
             "address":"900 - 999 BLOCK OF 11TH STREET NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98713181,38.92777707 ]
             },
             "properties": {
             "id":297083,
             "date":"8/16/16",
             "time":"1:05 AM",
             "offense":"SEX ABUSE",
             "address":"1300 - 1399 BLOCK OF HAMLIN STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02911275,38.93258459 ]
             },
             "properties": {
             "id":297087,
             "date":"8/16/16",
             "time":"3:26 AM",
             "offense":"ROBBERY",
             "address":"1100 - 1299 BLOCK OF MONROE STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02670653,38.94399868 ]
             },
             "properties": {
             "id":297089,
             "date":"8/16/16",
             "time":"3:36 AM",
             "offense":"ROBBERY",
             "address":"1000  - 1099 BLOCK OF WEBSTER STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.95867074,38.88521502 ]
             },
             "properties": {
             "id":297093,
             "date":"8/16/16",
             "time":"6:22 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3300 - 3399 BLOCK OF DUBOIS PLACE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97854091,38.84794355 ]
             },
             "properties": {
             "id":297101,
             "date":"8/16/16",
             "time":"10:02 AM",
             "offense":"ROBBERY",
             "address":"1803 1841  BLOCK OF ALABAMA AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94828285,38.88954392 ]
             },
             "properties": {
             "id":297104,
             "date":"8/16/16",
             "time":"11:03 AM",
             "offense":"ROBBERY",
             "address":"1 - 299 BLOCK OF STODDERT PLACE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99679999,38.8432701 ]
             },
             "properties": {
             "id":297110,
             "date":"8/16/16",
             "time":"12:42 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"600 699  BLOCK OF ALABAMA AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98955434,38.84449482 ]
             },
             "properties": {
             "id":297112,
             "date":"8/16/16",
             "time":"12:53 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1200 - 1299 BLOCK OF ALABAMA AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93748725,38.87098135 ]
             },
             "properties": {
             "id":297115,
             "date":"8/16/16",
             "time":"1:40 PM",
             "offense":"ROBBERY",
             "address":"4314 - 4330 BLOCK OF SOUTHERN AVENUE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00630286,38.83952245 ]
             },
             "properties": {
             "id":297122,
             "date":"8/16/16",
             "time":"2:43 PM",
             "offense":"ROBBERY",
             "address":"3600 - 3699 BLOCK OF BROTHERS PLACE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02624355,38.93974687 ]
             },
             "properties": {
             "id":297126,
             "date":"8/16/16",
             "time":"3:18 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"900  - 999 BLOCK OF SHEPHERD STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02621071,38.94453028 ]
             },
             "properties": {
             "id":297157,
             "date":"8/16/16",
             "time":"9:59 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4400  - 4499 BLOCK OF GEORGIA AVENUE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03650871,38.91593513 ]
             },
             "properties": {
             "id":297158,
             "date":"8/16/16",
             "time":"10:02 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1900 - 1926 BLOCK OF 16TH STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0219279,38.89670595 ]
             },
             "properties": {
             "id":297163,
             "date":"8/16/16",
             "time":"10:30 PM",
             "offense":"ROBBERY",
             "address":"500 - 599 BLOCK OF 7TH STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03490779,38.96685049 ]
             },
             "properties": {
             "id":297164,
             "date":"8/16/16",
             "time":"10:39 PM",
             "offense":"ROBBERY",
             "address":"1401  - 1599 BLOCK OF SOMERSET PLACE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02498642,38.90724512 ]
             },
             "properties": {
             "id":297165,
             "date":"8/16/16",
             "time":"11:07 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"900 - 999 BLOCK OF N STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03648121,38.92980796 ]
             },
             "properties": {
             "id":297166,
             "date":"8/16/16",
             "time":"11:14 PM",
             "offense":"SEX ABUSE",
             "address":"3101 - 3199 BLOCK OF 16TH STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98928292,38.88760006 ]
             },
             "properties": {
             "id":297167,
             "date":"8/16/16",
             "time":"11:35 PM",
             "offense":"ROBBERY",
             "address":"1200 - 1299 BLOCK OF INDEPENDENCE AVENUE SE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02487904,38.92993712 ]
             },
             "properties": {
             "id":297168,
             "date":"8/16/16",
             "time":"11:58 PM",
             "offense":"ROBBERY",
             "address":"700 - 999 BLOCK OF KENYON STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0051393,38.83668485 ]
             },
             "properties": {
             "id":297170,
             "date":"8/17/16",
             "time":"2:05 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"100 134  BLOCK OF WILMINGTON PLACE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99850513,38.8277936 ]
             },
             "properties": {
             "id":297171,
             "date":"8/17/16",
             "time":"2:22 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4200 - 4283 BLOCK OF 6TH STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92218956,38.88704314 ]
             },
             "properties": {
             "id":297172,
             "date":"8/17/16",
             "time":"2:39 AM",
             "offense":"ROBBERY",
             "address":"81 - 199 BLOCK OF 55TH STREET SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.95310018,38.89069001 ]
             },
             "properties": {
             "id":297174,
             "date":"8/17/16",
             "time":"2:47 AM",
             "offense":"ROBBERY",
             "address":"3532 - 3599 BLOCK OF AMES STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9667314,38.87637136 ]
             },
             "properties": {
             "id":297177,
             "date":"8/17/16",
             "time":"3:56 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2900 - 2943 BLOCK OF NELSON PLACE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.96312351,38.87784765 ]
             },
             "properties": {
             "id":297178,
             "date":"8/17/16",
             "time":"4:01 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1000 - 1099 BLOCK OF 31ST STREET SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01218289,38.87250185 ]
             },
             "properties": {
             "id":297180,
             "date":"8/17/16",
             "time":"4:41 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1400 - 1499 BLOCK OF 1ST STREET SW",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03634784,38.98491155 ]
             },
             "properties": {
             "id":297211,
             "date":"8/17/16",
             "time":"11:41 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"7720  - 7799 BLOCK OF 16TH STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.08206787,38.92689317 ]
             },
             "properties": {
             "id":297218,
             "date":"8/17/16",
             "time":"12:38 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2800 - 2899 BLOCK OF NEW MEXICO AVENUE NW",
             "ward":3
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98637125,38.86428602 ]
             },
             "properties": {
             "id":297227,
             "date":"8/17/16",
             "time":"2:00 PM",
             "offense":"ROBBERY",
             "address":"1326 - 1399 BLOCK OF W STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9476552,38.89666025 ]
             },
             "properties": {
             "id":297246,
             "date":"8/17/16",
             "time":"4:32 PM",
             "offense":"ROBBERY",
             "address":"4000 - 4121 BLOCK OF MINNESOTA AVENUE NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0004753,38.95414505 ]
             },
             "properties": {
             "id":297261,
             "date":"8/17/16",
             "time":"6:54 PM",
             "offense":"ROBBERY",
             "address":"5200 - 5299 BLOCK OF 4TH STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98788469,38.90862544 ]
             },
             "properties": {
             "id":297262,
             "date":"8/17/16",
             "time":"6:58 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1614 - 1648 BLOCK OF WEST VIRGINIA AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99558498,38.93237193 ]
             },
             "properties": {
             "id":297263,
             "date":"8/17/16",
             "time":"6:59 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"700 - 799 BLOCK OF MONROE STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00369436,38.95888334 ]
             },
             "properties": {
             "id":297278,
             "date":"8/17/16",
             "time":"9:19 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"5600  - 5744 BLOCK OF 2ND STREET NE",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0045001,38.92880464 ]
             },
             "properties": {
             "id":297279,
             "date":"8/17/16",
             "time":"9:38 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"100 - 379 BLOCK OF MICHIGAN AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98027623,38.86303298 ]
             },
             "properties": {
             "id":297286,
             "date":"8/17/16",
             "time":"10:57 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1600 - 1899 BLOCK OF W STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98027623,38.86303298 ]
             },
             "properties": {
             "id":297288,
             "date":"8/17/16",
             "time":"11:31 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1600 - 1899 BLOCK OF W STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99005924,38.85846695 ]
             },
             "properties": {
             "id":297290,
             "date":"8/18/16",
             "time":"12:31 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2627 2699  BLOCK OF STANTON ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99497412,38.9265075 ]
             },
             "properties": {
             "id":297291,
             "date":"8/18/16",
             "time":"1:10 AM",
             "offense":"ROBBERY",
             "address":"2700 - 2999 BLOCK OF 8TH STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00588772,38.83374806 ]
             },
             "properties": {
             "id":297293,
             "date":"8/18/16",
             "time":"1:39 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3800 - 3899 BLOCK OF 1ST STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97614473,38.84814127 ]
             },
             "properties": {
             "id":297300,
             "date":"8/18/16",
             "time":"4:19 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1900 2199  BLOCK OF SAVANNAH TERRACE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97965696,38.93360438 ]
             },
             "properties": {
             "id":297328,
             "date":"8/18/16",
             "time":"12:12 PM",
             "offense":"ROBBERY",
             "address":"3500 - 3599 BLOCK OF 18TH STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03110549,38.92674669 ]
             },
             "properties": {
             "id":297349,
             "date":"8/18/16",
             "time":"5:12 PM",
             "offense":"ROBBERY",
             "address":"1300 - 1399 BLOCK OF HARVARD STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01774631,38.9549094 ]
             },
             "properties": {
             "id":297350,
             "date":"8/18/16",
             "time":"5:20 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"5300  - 5399 BLOCK OF 4TH STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0158699,38.97345766 ]
             },
             "properties": {
             "id":297364,
             "date":"8/18/16",
             "time":"6:45 PM",
             "offense":"ROBBERY",
             "address":"6900  - 6923 BLOCK OF MAPLE STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98928146,38.89733811 ]
             },
             "properties": {
             "id":297377,
             "date":"8/18/16",
             "time":"8:42 PM",
             "offense":"ROBBERY",
             "address":"1200 - 1299 BLOCK OF F STREET NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01392291,38.93122713 ]
             },
             "properties": {
             "id":297378,
             "date":"8/18/16",
             "time":"8:42 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"100 - 199 BLOCK OF IRVING STREET NW",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03166336,38.96241034 ]
             },
             "properties": {
             "id":297409,
             "date":"8/19/16",
             "time":"2:24 AM",
             "offense":"ROBBERY",
             "address":"5900  - 5939 BLOCK OF 13TH PLACE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98134798,38.90643555 ]
             },
             "properties": {
             "id":297456,
             "date":"8/19/16",
             "time":"6:02 PM",
             "offense":"ROBBERY",
             "address":"1627 - 1699 BLOCK OF HOLBROOK STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97871337,38.84909666 ]
             },
             "properties": {
             "id":297404,
             "date":"8/19/16",
             "time":"12:50 AM",
             "offense":"ROBBERY",
             "address":"1800 - 1853 BLOCK OF TUBMAN ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.04666625,38.89668968 ]
             },
             "properties": {
             "id":297900,
             "date":"8/24/16",
             "time":"3:41 AM",
             "offense":"SEX ABUSE",
             "address":"500 - 599 BLOCK OF 21ST STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.04666625,38.89668968 ]
             },
             "properties": {
             "id":297902,
             "date":"8/24/16",
             "time":"4:55 AM",
             "offense":"SEX ABUSE",
             "address":"500 - 599 BLOCK OF 21ST STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98007676,38.9171913 ]
             },
             "properties": {
             "id":297520,
             "date":"8/20/16",
             "time":"11:17 AM",
             "offense":"SEX ABUSE",
             "address":"1600 - 1779 BLOCK OF NEW YORK AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00130538,38.92237278 ]
             },
             "properties": {
             "id":297906,
             "date":"8/24/16",
             "time":"7:24 AM",
             "offense":"SEX ABUSE",
             "address":"300 - 399 BLOCK OF CHANNING STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00533391,38.82081192 ]
             },
             "properties": {
             "id":297802,
             "date":"8/23/16",
             "time":"3:28 AM",
             "offense":"SEX ABUSE",
             "address":"4800 - 4899 BLOCK OF 1ST STREET SW",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9594868,38.86891912 ]
             },
             "properties": {
             "id":297457,
             "date":"8/19/16",
             "time":"6:10 PM",
             "offense":"ROBBERY",
             "address":"3200 - 3299 BLOCK OF PENNSYLVANIA AVENUE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94301886,38.87056979 ]
             },
             "properties": {
             "id":297483,
             "date":"8/20/16",
             "time":"12:06 AM",
             "offense":"ROBBERY",
             "address":"4100 - 4199 BLOCK OF MASSACHUSETTS AVENUE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02499739,38.90565064 ]
             },
             "properties": {
             "id":297484,
             "date":"8/20/16",
             "time":"12:14 AM",
             "offense":"ROBBERY",
             "address":"900 - 999 BLOCK OF M STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94089857,38.89837763 ]
             },
             "properties": {
             "id":297486,
             "date":"8/20/16",
             "time":"1:22 AM",
             "offense":"ROBBERY",
             "address":"4200 - 4399 BLOCK OF GRANT STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01285929,38.91700311 ]
             },
             "properties": {
             "id":297492,
             "date":"8/20/16",
             "time":"3:47 AM",
             "offense":"ROBBERY",
             "address":"100 - 142 BLOCK OF U STREET NW",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03553847,38.91261136 ]
             },
             "properties": {
             "id":297493,
             "date":"8/20/16",
             "time":"4:10 AM",
             "offense":"ROBBERY",
             "address":"1500 - 1599 BLOCK OF R STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02224013,38.93683802 ]
             },
             "properties": {
             "id":297494,
             "date":"8/20/16",
             "time":"4:27 AM",
             "offense":"ROBBERY",
             "address":"700  - 799 BLOCK OF ROCK CREEK CHURCH ROAD NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02883083,38.91992797 ]
             },
             "properties": {
             "id":297496,
             "date":"8/20/16",
             "time":"4:46 AM",
             "offense":"ROBBERY",
             "address":"2200 - 2299 BLOCK OF 12TH PLACE NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03195264,38.96424795 ]
             },
             "properties": {
             "id":297503,
             "date":"8/20/16",
             "time":"5:59 AM",
             "offense":"ROBBERY",
             "address":"1306  - 1399 BLOCK OF FORT STEVENS DRIVE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99321364,38.88465461 ]
             },
             "properties": {
             "id":297507,
             "date":"8/20/16",
             "time":"7:20 AM",
             "offense":"ROBBERY",
             "address":"900 - 999 BLOCK OF SOUTH CAROLINA AVENUE SE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00276984,38.92022877 ]
             },
             "properties": {
             "id":297510,
             "date":"8/20/16",
             "time":"8:16 AM",
             "offense":"ROBBERY",
             "address":"200 - 299 BLOCK OF ADAMS STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01060977,38.91038221 ]
             },
             "properties": {
             "id":297512,
             "date":"8/20/16",
             "time":"8:46 AM",
             "offense":"ROBBERY",
             "address":"1 - 99 BLOCK OF BATES STREET NW",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.95034331,38.89354453 ]
             },
             "properties": {
             "id":297518,
             "date":"8/20/16",
             "time":"11:12 AM",
             "offense":"ROBBERY",
             "address":"3900 - 3903 BLOCK OF MINNESOTA AVENUE NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.96148236,38.86510923 ]
             },
             "properties": {
             "id":297539,
             "date":"8/20/16",
             "time":"2:45 PM",
             "offense":"ROBBERY",
             "address":"2000 - 2099 BLOCK OF 32ND STREET SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02431258,38.92600962 ]
             },
             "properties": {
             "id":297560,
             "date":"8/20/16",
             "time":"8:13 PM",
             "offense":"ROBBERY",
             "address":"700 - 999 BLOCK OF GIRARD STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02323878,38.95742175 ]
             },
             "properties": {
             "id":297564,
             "date":"8/20/16",
             "time":"8:55 PM",
             "offense":"ROBBERY",
             "address":"700  - 799 BLOCK OF LONGFELLOW STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03273339,38.9307099 ]
             },
             "properties": {
             "id":297587,
             "date":"8/21/16",
             "time":"1:37 AM",
             "offense":"ROBBERY",
             "address":"3300 - 3398 BLOCK OF 14TH STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99407813,38.88382588 ]
             },
             "properties": {
             "id":297591,
             "date":"8/21/16",
             "time":"2:37 AM",
             "offense":"ROBBERY",
             "address":"822 - 825 BLOCK OF PENNSYLVANIA AVENUE SE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.05208219,38.90965042 ]
             },
             "properties": {
             "id":297592,
             "date":"8/21/16",
             "time":"2:41 AM",
             "offense":"ROBBERY",
             "address":"2300 - 2599 BLOCK OF P STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97719037,38.9285863 ]
             },
             "properties": {
             "id":297596,
             "date":"8/21/16",
             "time":"3:15 AM",
             "offense":"ROBBERY",
             "address":"1805 - 1999 BLOCK OF RHODE ISLAND AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98698561,38.90734616 ]
             },
             "properties": {
             "id":297656,
             "date":"8/21/16",
             "time":"7:17 PM",
             "offense":"ROBBERY",
             "address":"1600 - 1619 BLOCK OF MONTELLO AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01573754,38.94895522 ]
             },
             "properties": {
             "id":297665,
             "date":"8/21/16",
             "time":"8:32 PM",
             "offense":"ROBBERY",
             "address":"4800  - 4825 BLOCK OF 3RD STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99049591,38.95358615 ]
             },
             "properties": {
             "id":297678,
             "date":"8/21/16",
             "time":"10:16 PM",
             "offense":"ROBBERY",
             "address":"1100 - 1199 BLOCK OF GALLOWAY STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98871474,38.83620697 ]
             },
             "properties": {
             "id":297686,
             "date":"8/22/16",
             "time":"12:29 AM",
             "offense":"ROBBERY",
             "address":"1100 - 1199 BLOCK OF VARNEY STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03554852,38.90964761 ]
             },
             "properties": {
             "id":297689,
             "date":"8/22/16",
             "time":"5:25 AM",
             "offense":"ROBBERY",
             "address":"1500 - 1599 BLOCK OF P STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02785604,38.96324007 ]
             },
             "properties": {
             "id":297726,
             "date":"8/22/16",
             "time":"1:33 PM",
             "offense":"ROBBERY",
             "address":"6000  - 6099 BLOCK OF GEORGIA AVENUE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98039293,38.89961607 ]
             },
             "properties": {
             "id":297733,
             "date":"8/22/16",
             "time":"2:51 PM",
             "offense":"ROBBERY",
             "address":"1516 - 1699 BLOCK OF BENNING ROAD NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98175167,38.90580503 ]
             },
             "properties": {
             "id":297800,
             "date":"8/23/16",
             "time":"1:35 AM",
             "offense":"ROBBERY",
             "address":"1613 - 1628 BLOCK OF HOLBROOK STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01242088,38.91565191 ]
             },
             "properties": {
             "id":297826,
             "date":"8/23/16",
             "time":"11:37 AM",
             "offense":"ROBBERY",
             "address":"100 - 115 BLOCK OF RHODE ISLAND AVENUE NW",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98055255,38.90612013 ]
             },
             "properties": {
             "id":297833,
             "date":"8/23/16",
             "time":"1:05 PM",
             "offense":"ROBBERY",
             "address":"1200 - 1241 BLOCK OF 16TH STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99032688,38.92395785 ]
             },
             "properties": {
             "id":297836,
             "date":"8/23/16",
             "time":"1:38 PM",
             "offense":"ROBBERY",
             "address":"2600 - 2699 BLOCK OF 12TH STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03300012,38.93386273 ]
             },
             "properties": {
             "id":297843,
             "date":"8/23/16",
             "time":"2:56 PM",
             "offense":"ROBBERY",
             "address":"1400 - 1405 BLOCK OF OGDEN STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97419351,38.92397342 ]
             },
             "properties": {
             "id":297848,
             "date":"8/23/16",
             "time":"3:29 PM",
             "offense":"ROBBERY",
             "address":"2600 - 2699 BLOCK OF 22ND STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02825424,38.94899791 ]
             },
             "properties": {
             "id":297849,
             "date":"8/23/16",
             "time":"3:30 PM",
             "offense":"ROBBERY",
             "address":"1200  - 1299 BLOCK OF DELAFIELD PLACE NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01897388,38.97234919 ]
             },
             "properties": {
             "id":297871,
             "date":"8/23/16",
             "time":"6:33 PM",
             "offense":"ROBBERY",
             "address":"400  - 499 BLOCK OF ASPEN STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99845875,38.8424954 ]
             },
             "properties": {
             "id":297883,
             "date":"8/23/16",
             "time":"9:09 PM",
             "offense":"ROBBERY",
             "address":"3200 - 3398 BLOCK OF 6TH STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01523083,38.89906721 ]
             },
             "properties": {
             "id":297889,
             "date":"8/23/16",
             "time":"10:33 PM",
             "offense":"ROBBERY",
             "address":"700 - 799 BLOCK OF 3RD STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99749132,38.83798215 ]
             },
             "properties": {
             "id":297891,
             "date":"8/23/16",
             "time":"10:43 PM",
             "offense":"ROBBERY",
             "address":"600 - 699 BLOCK OF MISSISSIPPI AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92713175,38.90078409 ]
             },
             "properties": {
             "id":297899,
             "date":"8/24/16",
             "time":"1:46 AM",
             "offense":"ROBBERY",
             "address":"800 - 899 BLOCK OF 51ST STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93920851,38.8930438 ]
             },
             "properties": {
             "id":297901,
             "date":"8/24/16",
             "time":"3:44 AM",
             "offense":"ROBBERY",
             "address":"120 231  BLOCK OF 44TH STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93674627,38.88790772 ]
             },
             "properties": {
             "id":297922,
             "date":"8/24/16",
             "time":"11:48 AM",
             "offense":"ROBBERY",
             "address":"4551 - 4600 BLOCK OF BENNING ROAD SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.987817,38.83236927 ]
             },
             "properties": {
             "id":297924,
             "date":"8/24/16",
             "time":"11:49 AM",
             "offense":"ROBBERY",
             "address":"4300 4399  BLOCK OF WHEELER ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.94110832,38.90962016 ]
             },
             "properties": {
             "id":297941,
             "date":"8/24/16",
             "time":"3:12 PM",
             "offense":"ROBBERY",
             "address":"4300 - 4399 BLOCK OF POLK STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9812553,38.86425828 ]
             },
             "properties": {
             "id":297958,
             "date":"8/24/16",
             "time":"5:47 PM",
             "offense":"ROBBERY",
             "address":"1600 - 1699 BLOCK OF V STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03994009,38.92796913 ]
             },
             "properties": {
             "id":297960,
             "date":"8/24/16",
             "time":"6:00 PM",
             "offense":"ROBBERY",
             "address":"1600 - 1899 BLOCK OF HOBART STREET NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92860407,38.90409107 ]
             },
             "properties": {
             "id":297964,
             "date":"8/24/16",
             "time":"7:10 PM",
             "offense":"ROBBERY",
             "address":"1000 - 1099 BLOCK OF 50TH STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02417742,38.9355044 ]
             },
             "properties": {
             "id":297986,
             "date":"8/24/16",
             "time":"10:20 PM",
             "offense":"ROBBERY",
             "address":"3639 - 3649 BLOCK OF GEORGIA AVENUE NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02510257,38.94242258 ]
             },
             "properties": {
             "id":297988,
             "date":"8/24/16",
             "time":"10:27 PM",
             "offense":"ROBBERY",
             "address":"4200  - 4299 BLOCK OF 9TH STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93167407,38.90062469 ]
             },
             "properties": {
             "id":298017,
             "date":"8/25/16",
             "time":"8:30 AM",
             "offense":"ROBBERY",
             "address":"800 - 899 BLOCK OF 49TH STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9995185,38.84010817 ]
             },
             "properties": {
             "id":298023,
             "date":"8/25/16",
             "time":"9:56 AM",
             "offense":"ROBBERY",
             "address":"3400 - 3499 BLOCK OF 5TH STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93537103,38.89189768 ]
             },
             "properties": {
             "id":298034,
             "date":"8/25/16",
             "time":"1:17 PM",
             "offense":"ROBBERY",
             "address":"4616 - 4699 BLOCK OF BLAINE STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99558827,38.87928572 ]
             },
             "properties": {
             "id":298059,
             "date":"8/25/16",
             "time":"5:03 PM",
             "offense":"ROBBERY",
             "address":"700 - 799 BLOCK OF I STREET SE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.95448671,38.88547471 ]
             },
             "properties": {
             "id":298096,
             "date":"8/25/16",
             "time":"11:21 PM",
             "offense":"ROBBERY",
             "address":"200 - 499 BLOCK OF ANACOSTIA ROAD SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97718602,38.90613754 ]
             },
             "properties": {
             "id":297579,
             "date":"8/21/16",
             "time":"12:00 AM",
             "offense":"HOMICIDE",
             "address":"1200 - 1299 BLOCK OF 18TH PLACE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03156684,38.95290665 ]
             },
             "properties": {
             "id":297387,
             "date":"8/18/16",
             "time":"9:25 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1300  - 1399 BLOCK OF HAMILTON STREET NW",
             "ward":4
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.00826018,38.83247772 ]
             },
             "properties": {
             "id":297401,
             "date":"8/18/16",
             "time":"11:23 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3846 3999  BLOCK OF SOUTH CAPITOL STREET",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93443142,38.88580749 ]
             },
             "properties": {
             "id":297407,
             "date":"8/19/16",
             "time":"2:00 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4700 - 4899 BLOCK OF C STREET SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9824679,38.89997673 ]
             },
             "properties": {
             "id":297426,
             "date":"8/19/16",
             "time":"9:50 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1500 - 1599 BLOCK OF BENNING ROAD NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98389319,38.86758278 ]
             },
             "properties": {
             "id":297440,
             "date":"8/19/16",
             "time":"12:48 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1400 - 1499 BLOCK OF T STREET SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01017101,38.82519873 ]
             },
             "properties": {
             "id":297446,
             "date":"8/19/16",
             "time":"2:15 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"20 - 199 BLOCK OF FORRESTER STREET SW",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97398492,38.86353622 ]
             },
             "properties": {
             "id":297481,
             "date":"8/19/16",
             "time":"11:58 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2300 - 2399 BLOCK OF GOOD HOPE ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93826903,38.89972752 ]
             },
             "properties": {
             "id":297485,
             "date":"8/20/16",
             "time":"12:15 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4400 - 4499 BLOCK OF HAYES STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02573909,38.91628933 ]
             },
             "properties": {
             "id":297531,
             "date":"8/20/16",
             "time":"1:29 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1900 - 1999 BLOCK OF VERMONT AVENUE NW",
             "ward":1
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.95603748,38.85652228 ]
             },
             "properties": {
             "id":297551,
             "date":"8/20/16",
             "time":"6:30 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3360 3399  BLOCK OF SOUTHERN AVENUE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.01894191,38.89547233 ]
             },
             "properties": {
             "id":297558,
             "date":"8/20/16",
             "time":"8:05 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"400 - 499 BLOCK OF 5TH STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.91641545,38.89647993 ]
             },
             "properties": {
             "id":297585,
             "date":"8/21/16",
             "time":"12:58 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"500 - 599 BLOCK OF 59TH STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.0013165,38.90021226 ]
             },
             "properties": {
             "id":297595,
             "date":"8/21/16",
             "time":"3:01 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"300 - 399 BLOCK OF H STREET NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98627106,38.90595879 ]
             },
             "properties": {
             "id":297599,
             "date":"8/21/16",
             "time":"3:37 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1200 - 1299 BLOCK OF PENN STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.05426835,38.90373994 ]
             },
             "properties": {
             "id":297610,
             "date":"8/21/16",
             "time":"6:11 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2500 - 2599 BLOCK OF L STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.92493273,38.88708096 ]
             },
             "properties": {
             "id":297611,
             "date":"8/21/16",
             "time":"6:27 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"5300 - 5329 BLOCK OF CENTRAL AVENUE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93092743,38.9097407 ]
             },
             "properties": {
             "id":297613,
             "date":"8/21/16",
             "time":"7:31 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1426 - 1499 BLOCK OF EASTERN AVENUE NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99437078,38.82662237 ]
             },
             "properties": {
             "id":297669,
             "date":"8/21/16",
             "time":"9:10 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"734 - 855 BLOCK OF SOUTHERN AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.03967256,38.90315126 ]
             },
             "properties": {
             "id":297673,
             "date":"8/21/16",
             "time":"9:38 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1000 - 1099 BLOCK OF CONNECTICUT AVENUE NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9391928,38.89794435 ]
             },
             "properties": {
             "id":297685,
             "date":"8/22/16",
             "time":"12:09 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"600 - 699 BLOCK OF 44TH STREET NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98609419,38.86695247 ]
             },
             "properties": {
             "id":297739,
             "date":"8/22/16",
             "time":"3:41 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1300 - 1399 BLOCK OF GOOD HOPE ROAD SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98627106,38.90595879 ]
             },
             "properties": {
             "id":297788,
             "date":"8/22/16",
             "time":"10:02 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1200 - 1299 BLOCK OF PENN STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98164192,38.92904651 ]
             },
             "properties": {
             "id":297854,
             "date":"8/23/16",
             "time":"4:05 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1600 - 1699 BLOCK OF IRVING STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.93543505,38.88484415 ]
             },
             "properties": {
             "id":297859,
             "date":"8/23/16",
             "time":"5:05 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"4611 - 4699 BLOCK OF BENNING ROAD SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.95805787,38.88979485 ]
             },
             "properties": {
             "id":297893,
             "date":"8/23/16",
             "time":"11:33 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2300 - 3955 BLOCK OF EAST CAPITOL STREET",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99791497,38.9242465 ]
             },
             "properties": {
             "id":297894,
             "date":"8/23/16",
             "time":"11:48 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"600 - 622 BLOCK OF EDGEWOOD STREET NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97699233,38.89899387 ]
             },
             "properties": {
             "id":297952,
             "date":"8/24/16",
             "time":"4:59 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1800 - 1869 BLOCK OF BENNING ROAD NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98529006,38.91088624 ]
             },
             "properties": {
             "id":297993,
             "date":"8/24/16",
             "time":"11:22 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1800 - 1899 BLOCK OF WEST VIRGINIA AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.97483672,38.89861508 ]
             },
             "properties": {
             "id":298002,
             "date":"8/25/16",
             "time":"12:08 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1920 - 2099 BLOCK OF BENNING ROAD NE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.99578548,38.85744934 ]
             },
             "properties": {
             "id":298003,
             "date":"8/25/16",
             "time":"12:24 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2632 2663  BLOCK OF MARTIN LUTHER KING JR AVENUE SE",
             "ward":8
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.9824679,38.89997673 ]
             },
             "properties": {
             "id":298062,
             "date":"8/25/16",
             "time":"6:03 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1500 - 1599 BLOCK OF BENNING ROAD NE",
             "ward":6
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.96584019,38.86031811 ]
             },
             "properties": {
             "id":298066,
             "date":"8/25/16",
             "time":"6:32 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"2800 - 2999 BLOCK OF ALABAMA AVENUE SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.96778295,38.87011081 ]
             },
             "properties": {
             "id":298075,
             "date":"8/25/16",
             "time":"7:54 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1600 - 1699 BLOCK OF 28TH STREET SE",
             "ward":7
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -76.98473638,38.91203022 ]
             },
             "properties": {
             "id":298077,
             "date":"8/25/16",
             "time":"7:59 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"1900 - 1937 BLOCK OF CAPITOL AVENUE NE",
             "ward":5
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.06384219,38.90925722 ]
             },
             "properties": {
             "id":298097,
             "date":"8/25/16",
             "time":"11:42 PM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"3200 - 3229 BLOCK OF P STREET NW",
             "ward":2
             }
           },
           {
             "type": "Feature",
             "geometry": {
                "type": "Point",
                "coordinates":  [ -77.02160369,38.93002786 ]
             },
             "properties": {
             "id":298100,
             "date":"8/26/16",
             "time":"12:36 AM",
             "offense":"ASSAULT W/DANGEROUS WEAPON",
             "address":"500 - 699 BLOCK OF KENYON STREET NW",
             "ward":1
             }
           }
         ]
        }
    });

    // Add a layer showing the places.
    map.addLayer(
      {
          "id": "AssaultwWeapon",
          "type": "circle",
          "source": "composite",
          "source-layer": "incidents-c6zcfu",
          "interactive": true,
          "filter": [
              "==",
              "offense",
              "ASSAULT W/DANGEROUS WEAPON"
          ],
          "layout": {
              "visibility": "visible"
          },
          "paint": {
              "circle-color": "hsl(132, 52%, 37%)",
              "circle-radius": 6
          }
      },
      {
          "id": "SexCrime",
          "type": "circle",
          "source": "composite",
          "source-layer": "incidents-c6zcfu",
          "interactive": true,
          "filter": [
              "==",
              "offense",
              "SEX ABUSE"
          ],
          "layout": {
              "visibility": "visible"
          },
          "paint": {
              "circle-color": "hsl(0, 100%, 22%)",
              "circle-radius": 6
          }
      },
      {
          "id": "Robbery",
          "type": "circle",
          "source": "composite",
          "source-layer": "incidents-c6zcfu",
          "interactive": true,
          "filter": [
              "==",
              "offense",
              "ROBBERY"
          ],
          "layout": {
              "visibility": "visible"
          },
          "paint": {
              "circle-color": "hsl(245, 68%, 39%)",
              "circle-radius": 5
          }
      },
      {
          "id": "Homicide",
          "type": "circle",
          "source": "composite",
          "source-layer": "incidents-c6zcfu",
          "interactive": true,
          "filter": [
              "==",
              "offense",
              "HOMICIDE"
          ],
          "layout": {},
          "paint": {
              "circle-radius": 6,
              "circle-color": "hsl(0, 100%, 4%)"
          }
      }
    );
});

// When a click event occurs near a place, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['AssaultwWeapon', 'SexCrime', 'Robbery', 'Homicide'] });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    var popup = new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<h1 class="mom">' + feature.properties.offense + '</h1>' + '<h3 class="pizza">' + feature.properties.date + '</h3>' + '<h3 class="pizza">' + feature.properties.time + '</h3>' + '<h3 class="pizza">' + feature.properties.address + '</h3>')
        .addTo(map);
});



});
