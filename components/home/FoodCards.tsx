import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function FoodCards() {
  const foodItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: "$12.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Pizza Haven",
    },
    {
      id: 2,
      name: "Sushi Platter",
      price: "$18.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Sakura Sushi",
    },
    {
      id: 3,
      name: "Cheeseburger",
      price: "$9.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Burger Town",
    },
    {
      id: 4,
      name: "Pasta Carbonara",
      price: "$14.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Italian Bistro",
    },
    {
      id: 5,
      name: "Caesar Salad",
      price: "$8.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Healthy Bites",
    },
    {
      id: 6,
      name: "BBQ Ribs",
      price: "$22.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Smokehouse Grill",
    },
    {
      id: 7,
      name: "Taco Trio",
      price: "$10.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "MexiFiesta",
    },
    {
      id: 8,
      name: "Pad Thai",
      price: "$13.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Thai Delight",
    },
    {
      id: 9,
      name: "Chicken Shawarma",
      price: "$11.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Middle East Eats",
    },
    {
      id: 10,
      name: "Pepperoni Pizza",
      price: "$14.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Pizza Haven",
    },
    {
      id: 11,
      name: "Fried Chicken",
      price: "$15.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Crispy Bites",
    },
    {
      id: 12,
      name: "Vegetable Stir Fry",
      price: "$10.49",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Asian Wok",
    },
    {
      id: 13,
      name: "Miso Soup",
      price: "$5.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Sakura Sushi",
    },
    {
      id: 14,
      name: "Falafel Wrap",
      price: "$9.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Middle East Eats",
    },
    {
      id: 15,
      name: "Grilled Salmon",
      price: "$19.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Seafood Shack",
    },
    {
      id: 16,
      name: "Beef Burrito",
      price: "$11.49",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "MexiFiesta",
    },
    {
      id: 17,
      name: "Eggs Benedict",
      price: "$12.49",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Brunch Spot",
    },
    {
      id: 18,
      name: "Chocolate Cake",
      price: "$7.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Sweet Treats",
    },
    {
      id: 19,
      name: "Chicken Biryani",
      price: "$14.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Indian Spice",
    },
    {
      id: 20,
      name: "French Croissant",
      price: "$4.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Parisian Bakery",
    },
  ];

  return (
    <View className="h-full w-11/12 top-48 left-0 right-0 m-auto mt-10">
      <Text className="font-bold m-1">Populer Foods</Text>
      <View className="w-full mt-2 grid grid-cols-3 gap-4">
      {foodItems.map((foods) => (
        <View key={foods.id} className="border-2 border-gray-500 rounded-md items-center" style={{
          marginBottom: 15,
          padding: 10,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#e6e6e6"
        }}>
          <Text>{foods.name}</Text>
          <Text>{foods.price}</Text>
          <Image
            source={{ uri: foods.image }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
          <Text>{foods.shopName}</Text>
          <TouchableOpacity className="absolute w-3 h-3 bg-green-600 rounded-full">
            <Icon name="plus"/>
          </TouchableOpacity>
        </View>
      ))}
      </View>
    </View>
  );
}

export default FoodCards;
