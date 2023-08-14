const {username, password} = process.env;
export const connectionSrt = "mongodb+srv://"+username+":"+password+"@cluster0.mgl2aif.mongodb.net/userdb?retryWrites=true&w=majority"