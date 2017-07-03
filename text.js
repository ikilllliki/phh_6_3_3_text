document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('result_text').textContent =
    '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
    document.getElementById('result_html').innerHTML =
    '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
},false);


document.addEventListener('DOMContentLoaded', function(){
    let list = document.getElementById('list');
    console.log(list.innerHTML);
    console.log(list.textContent);
},false);