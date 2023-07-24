const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>facelook</title>
      <link rel="stylesheet" href="facelook.css">
      <header>
          <nav class="navbar">
                  <ul>
                      <div>
                      <li><img src="f_logo_RGB-Blue_1024.png"></li>
                      </div>
                      <div class="search">
                      <li> <ion-icon name="search-outline"></ion-icon>
                          <input type="text" name="search" class="search" id="search" placeholder="search facebook "></li>
                      </div>
                      <div class="icons">   
                      <li><a href="#"><ion-icon name="home-outline"></ion-icon></a></li>
                      <li><a href="#"><ion-icon name="people-outline"></ion-icon></a></li>
                      <li><a href="#"><ion-icon name="game-controller-outline"></ion-icon></a></li>
                      <li><a href="#"><ion-icon name="play-outline"></ion-icon></a></li>
                      </div>
                  </ul>
          </nav>
      </header>
  </head>
  <body>
      <body>
          <div class="container">
              <div class="box" id="box1">
                  <ul>
                      <li class="profilepic"><a href="#"><img src="profilepic.png"></a></li>
                      <li><input type="text" name="email" class="email" id="email" placeholder="What's on your mind,Arnold?" ></li>
                    <div class="menu">
                      <li><a href="#"><ion-icon name="videocam-outline"></ion-icon>Live Video</a></li>
                      <li><a href="#"><ion-icon name="images-outline"></ion-icon>Photo/video</a></li>
                      <li><a href="#"><ion-icon name="happy-outline"></ion-icon>Feeling/activity</a></li>
                      </div>
                  </ul>
              </div>
                  <div class="btn" >
                      <button class="btn">Post</button>
                  </div>
          </div> 
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});