const Task = () => {
    return (
        <>
          <Person/>
          <Message/>
          <br />
          <Img/>
          <City/>
          <BookInfo/>
          <CarDetails/>
          <MovieDetails/>
          <CountryDetails/>
          <FoodDetails/>
          <MobileDetails/>
          <AlbumDetails/>
          <LaptopInfo/>
        </>
    )
}
const Person = () => <h2>Omkar Sawant</h2>
const Message = () => {
    return <p>This is my Message</p>
}
const Img = () => {
 return <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" alt="Helmet"></img>
} 

//Example 2
function City() {
  return (
    <>
      <h1>City: Mumbai</h1>
      <h2>Temperature: 30°C</h2>
      <h3>Condition: Sunny</h3>
      <Alert />
    </>
  );
}
const Alert = () => <p>Weather Alert: No alerts</p>;

//Example 3
function BookInfo() {
  return (
    <>
      <h1>Title: React for Beginners</h1>
      <h2>Author: John Smith</h2>
      <h3>Pages: 250</h3>
      <Availability />
    </>
  );
}
const Availability = () => <p>Status: Available</p>;

//Example 4
function CarDetails() {
  return (
    <>
      <h1>Brand: Tesla</h1>
      <h2>Model: Model S</h2>
      <h3>Year: 2022</h3>
      <Feature />
    </>
  );
}
const Feature = () => <p>Feature: Autopilot</p>;

//Example 5
function MovieDetails() {
  return (
    <>
      <h1>Title: Avengers</h1>
      <h2>Genre: Action</h2>
      <h3>Rating: 8.5/10</h3>
      <Review />
    </>
  );
}
const Review = () => <p>Review: Must Watch!</p>;

//Example 6
function CountryDetails() {
  return (
    <>
      <h1>Country: India</h1>
      <h2>Capital: New Delhi</h2>
      <h3>Population: 1.4 Billion</h3>
      <Currency />
    </>
  );
}
const Currency = () => <p>Currency: Indian Rupee (INR)</p>;

//Example 7
function FoodDetails() {
  return (
    <>
      <h1>Dish: Pizza</h1>
      <h2>Type: Italian</h2>
      <h3>Calories: 285 kcal</h3>
      <Taste />
    </>
  );
}
const Taste = () => <p>Taste: Delicious</p>;

//Example 8
function MobileDetails() {
  return (
    <>
      <h1>Brand: Apple</h1>
      <h2>Model: iPhone 15</h2>
      <h3>Storage: 256GB</h3>
      <Battery />
    </>
  );
}
const Battery = () => <p>Battery: 4000mAh</p>;

//Example 9
function AlbumDetails() {
  return (
    <>
      <h1>Album: Random Access Memories</h1>
      <h2>Artist: Daft Punk</h2>
      <h3>Year: 2013</h3>
      <Song />
    </>
  );
}
const Song = () => <p>Hit Song: Get Lucky</p>;

//Example 10
function LaptopInfo() {
  return (
    <>
      <h1>Brand: Dell</h1>
      <h2>Model: XPS 15</h2>
      <h3>RAM: 16GB</h3>
      <Processor />
    </>
  );
}
const Processor = () => <p>Processor: Intel i7</p>;

export default Task;