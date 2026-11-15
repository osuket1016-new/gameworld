
function isValidDate(dateString) {
  if (typeof dateString !== "string") {
    return false;
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return false;
  }

  const date = new Date(dateString + "T00:00:00Z");

  if (Number.isNaN(date.getTime())) {
    return false;
  }

  return date.toISOString().slice(0, 10) === dateString;
}

function validateGameDatabase(games) {
  const errors = [];
  const ids = new Set();

  games.forEach((game, index) => {
    if (!game.id) {
      errors.push(`Game ${index + 1}: Missing ID`);
    }

    if (!game.name) {
      errors.push(`Game ${index + 1}: Missing name`);
    }

    if (!game.developer) {
      errors.push(`${game.name || "Unknown"}: Missing developer`);
    }

    if (game.id && ids.has(game.id)) {
      errors.push(`${game.name}: Duplicate ID`);
    }

    if (game.id) {
      ids.add(game.id);
    }

    if (!game.availability) {
      errors.push(`${game.name}: Missing availability data`);
    }
    
const validStatuses = [
  "available",
  "restricted",
  "unavailable",
  "unverified"
];

if (
  game.availability &&
  typeof game.availability === "object"
) {
  Object.entries(game.availability).forEach(
    ([country, region]) => {
      if (
        !region ||
        !validStatuses.includes(region.status)
      ) {
        errors.push(
          `${game.name} - ${country}: Invalid region status`
        );
      }
    }
  );
}

if (
  game.availability &&
  typeof game.availability === "object"
) {
  Object.entries(game.availability).forEach(
    ([country, region]) => {
      if (!region || !Array.isArray(region.evidenceSources)) {
        return;
      }

      region.evidenceSources.forEach((source, index) => {
        
if (
  source.verificationStatus === "verified" &&
  !source.checkedAt
) {
  errors.push(
    `${game.name} - ${country} - Source ${index + 1}: Verified without checkedAt`
  );
}

  if (
    source.checkedAt !== null &&
    source.checkedAt !== undefined &&
    !isValidDate(source.checkedAt)
  ) {
    errors.push(
      `${game.name} - ${country} - Source ${index + 1}: Invalid checkedAt date`
    );
  }


    });
  });
}

});

return errors;
}

const gameDatabase = require("./games.js");

const results = validateGameDatabase(gameDatabase);

console.log("Checking " + gameDatabase.length + " games...");

if (results.length === 0) {
  console.log("GameWorld: All tests passed!");
} else {
  console.log("GameWorld: Found " + results.length + " errors:");

  results.forEach(error => {
    console.log("- " + error);
  });
 } 