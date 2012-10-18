/*global jQuery:true, equal:true, test:true, sorter:true, $:true*/
/*jslint browser: true, white: true, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: true, indent: 2*/

test("not duplicating the tr elements", function () {
  sorter($('#table'), 'num_key', 'DESC');
  equal($('#table tr').length, 5);
});

test("sorting by numeric data key", 2, function() {
  sorter($('#table'), 'num_key', 'DESC');
  equal($('#table tr').first().data('num_key'), 1);
    
  sorter($('#table'), 'num_key', 'ASC');
  equal($('#table tr').first().data('num_key'), 5);
});

test("sorting ASC and desc on strings", 2, function() {
  sorter($('#table'), 'str_key', 'ASC' );
  equal( $('#table tr').first().data('str_key'), 'Watermelon');
  
  sorter($('#table'), 'str_key', 'DESC');
  equal( $('#table tr').first().data('str_key'), 'Apples');
});

////////////////// BONUS ROUND /////////////////////

test("sorting ASC and desc on strings", 3, function() {
  sorter($('#table'), 'text', 'ASC' );
  equal($('#table tr').first().text(), 'Watermelon');
  
  sorter($('#table'), 'text', 'DESC');
  equal( $('#table tr').first().text(), 'Apples');

  sorter($('#table'));
  equal( $('#table tr').first().text(), 'Apples');
});
