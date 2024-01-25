const StudentController = {
  getAll: (req, res) => {
    try {
      res.json({
        message: "This is student get api",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
  create: (req, res) => {
    try {
      res.json({
        message: "This is student create api",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};

export default StudentController;
