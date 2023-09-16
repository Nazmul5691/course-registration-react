/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Cart = ({selectedCourses}) => {
    
    // const totalCredits = selectedCourses.reduce((acc, course) => acc + course.credit, 0);
    // const totalRemaining = selectedCourses.reduce((acc, course) => acc - course.credit, 20);
    // const totalPrice = selectedCourses.reduce((acc, course) => acc + course.price,0);
    console.log(selectedCourses);
    return (
        <div>
            <h3 className="text-center mt-4 mb-4">Credit Hour Remaining totalRemaining hr</h3>
            <hr/>
            <h2 className="text-xl font-bold mt-4 mb-8">Course Name</h2>
            
            {
                selectedCourses.map(course =>(
                    
                        <li key={course.id}>{course.title}</li>
                    
                ))
            }
            
            <hr />
            <p className="mt-4 mb-4">Total Credit Hour :totalCredits
            {/* {
                selectedCourses.map(course =>(
                    
                    <div>
                        {course.credit}
                    </div>
                
            ))
            } */}

            </p>
            <hr/>
            <h3 className="mt-4 font-bold">Total Price : totalPrice USD</h3>
        </div>
    );
};

export default Cart;