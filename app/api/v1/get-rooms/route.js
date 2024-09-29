const { NextResponse } = require("next/server")
import connectDB from '@/lib/connnectDB'
import roomModel from '@/lib/roomModel';


export const GET = async (req) => {
    try {
     await connectDB()
     const query = new URLSearchParams(req.url.split('?')[1]);
     const user_id = query.get('user_id');
     const upcoming = query.get('upcoming');
     const ispublic = query.get('public');
     let rooms;
     if(ispublic){
      let now = new Date();
      now.setHours(now.getHours() - 2);
      rooms = await roomModel.find({scheduleTime: { $gt: now } ,status: 'public'})
      return NextResponse.json({success: true,rooms},{status: 200});
     }
   
    
     if(upcoming){
          rooms = await roomModel.find({user_id,isSchedule: true})
        }else{
          rooms = await roomModel.find({user_id,isSchedule: false})
     }
 
     return NextResponse.json({success: true,rooms},{status: 200});
    } catch (error) {
     return NextResponse.json({success: false,message: error.message},{status: 500})
    }
     
 }
