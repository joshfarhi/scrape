function displayResults(articles) {
    // First, empty the table
    $("tbody").empty();
  
    // Then, for each entry of that json...
    animals.forEach(function(article) {
      // Append each of the animal's properties to the table
      var tr = $("<tr>").append(
        $("<td>").text(article.name),
        $("<td>").text(article.numLegs),
        $("<td>").text(article.class),
        $("<td>").text(article.weight),
        $("<td>").text(article.whatIWouldReallyCallIt)
      );
  
      $("tbody").append(tr);
    });
  }

  $.getJSON("/all", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });