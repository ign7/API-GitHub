function infoPerfil() {
    let xhr = new XMLHttpRequest();
    ////////////////////////////////
    let xrp = new XMLHttpRequest();
  
    xhr.onload = function () {
      //alert('retorno da requisição '+this.responseText)
  
      let data = JSON.parse(this.responseText);
      ////////////////////////////////////////
      
  
      let perfilStr =
        `<div>
        <img src="${data.avatar_url}" onclick=perfilGit() target="blank" >
      </div>
      <div class="desc">
         <div>
          <h3 class="tituloperfil"  onclick=perfilGit()>${data.name} <br> (@${data.login})</h3>
          <p class="obj"> <strong> Descrição :</strong> ${data.bio}</p>        
          <p><strong>Localização : </strong> ${data.location}</p>
        </div>
        <div class="redesociais">
            <p class="redes">Rede Sociais</p>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-instagram"></i>
          </div> `;
  
      document.getElementById('tela').innerHTML = perfilStr;
      ///////////////////////////////////////////////////////////////////
      
    }
  
    xrp.onload = function () {
     //alert('retorno da requisição '+this.responseText)
  
      let repoData = JSON.parse(this.responseText);
      console.log(repoData[0].name);
      let repoStr = `<div class="container px-4 py-5" id="hanging-icons">
          <h2 class="pb-2 border-bottom">repositório GitHub</h2>
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="col d-flex align-items-start">
  
              <i class="bi bi-folder-fill iconFolder"  onclick=repoPag() ></i>
              <div>
                <h2>${repoData[4].name}</h2>              
                <p><Strong>Description : </Strong> ${repoData[4].description}</p>
                <p><Strong>visibility : </Strong> ${repoData[4].visibility}</p>                          
               <p><Strong>Created Date : </Strong>${repoData[4].created_at}</p>
                <p><Strong>Type : </Strong> ${repoData[4].owner.type}</p> 
              </div>
            </div>
            <div class="col d-flex align-items-start">
  
              <i class="bi bi-folder-fill iconFolder" onclick=repoPag() ></i>
  
              <div>
                <h2>${repoData[2].name}</h2>              
                <p><Strong>Description : </Strong> ${repoData[2].description}</p>
                <p><Strong>visibility : </Strong> ${repoData[2].visibility}</p>                          
               <p><Strong>Created Date : </Strong>${repoData[2].created_at}</p>
                <p><Strong>Type : </Strong> ${repoData[2].owner.type}</p> 
              </div>
            </div>
            <div class="col d-flex align-items-start">
  
              <i class="bi bi-folder-fill iconFolder"  onclick=repoPag() ></i>
  
              <div>
                <h2>${repoData[3].name}</h2>              
                <p><Strong>Description : </Strong> ${repoData[3].description}</p>
                <p><Strong>visibility : </Strong> ${repoData[3].visibility}</p>                          
               <p><Strong>Created Date : </Strong>${repoData[3].created_at}</p>
                <p><Strong>Type : </Strong> ${repoData[3].owner.type}</p> 
              </div>
            </div>
          </div>
        </div> `;
  
      document.getElementById('telaRepo').innerHTML = repoStr;
  
    }
  
  
    
  ///////////////////////////////////////////////////////////////////////////
  xhr.onerror = function () {
    alert(`Eroo na requisição /nCodigo ${this.status} - ${this.statusText} `);
  }
  
  xhr.open('GET', 'https://api.github.com/users/ign7');
  
  xhr.send();
  
  ///////////////////////////////////////////////////////////////
    xrp.onerror = function () {
      alert(`Eroo na requisição /nCodigo ${this.status} - ${this.statusText} `);
    }
  
    xrp.open('GET', 'https://api.github.com/users/ign7/repos');
  
    xrp.send();
  }
   
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  function perfilGit() {
    window.location.href = "https://github.com/ign7";
  }
  
  function repoPag(){
    window.location.href = "https://github.com/ign7?tab=repositories";
  }