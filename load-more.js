<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  $(document).ready(function() {
    var loadMoreButton = $('#LoadMoreButton');
    var collectionContainer = $('.collection.page-width');
    var page = 1;
    var productsPerPage = {{ section.settings.products_per_page | default: 12 }}; // Set the number of products to load per click

    loadMoreButton.on('click', function() {
      page++;
      var url = '{{ collection.url }}?page=' + page;

      $.get(url, function(data) {
        var newProducts = $(data).find('.collection .grid__item');

        if (newProducts.length > 0) {
          collectionContainer.find('.grid').append(newProducts);
        }

        if (newProducts.length < productsPerPage) {
          loadMoreButton.text('All products loaded').prop('disabled', true);
        }
      });
    });
  });
</script>
