import User from "../../models/userModel.js";


const fetchAllUsers = async () => {

  try {

    const users = await User.find({}, { name: 1, email: 1 });

    return users;

  } catch (error) {

    console.error("Error fetching users:", error);

    throw error;

  }

};

export { fetchAllUsers };
