class CarService {
  constructor(name, workingHours) {
    this.name = name;
    this.workingHours = workingHours || CarService.DefaultWorkingHours;
  }

  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
  };

  repairCar(carName) {
    if (!carName) {
      console.error(
        'Вам необходимо указать название машины, чтобы ее отремонтировать'
      );
      return;
    }
    const currentHours = new Date().getHours();
    const workingHoursFrom = Number(this.workingHours.from.split(':')[0]);
    const workingHoursTill = Number(this.workingHours.till.split(':')[0]);
    console.log(
      currentHours >= workingHoursFrom && currentHours < workingHoursTill
        ? `Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`
        : `К сожалению, мы сейчас закрыты. Приходите в ${this.workingHours.from}`
    );
  }
}

const carService = new CarService('RepairCarNow', {
  from: '8:00',
  till: '20:00',
});
carService.repairCar('BMW');
