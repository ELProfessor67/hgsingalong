"use client"
import { planslist } from '@/constants';
import { subscriptionContext } from '@/providers/SubscriptionProvider'
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

function daysLeftUntil(dateString: string): number {
  // Convert input string to Date object
  const targetDate: Date = new Date(dateString);
  
  // Get current date
  const currentDate: Date = new Date();
  
  // Calculate the difference in milliseconds
  const differenceMs: number = targetDate.getTime() - currentDate.getTime();
  
  // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  const daysLeft: number = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
  
  return daysLeft;
}

interface Room {
  room_id: string;
  start_time: string;
  end_time: string;
}


const page = () => {

  const {subscription,details} = useContext(subscriptionContext);
  const [totalroom, setTotalRoom] = useState(0);
  const [roomsDuration, setRoomDuration] = useState(null)
  const [roomLabel, setRoomLabels] = useState(null);
  const [rooms,setRooms] = useState<Room[]>([])
const {user} = useUser()
  
  async function getRooms() {
    try {
      const res = await axios.get(`/api/v1/get-rooms?user_id=${user?.id}`);
      setTotalRoom(res.data.rooms?.length)
      setRoomLabels(res.data.rooms.map((room:Room,index:number) => `Room ${index + 1}`))
      const roomDurations = res.data.rooms.map((room:Room) => {
        const startTime = new Date(room.start_time);
        const endTime = new Date(room.end_time);
        return (endTime.getTime() - startTime.getTime()) / (1000 * 60); // Duration in minutes
      });
      setRoomDuration(roomDurations);
      setRooms(res.data.rooms)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRooms()
  },[])


  const barData = {
    labels: roomLabel || [],
    datasets: [
      {
        label: 'Room Duration (minutes)',
        data: roomsDuration,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };


  const lineData = {
    labels: rooms?.map(room => new Date(room.start_time).toLocaleDateString()),
    datasets: [
      {
        label: 'Rooms Created Over Time',
        data: rooms?.map((_, index) => index + 1),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  

  

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='flex items-center flex-wrap gap-5'>
        <div className='w-[18rem] h-[12rem] shadow-md rounded-md bg-orange-1 flex items-center justify-center'>
          <div className='flex items-center justify-center flex-col gap-4'>
            <h2 className='text-white/70 text-xl'>Total Meetings</h2>
            <h1 className='text-white text-7xl'>{totalroom}</h1>
          </div>
        </div>
        <div className='w-[18rem] h-[12rem] shadow-md rounded-md bg-blue-1 flex items-center justify-center'>
          <div className='flex items-center justify-center flex-col gap-4'>
            <h2 className='text-white/70 text-xl'>Days Left</h2>
            <h1 className='text-white text-7xl'>{details?.subscription_expire ? daysLeftUntil(details?.subscription_expire) : 0}</h1>
          </div>
        </div>
        <div className='w-[18rem] h-[12rem] shadow-md rounded-md bg-yellow-1 flex items-center justify-center'>
          <div className='flex items-center justify-center flex-col gap-4'>
            <h2 className='text-white/70 text-xl'>Current Plan</h2>
            <h1 className='text-white text-3xl'>{subscription}</h1>
          </div>
        </div>
        <div className='w-[18rem] h-[12rem] shadow-md rounded-md bg-yellow-1 flex items-center justify-center'>
          <div className='flex items-center justify-center flex-col gap-4'>
            <h2 className='text-white/70 text-xl'>Meeting Duration</h2>
            <h1 className='text-white text-7xl'>{planslist[subscription]?.min}<span className='text-xl text-white/70'>min</span></h1>
          </div>
        </div>
      </div>

      <div className='w-[40rem] mx-auto'>
        <h3 className='text-black/90 text-center my-5 text-3xl mt-10'>Room Durations</h3>
        <Bar data={barData} />
      </div>
      <div className='w-[40rem] mx-auto'>
        <h3 className='text-black/90 text-center my-5 text-3xl mt-10'>Rooms Created Over Time</h3>
        <Line data={lineData} />
      </div>
    </section>
  )
}

export default page