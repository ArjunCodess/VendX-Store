"use client"

import React from "react"

export default function Success() {
    return (
        <>
            <section className="py-12 md:py-24 lg:py-32 w-full px-4 sm:px-6 lg:px-8 h-[75vh] flex justify-center items-center">
                <div className="container px-4 md:px-6 flex flex-col items-center justify-between gap-8">
                    <div className="space-y-4 text-center">
                        <div className="inline-block rounded-lg bg-green-100 px-3 py-1 font-medium text-green-600">
                            Payment Successful
                        </div>
                        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
                            Thank you for your purchase! 🎉
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}