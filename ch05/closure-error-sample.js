function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function setupHelp() {
    var helpText = [
        { 'id': 'email', 'help': 'Your e-mail address' },
        { 'id': 'name', 'help': 'Your full name' },
        { 'id': 'age', 'help': 'Your age (you must be over 16)' }
    ];

    for (var i = 0; i < helpText.length; i++) {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = function () {
            showHelp(item.help);
        }
    }
}

// This is wrong because the 3 function(closure) assigned to onfocus are sharing the same "item"
setupHelp()

//solution 1, function factory
function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
    return function () {
        showHelp(help);
    };
}

function setupHelp() {
    var helpText = [
        { 'id': 'email', 'help': 'Your e-mail address' },
        { 'id': 'name', 'help': 'Your full name' },
        { 'id': 'age', 'help': 'Your age (you must be over 16)' }
    ];

    for (var i = 0; i < helpText.length; i++) {
        var item = helpText[i];
        //makeHelpCallback will create each onfocus own closure
        document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }
}

setupHelp();

//solution 2, anoymous closure
function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function setupHelp() {
    var helpText = [
        { 'id': 'email', 'help': 'Your e-mail address' },
        { 'id': 'name', 'help': 'Your full name' },
        { 'id': 'age', 'help': 'Your age (you must be over 16)' }
    ];

    for (var i = 0; i < helpText.length; i++) {
        (function () {
            var item = helpText[i];
            document.getElementById(item.id).onfocus = function () {
                showHelp(item.help);
            }
        })(); // run this as a immediately function to make the item own by each onfocus
    }
}

setupHelp();

//solution3, use let instead of let to avoid variable hoisting
function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function setupHelp() {
    var helpText = [
        { 'id': 'email', 'help': 'Your e-mail address' },
        { 'id': 'name', 'help': 'Your full name' },
        { 'id': 'age', 'help': 'Your age (you must be over 16)' }
    ];

    for (var i = 0; i < helpText.length; i++) {
        let item = helpText[i]; // use let here to create a individul item variable
        document.getElementById(item.id).onfocus = function () {
            showHelp(item.help);
        }
    }
}

setupHelp();