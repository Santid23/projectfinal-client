import React from 'react';
import { Button as ChakraButton } from "@chakra-ui/react"
import axios from 'axios';

class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { id } = this.props;
    axios.delete(`/competitions/delete/${id}`)
      .then(response => {
        console.log("Competición eliminada con éxito");
       })
      .catch(error => {
        console.error("Error al eliminar la competición:", error);
      });
  }

  render() {
    return (
      <ChakraButton _hover={{
        backgroundColor: "brown",
      }}
      minH={"56px"}
      width={"100%"}
      fontSize={"20px"}
      marginTop={"54px"}
      borderRadius={"15px"}
      backgroundColor={"#FEC202"}
      fontWeight={"bold"}
      color={"white"}
      type="delete"
     onClick={this.handleDelete}>Eliminar Competición</ChakraButton>
    );
  }
}

export default DeleteButton;
