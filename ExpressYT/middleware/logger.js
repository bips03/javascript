const logger = (req,res,next) => {
    console.log(`Logged user inside logger`);
    next()
}
module.exports = logger;