import "./App.css";
import Cars from "./components/cars";

function App() {
  const car = [
    {
      id: 1,
      model: "Mercedes",
      year: 2019,
      img:
        "https://avto-russia.ru/autos/mercedes/photo/mercedes_a-class_sedan_small.jpg",
    },
    {
      id: 2,
      model: "Bmw",
      year: 2018,
      img:
        "https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2020/05/chrome-image-410754.png",
    },
    {
      id: 3,
      model: "Audi",
      year: 2017,
      img:
        "https://quto.ru/service-imgs/5d/8b/6f/f6/5d8b6ff67b89c.jpeg",
    },
    {
      id: 4,
      model: "Jaguar",
      year: 2020,
      img:
        "https://cars.usnews.com/static/images/Auto/izmo/i157546822/2020_jaguar_xf_angularfront.jpg"
    },
  ];

  return (
    <div className="App">
      {car.map(item => (
        <Cars
          model={item.model}
          year={item.year}
          img={item.img}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default App;
