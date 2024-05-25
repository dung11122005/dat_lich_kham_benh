import express from "express";
import homecontrollers from "../controllers/homecontrollers";
import usercontrollers from "../controllers/usercontrollers"

let router = express.Router();

let initwebrouter = (app) => {
    router.get('/', homecontrollers.gethomepage)
    router.get('/crud', homecontrollers.getCRUD)



    router.post('/post-crud', homecontrollers.postCRUD)
    router.get('/get-crud', homecontrollers.displaygetCRUD)
    router.get('/edit-crud', homecontrollers.getEditCRUD)
    router.post('/put-crud', homecontrollers.putCRUD)
    router.get('/delete-crud', homecontrollers.deleteCRUD)



    router.post('/api/login', usercontrollers.handlelogin)
    router.get('/api/get-all-users', usercontrollers.handlegetallusers)


    return app.use('/', router);
}

module.exports = initwebrouter;