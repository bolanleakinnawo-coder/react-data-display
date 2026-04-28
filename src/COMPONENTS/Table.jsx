import React from "react";
import { ToastContainer, toast } from "react-toastify";

import { useState } from "react";

const Table = () => {
  const [k, setK] = useState(null);
  const [studentDetails, setstudentDetails] = useState([]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [course, setCourse] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleCourse = (e) => setCourse(e.target.value);
  const handleLevel = (e) => setLevel(e.target.value);

  const editDetails = (index) => {
    setIsEditing(true);
    setName(studentDetails[index].name);
    setLevel(studentDetails[index].level);
    setCourse(studentDetails[index].course);

    setK(index);
  };
  const handleEdit = () => {
    if (!name || !level || !course) {
      return toast.error("Kindly fill all fields");
    }

    const updatedDetails = [...studentDetails];

    updatedDetails[k] = {
      name,
      course,
      level,
    };

    setstudentDetails(updatedDetails);
    setIsEditing(false);

    setName("");
    setCourse("");
    setLevel("");

    toast.success("Data updated successfully");
  };
  const deleteDetails = (index) => {
    // console.log(studentDetails);

    // console.log(index);
    // const newarray = [...studentDetails];
    // newarray.splice(index, 1);

    // setstudentDetails(newarray);
    // console.log(newarray);

    setstudentDetails(studentDetails.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!name || !level || !course) {
      return toast.error("kindly fill all field");
    }

    const detailsObj = {
      name,
      level,
      course,
    };
    toast.success("Data added successfully");

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

        {isEditing ? (
          <button className="update" onClick={handleEdit}>
            Update
          </button>
        ) : (
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        )}

        <ToastContainer />

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
                  <button onClick={() => editDetails(index)}>Edit</button>
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
