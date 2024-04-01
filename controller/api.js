module.exports = async (req, res) => {
    try {
        return res.status(200).json({ status: true, msg: "this is secure API endpoint" })
    } catch (error) {
        console.log(": error :", error);
        return res.status(500).json({ status: false, msg: "something went wrong" })
    }
}