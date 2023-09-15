/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// import { BsBookmark } from 'react-icons/fa';


const Home = () => {
    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllCourses(data))
    }, []) 

    return (
        <div>
            <h1 className='text-6xl text-center mt-10 mb-5'>Vite + React</h1>

            <div className='container flex w-11/12 mx-auto justify-between'>
                <div className="home-container grid grid-cols-3 gap-4">
                    {
                        allCourses.map((course, idx) => (
                            <div key={idx} className="card-container w-[300px] h-[370px] p-3 bg-white text-black rounded-md">
                                <div className=''>
                                    <img className="w-full mb-2" src={course.cover_img} alt="" />
                                    <h2 className="font-bold">{course.title}</h2>
                                    <p className="mb-4 mt-2"><small>{course.details}</small></p>
                                    <div className="flex justify-between px-6 mb-5">
                                        <p className="text-[16px]"><small><span className="mr-2">$</span>Price: {course.price}</small></p>
                                        <div className="flex">
                                            <div className="text-xs pt-2 mr-3">
                                               {/* <p><BsBookmark></BsBookmark></p> */}
                                            </div>
                                            <div>
                                                <p><small> Credit: {course.credit}hr</small></p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <button className="bg-sky-700 text-white w-full rounded-md h-8">Select</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="cart">
                    <h3>Credit Hour Remaining hr</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;
