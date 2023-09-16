/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Cart = ({selectedCourses,remaining, totalCost, totalPrice}) => {
    
    // const totalCredits = selectedCourses.reduce((acc, course) => acc + course.credit, 0);
    // const totalRemaining = selectedCourses.reduce((acc, course) => acc - course.credit, 20);
    // const totalPrice = selectedCourses.reduce((acc, course) => acc + course.price,0);
    console.log(selectedCourses);
    return (
        <div>
            <h3 className="text-center mt-4 mb-4">Credit Hour Remaining {remaining} hr</h3>
            <hr/>
            <h2 className="text-xl font-bold mt-4 mb-8">Course Name</h2>
            
            
            <div className="mb-4">
                <ol>
                    {selectedCourses.map((course, index) => (
                        <li key={course.id}>{index + 1}. {course.title}</li>
                    ))}
                </ol>
            </div>
           
            <hr />
            <p className="mt-4 mb-4">Total Credit Hour : {totalCost} hr

            </p>
            <hr/>
            <h3 className="mt-4 font-bold">Total Price : {totalPrice} USD</h3>
        </div>
    );
};

export default Cart;