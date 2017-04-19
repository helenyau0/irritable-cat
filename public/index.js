function addButton() {
  let nameFile = prompt('name your mark down file');
  let node = document.createElement('li');
  let textNode = document.createTextNode(nameFile);
  node.appendChild(textNode);
  document.getElementById('navi').appendChild(node);

  let div = document.createElement('div')
  document.getElementById('content').appendChild(div)

  $('#navi li').attr('id', function(i) {
    return 'id'+(i+1);
  })

  $('#navi li').addClass("clickable");

  $('.clickable').on('click', function(e) {
    let target = $(e.target).text()
    let header = $("#header").html(target)

    return header;
  })

  $('div').addClass('tab-content')

  $('#content').on('input', function(e) {
    let contentValue = $(e.target).text()
    $('#previewContent').html(marked(contentValue))
    console.log('marked', marked(contentValue));
  })




    // $('.clickable').on('click', function() {
    //   $(this).addClass('active')
    // })

}
// let content = document.getElementById('content').getAttribute('value')

// document.getElementById('previewContent').innerHTML = marked(content);
