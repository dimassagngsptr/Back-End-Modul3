import { Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const Verify = () => {
   const { token } = useParams();
   console.log(token);
   const navigate = useNavigate();
   const handleSubmit = async () => {
      try {
         const response = await axios.patch(
            `http://localhost:2000/users/verified/`,
            {},
            {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            }
         );
         window.location.reload();
         navigate("/");
         console.log(response.data);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Box>
         <Heading>Verifikasi akun anda</Heading>
         <Button onClick={handleSubmit}>Klik disini</Button>
      </Box>
   );
};
