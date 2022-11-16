//START JQUERY AREA

$(document).ready(function(){
    
    // Start Header 
        // Start Navbar 
            $('.navbuttons').click(function(){
                $(this).toggleClass('crossxs')
            })
        // End Navbar
    // End Header 
});

//End JQUERY AREA

//START JS AREA

    // Start Student Counter Section

    var getcountervalues=document.querySelectorAll('.countervalue');
    //console.log(getcountervalues);

    getcountervalues.forEach(function(getcountervalue) {
        //console.log(getcountervalue);

        getcountervalue.textContent=0;

        const updatecounter=function(){
            //console.log("I am working");
            const getcttarget=+getcountervalue.getAttribute('data-target');
            //console.log(getcttarget);
            //console.log(typeof getcttarget);

            const getctcontent=+getcountervalue.innerText;
            console.log(typeof getcontent);

            const incnumber=getcttarget/100;
            console.log(incnumber);

            if(getctcontent<getcttarget){
                getcountervalue.textContent=getctcontent+incnumber;
                
                setTimeout(updatecounter,50);
               
            }

        }
        updatecounter();
       
    })

    //End Student Counter Section

//End JS AREA

//25CT 25-Aug 2022

//Start Rating Section
//Start Pie Chart 

    //Start Google Code For Chart
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',    8],
          ['Thailand',      2],
          ['Singapore',  4],
          ['Indonesia', 2],
          ['Sri Linka',    8]
        ]);

        var options = {
          title: 'International Students',
          is3D:true,
          pieHole:0.4,
          width:500,
          height:400
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
    //End Google Code For Chart

//End Pie Chart
//End Rating Section