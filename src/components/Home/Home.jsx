/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
// import { BsBookmark } from 'react-icons/fa';


const Home = () => {
    const [allCourses, setAllCourses] = useState([])
    const [selectedCourses, setSelectedCourses] = useState([])
    const [remaining, setRemaining] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
    

    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllCourses(data))
    }, []) 

    const handleSelectActor =(course) =>{
        const isExist = selectedCourses.find(item =>item.id == course.id)
        let count =course.credit;

        if(isExist){
           return alert('already selected')
        }
        else{
            selectedCourses.forEach(item=>{
                count= count+ item.credit
            })
            console.log(count);
            setSelectedCourses([...selectedCourses, course])
        }

       
    }
    
    return (
        <div>
            <h1 className='text-6xl text-center mt-10 mb-5'>Course Registration</h1>

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
                                    <button onClick={()=>handleSelectActor(course)} className="bg-sky-700 text-white w-full rounded-md h-8">Select</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="cart bg-white w-[280px] h-[500px] rounded-md p-5">
                    <Cart selectedCourses={selectedCourses}></Cart>

                </div>
            </div>
        </div>
    );
};

export default Home;
