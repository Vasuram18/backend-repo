const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { validateCategory } = require('../middlewares');
const { getCategory,
    getCategoryList,
    createCategory,
    updateCategory,
    deleteCategory } = require('../controllers/categoryController');

const authMiddleware = require("../middlewares/authMiddleware");
const profileMiddleware = require("../middlewares/profileMiddleware");

const roleMap = require("../utils/roleMap.js");

//router.use(authMiddleware([], false), profileMiddleware(true));

//category routes
/*
router.get('/', authMiddleware(roleMap("GET_CATEGORY_LIST")), catchAsync(getCategoryList));
router.get('/:id', authMiddleware(roleMap("GET_CATEGORY")), catchAsync(getCategory));
router.post('/', authMiddleware(roleMap("CREATE_CATEGORY")), validateCategory, catchAsync(createCategory));
router.put('/:id', authMiddleware(roleMap("UPDATE_CATEGORY")), validateCategory, catchAsync(updateCategory));
router.delete('/:id', authMiddleware(roleMap("DELETE_CATEGORY")), catchAsync(deleteCategory));
*/

router.get('/', catchAsync(getCategoryList));
router.get('/:id', catchAsync(getCategory));
router.post('/', catchAsync(createCategory));
router.put('/:id', catchAsync(updateCategory));
router.delete('/:id', catchAsync(deleteCategory));

module.exports = router;