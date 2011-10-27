/*
 * A very simple jquery plugin that takes a list and makes each list item a selectable filter. This plugin enforces the
 * policy of having only one filter applied at a time. When a filter is selected, a filter event is published for
 * interested parties to do with what they please.
 */
(function($) {

  var filterFor = function(element) {
    return $(element).closest('[data-filter]').data('filter');
  };

  var methods = {
    init: function(options) {
      var settings = $.extend({
        selector: 'li',  // Each of these becomes a filter
        onFilter: $.noop // Callback invoked whenever a filter is selected
      }, options);

      return this.each(function() {
        var $container = $(this);
        $container.data('settings', settings);
        $(settings.selector, $container).click(function() {
          $container.filterer('select', filterFor(this));
          return false;
        });
      });
    },
    select: function(filter) {
      var settings   = this.data('settings');
      var $container = $(this);
      var $current   = $('[data-filter=' + filter + ']', $container);
      var $previous  = $('.selected', $container);

      $previous.removeClass('selected');
      $current.addClass('selected');

      $.publish('filter', [ { filter: filter } ]);
      settings.onFilter(filter);
    }
  };

  $.fn.filterer = function(method) {
    // Method calling logic
    if (methods[method]) {
      return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.filterer');
    }
  };

})(jQuery);
