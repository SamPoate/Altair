// max number of inventory items
export const MAX_ITEMS = 8;
export const MAX_ITEMS_UPGRADE = 12;
// how far the player can 'see' or 'explore'
export const SIGHT_RADIUS = 3;
// how fast the player move animation plays (ms)
export const ANIMATION_SPEED = 350;
// size of tiles
export const SPRITE_SIZE = 40;
// number of tiles in the map
const TILE_HEIGHT = 15;
const TILE_WIDTH = 20;
export const MAP_DIMENSIONS = [TILE_WIDTH, TILE_HEIGHT];
// map size is set to 800 x 600
export const MAP_HEIGHT = SPRITE_SIZE * TILE_HEIGHT;
export const MAP_WIDTH = SPRITE_SIZE * TILE_WIDTH;
// configs for random map generation
export const MAX_TUNNELS = 60;
export const MAX_LENGTH = 5;
// set the main game's start map
export const START_MAP = '1_1';
// set the duration for showing the snackbar (ms)
export const SNACK_DURATION = 2500;
// set the size for the game viewport (in pixels)
export const GAME_VIEWPORT_SIZE = 350;
export const GAME_VIEWPORT_SIZE_LG = 400;
// set the minimum level for tier 2 items
export const TIER_2 = 10;
// set the pixel values for the different screen sizes
export const SCREEN_SMALL_WIDTH = 410;
export const SCREEN_SMALL_HEIGHT = 410;
export const SCREEN_MEDIUM_WIDTH = 600;
export const SCREEN_MEDIUM_HEIGHT = 680;
// set the number of tiles to pad the map with (so the player cant see edge)
export const MAP_PADDING_DISTANCE = 5;
// set the time for the map to transition in/out
export const MAP_TRANSITION_DELAY = 500;
