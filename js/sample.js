var select = document.getElementById('select');
select.addEventListener('change', function(e) {
  var selected = e.target.value;
  document.getElementById('draw-change').innerText = selected;
});

var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  var selected = document.querySelector('option:checked').value;
  document.getElementById('draw-click').innerText = selected;
});
