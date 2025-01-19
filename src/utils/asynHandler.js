// const asyncHandler=(fn)=>{
//    return  async(req,res,next)=>{
//      try{
//        await fn(res,res,next)
//      }
//      catch(err){
//         res.status(err.code||500).json({
//             sucess:false,
//             message:err.message
//         })
//      }
//     }
// }

const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err));
    }
}
export {asyncHandler}