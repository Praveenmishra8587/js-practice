let browser='CHROME';

switch(browser.trim().toLowerCase()){
    case 'chrome':
        console.log('launch the chrome browser');
        break;
    case 'firefox':
        console.log('launch the firefox browser');
        break;
    case 'safari':
        console.log('launch the safari browser');
        break;
    default:
        console.log('Unknown browser');
        break;
}

console.log("bye");
//nasted switch case

let env = 'qa';
let username='admin';

switch(env.trim().toLowerCase()){
    case 'qa':
        console.log('launch the qa env');
        break;
        switch(username.trim().toLowerCase()){
            case 'admin':
                console.log('launch the admin user');
                break;


  
}}