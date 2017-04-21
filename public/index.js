let currentFileName;

function addButton() {
  currentFileName = prompt('name your mark down file');
  let node = document.createElement('li');
  let textNode = document.createTextNode(currentFileName);
  node.appendChild(textNode);
  document.getElementById('listItems').appendChild(node);

  $('#listItems li').attr('id', function(i) {
    return 'id'+(i+1);
  })

  $('#listItems li').addClass("clickable")

  $('.clickable').on('click', function(e) {
    let target = $(e.target).text()
    let header = $("#header").html(target)

    return header;
  })

  $('#content').on('input', function(e) {
    let contentValue = $(e.target).text()
    $('#previewContent').html(marked(contentValue))
  })
}


function tabs() {
  $('a #fileTags').on('click', function(e) {
    e.preventDefault()
    let target = $(e.target).text()
    let header = $("#header").html(target)
    return header;
  })

}

function wordCount() {
  let value = document.getElementById('content').innerHTML
  let regex = (/(^\s*)|(\s*$)/gi,"");
  let wordCount = value.trim().replace(regex, ' ').split(' ').length;
  let charCount = value.replace(regex, '').length;

  if(value.length === 0) {
    $('#numCount').html(0)
    return;
  }

  $('#numCount').html(charCount-1)
}

$(document).ready(function() {
  $('#content').change(wordCount);
  $('#content').keydown(wordCount);
  $('#content').keypress(wordCount);
  $('#content').keyup(wordCount);
  $('#content').blur(wordCount);
  $('#content').focus(wordCount);
  $('#content').on('input', function(e) {
    let contentValue = $(e.target).text()
    $('#previewContent').html(marked(contentValue))
  })
})


function saveButton() {
  let content = document.getElementById('content').innerHTML
  const saveingFile = currentFileName || document.getElementById('header').innerText.trim()
  let request = new Request('/save', {
  	method: 'POST',
    body: JSON.stringify({content: content, fileName: saveingFile}),
  	mode: 'cors',
  	redirect: 'follow',
  	headers: new Headers({
  		'Content-Type': 'application/json'
  	})
  });

  fetch(request).then( function(result) {
    return result
  })
}
