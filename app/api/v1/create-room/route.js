const { NextResponse } = require("next/server")
import connectDB from '@/lib/connnectDB'
import roomModel from '@/lib/roomModel';

export const POST = async (req) => {
   try {
    await connectDB()
    const {user_id,room_id,start_time,user_plan,end_time,isSchedule,description,scheduleTime} = await req.json();
    console.log(user_id,room_id,start_time,user_plan,end_time,isSchedule,description,scheduleTime)
    await roomModel.create({user_id,room_id,start_time,user_plan,end_time,isSchedule,description,scheduleTime});


    return NextResponse.json({success: true,message: "Room Create Successfully"},{status: 201});
   } catch (error) {
    return NextResponse.json({success: false,message: error.message},{status: 500})
   }
    
}


export const GET = async (req) => {
    try {
     await connectDB()
     const query = new URLSearchParams(req.url.split('?')[1]);
     const room_id = query.get('room_id');
     const room = await roomModel.findOne({room_id})
 
     return NextResponse.json({success: true,room},{status: 200});
    } catch (error) {
     return NextResponse.json({success: false,message: error.message},{status: 500})
    }
     
 }


 export const PUT = async (req) => {
   try {
    await connectDB()
    const query = new URLSearchParams(req.url.split('?')[1]);
    const room_id = query.get('room_id');
    const {start_time,end_time} = await req.json();
   
    const room = await roomModel.findOneAndUpdate({room_id},{start_time,end_time,isSchedule: false});
   

    return NextResponse.json({success: true,room},{status: 200});
   } catch (error) {
    return NextResponse.json({success: false,message: error.message},{status: 500})
   }
    
}
