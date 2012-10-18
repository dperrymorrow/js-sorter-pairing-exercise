/*global JST:true, $:true*/
/*jslint browser: true, white: true, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: true, indent: 2*/

function sorter($table, sortOn, direction) {
  // default to text as direction
  direction = direction || 'ASC';
  // default to text for sortOn
  sortOn = sortOn || 'text';
  // an array to store our values in
  var values = [];
  // iterate over the tr elements and pluck the values
  $table.find('tr').each(function () {
    var val = (sortOn === 'text') ? $(this).text() : $(this).data(sortOn);
    values.push(val);
  });
  // sort the values asc or desc
  values = (direction === 'DESC') ? values.sort() : values.sort().reverse();
  // move the tr elements to match the values array
  for (var i = 0; i < values.length; i++) {
    var $tr = {};
    if (sortOn !== 'text') {
      // if you are sorting on a data attr
      $tr = $table.find('tr[data-' + sortOn + '=' + values[i] + ']');
    } else {
      // if you are sorting on text
      $tr = $table.find('tr').filter(function() {return $(this).text() === values[i]; });
    }
    $table.append($tr);
  };
}
