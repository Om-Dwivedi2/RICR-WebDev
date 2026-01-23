export const UserUpdate = async (req, res, next)=> {

    try {

        const { fullName, email, mobileNumber } = req.body;
        const currentUser = req.user;
        
        if (!fullName || !email || !mobileNumber) {
            const error = new Error("All Field Required");
            error.statusCode = 400;
            return next(error);
        }

        console.log(currentUser);  // old data user in JSON format                  
        
        currentUser.fullName = fullName;
        currentUser.email = email;
        currentUser.mobileNumber = mobileNumber;
        await currentUser.save();

        console.log("NewData: " , currentUser);
        

    } catch (error) {
        next(error);
    }


}