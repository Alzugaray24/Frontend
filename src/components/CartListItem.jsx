/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"; // Asegúrate de importar React
import { Box, Text, Image, Button, useToast } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Importa Link desde react-router-dom
import cartService from "../services/cartServices";

const CartListItem = ({ item }) => {
  const [deleted, setDeleted] = useState(false); // Estado para controlar si se ha eliminado un producto
  const toast = useToast(); // Hook para mostrar notificaciones

  const handleRemove = async () => {
    try {
      await cartService.removeFromCart(item.product._id);
      showToast(
        "Producto eliminado",
        `El producto "${item.product.title}" ha sido eliminado del carrito.`
      ); // Muestra el mensaje de éxito
      setTimeout(() => {
        window.location.reload(); // Refresca la página después de 2 segundos
      }, 1000);
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const showToast = (title, description) => {
    toast({
      title: title,
      description: description,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      mb="4"
      display="flex"
      alignItems="center"
    >
      {/* Imagen del producto */}
      <Box flex="1" mr="4" objectFit="contain">
        <Image src={item.product.thumbnail} alt={item.product.title} />
      </Box>

      {/* Información del producto */}
      <Box flex="3">
        <Text fontWeight="bold">{item.product.title}</Text>
        <Text>{item.product.description}</Text>
        <Text>Price: {item.product.price}</Text>
        <Text>Quantity: {item.quantity}</Text>
      </Box>

      {/* Botón de eliminar */}
      <Button colorScheme="red" onClick={handleRemove}>
        Eliminar
      </Button>

      {/* Mensaje de éxito */}
      {deleted && (
        <Text ml="2" color="green.500">
          Producto eliminado con éxito
        </Text>
      )}
    </Box>
  );
};

export default CartListItem;
