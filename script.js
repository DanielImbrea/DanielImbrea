// sortable permite ce am selectat sa se mute in axa x cum am selectat
// containmnet nu permite sa se
// $("#projects").tabs();
// $("ul").sortable({axis:"x", containment:"#projects"})
// $("ol").sortable({axis:"y", containment:"#projects"})
// job este un atribut
// document.addEventListener("keyup", function (event) {
//   if (event.keyCode == 13) {
//     const toDo = input.value;

//   }
// }


$(".txtb").on("keyup", function (e) {
  // 13 means enter button
  // daca apasam enter si valoarea inputului nu este goala 

  if (e.keyCode == 13 && $(".txtb").val() != "") {
    //  Lui task i se atribuie valoarea scrisa in input 
    var task = $("<div class='task'></div>").text($(".txtb").val());
    var del = $("<i class='fas fa-trash-alt'></i>").click(function () {
      var p = $(this).parent();
      p.fadeOut(function () {
        p.remove();
      })
    });
    var check = $("<i class='fas fa-check'></i>").click(function () {
      var p = $(this).parent();
      p.fadeOut(function () {
        $(".comp").append(p);
        p.fadeIn();
      });
      // sa dispara check ul cand apas
      $(this).remove();
    });
    // sa apara la fiecare del si check ul
    task.append(del, check);
    // iar apoi valoarea lui task append catre clasa notcomp
    $(".notcomp").append(task);
    // to clear the input
    $(".txtb").val("")
  }

})