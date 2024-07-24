export const sendToken = (res, user, message, statusCode=200) =>{

    const token = user.getJWTToken();

const options = {
    expires: new Date(Date.now()+15*24*60*60*1000),
    httpOnly:true,
    //secure:true, //we can turnoff to visible cookie ( in youtube cookie is shown when we dont use secure) . But here even though there is secure , cookie is shown.
    sameSite:"none",

}

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        message,
        user,
    });
}