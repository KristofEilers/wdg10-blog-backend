const Student = require("../models/Student");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getSingleStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.status(200).json(student);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, age, role, hobbies, beforeBootcamp, finalWords, github } =
      req.body;
    const newStudent = await Student.create({
      name,
      age,
      role,
      hobbies,
      beforeBootcamp,
      finalWords,
      github,
    });
    res.status(201).send(`${newStudent.name} has been created`);
  } catch (err) {
    console.log(err.message);
  }
};

const createMultipleStudents = async (req, res) => {
  try {
    const NewStudents = await Student.insertMany(req.body);
    res.status(201).json(NewStudents);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, role, hobbies, beforeBootcamp, finalWords, github } =
      req.body;
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      {
        name,
        age,
        role,
        hobbies,
        beforeBootcamp,
        finalWords,
        github,
      },
      { new: true }
    );
    res.status(200).send(`${updatedStudent.name} has been updated`);
  } catch (err) {
    console;
    res.status(500).send(err.message);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);
    res.status(200).send(`${deletedStudent.name} has been deleted`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllStudents,
  getSingleStudent,
  createStudent,
  createMultipleStudents,
  updateStudent,
  deleteStudent,
};
