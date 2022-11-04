import React from "react";

const Student = () => {
  return (
    <div className="student">
      <h2 className="stuDet">Student Details</h2>
      <button type="button" className="btn btn-success">
        Add New Student
      </button>
      <table className="table">
        <tr>
          <th>Roll. No</th>
          <th>Name</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>

        <hr />
        <tr>
          <td>17</td>
          <td>Satya</td>
          <td>Computer Science</td>
          <td>August</td>
          <td className="Edit">Edit</td>
        </tr>

        <hr />

        <tr>
          <td>23</td>
          <td>Surya</td>
          <td>Electrical and Electronics</td>
          <td>September</td>
          <td className="Edit">Edit</td>
        </tr>

        <hr />

        <tr>
          <td>27</td>
          <td>Vamsi</td>
          <td>Chemical</td>
          <td>October</td>
          <td className="Edit">Edit</td>
        </tr>
        <hr />
        <tr>
          <td>31</td>
          <td>Srikar</td>
          <td>Information Technology</td>
          <td>May</td>
          <td className="Edit">Edit</td>
        </tr>

        <hr />

        <tr>
          <td>36</td>
          <td>Charan</td>
          <td>Electronics and Communication</td>
          <td>January</td>
          <td className="Edit">Edit</td>
        </tr>

        <hr />

        <tr>
          <td>42</td>
          <td>Ruthwik</td>
          <td>Civil</td>
          <td>June</td>
          <td className="Edit">Edit</td>
        </tr>

        <hr />

        <tr>
          <td>48</td>
          <td>Saketh</td>
          <td>Mechatronics</td>
          <td>April</td>
          <td className="Edit">Edit</td>
        </tr>
      </table>
    </div>
  );
};

export default Student;
