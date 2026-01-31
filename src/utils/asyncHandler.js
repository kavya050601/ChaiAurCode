const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export {asyncHandler}


// higher order function
// const asyncHandler = (fn) => {() => {}} 
// brackets removed

// const asyncHandler = () => {}
// const asyncHandler = (fn) => () => {}
// wrapper function
// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     }
//     catch(error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }