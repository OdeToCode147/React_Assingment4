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
        </tr>

        <hr />
        <tr>
          <td>17</td>
          <td>Satya</td>
          <td>Computer Science</td>
          <td>August</td>
        </tr>

        <hr />

        <tr>
          <td>23</td>
          <td>Surya</td>
          <td>EEE</td>
          <td>September</td>
        </tr>

        <hr />

        <tr>
          <td>27</td>
          <td>Vamsi</td>
          <td>Chemical</td>
          <td>October</td>
        </tr>
      </table>
    </div>
  );
};

export default Student;
