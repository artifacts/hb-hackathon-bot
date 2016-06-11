


var $container = $('#chatcontainer');

var $tmpl = {};


$('.tmpl').each(function(){
    $tmpl[$(this).attr('id')] = $(this).html();
});

console.log($tmpl);

var ui = {};

ui.add = function(tmpl, data){
  var html = $tmpl[tmpl] || 'Template not found';
  for (var x in data){
      html = html.replace('***'+x+'***', data[x]);
  }
  //$container.append($(html));
  $(html).insertBefore($container).hide().slideDown("slow");
}

ui.addAI = function(data){
    if (data.speech){
        ui.add('answer', {text: data.speech});
    }

    switch (data.action){
        case 'showVideo':
            ui.add('youtube', {url: data.parameters.URL});
            break;
        case 'openArticle':
            ui.add('article', {title: data.resolvedQuery, url: data.parameters.URL});
            break;
        case 'showTopic':
            ui.add('topic__bitcoin', {});
            break;
            showTopic
        default:
            undefined;
    }
}



//ui.add('question',{text: 'Hi'});