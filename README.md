# Review-Net-Final-Project
<!DOCTYPE html>
<html>
<head>

<link rel="stylesheet" type="text/css" href="main.css">

<title>My website</title>
</head>
<body>

<h1> Review Net </h1>\
<br>
<br>
<br>
<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#latest">Latest</a></li>
  <li><a href="#reports">Reports</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

<p>This is a paragraph.</p>

</body>
</html>

<!--This is where the CSS starts-->
body {
    background: url(wood.jpg) no-repeat fixed center;
	background-size: cover;
	margin:0;
}

h1 { 
    color: white;
    text-align: center;
	 box-shadow: 0px 8px 16px 0px rgba(0,10,0,50);
	 background-color: #00ffcc;
}

p {
    font-family: verdana;
    font-size: 20px;
	color: white;
}

ul {
    list-style-type: none;
    margin:0;
    padding: 0;
    overflow: hidden;
    background-color: #666;
    position: fixed;
    top: 0;
    width: 100%;
}                  

li {
    float: left;
}
li a {
    display: block;
    color: white;
    text-align: center;
    padding: 15px 17px;
    text-decoration: none;
}
li a:hover:not(.active) {
    background-color: #456;
}
.active {
    background-color: #00ffcc;
}
