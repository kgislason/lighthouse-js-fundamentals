const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

let speed = 20;


const carPassing = (cars, speed) => {
  // takes in an array of car objects,
  // and the speed of a car as it passes the sensor.
  cars.push({
    time: Date.now(),
    speed: speed
  });
  return cars;
};

carPassing(cars, speed);

speed = 80;

carPassing(cars, speed);

console.log(cars);