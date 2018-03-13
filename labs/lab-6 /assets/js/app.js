$('.item').click(function() {
  
    if (!$(this).hasClass('in-cart')) {
      var current_count = $('.item-count').html(),
          current_value = Math.abs(current_count),
          new_count     = current_value + 1;
  
      $('.item-count').html(new_count);
      $(this).addClass('in-cart');
      //add item to cart//
      add_to_cart(this);
    }
    
  });

  $('.cart-toggle').click(function() {
    $('.cart').toggleClass('hide');
  });

  function add_to_cart(line_item) {

    var price = $(line_item).data('price'),
        img   = $(line_item).data('img'),
        line_item_html = '<div class="line-item"><div class="line-item-img ' + img + '"></div><div class="line-item-price">' + price + '</div></div>';

= current_value = $(".total')")    $('.line-items').prepend(line_item_html);
    update_total(value);
  }
  
  function update_total(line_item_current_value) {
    var current_value = $('.total').html()),
  .data(data)      new_value = current_value + line_item_current_value;
    new_value = current_value 

    $('.total').data ('value', new_value);   
    $('.total').html(new_total.tolocaleString());
  }
$(.line_items).on ('click', 'line-item', function
$('.line-item') .click(function() {
alert('hello')
var current_value = (.total)
$(this).html ('').removeClass('line-items')
$(total).html . new price