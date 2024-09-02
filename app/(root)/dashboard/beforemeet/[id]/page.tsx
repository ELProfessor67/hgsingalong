"use client"
import React, { useContext, useState } from 'react'
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { useUser } from '@clerk/nextjs';
import { useToast } from '@/components/ui/use-toast';
import MeetingModal from '@/components/MeetingModal';
import { useRouter } from 'next/navigation';
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
    InstapaperShareButton,
    InstapaperIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';
import axios from 'axios';
import { subscriptionContext } from '@/providers/SubscriptionProvider';
import { planslist } from '@/constants';

interface TypeParams {
    id: string
}

interface PropsType {
    params: TypeParams
}

const page = ({ params }: PropsType) => {
    const { user } = useUser()
    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${params?.id}`
    const {subscription} = useContext(subscriptionContext)
    const router = useRouter()
    const handleCopy = async () => {
        try {

            await navigator.clipboard.writeText(url);
            toast({
                title: "Copy Successfully"

            });
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const handleStart = async () => {
        try {
            let end_time;
            if (subscription == 'starter') {
                end_time = new Date(Date.now() + 1 * 60 * 60 * 1000).toUTCString()
            } else if (subscription == 'plus') {
                end_time = new Date(Date.now() + 2 * 60 * 60 * 1000).toUTCString()
            } else {
                end_time = new Date(Date.now() + planslist['free']?.min * 60 * 1000).toUTCString()
            }
            const res = await axios.put(`/api/v1/create-room?room_id=${params.id}`, {
                start_time: new Date().toUTCString(),
                end_time
            });

            console.log(res.data);
            router.push(`/meeting/${params.id}`)
        } catch (error) {

        }
    }
    return (
        <section className='flex items-center justify-center p-5 flex-col'>
            <div className='w-[30rem] min-h-[20rem] relative shadow-md rounded-md border border-gray-100 flex p-4 flex-col gap-5'>
                <h2 className='text-black/90 text-3xl text-center'>Your Meeting Ready</h2>
                <p className='text-black/60 text-center'>Or share this meeting link with others that you want in the meeting</p>
                <button className='bg-foregroud-primary px-4 py-2 rounded-md text-white flex items-center gap-3 w-[9rem] hover:scale-105' onClick={() => setOpen(true)}>Share Now <IoMdShareAlt /></button>
                <div className='py-4 px-2 w-full rounded-md border border-gray-100 flex items-center bg-gray-200' aria-readonly>
                    <input value={url} className='text-gray-500 outline-none border-none bg-transparent w-full' />
                    <button className='text-gray-800 bg-none outline-none border-none' onClick={handleCopy}><MdOutlineContentCopy /></button>
                </div>
                <button className='bg-foregroud-primary px-4 py-2 rounded-md text-white flex items-center gap-3 w-[7rem] hover:scale-105 mx-auto' onClick={handleStart}>Start Now</button>
                <p className='text-black/60 text-center'>joined as <span className='text-foregroud-primary'>{user?.primaryEmailAddress?.emailAddress}</span></p>

            </div>

            <MeetingModal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Share Meet URL"
                className="text-center"
                buttonText="Start Now"
                handleClick={handleStart}
            >
                <div className='flex items-center gap-4 justify-center'>
                    <EmailShareButton
                        url={url}

                    >
                        <EmailIcon size={40} round={true} />
                    </EmailShareButton>
                    <FacebookShareButton
                        url={url}

                    >
                        <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>

                    <WhatsappShareButton
                        url={url}

                    >
                        <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>
                    <InstapaperShareButton
                        url={url}

                    >
                        <InstapaperIcon size={40} round={true} />
                    </InstapaperShareButton>
                    <TwitterShareButton
                        url={url}

                    >
                        <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>
                    <TelegramShareButton
                        url={url}

                    >
                        <TelegramIcon size={40} round={true} />
                    </TelegramShareButton>
                    <LinkedinShareButton
                        url={url}

                    >
                        <LinkedinIcon size={40} round={true} />
                    </LinkedinShareButton>
                </div>
            </MeetingModal>

        </section>
    )
}

export default page