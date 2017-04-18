function addButton (){
    var nameFile = prompt('name your mark down file');
    var node =document.createElement('li');
    var textNode = document.createTextNode(nameFile);
    node.appendChild(textNode);
    document.getElementById('navi').appendChild(node);

    $('#navi li').attr('id', function(i){
      return 'id'+(i+1);
    })

    $('#navi li').addClass("clickable");

    $('.clickable').on('click', function(e){
      var target = $(e.target).text()
      var header = $("#header").html(target)

      return header;
    })
  }
