var express = require('express');
const dog_controlers= require('../controllers/dog');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
/* GET dog */
router.get('/', dog_controlers.dog_view_all_Page );
/* GET update dog page */
router.get('/update', secured, dog_controlers.dog_update_Page);
router.get('/create', secured, dog_controlers.dog_create_Page);
router.get('/delete', secured, dog_controlers.dog_delete_Page);
module.exports = router;