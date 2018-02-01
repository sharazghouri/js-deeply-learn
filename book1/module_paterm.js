

/**
 * Created by welcom on 1/3/2018.
 */


function user() {

    var  name,password;
    //not exposing to world
    function doLogin( nm, pass) {

        name = nm;
        password = pass;
        console.log( name + password);
    }


    //public expose
    var  publicApi ={
        login : doLogin,
    };

    return publicApi;
    }


    var  sharaz =user();

sharaz.login( 'sharaz', 'password');