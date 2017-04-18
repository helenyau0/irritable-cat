function addButton() {
  let nameFile = prompt('name your mark down file');
  let node = document.createElement('li');
  let textNode = document.createTextNode(nameFile);
  node.appendChild(textNode);
  document.getElementById('navi').appendChild(node);

  let div = document.createElement('div')
  document.getElementById('content').appendChild(div)

  $('#navi li').attr('id', function(i){
    return 'id'+(i+1);
  })

  $('#navi li').addClass("clickable");

  $('.clickable').on('click', function(e){
    var target = $(e.target).text()
    var header = $("#header").html(target)

    return header;
  })

  $('#content').addClass('tab-content')




    // $('.clickable').on('click', function() {
    //   $(this).addClass('active')
    // })

}

document.getElementById('content').innerHTML = marked('# Marked in browser\n\nRendered by **marked**.');
