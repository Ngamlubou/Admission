const getSchools = async (req, res) => {
    res.json({
        message: "Get schools"
    });
};

const createSchool = async (req, res) => {
    res.json({
        message: "Create school"
    });
};

module.exports = {
    getSchools,
    createSchool
};
