import React from 'react'
import withAuth from '../auth/withAuth';

const RegistrationForm = () => {
    return (
        <div className='py-28 mx-auto'>
            <div className='flex justify-center'>
                
                <div>
                    <h1 className='text-center mb-12'>SOHK REGISTRATION FORM</h1>
                    
                    <div className='flex mb-8'>        
                        <label htmlFor="FullName">FullName:</label>
                        <span className='w-full'>   
                            <input className='w-full outline-none border-b border-black' type="text" name="Full Name" />
                        </span>
                    </div>
                    
                    <div className='flex mb-8'>        
                        <label htmlFor="Residential Address">Residential_Address:</label>
                        <span className='w-full'>   
                            <input className='w-full outline-none border-b border-black' type="text" name="Full Name" />
                        </span>
                    </div>

                    <div className='Gender space-x-4 mb-8'> 
                        <span className='space-x-2'>
                            <label htmlFor="Male">Male</label>
                            <input type="checkbox" name="Male" />
                        </span> 
                        
                        <span className='space-x-2'>
                            <label htmlFor="Female">female</label>
                            <input type="checkbox" name="Female" />
                        </span>
                        
                        <span className='space-x-2 w-full'>    
                            <label htmlFor="Phone Number">Phone Number</label>
                            <input className=' outline-none border-b border-black' type="text" name="Phone Number" />
                        </span>
                    </div>


                    <div className='Nationality space-x-4 mb-8'> 
                        <span className='space-x-2'>      
                            <label htmlFor="Nigerian">Nigerian</label>
                            <input type="checkbox" name="Nigerian" placeholder="nigerian" />
                        </span>
                        
                        <span className='space-x-2'>
                            <label htmlFor="Others">Others</label>
                            <input type="checkbox" name="Others" placeholder="others" />
                        </span>

                        <span className='space-x-2'>     
                            <label htmlFor="Please Specify">Please Specify</label>
                            <input className=' outline-none border-b border-black' type="text" name="Please Specify" placeholder="" />
                        </span>
                    </div>
                    
                    <div className='space-x-4 mb-8'>    
                        <label htmlFor="Age">Age</label>
                        <input className=' outline-none border-b border-black' type="text" name="Age" placeholder="" />

                        <label htmlFor="State Of Origin">State Of Origin</label>
                        <input className=' outline-none border-b border-black' type="text" name="State Of Origin" placeholder="" />

                        <label htmlFor="LGA">LGA</label>
                        <input className=' outline-none border-b border-black' type="text" name="LGA" placeholder="" />
                    </div>

                    <div className='parent/guardian space-x-4 mb-8'>
                        <span className='space-x-2'> 
                            <label htmlFor="parent">parent</label> 
                            <input type="checkbox" name="parent" placeholder="" />
                        </span>
                        
                        <span className='space-x-2'> 
                            <label htmlFor="guardian">guardian</label> 
                            <input type="checkbox" name="guardian" placeholder="" />
                        </span>
                    </div>

                    <div className='flex flex-col mb-8'>
                        <div className='flex mb-8'> 
                            <label htmlFor="parent/guardians name">parent/guardians_name</label> 
                            <span className='w-full'>     
                                <input className='w-full outline-none border-b border-black' type="text" name="parent/guardians name" placeholder="" />
                            </span>
                        </div>
                        
                        <div className='flex mb-8'>
                            <label htmlFor="parent/guardian email">parent/guardian_email</label>
                            <span className='w-full'>  
                                <input className='w-full outline-none border-b border-black' type="text" name="parent/guardian email" placeholder="" />
                            </span>
                        </div>
                        
                        <div className='flex mb-8'> 
                            <label htmlFor="parent/guardian phoneNumber">parent/guardian_phoneNumber</label>
                            <span className='w-full'>  
                                <input className='w-full outline-none border-b border-black' type="text" name="parent/guardian phoneNumber" placeholder="" />
                            </span>
                        </div>

                        <div className='flex mb-8 space-x-4'>   
                            <span className='flex w-full'>  
                                <label htmlFor="parent/guardian signature">parent/guardian_signature</label>
                                <input className='w-full outline-none border-b border-black' type="text" name="parent/guardian signature" placeholder="" />
                            </span>
                            
                            <span className='flex w-full'>   
                                <label htmlFor="Date">Date</label>
                                <input className='w-full outline-none border-b border-black' type="text" name="Date" placeholder="" />
                            </span>
                        </div>
                        
                        
                    </div>

                    <p>
                    The SOHK has a range of thrilling services and facilities. We want to know which interest you.
                    Below are the services & training pricing:
                    </p>

                    <div className='flex flex-col space-y-2 my-4'>      
                        <h3>SERVICES</h3>
                        <ul className='flex space-x-4 '>
                            <li>lawn tennis</li>
                            <li>chess </li>
                            <li>GYM </li>
                            <li>Table Tennis</li>
                            <li>Mini Golf</li>
                            <li>Taekwondo Training</li>
                            <li>Snooker games</li>
                            <li>swimming</li>
                        </ul>
                    </div>

                    <div>
                        <div className='flex flex-col space-y-2 my-4' >
                            <h3>TRAINING PRICE LIST</h3>
                            <ul className='flex space-x-4 '>
                                <li>Children under 5 to 17 years - N150,000 for 10 lessons</li>
                                <li>Adults from 18 years - N250,000 for 10 lessons</li>
                                <li>Female-only sessions - N250,000 for 10 lessons</li>
                            </ul>  
                        </div>
                        
                        <div className='flex flex-col space-y-2 my-4'>
                            <h3>SCHEDULE OF OPERATION</h3>
                            <ul className='flex space-x-4 '>
                                <li>Children 6 years to 17 years - Monday to Friday 2PM to 5PM</li>
                                <li>Adults of all ages - Monday to Saturday 2PM to 6PM</li>
                                <li>Female-only sessions - Monday and Tuesday 5PM to 6PM</li>
                            </ul>
                        </div>
                    </div>

                    <div className='my-8'>
                        <h3 className='text-5xl'>  
                            N15,000
                        </h3>
                        <p>REGISTRATION FEE</p>
                    </div>

                    <div className='flex space-x-4'>    
                        <span>
                            <span>
                            <p>Lessons are booked in blocks of 10 and</p> 
                            <p> auto-renewable unless cancelled in advance</p> 
                            </span>
                        </span>
                        
                        <span>
                            <span>
                            <p>Saturdays and Sundays are open for leisure to all registered members </p> 
                            <p>from 12PM to 5PM without any charges.</p> 
                            </span>
                        </span>
                    </div>


                </div>
                
            </div>
        </div>
  )
}

export default withAuth(RegistrationForm)