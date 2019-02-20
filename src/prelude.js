if ( typeof global === 'undefined' ) {
    if ( typeof window === 'undefined' ) {
        throw new Error("Unknow Process Platform (Only Support browser and node platform)!");
    }

    window.global = window;
    window.process = {
        'env': 'production',
        'platform': 'browser',
    };
}

