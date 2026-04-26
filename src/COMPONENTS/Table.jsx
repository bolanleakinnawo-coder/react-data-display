import React from "react";
import { useState } from "react";

const Table = () => {
  const [studentDetails, setstudentDetails] = useState([]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [course, setCourse] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleCourse = (e) => setCourse(e.target.value);
  const handleLevel = (e) => setLevel(e.target.value);

  const deleteDetails = (index) => {
    console.log(studentDetails);

    console.log(index);
    const newarray = [...studentDetails];
    newarray.splice(index, 1);

    setstudentDetails(newarray);
    console.log(newarray);
  };

  const handleSubmit = () => {
    if (!name || !level || !course) {
      return alert("All fields are required");
    }

    const detailsObj = {
      name,
      level,
      course,
    };

    setstudentDetails([...studentDetails, detailsObj]);

    setName("");
    setCourse("");
    setLevel("");

    console.log(studentDetails);
  };

  return (
    <>
      <div className="container">
        <input
          value={name}
          onChange={handleName}
          placeholder="Enter your Name.."
        />

        <input
          value={course}
          onChange={handleCourse}
          placeholder="Enter your course.."
        />

        <input
          value={level}
          onChange={handleLevel}
          placeholder="Enter your level.."
        />
        <button onClick={handleSubmit}>Submit</button>

        <table>
          <thead>
            <tr>
              <td>SN</td>
              <td>Name</td>
              <td>Course</td>
              <td>Level</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {studentDetails.map((details, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{details.name}</td>
                <td>{details.course}</td>
                <td>{details.level}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => deleteDetails(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
