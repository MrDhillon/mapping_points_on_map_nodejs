// function to be called on click event on marker ----harman
function markerPost(){
  var $id = this.locationId;
  $.post('/',{marker: $id }, function(res){
    $('.modal-content').html("<p> Store name: "+res[0].name+"</p>\
                              <p> Located in: "+res[0].city+","+res[0].country+"</p>\
                              <p> Visitors: "+res[0].total_visitors+"</p>\
                              <p> Start of Day: "+res[0].start_of_day+"</p>")
   $('#myModal').modal('toggle');
  });
}