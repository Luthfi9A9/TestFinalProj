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
  Grid,
  GridItem,
  Flex,
  Spacer,
  Text,
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
          <Box margin={3} minHeight="100vh">
            <Text as="b">Edit Student</Text>
            <Grid
              templateAreas={`
            "pict pict"
            "fullnam fullnam"
            "addres addres"
            "phone date"
            "gender programStudy"
            `}
              marginTop={3}
            >
              <GridItem area={"pict"} marginBottom={2}>
                <FormLabel htmlFor="">Profile Picture:</FormLabel>
                <img src={profilePicture} alt="Profile Picture" />
              </GridItem>
              <GridItem area={"fullnam"} marginBottom={2}>
                <FormLabel htmlFor="input-name">Fullname:</FormLabel>
                <Input
                  type="text"
                  id="input-name"
                  value={Fullname}
                  onChange={(e) => setFullName(e.target.value)}
                  data-testid="name"
                />
              </GridItem>
              <GridItem area={"addres"} marginBottom={2}>
                <FormLabel htmlFor="input-address">Address:</FormLabel>
                <Input
                  type="text"
                  id="input-address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  data-testid="address"
                />
              </GridItem>
              <GridItem area={"phone"} marginBottom={2}>
                <FormLabel htmlFor="input-PhoneNumber">Phone Number:</FormLabel>
                <Input
                  type="text"
                  id="input-PhoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  data-testid="phoneNumber"
                />
              </GridItem>
              <GridItem area={"date"} marginLeft={3}>
                <FormLabel htmlFor="input-date">Birth Date:</FormLabel>
                <Input
                  type="date"
                  id="input-date"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                  data-testid="date"
                />
              </GridItem>

              <GridItem area={"gender"} marginBottom={2}>
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
              </GridItem>
              <GridItem area={"programStudy"} marginLeft={3}>
                <FormLabel htmlFor="select-program-study">
                  Program Study:
                </FormLabel>
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
                  <option value="Administrasi Publik">
                    Administrasi Publik
                  </option>
                  <option value="Administrasi Bisnis">
                    Administrasi Bisnis
                  </option>
                  <option value="Hubungan Internasional">
                    Hubungan Internasional
                  </option>
                  <option value="Teknik Sipil">Teknik Sipil</option>
                  <option value="Arsitektur">Arsitektur</option>
                  <option value="Matematika">Matematika</option>
                  <option value="Fisika">Fisika</option>
                  <option value="Informatika">Informatika</option>
                </Select>
              </GridItem>
            </Grid>
            <Flex>
              <Button
                type="submit"
                data-testid="edit-btn"
                onClick={handleSubmit}
                color="textColor.baseButton"
                bgColor="bgColor.baseBgButton"
              >
                Edit Student
              </Button>
              <Spacer />
              <Button
                onClick={() => {
                  navigate("/student");
                }}
                color="textColor.baseButton"
                bgColor="bgColor.baseBgButton"
              >
                Back
              </Button>
            </Flex>
          </Box>
        </form>
      )}
      {/* <Link
        to="/student"
        color="textColor.baseButton"
        bgColor="bgColor.baseBgButton"
      >
        Back
      </Link> */}

      <Footer />
    </>
  );
};

export default EditStudent;
