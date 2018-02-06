window.onload = run();

$('#btn').on('click', function (event) {
event.preventDefault();
$.ajax({
  url:'save.php',
  method:'post',
  data: $('form').serialize()
}).done(function (res) {
  run()
})
.fail(function () {
  console.log('Error');
})
});


function run() {

  $('tbody').html('');

  $.ajax({
    url:'readAll.php',
    method:'get',
    dataType:'json'
  })
  .done(function (res) {
    let text = '';
  $(res).each(function (index,e) {
    text +=
    `<tr>
      <td>${e.id}</td>
      <td>${e.name}</td>
      <td>${e.deposit}</td>
      <td>${e.cCard}</td>
    </tr>`
  });
  $('tbody').html(text);
  })
  .fail(function () {
    console.log('Error');
  })
}
