export const generateResume = async (req, res) => {
  try {
    const { name, email, skills, experience } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email are required" });
    }

    res.json({
      success: true,
      message: "Resume generated successfully",
      data: { name, email, skills, experience },
    });
  } catch (error) {
    console.error("Resume generate error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getResume = async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Resume data fetched successfully",
    });
  } catch (error) {
    console.error("Get resume error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
