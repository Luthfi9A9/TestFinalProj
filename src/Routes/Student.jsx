// TODO: answer here
import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Box,
  Select,
  Link,
} from "@chakra-ui/react";

const Student = () => {
  // TODO: answer here
  const [students, setStudents] = useState([]);
  const [filterStudent, setFilterStudent] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const respons = await fetch(`http://localhost:3001/student`);
    const data = await respons.json();
    setStudents(data);
    setFilterStudent(data);
  };

  const deleteStudents = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
    }).then(() => {
      const update = students.filter((student) => student.id !== id);
      setStudents(update);
      setFilterStudent(update);
    });
  };

  useEffect(() => {
    filterStudents();
  }, [filter]);

  const filterStudents = () => {
    if (filter === "All") {
      setFilterStudent(students);
    } else {
      const filtered = students.filter((student) => student.faculty === filter);
      setFilterStudent(filtered);
    }
  };

  return (
    <>
      {/* TODO: answer here */}
      <Box minHeight="100vh">
        <Navbar></Navbar>
        <Box minWidth="350px" maxWidth="500px" textAlign="center">
          <h1>Student</h1>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            data-testid="filter"
          >
            <option value="All">All</option>
            <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
            <option value="Fakultas Ilmu Sosial dan Politik">
              Fakultas Ilmu Sosial dan Politik
            </option>
            <option value="Fakultas Teknik">Fakultas Teknik</option>
            <option value="Fakultas Teknologi Informasi dan Sains">
              Fakultas Teknologi Informasi dan Sains
            </option>
          </Select>
          <TableContainer>
            <Table id="table-student">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Full Name</Th>
                  <Th>Faculty</Th>
                  <Th>Program Study</Th>
                  <Th>Option</Th>
                </Tr>
              </Thead>
              <Tbody id="student-data">
                {filterStudent.length > 0 ? (
                  filterStudent?.map((student, index) => (
                    <Tr className="student-data-row" key={student.id}>
                      <Td>{index + 1}</Td>
                      <Td>
                        <Link to={`/student/${student.id}`}>
                          {student.fullname}
                        </Link>
                      </Td>
                      <Td>{student.faculty}</Td>
                      <Td>{student.programStudy}</Td>
                      <Td id="core-delete">
                        <input
                          onClick={() => deleteStudents(student.id)}
                          data-testid={`delete-${student.id}`}
                          value="Delete"
                          type="submit"
                          className="delete-btn"
                        ></input>
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <p>Loading ...</p>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Student;
