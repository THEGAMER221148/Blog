---
layout: base
title: Student Home 
description: Home Page
hide: true
---

<html lang="en">
    <head>
        <style>
            #terrariaboss {
                visibility: hidden;
                position: fixed;
                left: 25%;
                top: -1500px;
                width: 50%;
                image-rendering: pixelated;
            }
            img{
                border-width: 10px;
                border-color: grey;
                border-style: groove;
            }
        </style>
        <script>
        </script>
    </head>
    <body>
        <img id="terrariaboss" src="images/Eye_of_Cthulhu_(Phase_1).gif">
        <h1>Hello guys</h1>
        <a href="https://thegamer221148.github.io/clickit/">click me for free ice cream</a>
        <h2>GAMES I MADE IN JAVACRIPT</h2>
        <a href="https://thegamer221148.github.io/backrooms">Get Chased by your Downloads Folder (unfinished)<br><img src="assets/DownloadsFolderPOV.png"></a>
        <a href="https://thegamer221148.github.io/luckyarcade/">LUCKY ARCADE OF LUCKY WINNERS (basically gambling simulator)<br><img src="assets/luck.png"></a>
        <h2>THINGS I LIKE</h2>
        <img src="https://upload.wikimedia.org/wikipedia/en/1/1a/Terraria_Steam_artwork.jpg">
        <br>
        <button onclick="
            const EOC = document.getElementById('terrariaboss');
            let pos = -200;
            function move(){
                pos += 5;
                EOC.style.top = pos + '%';
                if(pos < 100){
                    requestAnimationFrame(move);
                }else{
                    EOC.style.top = '-200%';
                    EOC.style.visibility = 'hidden';
                    console.log('done!');
                }
            }
            new Audio('assets/terraria-boss-spawn-sound-effect-made-with-Voicemod.mp3').play();
            EOC.style.visibility = 'visible';
            move();
        ">Secret?</button>
        <h3>Terraria</h3>
        <p>Terraria is a 2D rpg game with sandbox and survival elements. It is one of my favorite games and </p>
    </body>
</html>