import { Router } from "express";
import { getEmployees, createEmployee, getEmployeeById  } from "../controllers/employees.controller.js";

const router = Router();

router.get('/getEmployees', getEmployees);

router.get('/getEmployeeById/:id', getEmployeeById);


router.post('/createEmployee', createEmployee);

export default router;