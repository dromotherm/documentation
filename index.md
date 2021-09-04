---
title: "Home"
sidebar: themis_sidebar
permalink: index.html
toc: false
---
<br>
<div class="row">
         <div class="col-lg-12">
         </div>
         <div class="col-md-3 col-sm-6">
             <div class="panel panel-default text-center">
                 <div class="panel-heading">
                     {% include image.html file="themis.svg" alt="themis" max-width="150" %}
                 </div>                 
                 <div class="panel-body">
                     <h4>Themis</h4>
                     <p>Themis is a BOS (building operating system) designed to operate with a number of heating controllers and PLCs</p>
                     <a href="Themis_overview.html" class="btn btn-primary">Learn More</a>
                 </div>
             </div>
         </div>
         
         <div class="col-md-9 col-sm-6">
             <div class="panel panel-default">
               <div class="panel-heading">THEMIS latest image</div>
               <div class="panel-body">
                   <ul>
                       This permits to test the Themis ecosystem without the Themis hardware. 
                       <br>Download, unzip and burn on a blank 16 Go SD card using <a href="https://www.balena.io/etcher">Balena Etcher</a>
                       <br>Insert in a raspberry PI3 (or 4), connect to your box and boot, that's all...
                       <br><b>Please note this is a big file (1.2 Go) so be patient :-)</b>
                       
                       Assuming the raspberry is attributed the address 192.168.1.37<br>
                       <li>to access to Themis, browse http://192.168.1.37</li>
                       <li>to access to NodeRED, browse https://192.168.1.37:1880</li>
                       <br>
                       Even if you don't have any sensor, you can start monitoring : check <a href="OWMwithThemis.html">this</a>!
                   </ul>
                   <a href="https://alexjunk.pagesperso-orange.fr/Themis/Themis1.0.img.zip" class="btn btn-primary">Download</a>
                   <a href="download" class="btn btn-primary">More images</a>
               </div>
             </div>
         </div>
</div>

BOS
: {{site.data.glossary.BOS}}

PLC
: {{site.data.glossary.PLC}}
