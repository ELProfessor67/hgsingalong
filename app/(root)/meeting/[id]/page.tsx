"use client"
import React, { useEffect, useRef, useState } from 'react'
import { JitsiMeeting } from "@jitsi/react-sdk"
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { setQuarter } from 'date-fns'
import Link from 'next/link'

interface TypeParams {
  id: string
}

interface PropsType {
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
          duration: 5000,
        });
        clearInterval(interval);
        return;
      }

      const minutesLeft = Math.floor(timeLeft / 60000);
      const secondsLeft = Math.floor((timeLeft % 60000) / 1000);

      console.log(minutesLeft, secondsLeft)
      if (minutesLeft === 0 && secondsLeft === 0) {

        clearInterval(interval);
        router.push('/?show_feefback=1')
      } else if (minutesLeft == 1 && secondsLeft == 0) {
        toast({
          title: 'Less than 1 minute left.',
          duration: 5000,
        });
      } else if (minutesLeft == 2 && secondsLeft == 0) {
        toast({
          title: 'Less than 2 minute left.',
          duration: 5000,
        });
      } else if (minutesLeft == 5 && secondsLeft == 0) {
        toast({
          title: 'Less than 5 minute left.',
          duration: 5000,
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
  status?: 'private' | 'public';
}


const page = ({ params }: PropsType) => {
  const YOUR_DOMAIN: string = "meet.hgsingalong.com"
  const tryBackRef = useRef(false)
  const roomdetailsRef = useRef<IRoomDetails>()
  const [guest, setguest] = useState(false);
  const [guestName, setGuestName] = useState('')

  const { user, isLoaded } = useUser()

  const [roomdetails, setRoomDetails] = useState<IRoomDetails>();
  const router = useRouter();

  async function getRoomdDetails() {
    try {
      const res = await axios.get(`/api/v1/create-room?room_id=${params.id}`);
      setRoomDetails(res.data?.room)
      roomdetailsRef.current = res.data?.room;
      console.info(res)
    } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    getRoomdDetails();
  }, [params.id])



  function confirmReload(event: any) {
    var confirmationMessage = "Are you sure you want to left meet ?";

    // For modern browsers
    event.returnValue = confirmationMessage;
    tryBackRef.current = true;

    return confirmationMessage;
  }

  function getTryBack() {
    return tryBackRef.current;
  }

  useEffect(() => {


    window.addEventListener('beforeunload', confirmReload);
    window.addEventListener('popstate', confirmReload);

    return () => {
      window.removeEventListener('beforeunload', confirmReload);
      window.removeEventListener('popstate', confirmReload);
    }
  }, [])


  const confirmAdmit = (username: string, handleReject: () => void) => {
    confirmAlert({
      title: `${username} Join`,
      message: `${username} want to join this meet.`,
      buttons: [
        {
          label: 'Admit',
        },
        {
          label: 'Reject',
          onClick: () => handleReject()
        }
      ]
    });
  };

  const handleGuestJoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setguest(true)
  }

  return (
    (
      (user || guest) ? (
        <div style={{ height: "100vh", display: 'grid', flexDirection: "column" }}>
          <JitsiMeeting
            domain={YOUR_DOMAIN}
            roomName={params.id || 'ishdjishdfiohdewhjroiehwoirh'}
            userInfo={{
              displayName: user ? `${user?.firstName || ''} ${user?.lastName || ''}` : guestName,
              email: user?.primaryEmailAddress?.emailAddress as string,
            }}
            interfaceConfigOverwrite={{
              SHOW_JITSI_WATERMARK: false,
              SHOW_WATERMARK_FOR_GUESTS: false,
              
            }}
            // containerStyle={{ flex: 1, display: "flex" } as any} 
            onApiReady={(externalApi) => {

              externalApi.addListener("videoConferenceLeft", () => {
                
                console.log(getTryBack(), 'tryback')
                if (getTryBack()) {
                  tryBackRef.current = false;
                  return;
                }
                console.log("The local participant has left the meeting.");
                router.push("/?show_feedback=1");

              });

              externalApi.addListener('participantJoined', (ParticipantDetails) => {

                console.log(ParticipantDetails, "ParticipantDetails")
                if (roomdetailsRef.current?.user_id == user?.id && roomdetailsRef.current?.status == 'private') {
                  // const confirm = window.confirm(`${ParticipantDetails?.formattedDisplayName?.split(' ')[0]} user want to join meet.`);
                  const handleReject = () => {
                    externalApi.executeCommand('kickParticipant', ParticipantDetails.id)
                  }
                  confirmAdmit(ParticipantDetails?.formattedDisplayName?.split(' ')[0], handleReject);
                  // if(confirm){
                  //   console.log('admit')
                  // }else{
                  //   externalApi.executeCommand('kickParticipant',ParticipantDetails.id)
                  // }

                }
              })
            }}

            configOverwrite={{
              // Set your custom invite URL here
              inviteUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${params.id}`,
              startWithAudioMuted: roomdetailsRef.current?.status == 'public', // Start with audio muted
              startWithVideoMuted: roomdetailsRef.current?.status == 'public', // Start with video muted
            }}


   

            
            

          />


          {
            roomdetails?.end_time &&
            <CountdownTimer endTime={roomdetails?.end_time} />
          }
        </div>
      ) :
        (
          <div className="flex items-center justify-center min-h-screen bg-background-4 relative">
            <div className='absolute bottom-1 left-1 z-0'>
              <img src='/images/bottom-box-shape.png' />
            </div>
            <div className='absolute right-1 top-1 z-0'>
              <img src='/images/left-plus.png' />
            </div>
            <div className="w-full max-w-md bg-background-3 rounded-lg shadow-md p-8">
              <h1 className="text-2xl font-bold mb-2 text-foregroud-primary blicking">Join as Guest</h1>
              <p className="text-white/80 mb-6">Enter your name to join as a guest.</p>
              <form onSubmit={handleGuestJoin} className="space-y-4">
                <div>
                  <label htmlFor="guestName" className="block text-sm font-medium text-white/80 mb-1">
                    Name
                  </label>
                  <input
                    id="guestName"
                    type="text"
                    placeholder="Enter your name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full blicking bg-foregroud-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Join as Guest
                </button>
              </form>
              <p className="mt-4 text-sm text-white/80">
                Have an account?{' '}
                <Link href={`/sign-in?redirect_url=${window.location.origin}/meeting/${params.id}`} className="text-foregroud-primary hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        )
    )


  )
}

export default page