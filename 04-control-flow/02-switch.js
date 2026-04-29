const month = 'april'

switch (month) {                        // this is key, we have to match key with look then code will run 
    case 'jan':
        console.log(`january`)          // this is look 
        break;
    case 'feb':
        console.log(`feb`)              // this is look 
        break;
    case 'march':
        console.log(`march`)             // this is look 
        break;
    case 'april':
        console.log(`april`)             // this is look 
        break;

    default:
        console.log(`none of them`)       // if the key not match any look then this code will run
        break;
}