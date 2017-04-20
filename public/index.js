let currentFileName;
function addButton() {
  currentFileName = prompt('name your mark down file');
  let node = document.createElement('li');
  let textNode = document.createTextNode(currentFileName);
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
}

function saveButton() {
  let content = document.getElementById('content').innerHTML
  console.log('body::', content);


  let request = new Request('/save', {
  	method: 'POST',
    body: JSON.stringify({content: content, fileName: currentFileName}),
  	mode: 'cors',
  	redirect: 'follow',
  	headers: new Headers({
  		'Content-Type': 'application/json'
  	})
  });

  fetch(request).then( result => console.log('result::', result))

  fetch('/showfile', {
    method: 'GET',
  }).then(function(res) {
    console.log('response', res);
  })
}
