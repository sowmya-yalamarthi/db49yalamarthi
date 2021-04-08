var dog = require('../models/dog');
// List of all dogs
exports.dog_list = async function (req, res) {
    try {
        thedog = await dog.find();
        res.send(thedog);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
    // res.send('NOT IMPLEMENTED: dog list');
};
// for a specific dog.
exports.dog_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: dog detail: ' + req.params.id);
};
// Handle dog create on POST.
exports.dog_create_post = async function (req, res) {
    console.log(req.body)
    let document = new dog();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.dogname = req.body.dogname;
    document.age = req.body.age;
    document.breed = req.body.breed;
    
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle dog delete form on DELETE.
exports.dog_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: dog delete DELETE ' + req.params.id);
};
// Handle dog update form on PUT.
exports.dog_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: dog update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.dog_view_all_Page = async function (req, res) {
    try {
        thedog = await dog.find();
        console.log("njfndw")
        res.render('dog', { title: 'dog Search Results', results: thedog });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};