// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import './css/bootstrap.css';
import './css/theme.css';
import './css/inside.css';
import './css/blocs.css';
// import ContentHead from './assets/ContentTeam/Sarvani Addanki.png';
// import WebDevLead from './assets/Leader/Jayesh J.png';
import SocialLead from './assets/Leader/Yuvan Raja.png';
import ProofreadingLead from './assets/Leader/Anuradha Singha.png';
import DigitalLead from './assets/Leader/Harshini Vhalli S.png';
import CreativeLead from './assets/Leader/Shwetha Lakhwani.png';
import GraphicLead from './assets/Leader/Abhishek Patil.png';
// import Image from './img/caricature-joey.svg';

function importAll(r){
    return r.keys().map(r);
}

const Founder=importAll(require.context('./assets/Founder/',false,/\.(svg|png|jpe?g|svg|jpg)$/));

const HRTeam=importAll(require.context('./assets/HRTeam/',false,/\.(svg|png|jpe?g|svg|jpg)$/));

const CreativeTeam=importAll(require.context('./assets/ContentTeam/CreativeTeam/',false,/\.(svg|png|jpe?g|svg|jpg)$/));

const DigitalTeam=importAll(require.context('./assets/ContentTeam/DigitalTeam/',false,/\.(svg|png|jpe?g|svg|jpg)$/));

const ProofreadingTeam=importAll(require.context('./assets/ContentTeam/ProofreadingTeam/',false,/\.(svg|png|jpe?g|svg|jpg)$/));

const SocialMediaTeam=importAll(require.context('./assets/ContentTeam/SocialMediaTeam/',false,/\.(svg|png|jpe?g|svg|jpg)$/));


const WebDevTeam=importAll(require.context('./assets/WebDevTeam/',false,/\.(svg|png|jpe?g|svg|jpg)$/));

const GraphicTeam=importAll(require.context('./assets/GraphicTeam/',false,/\.(svg|png|jpe?g|svg|jpg)$/));

function Team() {
  return (
    <div style={{backgroundColor:"black",paddingTop:"25px"}}>
      <section class="insideTeam contenuPage-section section-centree">
    <div class="container" style={{height:"auto",justifyContent:"center"}}>
            <div class="row no-gutters">
                <div class="col-lg-11">
                    <div class="titreCarre" data-mini1="B" data-mini2="D" data-mini3="C">
                        <h2 class="titreCarre-interne" style={{color:"white"}}>
                          <small class="titreCarre-preTitre">The </small>
                          <span class="titreCarre-titre">CREAMZO TEAM</span>
                        </h2>
                    </div>
                </div>
            </div> 

<div class="insideTeam-liste" data-checkview> 

    <div class="row gutters-right" style={{marginLeft:"1%",justifyContent:"center"}}>
    {
      Founder.map(image=>(
        <div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={image.default} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">{(image.default).substring(14,(image.default).indexOf("."))}</strong>
            <small class="tip">Founder & CEO</small>
          </div>
        
        </div>
        </div>
      ))
    }
    </div>


    <div class="row no-gutters"  style={{justifyContent:"center"}}>
                <div class="col-lg-11"  style={{justifyContent:"center"}}>
                    <div class="titreCarre" data-mini1="B" data-mini2="D" data-mini3="C">
                        <h2 class="titreCarre-interne" style={{color:"white"}}>
                          <small class="titreCarre-preTitre">The </small>
                          <span class="titreCarre-titre">HR Team</span>
                        </h2>
                    </div>
                </div>
    </div>
    <div class="row gutters-right" style={{marginLeft:"1%",justifyContent:"center"}}>
    {
      HRTeam.map(image=>(
        <div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={image.default} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">{(image.default).substring(14,(image.default).indexOf("."))}</strong>
            <small class="tip">HR</small>
          </div>
        
        </div>
        </div>
      ))
    }
    </div>

    
    
    <div class="row no-gutters" style={{justifyContent:"center"}}>
                <div class="col-lg-11" style={{justifyContent:"center"}}>
                    <div class="titreCarre" data-mini1="B" data-mini2="D" data-mini3="C">
                        <h2 class="titreCarre-interne" style={{color:"white"}}>
                          <small class="titreCarre-preTitre">The </small>
                          <span class="titreCarre-titre">Web Development Team</span>
                        </h2>
                    </div>
                </div>
    </div>

    <div class="row gutters-right" style={{marginLeft:"1%",justifyContent:"center"}}>
      {/*<div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={WebDevLead} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">Jayesh J</strong>
            <small class="tip">Lead Web Developer</small>
          </div>
        
        </div>
      </div>*/}
    {
      WebDevTeam.map(image=>(
        <div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={image.default} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">{(image.default).substring(14,(image.default).indexOf("."))}</strong>
            <small class="tip">Web Developer</small>
          </div>
        
        </div>
        </div>
      ))
    }
    </div>

    <div class="row no-gutters" style={{justifyContent:"center"}}>
                <div class="col-lg-11" style={{justifyContent:"center"}}>
                    <div class="titreCarre" data-mini1="B" data-mini2="D" data-mini3="C">
                        <h2 class="titreCarre-interne" style={{color:"white"}}>
                          <small class="titreCarre-preTitre">The </small>
                          <span class="titreCarre-titre">Graphic Design Team</span>
                        </h2>
                    </div>
                </div>
    </div>
    
      
    <div class="row gutters-right" style={{marginLeft:"1%",justifyContent:"center"}}>
    
      <div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={GraphicLead} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">Abhishek Patil</strong>
            <small class="tip">Graphic Team Lead</small>
          </div>
        
        </div>
      </div>
    {
      GraphicTeam.map(image=>(
        <div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={image.default} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">{(image.default).substring(14,(image.default).indexOf("."))}</strong>
            <small class="tip">Graphic Designer</small>
          </div>
        
        </div>
        </div>
      ))
    }
    </div>

    <div class="row no-gutters" style={{justifyContent:"center"}}>
                <div class="col-lg-11" style={{justifyContent:"center"}}>
                    <div class="titreCarre" data-mini1="B" data-mini2="D" data-mini3="C">
                        <h2 class="titreCarre-interne" style={{color:"white"}}>
                          <small class="titreCarre-preTitre">The </small>
                          <span class="titreCarre-titre">Content Team</span>
                        </h2>
                    </div>
                </div>
    </div>

    {/*<div class="row gutters-right" style={{marginLeft:"1%",justifyContent:"center"}}>
        <div class="col-lg-3">

          <div class="tematik_trombinoscope">
        
            <div class="tematik_trombinoscope-image">
              <img src={ContentHead} alt="Caroline "/>
            </div>
        
            <div class="info">
              <strong class="titre4">Sarvani Addanki</strong>
              <small class="tip">Head of Content</small>
            </div>
          
          </div>
        </div>
    </div>*/}
    <div class="row gutters-right" style={{marginLeft:"1%",justifyContent:"center"}}>
      <div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={CreativeLead} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">Shewtha Lakhwani</strong>
            <small class="tip">Creative Team Lead</small>
          </div>
        
        </div>
      </div>
    {
      CreativeTeam.map(image=>(
        <div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={image.default} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">{(image.default).substring(14,(image.default).indexOf("."))}</strong>
            <small class="tip">Creative Team</small>
          </div>
        
        </div>
        </div>
      ))
    }
    </div>

    <div class="row gutters-right" style={{marginLeft:"1%",justifyContent:"center"}}>
      <div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={DigitalLead} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">Harshini Vhalli S</strong>
            <small class="tip">Digital Team Lead</small>
          </div>
        
        </div>
      </div>
    {
      DigitalTeam.map(image=>(
        <div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={image.default} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">{(image.default).substring(14,(image.default).indexOf("."))}</strong>
            <small class="tip">Digital Team</small>
          </div>
        
        </div>
        </div>
      ))
    }
    </div>

    <div class="row gutters-right" style={{marginLeft:"1%",justifyContent:"center"}}>
    <div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={ProofreadingLead} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">Anuradha Singha</strong>
            <small class="tip">Proofreading Team Lead</small>
          </div>
        
        </div>
      </div>
    {
      ProofreadingTeam.map(image=>(
        <div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={image.default} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">{(image.default).substring(14,(image.default).indexOf("."))}</strong>
            <small class="tip">Proofreading Team</small>
          </div>
        
        </div>
        </div>
      ))
    }
    </div>

    <div class="row gutters-right" style={{marginLeft:"1%",justifyContent:"center"}}>
      <div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={SocialLead} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">Yuvan Shanker Raja P</strong>
            <small class="tip">Social Media Team Lead</small>
          </div>
        
        </div>
      </div>
    {
      SocialMediaTeam.map(image=>(
        <div class="col-lg-3">

        <div class="tematik_trombinoscope">
      
          <div class="tematik_trombinoscope-image">
            <img src={image.default} alt="Caroline "/>
          </div>
      
          <div class="info">
            <strong class="titre4">{(image.default).substring(14,(image.default).indexOf("."))}</strong>
            <small class="tip">Social Media Team</small>
          </div>
        
        </div>
        </div>
      ))
    }
    </div>
    

                                   
                                </div>

                            </div> 
                        </section> 
                      



<script type="text/javascript" src="./js/bootstrap.min.js"></script>
<script type="text/javascript" src="./js/fitty.min.js"></script>
<script type="text/javascript" src="./js/effets.min.js"></script>
    </div>
  );
}

export default Team;
