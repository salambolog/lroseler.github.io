<!doctype html>
<html lang="en">
  <head>
  
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script>
  function changeBlack(){
  document.body.style.background = "black";
  }
  function changeWhite(){
    document.body.style.background = "white";
  }
  function changeBlue(){
    document.body.style.background = "#4CC7FF";
  }
</script>
<title>My Resume</title>
<style>
   body{
        background: #E7F7FF;
        font-family: sans-serif;
        text-align: center;
      }
      h1{
        margin-top: 1em;
        padding: .5em;
      }
      span{
        border-bottom: 1px solid black;
        margin-top: 1em;
      }
      img{
        width: 60%;
        height: 70%;
        margin-left: 5%;
        float: left;
      }
      .dropdown{
        float:left;
        background-color: rgba(151, 203, 231, 0.3); 
            text-align: center;
            border: 1px solid rgb(175, 209, 226);
            border-radius: 20%;
            padding: .5em;
      }
  ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;   
        }
        li {
        float: left; 
        margin-left: 15%;
       
    }

        li a {
        display: block;
        color: #E7F7FF;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        }

        li a:hover {
        background-color: #111;
        }
        li a.active{
            background-color: dimgray;
        }
</style>
    </head>

    <body>
        <div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a class="active" href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
      </div>
      <h1><span>My Resume</span></h1>
      <div class="dropdown">
        <p>Change the Background Color!</p>
        <select>Change the Background Color!
          <option onclick="changeWhite" value="white">White</option>
          <option onclick="changeBlack" value="black">Black</option>
          <option onclick="changeBlue" value="lightBlue">Light Blue</option>
        </select>
      </div>
      <img src="resumeSnip.png" alt="resume snapshot">
    
    </body>

    </html>