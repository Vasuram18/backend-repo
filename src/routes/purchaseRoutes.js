const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const {validatePurchaseList} = require('../middlewares');
//controllers 
const { 
    getPurchaseList, 
    deletePurchaseList, 
    updatePurchaseList, 
    createPurchaseList,
    getPurchaseDetails
} = require('../controllers/purchaseController');

const authMiddleware = require("../middlewares/authMiddleware");
const profileMiddleware = require("../middlewares/profileMiddleware");

const roleMap = require("../utils/roleMap");
/*
router.use(authMiddleware([], false), profileMiddleware(true));

router.get('/:id', authMiddleware(roleMap("GET_PURCHASE_DETAILS")), catchAsync(getPurchaseDetails));
router.get('/', authMiddleware(roleMap("GET_PURCHASE_LIST")),  catchAsync(getPurchaseList));
router.post('/', authMiddleware(roleMap("CREATE_PURCHASE_LIST")),  validatePurchaseList, catchAsync(createPurchaseList));
router.put('/:id', authMiddleware(roleMap("UPDATE_PURCHASE_LIST")),  validatePurchaseList, catchAsync(updatePurchaseList));
router.delete('/:id', authMiddleware(roleMap("DELETE_PURCHASE_LIST")),  catchAsync(deletePurchaseList));
*/
//router.use(authMiddleware([], false), profileMiddleware(true));

router.get('/:id', catchAsync(getPurchaseDetails));
router.get('/',  catchAsync(getPurchaseList));
router.post('/', catchAsync(createPurchaseList));
router.put('/:id', catchAsync(updatePurchaseList));
router.delete('/:id',  catchAsync(deletePurchaseList));

module.exports = router;