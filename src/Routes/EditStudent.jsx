// TODO: answer here
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";

const EditStudent = () => {
  // TODO: answer here
  const navigate = useNavigate();
  const { id } = useParams();
  const [Fullname, setFullName] = useState("");
  const [profilePicture, setprofilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [study, setStudy] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [student, setStudent] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/student/${id}`);
      const data = await response.json();
      setStudent(data);
      setFullName(data.Fullname);
      setprofilePicture(data.profilePicture);
      setAddress(data.address);
      setPhoneNumber(data.phoneNumber);
      setBirth(data.birth);
      setGender(data.gender);
      setStudy(data.study);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Test submit");
    const faculty = getFacultyByProgramStudy(study);
    const updateStudent = {
      ...student,
      fullname: Fullname,
      profilePicture: profilePicture,
      address: address,
      phoneNumber: phoneNumber,
      birthDate: birth,
      gender: gender,
      faculty: faculty,
      programStudy: study,
    };
    const response = await fetch(`http://localhost:3001/student/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateStudent),
    });
    // await response.json();
    navigate("/student");
  };

  return (
    <>
      {/* TODO: answer here */}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <NavBar></NavBar>
          <h1>Edit Student</h1>
          <FormLabel htmlFor="">Profile Picture:</FormLabel>
          <img src={profilePicture} alt="Profile Picture" />
          <FormLabel htmlFor="input-name">Fullname:</FormLabel>
          <Input
            type="text"
            id="input-name"
            value={Fullname}
            onChange={(e) => setFullName(e.target.value)}
            data-testid="name"
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
            data-testid="phoneNumber"
          />

          <FormLabel htmlFor="input-date">Birth Date:</FormLabel>
          <Input
            type="date"
            id="input-date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            data-testid="date"
          />

          <FormLabel htmlFor="select-gender">Gender:</FormLabel>
          <Select
            id="select-gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
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

          <Button type="submit" data-testid="edit-btn" onClick={handleSubmit}>
            Edit Student
          </Button>
        </form>
      )}
      <Link to="/student">Back</Link>
      <Footer />
    </>
  );
};

export default EditStudent;
