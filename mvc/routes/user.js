const express = require("express");
const {
    handleGetAllUsers ,
    handleGetUserById ,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
  } = require('../controllers/user')

const router = express.Router();  //make router because making differently


//REST Api
// maek isolated routers for all

router
.route('/')
.get(handleGetAllUsers)
.post(handleCreateNewUser);


router.
    route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);




module.exports = router;