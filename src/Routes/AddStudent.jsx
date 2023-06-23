// TODO: answer here
import { useState, useEffect } from "react";
import React from "react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";

const AddStudent = () => {
  // TODO: answer here
  const navigate = useNavigate();
  const [Fullname, setFullName] = useState("");
  const [profilePicture, setprofilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [study, setStudy] = useState("");

  const getFacultyByProgramStudy = (study) => {
    switch (study) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        return "Fakultas Ekonomi";
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        return "Fakultas Ilmu Sosial dan Politik";
      case "Teknik Sipil":
      case "Arsitektur":
        return "Fakultas Teknik";
      case "Matematika":
      case "Fisika":
      case "Informatika":
        return "Fakultas Teknologi Informasi dan Sains";
      default:
        return "";
    }
  };

  const addDataStudent = async () => {
    const faculty = getFacultyByProgramStudy(study);
    const addstudent = {
      fullname: Fullname,
      profilePicture: profilePicture,
      address: address,
      phoneNumber: phoneNumber,
      birthDate: birth,
      gender: gender,
      faculty: faculty,
      programStudy: study,
    };

    const response = await fetch(`http://localhost:3001/student`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addstudent),
    });
    await response.json();
    navigate("/student");
  };

  // useEffect(() => {
  //   addDataStudent();
  // }, []);

  const handleSubmit = (el) => {
    el.preventDefault();
    addDataStudent();
  };

  return (
    <>
      {/* TODO: answer here */}
      <Box minHeight="100vh">
        <NavBar></NavBar>
        <form onSubmit={handleSubmit} padding="5px">
          <FormControl>
            <FormLabel htmlFor="input-name">Fullname:</FormLabel>
            <Input
              type="text"
              id="input-name"
              value={Fullname}
              onChange={(e) => setFullName(e.target.value)}
              required
              data-testid="name"
            />

            <FormLabel htmlFor="input-picture">profile Picture:</FormLabel>
            <Input
              type="text"
              id="input-picture"
              value={profilePicture}
              onChange={(e) => setprofilePicture(e.target.value)}
              required
              data-testid="profilePicture"
            />

            <FormLabel htmlFor="input-address">Address:</FormLabel>
            <Input
              type="text"
              id="input-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              data-testid="address"
            />

            <FormLabel htmlFor="input-PhoneNumber">Phone Number:</FormLabel>
            <Input
              type="text"
              id="input-PhoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              data-testid="phoneNumber"
            />

            <FormLabel htmlFor="input-date">Birth Date:</FormLabel>
            <Input
              type="date"
              id="input-date"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
              required
              data-testid="date"
            />

            <FormLabel htmlFor="select-gender">Gender:</FormLabel>
            <Select
              id="select-gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              data-testid="gender"
            >
              <option value="">Pilih Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>

            <FormLabel htmlFor="select-program-study">Program Study:</FormLabel>
            <Select
              id="select-program-study"
              value={study}
              onChange={(e) => setStudy(e.target.value)}
              required
              data-testid="prody"
            >
              <option value="">Pilih Mata Kuliah</option>
              <option value="Ekonomi">Ekonomi</option>
              <option value="Manajemen">Manajemen</option>
              <option value="Akuntansi">Akuntansi</option>
              <option value="Administrasi Publik">Administrasi Publik</option>
              <option value="Administrasi Bisnis">Administrasi Bisnis</option>
              <option value="Hubungan Internasional">
                Hubungan Internasional
              </option>
              <option value="Teknik Sipil">Teknik Sipil</option>
              <option value="Arsitektur">Arsitektur</option>
              <option value="Matematika">Matematika</option>
              <option value="Fisika">Fisika</option>
              <option value="Informatika">Informatika</option>
            </Select>
            {/* button addstudent */}
            <Button
              type="submit"
              data-testid="add-btn"
              color="textColor.baseButton"
              bgColor="bgColor.baseBgButton"
            >
              Add student
            </Button>
            {/* button back to student */}
            <Button
              onClick={() => {
                navigate("/student");
              }}
              color="textColor.baseButton"
              bgColor="bgColor.baseBgButton"
            >
              Back
            </Button>
          </FormControl>
        </form>
        <Footer />
      </Box>
    </>
  );
};

export default AddStudent;
