describe("filterer", function() {
  beforeEach(function() {
    loadFixtures('filterer_spec.html');
  });

  describe("selecting a filter", function() {
    beforeEach(function() {
      $('#risk-filters').filterer();
    });

    it("should add the 'selected' class when clicked", function() {
      $('#risk-filters .low').click();
      expect($('#risk-filters .low')).toHaveClass('selected');
    });

    it("should remove the 'selected' class from the previous filter", function() {
      $('#risk-filters .low').click();
      $('#risk-filters .medium').click();
      expect($('#risk-filters .low')).not.toHaveClass('selected');
    });

    it("should only allow one item to be selected at a time", function() {
      $('#risk-filters .low').click();
      $('#risk-filters .medium').click();
      $('#risk-filters .high').click();
      expect($('#risk-filters .selected').length).toBe(1);
    });

    describe("events", function() {
      var event, data, count;

      beforeEach(function() {
        event = null, data = null, count = 0;
        $.subscribe('filter', function(d) {
          count = count + 1;
          data = d;
        });
        $('#risk-filters .low').click();
      });

      afterEach(function() {
        $.unsubscribe();
      });

      it('should trigger a filter event', function() {
        expect(count).toEqual(1);
      });

      it('should include the selected filter', function() {
        expect(data).toBeDefined();
        expect(data.filter).toEqual('low');
      });
    });
  });
});
