function toggleMode ()  {
   const html = document.documentElement
   html.classList.toggle("light")
    // pegar a tag img 
   const img = document.querySelector("#profile img")
    // subistituir a imagem 
    if(html.classList.contains("light")) {
        //se tiver ligth mode, adicionar a img lithg
        img.setAttribute("src", "./assets/neto-light.png")
        img.setAttribute("alt", "neto com oculos fundo branco e camisa branca do real madrid ");
       
        
    }
     else {
        //set tiver sem light mode manter a imagem normal 
        img.setAttribute("src", "./assets/neto-dark.png")
        img.setAttribute("alt", "neto sorrindo fundo laranja");
    }
    

    
    }







