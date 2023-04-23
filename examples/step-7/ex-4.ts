interface VehicleS7EX4 {
  run: number
}

function kmToMiles<T extends VehicleS7EX4>(vehicle: T): T {
  vehicle.run = vehicle.run * 0.62
  return vehicle
}

interface LCV extends VehicleS7EX4 {
  capacity: number;
}

// const vehicle = kmToMiles(new Vehicle());
// const lcv = kmToMiles(new LCV());
kmToMiles({ run: 1 })

function logId<T extends string | number, Y>(id: T, additionalData: Y): { id: T, data: Y } {
  console.log(id)
  console.log(additionalData)
  return {
    id,
    data: additionalData
  }
}

/* Ограничение generic - мы не можем работать с определенным топом и обращаться к его свойствам*/