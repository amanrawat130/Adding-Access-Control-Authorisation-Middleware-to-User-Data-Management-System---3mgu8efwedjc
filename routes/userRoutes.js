const express = require('express');

const {
    getAllUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/userControllers');

const grantAccessTo = require('../middlewares/grantAccessTo');

const router = express.Router();

// Use grantAccessTo middleware for access control
router.get('/', grantAccessTo(['user', 'admin', 'superadmin']), getAllUsers);
router.get('/:id', grantAccessTo(['user', 'admin', 'superadmin']), getUserByID);
router.post('/', grantAccessTo(['guest', 'user', 'admin', 'superadmin']), createUser);
router.patch('/:id', grantAccessTo(['admin', 'superadmin']), updateUser);
router.delete('/:id', grantAccessTo(['superadmin']), deleteUser);

module.exports = router;
