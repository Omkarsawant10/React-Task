import React from "react";

const employees = [
    { id: 301, name: "Alice Johnson", position: "Software Engineer", department: "IT", experience: 5 },
    { id: 302, name: "Bob Smith", position: "Product Manager", department: "Marketing", experience: 8 },
    { id: 303, name: "Charlie Brown", position: "Data Scientist", department: "Analytics", experience: 4 }
];

function Employees() {
    return (
        <>
        {employees.map((emp) => (
            <div key={emp.id}>
                <h2>Name: {emp.name}</h2>
                <p>Position: {emp.position}</p>
                <p>Department: {emp.department}</p>
                <p>Experience: {emp.experience} years</p>
                <hr />
            </div>
        ))}
        </>
    );
}

export default Employees;
