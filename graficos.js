google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart); 

function drawChart(processos) {
	var array = [];
	array = processos;
  var data = new google.visualization.DataTable();
  data.addColumn('string','Processo');
  data.addColumn('number','T. Espera');
  data.addColumn('number', 'T. Total');

  for(var i=0; i< array.length; i++){
  	data.addRows([[array[i].nome, array[i].espera, array[i].turn]]);
  }

  var options = {
    chart: {
      title: '',
      subtitle: '',
    }
  };
  var chart = new google.charts.Bar(document.getElementById('chart_div'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}