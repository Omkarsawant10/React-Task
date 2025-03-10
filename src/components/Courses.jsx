

const courses = [
    { id: 401, name: "React for Beginners", instructor: "John Doe", duration: "6 weeks", price: "$49" },
    { id: 402, name: "Python for Data Science", instructor: "Jane Smith", duration: "8 weeks", price: "$79" },
    { id: 403, name: "Machine Learning Basics", instructor: "Alice Brown", duration: "10 weeks", price: "$99" }
];

function Courses() {
    return (
        <>
        {courses.map((course) => (
            <div key={course.id}>
                <h2>Course Name: {course.name}</h2>
                <p>Instructor: {course.instructor}</p>
                <p>Duration: {course.duration}</p>
                <p>Price: {course.price}</p>
                <hr />
            </div>
        ))}
        </>
    );
}

export default Courses;