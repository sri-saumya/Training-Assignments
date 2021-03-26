function Product ( title , price ) {​​​​​ 

    if (! new . target ) {​​​​​ 
    
    throw "Product()' is a constructor, and must be called with new" 
    
    }​​​​​ 
    
    this . title = title ; 
    
    this . price = price ; 
    
    }​​​​​ 
     
    
    try {​​​​​ 
    
    let p1 = Product ( 'Pen' , 200 ); 
    
    console . log ( p1 ); 
    
    let p2 = Product ( 'Pencil' , 100 ); 
    
    console . log ( p2 ); 
    
    }​​​​​ 
    
    catch ( error ) {​​​​​ 
    
    console . log ( error ); 
    
    }​​​​​