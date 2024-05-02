if (app.documents.length > 0) {
    var originalDoc = app.activeDocument;

    //   new doc
    var newDoc = app.documents.add(8, 10, 300, "New Image", NewDocumentMode.RGB, DocumentFill.WHITE );

    app.activeDocument = originalDoc;
    
  
    if (originalDoc.artLayers.length > 0) {  // check if i can dupe layers
        for (var i = 0; i < 4; i++) {
            app.activeDocument = originalDoc;            // check if og doc is the [[active]]]] one

            
            var duplicatedLayer = originalDoc.artLayers[0].duplicate(newDoc, ElementPlacement.PLACEATEND);             // dupe the old one into the new doc

            
            app.activeDocument = newDoc;            // set new doc as [active ]

            
            app.activeDocument.activeLayer = duplicatedLayer;            //   duped layer [active] check

            
            // make the duped layer 4inches 
            var targetWidth = 4; // 4 inches
            
            var bounds = duplicatedLayer.bounds; // bounds: [0left  , 0top, right0,  bottom0]
            var width = bounds[2] - bounds[0]; //  width right(bond) - left(bond) is width
            
            var scale = targetWidth / width * 100;
            
            duplicatedLayer.resize(scale, scale, AnchorPosition.TOPLEFT); // top left is iportnat other wise missplace


            // yea just moving some image , one unit is 1 inch
            if (i === 1|| i === 3) { 
                duplicatedLayer.translate(4, 0);
            }

            if (i === 2 || i === 3) { 
                duplicatedLayer.translate(0, 5.5);
            }

            if (i === 0 || i === 1) { 
                duplicatedLayer.translate(0, 0.5);
            }

       
            newDoc.flatten();

            
        }
    } else {
        alert("no layer bro");
    }
} else {
    alert("dude onpen the image u wannan dupe please owowowowowowo");
}
