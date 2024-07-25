"use client"
import React, { useEffect, useRef, useState } from 'react'
import {JitsiMeeting } from "@jitsi/react-sdk"
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation'

interface TypeParams
{
  id: string
}

interface PropsType
{
  params: TypeParams
}


interface CountdownTimerProps {
  endTime: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endTime }) => {
  const { toast } = useToast();
  const router = useRouter()
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = new Date(endTime).getTime() - now.getTime();

      if (timeLeft <= 0) {
        toast({
          title: 'Meeting has ended.',
          
        });
        clearInterval(interval);
        return;
      }

      const minutesLeft = Math.floor(timeLeft / 60000);
      const secondsLeft = Math.floor((timeLeft % 60000) / 1000);
      
      console.log(minutesLeft,secondsLeft)
      if (minutesLeft === 0 && secondsLeft === 0) {
       
        clearInterval(interval);
        router.push('/?show_feefback=1')
      } else if (minutesLeft == 1 && secondsLeft == 0) {
        toast({
          title: 'Less than 1 minute left.',
          
        });
      } else if (minutesLeft == 2 && secondsLeft == 0) {
        toast({
          title: 'Less than 2 minute left.',
          
        });
      } else if (minutesLeft == 5 && secondsLeft == 0) {
        toast({
          title: 'Less than 5 minute left.',
          
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return null;
};


export interface IRoomDetails {
  end_time: string;
  room_id: string;
  start_time: string;
  user_id: string;
  user_plan: string;
  __v: number;
  _id: string;
}


const page = ({params}:PropsType) => {
  const YOUR_DOMAIN:string = "meet.hgsingalong.com"
  const tryBackRef = useRef(false)

  const {user,isLoaded} = useUser()

  const [roomdetails, setRoomDetails] = useState<IRoomDetails>();
  const router = useRouter()

  async function getRoomdDetails (){
    try {
      const res = await axios.get(`/api/v1/create-room?room_id=${params.id}`);
      setRoomDetails(res.data?.room)
      console.info(res)
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(() => {
    getRoomdDetails();
  },[params.id])


  function confirmReload(event:any) {
    var confirmationMessage = "Are you sure you want to left meet ?";

      // For modern browsers
      event.returnValue = confirmationMessage;
      tryBackRef.current = true;
      
      return confirmationMessage;
  }

  function getTryBack () {
    return tryBackRef.current;
  }

  useEffect(() => {
		

		window.addEventListener('beforeunload', confirmReload);
		window.addEventListener('popstate', confirmReload);

		return () => {
			window.removeEventListener('beforeunload', confirmReload);
			window.removeEventListener('popstate', confirmReload);
		}
	},[])

  return (
    <div style={{height: "100vh",display: 'grid',flexDirection: "column"}}>
      <JitsiMeeting
        domain = { YOUR_DOMAIN }
        roomName = {params.id || 'ishdjishdfiohdewhjroiehwoirh'}
        userInfo={{
          displayName: `${user?.firstName} ${user?.lastName}`,
          email: user?.primaryEmailAddress?.emailAddress as string
        }}
        interfaceConfigOverwrite={{
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false
        }}
        // containerStyle={{ flex: 1, display: "flex" } as any} 
        onApiReady={(externalApi) => {

          externalApi.addListener("videoConferenceLeft", () => {
            console.log(getTryBack(),'tryback')
            if(getTryBack()){
              tryBackRef.current = false;
              return;
            }
            console.log("The local participant has left the meeting.");
            router.push("/?show_feedback=1");
            
          });
        }}

        configOverwrite={{
          // Set your custom invite URL here
          inviteUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${params.id}`
        }}
        
      />


      {
        roomdetails?.end_time &&
        <CountdownTimer endTime={roomdetails?.end_time} />
      }
    </div>
  )
}

export default page