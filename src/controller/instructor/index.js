const InstructorController = {
    getAll: (req, res) => { 
        res.json({
            message:"this is get all api"
        })
    },
    getone: (req, res) => {
        req, res({
            message:"this is onne api"
        })
    }
}

export default InstructorController;