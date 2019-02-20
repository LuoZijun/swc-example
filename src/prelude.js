if ( typeof global === 'undefined' ) {
    if ( typeof window === 'undefined' ) {
        throw new Error("Only Support browser and node platform!");
    }
    
    if ( !window.process ) {
        if ( !window.process.env ) {
            window.process.env = { "NODE_ENV": "development" };
        }

        if ( !window.process.platform ) {
            window.process.platform = "browser";
        }
    }
}
