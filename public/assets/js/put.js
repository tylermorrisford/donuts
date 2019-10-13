// PUT request using ajax

$(document).ready(function(){
    $(document).on("click", ".eat-button" ,function(event) {
        event.preventDefault();
        var newDonut = {
      donut_id: $(this).attr("id")
    };
    console.log(newDonut);
    // Send the PUT request.
    $.ajax("/donut/update/", {
      type: "PUT",
      data: newDonut
    }).then(
      function() {
          console.log(newDonut);
        // Reload the page to get the updated list
        location.reload();
        console.log('reload takes place');
      }
    );
  });

});
