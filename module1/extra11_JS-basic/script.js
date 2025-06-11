function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(heroPlayer, enemyPlayer) {
  const { name: heroName, heatEnemy } = heroPlayer;
  const { name: enemyName, heatHero } = enemyPlayer;
  while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
    const randomInt = getRandomNumberInRange(0, 1);
    randomInt === 0 ? heatEnemy(enemyPlayer) : heatHero(heroPlayer);
  }
  console.log(
    heroPlayer.health <= 0
      ? `${enemyName} победил! У него осталось ${enemyPlayer.health} здоровья`
      : `${heroName} победил! У него осталось ${heroPlayer.health} здоровья`
  );
}

const hero = {
  name: 'Batman',
  health: 100,
  heatEnemy: (enemy) => {
    enemy.health -= 10;
  },
};

const enemy = {
  name: 'Joker',
  health: 100,
  heatHero: (hero) => {
    hero.health -= 10;
  },
};

startGame(hero, enemy);
