function createLevel1() {
  return new level(
    [new EnemyFish(), new EnemyFish(), new EnemyFish()],
    [new bgWater(), new bgFondo2(), new bgFondo1(), new Light(), new Floor1()],
    [
      new Coins(), new Coins(), new Coins(), new Coins(),
      new Coins(), new Coins(), new Coins(), new Coins()
    ],
    [
      new Poisen(), new Poisen(), new Poisen(), new Poisen(),
      new Poisen(), new Poisen()
    ],
    [new Endboss()]
  );
}

