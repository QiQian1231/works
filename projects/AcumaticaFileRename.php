<?php

$files = scandir('Acumatica');

foreach($files as $file){
    if(strpos($file, "Resultco-Watch")!== false){
        rename("Acumatica/".$file, "Test/Resultco-Watch.csv");
        
    }
}

?>