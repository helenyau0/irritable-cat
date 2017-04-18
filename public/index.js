function addButton (){
  var nameFile = prompt('name your mark down file');
  var node =document.createElement('li');
  var textNode = document.createTextNode(nameFile);
  node.appendChild(textNode);
  document.getElementById('navi').appendChild(node);

  $('#navi li').attr('id', function(i){
    var idOfLi = 'id'+(i+1);
    return idOfLi;
    var element=document.getElementById(idOfLi);
    element.addEventListener('click', function() {
      var header = document.getElementById('header').innerHTML = 'puppies';
    })

  $("navi li").each(function() {
           $(this).attr("class", "mdFile");
     });
  })
}


// function copyListName () {
//   $('#pages li').attr('id', function(i){
//     return 'page'+(i+1);
//   })
// }
