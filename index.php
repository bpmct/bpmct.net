<?php
if ($_GET['page'] == null) {
  header("LOCATION: welcome");
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>bpmct</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Blur Menu with CSS3 Transitions" />
        <meta name="keywords" content="css3, transitions, menu, blur, navigation, typography, font, letters, text-shadow" />
        <meta name="author" content="Codrops" />
        <link rel="shortcut icon" href="../favicon.ico">
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="css/demo.css" />
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script src="js/svg.min.js"></script>
        	<!--[if IE]>
        		<link rel="stylesheet" type="text/css" href="css/styleIE.css" />
        	<![endif]-->
        <link href='http://fonts.googleapis.com/css?family=Josefin+Slab' rel='stylesheet' type='text/css' />
    </head>
    <body style="background-image: url(images/pattern.png), url(images/8.jpg);">
      <div id="pagewrap" class="pagewrap">
        <div class="container show" id="home">
          <div class="child">
            <h1 class="header">Ben Potter</h1>
            <div class="content">
              <ul class="bmenu">
                      <li><a href="javaScript:void(0);" onclick="about();">About</a></li>
                      <li><a href="javaScript:void(0);" class="pageload-link" onclick="codingpics();">@codingpics</a></li>
                      <li><a href="javaScript:void(0);" onclick="portfolio();">Portfolio</a></li>
                      <li><a href="http://labs.bpmct.net/">Personal Projects</a></li>
                      <li><a href="javaScript:void(0);">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="container" id="about">
            <div class="back-button">
              <a class="btn btn-default pageload-link" href="javaScript:void(0);" onclick="home();"><i class="fa fa-home fa-5x"></i> </a>
            </div>
            <div class="child">
              <center>
                <img src="https://i.gyazo.com/fbf343e3bfb276cddf93264c7747188e.png" class="img-responsive img-rounded codingpics-logo"/>
              </center>
              <h1 id="abtitle">about me.</h1>
              <h2>A programming-based Instagram account with over...</h2>
              <hr />

              <hr />
              <p class="foot">I am interested in working with companies to make sponsored posts that appeal to my followers. <a class="pageload-link" href="#contact">Contact me!</p>
            </div>
          </div>
          <div class="container" id="codingpics">
            <div class="back-button">
              <a class="btn btn-default pageload-link" href="javaScript:void(0);"- onclick="home();"><i class="fa fa-home fa-5x"></i> </a>
            </div>
            <div class="child">
              <center>
                <img src="https://i.gyazo.com/fbf343e3bfb276cddf93264c7747188e.png" class="img-responsive img-rounded codingpics-logo"/>
              </center>
              <h1 id="cptitle">@codingpics</h1>
              <h2>A programming-based Instagram account with over...</h2>
              <hr />
              <div class="row stats">
                <div class="col-md-3">
                  <center>
                    <h2 id="followers">37K</h2>
                    <p>Total Followers</p>
                  </center>
                </div>
                <div class="col-md-3">
                  <center>
                    <h2 id="impressions">100K</h2>
                    <p>Weekly impressions</p>
                  </center>
                </div>
                <div class="col-md-3">
                  <center>
                    <h2 id="likes">700</h2>
                    <p>Average<br />likes</p>
                  </center>
                </div>
                <div class="col-md-3">
                  <center>
                    <h2 id="posts">250</h2>
                    <p>Total<br />posts</p>
                  </center>
                </div>
              </div>
              <hr />
              <p class="foot">I am interested in working with companies to make sponsored posts that appeal to my followers. <a class="pageload-link" href="#contact">Contact me!</p>
            </div>
          </div>
          <div id="loader" class="pageload-overlay" data-opening="M 0,0 80,-10 80,60 0,70 0,0" data-closing="M 0,-10 80,-20 80,-10 0,0 0,-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none">
              <path d="M 0,70 80,60 80,80 0,80 0,70"/>
            </svg>
          </div><!-- /pageload-overlay -->
        </div>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
        <script src="js/classie.js"></script>
    		<script src="js/svgLoader.js"></script>
        <script src="js/countup.js"></script>
        <script>
          var foptions = {
            useEasing : true,
            useGrouping : true,
            separator : ',',
            decimal : '.',
            prefix : '',
            suffix : 'K'
          };
          var options = {
            useEasing : true,
            useGrouping : true,
            separator : ',',
            decimal : '.',
            prefix : '',
            suffix : ''
          };
          var followers = new CountUp("followers", 0, 37, 0, 2.5, foptions);
          var impressions = new CountUp("impressions", 0, 100, 0, 2.5, foptions);
          var likes = new CountUp("likes", 0, 700, 0, 2.5, options);
          var posts = new CountUp("posts", 0, 250, 0, 2.5, options);

          function codingpics() {
            loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 400, easingIn : mina.easeinout } );
            loader.show();
            history.pushState('data', '', 'codingpics');
            setTimeout( function() {
              loader.hide();
              classie.removeClass(document.getElementById("home"), 'show' );
              classie.addClass(document.getElementById("codingpics"), 'show' );
              followers.start();
              impressions.start();
              likes.start();
              posts.start();
              $("#cptitle").fadeIn(3000);
            }, 2000 );
          }
          function home() {
            history.pushState('data', '', 'welcome');
            loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 400, easingIn : mina.easeinout } );
            loader.show();
            setTimeout( function() {
              loader.hide();
              classie.removeClass(document.getElementById("codingpics"), 'show' );
              classie.removeClass(document.getElementById("about"), 'show' );
              classie.addClass(document.getElementById("home"), 'show' );
            }, 2000 );
          }
          function about() {
            history.pushState('data', '', 'about');
            loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 400, easingIn : mina.easeinout } );
            loader.show();
            setTimeout( function() {
              loader.hide();
              classie.removeClass(document.getElementById("home"), 'show' );
              classie.addClass(document.getElementById("about"), 'show' );
            }, 2000 );
          }
    		</script>
    </body>
</html>
