/*global jQuery:true, equal:true, test:true, sorter:true, $:true*/
/*jslint browser: true, white: true, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: true, indent: 2*/

test("not duplicating the tr elements", function () {
  sorter($('#table'), 'num', 'DESC');
  equal($('#table tr').length, 5);
});

test("sorting numeric DESC", function () {
  sorter($('#table'), 'num', 'DESC');
  equal($('#table tr').first().data('num'), 1);
});

test("sorting numeric ASC", function () {
  sorter($('#table'), 'num', 'ASC');
  equal($('#table tr').first().data('num'), 5);
});

test("sorting string ASC", function () {
  sorter($('#table'), 'str', 'ASC' );
  equal( $('#table tr').first().data('str'), 'Watermelon');
});

test("sorting string DESC", function () {
  sorter($('#table'), 'str', 'DESC');
  equal( $('#table tr').first().data('str'), 'Apples');
});

////////////////// BONUS ROUND /////////////////////

test("takes lowercase for direction", function () {
  sorter($('#table'), 'str', 'desc');
  equal( $('#table tr').first().data('str'), 'Apples');
});

test("defaults to ASC", function () {
  sorter($('#table'), 'num');
  equal( $('#table tr').first().data('num'), 5);
});
