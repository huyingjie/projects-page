// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(document).ready(function(){
  $.getJSON("../data/projects.json", function(projects){
    var html = "";
    for(var i = 0; i < projects.length; i++){
      if ((i+1)%3 == 1) {
        html += '<div class="row row-deck">';
        html += '<div class="card-deck">';
      }

      html += '<div class="card border-primary">';
      html += '  <div class="card-header text-center">' + projects[i].status;
      if (projects[i].isNew){
        html += '<span class="fa-layers fa-fw" sytle = "display: flex;justify-content: space-between;">';
        html += '			<div class="fa-3x">';
        html += '				<i class="fas fa-certificate text-danger"></i>';
        html += '				<span class="fa-layers-text fa-inverse text-warning" data-fa-transform="shrink-11.5 rotate--30 right-5" style="font-weight:1200">NEW</span>';
        html += '			</div>';
        html += '		</span>';
      }
      html += '</div>';
      html += '  <img class="card-img-top" src="' + projects[i].url_img + '" alt="zhuge liang">';
      html += '  <div class="card-body">';
      html += '    <h4 class="card-title text-center">' + projects[i].project_name + '</h4>';
      html += '    <p class="card-text text-center">' + projects[i].sub_title+ '</p>';
      html += '    <div class="text-center">';
      html += '      <a class="btn btn-primary project-info-icon" href="' + projects[i].url_website + '" target="_blank"><i class="fas fa-globe icon-style"></i>Website</a>';
      html += '      <a class="btn btn-primary project-info-icon" href="' + projects[i].url_github + '" target="_blank"><i class="fab fa-github icon-style"></i>Code</a>';
      if (projects[i].url_log) html += '      <a class="btn btn-primary project-info-icon" href="' + projects[i].url_log + '" target="_blank"><i class="fas fa-pencil-alt icon-style"></i>Log</a>';
      html += '    </div>';
      html += '  </div>';
      html += '  <div class="card-footer">';
      html += '    <div>' + projects[i].area + '</div>';
      html += '    <small class="text-muted">' + projects[i].sub_area + '</small>';
      html += '  </div>';
      html += '</div>';

      if ((i+1)%3 == 0) {
        html += '</div></div>';
      }
    }

    if (projects.length%3!=0){
      for (var i = projects.length%3; i <3; i++){
        html += '<div class="card border-primary">';
        html += '  <div class="card-header text-center">Soon</div>';
        html += '  <img class="card-img-top" src="http://spinolasbakeshop.com/wp-content/uploads/2015/04/22520129_l.jpg" alt="soon">';
        html += '  <div class="card-body">';
        html += '    <h4 class="card-title text-center"></h4>';
        html += '    <p class="card-text text-center"></p>';
        html += '  </div>';
        html += '  <div class="card-footer">';
        html += '    <div>Soon</div>';
        html += '    <small class="text-muted">Soon</small>';
        html += '  </div>';
        html += '</div>';
      }
      html += '</div></div>'
    }

    $("#project_list").html(html);
  });

  // Challenges
  $.getJSON("../data/challenges.json", function(challenge){
    //console.log(challenge);
    var html = "";

    for(var i = 0; i < challenge.length; i++){
      if ((i+1)%4 == 1) {
        html += '<div class="row row-deck">';
        html += '<div class="card-deck">';
      }

      html += '<div class="card border-primary">';
      html +=	'  <div class="card-header text-center">' + challenge[i].status;
      if (challenge[i].isNew){
        html += '<span class="fa-layers fa-fw" sytle = "display: flex;justify-content: space-between;">';
        html += '			<div class="fa-3x">';
        html += '				<i class="fas fa-certificate text-danger"></i>';
        html += '				<span class="fa-layers-text fa-inverse text-warning" data-fa-transform="shrink-11.5 rotate--30 right-5" style="font-weight:1200">NEW</span>';
        html += '			</div>';
        html += '	</span>';
      }
      html += '</div>';
      html +=	'			<div class="card-body">';
      html +=	'			<h4 class="card-title text-center">' + challenge[i].project_name + '</h4>';
      html +=	'			<p class="card-text text-center">' + challenge[i].sub_title + '</p>';
      html +=	'			<div class="text-center"><a class="btn btn-primary" href="' + challenge[i].url + '" target="_blank"><i class="fas fa-info-circle icon-style"></i>Details</a></div>';
      html +=	'	 </div>';
      html +=	'	 <div class="card-footer">';
      html +=	'		<div>' + challenge[i].area+ '</div>';
      html +=	'		<small class="text-muted">' + challenge[i].sub_area + '</small>';
      html +=	'	 </div>'
      html +=	'</div>';


      if ((i+1)%4 == 0) {
        html += '</div></div>';
      }
    }
    if (challenge.length%4!=0){
      html += '</div></div>'
    }
    $("#challenge_project_list").html(html);
  });
});
