'use client'
import React, { useContext } from 'react'
import { planslist } from '@/constants'
import { subscriptionContext } from '@/providers/SubscriptionProvider'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { IoMdCheckmark } from "react-icons/io";

const page = () => {
    const { subscription } = useContext(subscriptionContext)
    const { user } = useUser()
    const router = useRouter()
    const { toast } = useToast()
    const handlePurchanse = async (e: any, key: string) => {
        e.stopPropagation()
        if (user) {
            router.push(`/api/v1/subscription/buy?user_id=${user?.id}&plan=${key}`)
        } else {
            toast({
                title: "Please Login First"
            })
            router.push('/sign-in')
        }
    }

    return (
        <section className="text-gray-400 body-font p-10 zeeshan mb-8">
            <div className="flex items-center justify-center flex-col mb-12">

                <h2 className=" mt-4">
                    Why HG Sing Along
                </h2>
                <div className="mt-2">
                    <p className="leading-7 max-w-[35rem] text-center font-[300] text-[1.125rem]">
                        We offer competitive pricing, great features, and better value.
                        See our difference!
                    </p>
                </div>

            </div>
            <div className="container position-relative zindex-100">
                <div className="flex flex-wrap items-center justify-center gap-7">
                    {
                        Object.keys(planslist).map((plan) => (
                            <>
                                {
                                    plan == 'starter' &&
                                    <div className="w-[18rem]">
                                        <div
                                            className="card card-pricing card-awesome-black text-center px-3 border-0 hover-scale-110 scale-110"
                                            style={{ border: "1px solid" }}
                                        >
                                            <div className="card-header py-5 border-0 delimiter-bottom">
                                                <div className="h1  text-center mb-0 text-white">
                                                    $<span className="price font-weight-bolder text-white">{planslist[plan].price}</span>
                                                </div>
                                                <span className="h6 text-white">{planslist[plan].title}</span>
                                            </div>
                                            <div className="card-body !p-1 !text-white">
                                                <span className="h6 !text-white" style={{ fontWeight: "bold" }}>
                                                    Features:
                                                </span>
                                                <ul className="list-unstyled  text-sm opacity-8 mb-4">
                                                    {
                                                        planslist[plan].features.map(text => (
                                                            <li className="py-2 !text-left">
                                                                <IoMdCheckmark /> {text}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                                {

                                                    subscription === plan ?
                                                        (
                                                            <a

                                                                className="btn btn-sm btn- !bg-[#1ebbc4] !text-white hover-translate-y-n3 hover-shadow-lg mb-3"
                                                            >
                                                                Current Plan
                                                            </a>

                                                        )
                                                        :
                                                        (
                                                            <a
                                                                onClick={(e) => handlePurchanse(e, plan)}
                                                                className="btn btn-sm btn- !bg-[#1ebbc4] !text-white hover-translate-y-n3 hover-shadow-lg mb-3"
                                                            >
                                                                Purchase Now
                                                            </a>

                                                        )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    plan != "starter" &&
                                    <div className="w-[18rem]">
                                        <div
                                            className="card card-awesome card-pricing text-center px-3 hover-scale-110"

                                        >
                                            <div className="card-header py-5 border-0 delimiter-bottom">
                                                <div className="h1 text-center mb-0">
                                                    $<span className="price font-weight-bolder">{planslist[plan].price}</span>
                                                </div>
                                                <span className="h6 text-muted">{planslist[plan].title}</span>
                                            </div>
                                            <div className="card-body !p-1">
                                                <span className="h6 text-muted" style={{ fontWeight: "bold" }}>
                                                    Features:
                                                </span>
                                                <ul className="list-unstyled text-sm mb-4">
                                                    {
                                                        planslist[plan].features.map(text => (
                                                            <li className="py-2 !text-left">
                                                                <IoMdCheckmark /> {text}
                                                            </li>
                                                        ))
                                                    }

                                                </ul>

                                                {
                                                    plan == 'free' && subscription != 'free' ?
                                                        (
                                                            <a

                                                                className="btn btn-sm btn- !bg-[#1ebbc4] !text-white hover-translate-y-n3 hover-shadow-lg mb-3"
                                                            >
                                                                Free Plan
                                                            </a>
                                                        ) :
                                                        subscription === plan ?
                                                            (
                                                                <a

                                                                    className="btn btn-sm btn- !bg-[#1ebbc4] !text-white hover-translate-y-n3 hover-shadow-lg mb-3"
                                                                >
                                                                    Current Plan
                                                                </a>

                                                            )
                                                            :
                                                            (
                                                                <a
                                                                    onClick={(e) => handlePurchanse(e, plan)}
                                                                    className="btn btn-sm btn- !bg-[#1ebbc4] !text-white hover-translate-y-n3 hover-shadow-lg mb-3"
                                                                >
                                                                    Purchase Now
                                                                </a>

                                                            )
                                                }

                                            </div>
                                        </div>
                                    </div>
                                }
                            </>
                        ))
                    }

                </div>
                <div className="mt-5 text-center">
                    <p className="mb-2">
                        All plans include active-subscription free support. Need more?
                    </p>
                    <a
                        href="/contact-us"
                        className="!text-foregroud-primary text-underline--dashed"
                    >
                        Contact us
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-arrow-right ml-2"
                        >
                            <line x1={5} y1={12} x2={19} y2={12} />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                </div>
            </div>


        </section>
    )
}

export default page