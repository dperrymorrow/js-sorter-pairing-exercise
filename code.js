/*global JST:true, $:true*/
/*jslint browser: true, white: true, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: true, indent: 2*/

function sorter($table, sortOn, direction) {
  // your code here...

  var new_data = [];
  
  if(typeof direction === "undefined") {
    direction = "ASC";
  }

  $table.find('tr').each(function(){
    new_data.push($(this).data());
  });

  new_data = new_data.sort(function(a, b) {
    if(sortOn == 'num'){
      return direction == "ASC" ? a[sortOn] - b[sortOn] : b[sortOn] - a[sortOn];
    }else{
      return direction == "ASC" ? a[sortOn] > b[sortOn] : a[sortOn] < b[sortOn];
    }
  });

  for (var i = 0; i < new_data.length; i++) {
    var val = new_data[i][sortOn];
    $table.prepend($table.find('tr[data-'+sortOn+'="'+val+'"]'));
  };
  // console.log(new_data);

  // .each(function(index) {
  //   console.log($(this).data('num'))
  // });
}
