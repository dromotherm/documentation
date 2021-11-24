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
                 <div class="panel-body">
                     <a href=https://twitter.com/CarnotClimAdapt/status/1463420286506786819>THEMIS aux rendez-vous Carnot 2021 - cité des congrès de Lyon</a>
                 </div>
                 <div class="panel-heading">THEMIS latest image</div>
                 <div class="panel-body">
                     <ul>
                     If you want to update your THEMIS machine or to test the Themis ecosystem without the Themis hardware, you can download a ready-to-use image.
                     <br><br>
                     <a href="download" class="btn btn-primary">Browse images</a>
                     <br><br>
                     If you don't have any sensor, you can configure Themis to collect datas from an opensource network.
                     <br><br>
                     <a href="OWMwithThemis.html" class="btn btn-primary">Monitor meteo with openweathermap</a>
                     </ul>
                 </div>
             </div>
         </div>
</div>

BOS
: {{site.data.glossary.BOS}}

PLC
: {{site.data.glossary.PLC}}
