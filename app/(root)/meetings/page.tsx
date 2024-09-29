'use client'
import { IRoomDetails } from '@/components/CallList';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'


function formatDateTimeWithDayAndAmPm(date: Date): string {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayNames[date.getDay()]; // Get day name from array based on day index
  const day = String(date.getDate()).padStart(2, '0'); // Get day with leading zero if needed
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert hours to 12-hour format
  const minutes = String(date.getMinutes()).padStart(2, '0'); // Get minutes with leading zero if needed

  return `${dayName}, ${day} ${hours}:${minutes} ${ampm}`;
}

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Function to get day name from date
const getDayName = (date: Date): string => {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return dayNames[date.getDay()];
};

const page = () => {
  const [publicRooms, setPublicRooms] = useState<IRoomDetails[]>([]);
  const router = useRouter()


  async function getPublicRooms() {
    try {
      const res = await axios.get(`/api/v1/get-rooms?public=true`);

      setPublicRooms(res.data?.rooms);
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getPublicRooms();
  }, [])

  const handleclick = useCallback((room_id: string) => {
    router.push(`/meeting/${room_id}`);
  }, [])
  return (
    <section className='min-h-screen bg-background-4 p-6 relative'>
      <div className='absolute top-1 left-1 z-0'>
        <img src='/images/left-plus.png' />
      </div>
      <div className='absolute bottom-0 right-0 z-0'>
        <img src='/images/bottom-line.png' />
      </div>
      <h1 className='text-white text-center font-bold mb-10 mt-5' style={{ fontSize: '3rem' }}>Public Meetings</h1>
      <div className='flex items-center justify-center flex-wrap gap-5'>
        {
          publicRooms && publicRooms.map((room: IRoomDetails, idex: number) => (
            <div className='w-[25rem] !min-h-[13rem] !shadow-md gradient-insta flex flex-col gap-2 rounded-md p-4 !bg-white border border-gray-100 cursor-pointer' onClick={() => handleclick(room.room_id)}>
              <h3 className="text-white text-xl">Id: {room?.room_id}</h3>
              <p className="text-white/90 text-lg">Start Time: {formatDateTimeWithDayAndAmPm(new Date(room.start_time))}</p>
              <p className="text-white/90 text-lg">End Time: {formatDateTimeWithDayAndAmPm(new Date(room.end_time))}</p>
              <p className="text-white/90 text-lg">Date: {formatDate(new Date(room.start_time))}</p>
              <p className="text-white/90 text-lg">Day: {getDayName(new Date(room.start_time))}</p>
            </div>
          ))
        }


        {
          publicRooms.length == 0 &&
          <div className='flex items-center justify-center h-[60vh]'>
            <h2 className='text-white/90 text-4xl'>No Previous meetings</h2>
          </div>
        }

      </div>
    </section>

  )
}

export default page