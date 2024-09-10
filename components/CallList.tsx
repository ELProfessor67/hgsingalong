'use client';

import { Call, CallRecording } from '@stream-io/video-react-sdk';

import Loader from './Loader';
import { useGetCalls } from '@/hooks/useGetCalls';
import MeetingCard from './MeetingCard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

export interface IRoomDetails {
  end_time: string;
  room_id: string;
  start_time: string;
  user_id: string;
  user_plan: string;
  __v: number;
  _id: string;
}

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

const CallList = ({ type }: { type: 'ended' | 'upcoming' | 'recordings' }) => {
  const [meetings, setMeetings] = useState([]);
  const { user } = useUser()


  async function getRooms() {
    try {
      const res = await axios.get(`/api/v1/get-rooms?user_id=${user?.id}`);
      setMeetings(res.data.rooms)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRooms();
  }, [])
  return (
    <div className='flex items-center justify-center flex-wrap gap-5'>
      {
        meetings && meetings.map((room: IRoomDetails,idex: number) => (
          <div className='w-[25rem] !min-h-[13rem] !shadow-md gradient-insta flex flex-col gap-2 rounded-md p-4 !bg-white border border-gray-100'>
            <h3 className="text-white text-xl">Id: {room?.room_id}</h3>
            <p className="text-white/90 text-lg">Start Time: {formatDateTimeWithDayAndAmPm(new Date(room.start_time))}</p>
            <p className="text-white/90 text-lg">End Time: {formatDateTimeWithDayAndAmPm(new Date(room.end_time))}</p>
            <p className="text-white/90 text-lg">Date: {formatDate(new Date(room.start_time))}</p>
            <p className="text-white/90 text-lg">Day: {getDayName(new Date(room.start_time))}</p>
          </div>
        ))
      }


  {
        meetings.length == 0 && 
        <div className='flex items-center justify-center h-[60vh]'>
          <h2 className='text-white/90 text-4xl'>No Previous meetings</h2>
        </div>
      }

    </div>
  );
};

export default CallList;
