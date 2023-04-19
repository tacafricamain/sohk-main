/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'

export default function DroneSafetyDay() {
    return (
        <div className="container w-full mx-auto pt-20 ">
            <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal pb-40">
                <div className="font-sans">
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-900">Drone Safety Day: Promoting Safe and Responsible Drone Flying</h1>
                </div>
                <img
                    className="w-full"
                    src="https://res.cloudinary.com/tacafrica/image/upload/v1681895627/logos/WhatsApp_Image_2023-04-14_at_12.50.03_PM_dh5tha.jpg"
                    alt="Drone Safety Day"
                    />
                {/* https://res.cloudinary.com/tacafrica/image/upload/v1681895627/logos/WhatsApp_Image_2023-04-14_at_12.50.03_PM_dh5tha.jpg */}
                <div className=" font-sans">Drones have become an increasingly popular gadget for recreational and commercial purposes. These unmanned aerial vehicles offer exciting possibilities for photography, videography, delivery, search and rescue operations, and more. However, with the increased use of drones comes the need for drone safety. The Federal Aviation Administration (FAA) recognizes the importance of safe drone operations, and thus, every year, it hosts Drone Safety Day (DSD).<h2 className="text-xl mt-4 md:text-2xl font-bold text-blue-900">Purpose of Drone Safety Day</h2>DSD is an annual campaign designed to raise awareness and educate the drone community on the importance of flying safely. The event aims to highlight the societal, economic, and safety benefits of safe drone operations. Businesses, schools, organizations, and individuals can use this opportunity to share their experiences and kick off new safety initiatives. Drone enthusiasts can share their passion for flying with their local community through local and nationwide events.<h2 className="text-xl mt-4 md:text-2xl font-bold text-blue-900">Safety Message</h2>The right way to fly a drone is the safe way, whether flying for recreation or business purposes. The FAA encourages all drone operators to follow these guidelines:
                    <br className="mb-4"/>
                    <ol className="space-y-4">
                        <li>
                            <b className="mt-2 text-blue-900">Register your drone:</b>
                            All drones not flown for recreational purposes must be registered, regardless of weight. Drones flown recreationally must be registered if they weigh more than 250 grams. You can register your drone through the FAA DroneZone.</li>
                        <li>
                            <b className="mt-2 text-blue-900">Interact with others:</b>
                            Join a local organization or FAA-recognized Community Based Organization. Engage in online forums.</li>
                        <li>
                            <b className="mt-2 text-blue-900">Gain knowledge:</b>
                            Learn about drone safety and rules at faa.gov/uas. Check the airspace prior to takeoff through the B4UFLY app or an FAA-Approved LAANC UAS Service Supplier.</li>
                        <li>
                            <b className="mt-2 text-blue-900">
                                Have a safety plan:</b>
                            {/* <!-- --> */}
                            {` Don't assume the flight will go as planned. Know what you'll do if the weather changes or other aircraft or people get close. Check your drone pre- and post-flight to ensure it's safe to fly. Ensure you have approval to fly in controlled airspace through an FAA-Approved LAANC UAS Service Supplier or the FAA DroneZone.`}</li>
                        <li>
                            <b className="mt-2 text-blue-900">
                                TRUST and Train:
                            </b>
                            {`Recreational flyers only need to pass TRUST once, prior to flying. It's the law, and you may take the free online test through any of the FAA approved test administrators.`}</li>
                    </ol>
                    <h2 className="text-xl md:text-2xl font-bold text-blue-900">Focus Areas</h2>The event highlights five focus areas:
                    <br className="mb-4"/>
                    <ol className="space-y-4">
                        <li>
                            <b className="mt-2 text-blue-900">
                                Education –
                            </b>
                            Informing the public on the safe operation of drones, fostering greater public understanding about the commercial and recreational uses of drones, and highlighting how drones are being used in education.</li>
                        <li>
                            <b className="mt-2 text-blue-900">
                                Economics –
                            </b>
                            Highlighting the economic, societal, and safety benefits of using drone technologies. For example, utilizing a drone to inspect infrastructure that would be more dangerous for a human to inspect (i.e., bridges, towers, power lines, etc.).</li>
                        <li>
                            <b className="mt-2 text-blue-900">Equity –
                            </b>
                            Opening opportunities for all operators. Drones offer an accessible pathway into aviation. Drones provide more opportunities for historically excluded communities to be part of the aviation community, including a lower cost of entry.</li>
                        <li>
                            <b className="mt-2 text-blue-900">
                                Environment –
                            </b>
                            Fostering greater public understanding of the environmental and sustainability benefits of drone technologies. From reforestation to monitoring wildlife populations, there are countless ways to engage with our environment using drones.</li>
                        <li>
                            <b className="mt-2 text-blue-900">
                                Emergencies –
                            </b>
                            Highlighting how drones are utilized in emergency situations such as natural disasters, search and rescue, firefighting, public safety, and other uses. Attendees can also learn about the FAA process to quickly approve drone flights in emergency situations.</li>
                    </ol>How to Participate
                    <br className="mb-4"/>
                </div>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLScQ6zSExRg5QC_FAJ1vmUgaV3LebWT1IA0D49WqlmbUEVoFvw/viewform' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Follow this link to register</a>
                <img
                    className="w-full"
                    src="https://res.cloudinary.com/tacafrica/image/upload/v1681896179/logos/DSD_Invite_Flyer-04_apg8fd.png"
                    alt="Drone Safety Day"
                    />
            </div>
        </div>
    )
}
