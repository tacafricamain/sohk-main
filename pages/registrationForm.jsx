/* eslint-disable react/display-name */
    import React, {useEffect, useState} from 'react'
    import withAuth from '../auth/withAuth';
    import {addDoc, collection} from 'firebase/firestore';
    import {db} from '../firebaseConfig';
    import Button from '../components/Button';
    import SuccessPopUp from '../components/successPopUp';

    const DynamicPrint = () => {
        if (window != undefined && window != null) {
            window.print();
        }
    }

    const Form = React.forwardRef((props, ref) => {

        const registrationRef = collection(db, 'registration')

        const [value, setValue] = useState({
            FullName: '',
            Residential_Address: '',
            gender: '',
            phoneNumber: '',
            nationality: '',
            countryName: '',
            age: '',
            state_of_origin: '',
            LGA: '',
            parent_guardian: null,
            parent_guardians_name: '',
            parent_guardian_email: '',
            parent_guardian_phoneNumber: '',
            parent_guardian_signature: '',
            date: ''
        })

        const {
            FullName,
            Residential_Address,
            gender,
            phoneNumber,
            nationality,
            countryName,
            age,
            state_of_origin,
            LGA,
            parent_guardian,
            parent_guardians_name,
            parent_guardian_email,
            parent_guardian_phoneNumber,
            parent_guardian_signature,
            date
        } = value

        const register = async () => {
            await addDoc(registrationRef, {
                FullName,
                Residential_Address,
                gender,
                phoneNumber,
                nationality,
                countryName,
                age,
                state_of_origin,
                LGA,
                parent_guardian,
                parent_guardians_name,
                parent_guardian_email,
                parent_guardian_phoneNumber,
                parent_guardian_signature,
                date
            }).then(() => {
                console.log('success')
                setShowModal(true)
            }).catch((e) => {
                console.log(e.message)
            })
        }

        const handleSelect = (e, item) => {
            setValue((prev) => {
                return {
                    ...prev,
                    [item]: e.target.value
                }
            })
        }

        const handleValueChange = (e) => {
            const {name, value} = e.target
            setValue((prev) => {
                return {
                    ...prev,
                    [name]: value
                }
            })
        }

        const [showModal, setShowModal] = useState(false)
        // console.log(  value.gender, value.nationality, value.parent_guardian )

        return (
            <div ref={ref} className='py-28 mx-auto'>
                <SuccessPopUp showModal={showModal}
                    setShowModal={setShowModal}/>
                <div className='flex flex-col md:flex-row p-2 '>

                    <div className='mx-auto w-10/12 print:h-[200vh] print:w-full print:inline-block print:overflow-visible'>
                        <div className='flex justify-end'>            
                            <div>
                                <a onClick={DynamicPrint}>
                                    <Button text={'Print'}/>
                                </a>
                            </div>
                        </div>
                        <h1 className='text-center mb-12'>SOHK REGISTRATION FORM</h1>

                        <div className='flex mb-8 pr-4'>
                            <label htmlFor="FullName">FullName:</label>
                            <span className='w-full'>
                                <input className='w-full outline-none border-b border-black ml-4' type="text" name="FullName"
                                    value={
                                        value.FullName
                                    }
                                    onChange={handleValueChange}/>
                            </span>
                        </div>

                        <div className='flex mb-8 pr-4'>
                            <label htmlFor="Residential Address">Residential_Address:</label>
                            <span className='w-full'>
                                <input className='w-full outline-none border-b border-black ml-4' type="text" name="Residential_Address"
                                    value={
                                        value.Residential_Address
                                    }
                                    onChange={handleValueChange}/>
                            </span>
                        </div>

                        <div className='Gender mb-8 pr-4 flex flex-col md:flex-row'>

                            <span className='space-x-4 mb-8'>
                                <select value={
                                        value.gender
                                    }
                                    onChange={
                                        (e) => handleSelect(e, 'gender')
                                    }
                                    id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5  ">
                                    <option selected>Gender</option>
                                    <option value="FeMale">FeMale</option>
                                    <option value="Male">Male</option>
                                </select>
                            </span>

                            <span className='w-full md:ml-4 pt-2'>
                                <label className='pt-2' htmlFor="Phone Number">Phone Number</label>
                                <input className=' outline-none border-b border-black ml-4' type="text" name="phoneNumber"
                                    value={
                                        value.phoneNumber
                                    }
                                    onChange={handleValueChange}/>
                            </span>

                        </div>


                        <div className='Nationality md:space-x-4 mb-8 flex flex-col md:flex-row '>
                            <span className='space-x-2 pt-2 mb-8'>
                                <select value={
                                        value.nationality
                                    }
                                    onChange={
                                        (e) => handleSelect(e, 'nationality')
                                    }
                                    id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5  ">
                                    <option selected>Nationality</option>
                                    <option value="Nigerian">Nigerian</option>
                                    <option value="Others">Others</option>
                                </select>
                            </span>


                            <span className='space-x-2'>
                                <label htmlFor="Please Specify">Please Specify</label>
                                <input className=' outline-none border-b border-black ml-4' type="text" name="countryName" placeholder=""
                                    value={
                                        value.countryName
                                    }
                                    onChange={handleValueChange}/>
                            </span>
                        </div>

                        <div className=' mb-8 flex flex-col md:flex-row justify-between'>
                            <div className='space-y-4'>
                                <label className='' htmlFor="Age">Age</label>
                                <input className=' outline-none border-b border-black ml-4' type="text" name="age" placeholder=""
                                    value={
                                        value.age
                                    }
                                    onChange={handleValueChange}/>
                            </div>

                            <div className='space-y-4'>
                                <label htmlFor="State Of Origin">State Of Origin</label>
                                <input className=' outline-none border-b border-black ml-4' type="text" name="state_of_origin" placeholder=""
                                    value={
                                        value.state_of_origin
                                    }
                                    onChange={handleValueChange}/>
                            </div>

                            <div className='space-y-4'>
                                <label htmlFor="LGA">LGA</label>
                                <input className=' outline-none border-b border-black ml-4' type="text" name="LGA" placeholder=""
                                    value={
                                        value.LGA
                                    }
                                    onChange={handleValueChange}/>
                            </div>
                        </div>

                        <div className='parent/guardian space-x-4 mb-8'>


                            <span className='space-x-2 pt-2'>
                                <select value={
                                        value.parent_guardian
                                    }
                                    onChange={
                                        (e) => handleSelect(e, 'parent_guardian')
                                    }
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5  ">
                                    <option selected>Parent/Guardian</option>
                                    <option value="Parent">Parent</option>
                                    <option value="Guardian">Guardian</option>
                                </select>
                            </span>

                        </div>

                        <div className='flex flex-col mb-8'>
                            <div className='flex mb-8'>
                                <label htmlFor="parent/guardians name">parent/guardians_name</label>
                                <span className='w-full'>
                                    <input className='w-full  outline-none border-b border-black ml-4' type="text" name="parent_guardians_name" placeholder=""
                                        value={
                                            value.parent_guardians_name
                                        }
                                        onChange={handleValueChange}/>
                                </span>
                            </div>

                            <div className='flex mb-8'>
                                <label htmlFor="parent/guardian email">parent/guardian_email</label>
                                <span className='w-full'>
                                    <input className='w-full  outline-none border-b border-black ml-4' type="text" name="parent_guardian_email" placeholder=""
                                        value={
                                            value.parent_guardian_email
                                        }
                                        onChange={handleValueChange}/>
                                </span>
                            </div>

                            <div className='flex mb-8'>
                                <label htmlFor="parent/guardian phoneNumber">parent/guardian_phoneNumber</label>
                                <span className='w-full'>
                                    <input className='w-full  outline-none border-b border-black ml-4' type="text" name="parent_guardian_phoneNumber" placeholder=""
                                        value={
                                            value.parent_guardian_phoneNumber
                                        }
                                        onChange={handleValueChange}/>
                                </span>
                            </div>

                            <div className='flex flex-col mb-8 space-x-4'>
                                <span className='flex w-full mb-8'>
                                    <label htmlFor="parent/guardian signature">parent/guardian_signature</label>
                                    <input className='w-full  outline-none border-b border-black ml-4' type="text" name="parent_guardian_signature" placeholder=""
                                        value={
                                            value.parent_guardian_signature
                                        }
                                        onChange={handleValueChange}/>
                                </span>

                                <span className='flex w-full'>
                                    <label htmlFor="Date">Date</label>
                                    <input className='w-full  outline-none border-b border-black ml-4' type="text" name="date" placeholder=""
                                        value={
                                            value.date
                                        }
                                        onChange={handleValueChange}/>
                                </span>
                            </div>

                            <div className='flex space-x-8'>
                                <div>
                                    <a onClick={register}>
                                        <Button text={'Register'}/>
                                    </a>
                                </div>
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
                                <li>chess
                                </li>
                                <li>GYM
                                </li>
                                <li>Table Tennis</li>
                                <li>Mini Golf</li>
                                <li>Taekwondo Training</li>
                                <li>Snooker games</li>
                                <li>swimming</li>
                            </ul>
                        </div>

                        <div>
                            <div className='flex flex-col space-y-2 my-4'>
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

                        <div className='flex flex-row space-x-4'>
                            <span>
                                <span>
                                    <p>Lessons are booked in blocks of 10 and</p>
                                    <p>
                                        auto-renewable unless cancelled in advance</p>
                                </span>
                            </span>

                            <span>
                                <span>
                                    <p>Saturdays and Sundays are open for leisure to all registered members
                                    </p>
                                    <p>from 12PM to 5PM without any charges.</p>
                                </span>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    )
    
    
    class RegistrationForm extends React.Component {
        render() {
            return (
                <Form />
                )
            }
    }
        
export default withAuth(RegistrationForm)