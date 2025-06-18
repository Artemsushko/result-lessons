const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
};

const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin(defenderObj) {
    let ourArmyChances = 0;
    const maxChances = Object.keys(defenderObj).length;
    const keys = Object.keys(defenderObj);
    for (const key of keys) {
      if (this[key] > defenderObj[key]) {
        ourArmyChances++;
      }
    }
    return [ourArmyChances, maxChances];
  },

  improveArmy() {
    Object.keys(this).forEach((key) => {
      if (typeof this[key] === 'number') {
        this[key] += 5;
      }
    });
  },

  attack(defenderObj) {
    const [ourArmyChances, maxChances] = this.checkChancesToWin(defenderObj);
    const winPercent = (ourArmyChances / maxChances) * 100;
    if (ourArmyChances / maxChances < 0.7) {
      this.improveArmy();
      console.log(`Наши шансы равны ${winPercent.toFixed(2)} %. Укрепляемся!`);
    } else {
      console.log('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
    }
  },
};

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
