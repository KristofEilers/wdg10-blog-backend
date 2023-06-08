const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  getSingleStudent,
  createStudent,
  createMultipleStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentsController");

router.route("/students").get(getAllStudents).post(createStudent);

router.route("/students/bulk").post(createMultipleStudents);

router
  .route("/students/:id")
  .get(getSingleStudent)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;
