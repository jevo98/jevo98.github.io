$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(450, 400, 90, 120, "darkblue");
    createPlatform(200, 200, 100, 100, "purple");
    createPlatform(750, 240, 80, 70, "purple");
    createPlatform(950, 600,200, 90, "darkblue");
    createPlatform(1200, 150, 150, 100, "purple");


    // TODO 3 - Create Collectables
    createCollectable("diamond", 400, 500, 0.5, 0.7);
    createCollectable("diamond", 800, 200, 0.5, 0.7);
    createCollectable("diamond", 1200, 100, 0.5, 0.7);
   

    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 100);
    createCannon("right", 300, 500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
