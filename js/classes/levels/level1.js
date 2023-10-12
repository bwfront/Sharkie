/**
 * Creates and returns the first level of the game, with a specific set of game objects.
 * 
 * @returns {level} A new instance of the 'level' class containing predefined enemies, background objects, coins, poisons, and an end boss.
 */
function createLevel1() {
  return new level(
    [
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyFish(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly(),
      new EnemyJelly()
    ],
    [new bgWater(0), new bgFondo2(0), new bgFondo1(0), new Light(0), new Floor1(0),new bgWater(1440), new bgFondo2(1440), new bgFondo1(1440), new Floor1(1440), new bgWater(2880), new bgFondo2(2880), new bgFondo1(2880), new Floor1(2880)],
    [
      new Coins(),
      new Coins(),
      new Coins(),
      new Coins(),
      new Coins(),
    ],
    [
      new Poisen(),
      new Poisen(),
      new Poisen(),
      new Poisen(),
      new Poisen(),
      new Poisen(),
      new Poisen(),
      new Poisen(),
      new Poisen(),
      new Poisen(),
      new Poisen(),
      new Poisen(),
      new Poisen(),
      new Poisen(),
    ],
    [new Endboss()]
  );
}
