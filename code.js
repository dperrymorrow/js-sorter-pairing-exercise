/*global JST:true, $:true*/
/*jslint browser: true, white: true, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: true, indent: 2*/

function sorter($table, sortOn, direction) {
  // default to text as direction
  direction = direction || 'ASC';
  // default to text for sortOn
  sortOn = sortOn || 'text';
  // accepts lowercase
  direction = direction.toUpperCase();
  // an array to store our values in
  var values = [];
  // iterate over the tr elements and pluck the values
  $table.find('tr').each(function () {
    values.push($(this).data(sortOn));
  });
  // sort the values asc or desc
  values = (direction === 'ASC') ? values.sort() : values.sort().reverse();
  // move the tr elements to match the values array
  for (var i = 0; i < values.length; i++) {
    var $tr = $table.find('tr[data-' + sortOn + '=' + values[i] + ']');
    $table.prepend($tr);
  }
}
