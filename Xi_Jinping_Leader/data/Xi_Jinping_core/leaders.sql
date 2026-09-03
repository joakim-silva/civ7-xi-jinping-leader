INSERT INTO Types (Type, Kind) VALUES
  ('LEADER_Xi_Jinping', 'KIND_LEADER'),
  ('TRAIT_LEADER_Xi_Jinping_ABILITY', 'KIND_TRAIT');

INSERT INTO Leaders (LeaderType, Name, InheritFrom, IsMajorLeader, AITargetCityPercentage) VALUES
  ('LEADER_Xi_Jinping', 'LOC_LEADER_Xi_Jinping_NAME', 'LEADER_DEFAULT', 1, 50);

INSERT INTO Traits (TraitType, InternalOnly, Name, Description) VALUES
  ('TRAIT_LEADER_Xi_Jinping_ABILITY', 1, 'LOC_TRAIT_LEADER_Xi_Jinping_ABILITY_NAME', 'LOC_TRAIT_LEADER_Xi_Jinping_ABILITY_DESCRIPTION');

INSERT INTO LeaderTraits (LeaderType, TraitType) VALUES
  ('LEADER_Xi_Jinping', 'TRAIT_LEADER_Xi_Jinping_ABILITY'),
  ('LEADER_Xi_Jinping', 'TRAIT_LEADER_ATTRIBUTE_ECONOMIC'),
  ('LEADER_Xi_Jinping', 'TRAIT_LEADER_ATTRIBUTE_POLITICAL');

INSERT INTO TraitModifiers (TraitType, ModifierId) VALUES
  ('TRAIT_LEADER_Xi_Jinping_ABILITY', 'MOD_Xi_Jinping_BELT_AND_ROAD_GOLD'),
  ('TRAIT_LEADER_Xi_Jinping_ABILITY', 'MOD_Xi_Jinping_BELT_AND_ROAD_SCIENCE');

INSERT INTO LoadingInfo_Leaders (LeaderType, LeaderText, LeaderImage) VALUES
  ('LEADER_Xi_Jinping', 'LOC_LOADING_LEADER_INTRO_TEXT_Xi_Jinping', 'textures/portraits/lsl_Xi_Jinping.png');

INSERT INTO TypeQuotes (Type, Quote) VALUES
  ('LEADER_Xi_Jinping', 'LOC_MAIN_CHAR_SELECT_LEADER_Xi_Jinping_ANY');

-- ============================================================
-- XI JINPING — START BIASES
-- ============================================================

INSERT INTO StartBiasTerrains
    (LeaderType, TerrainType, Score)
VALUES
    ('LEADER_Xi_Jinping', 'TERRAIN_HILL', 20);

INSERT INTO StartBiasBiomes
    (LeaderType, BiomeType, Score)
VALUES
    ('LEADER_Xi_Jinping', 'BIOME_GRASSLAND', 30);

INSERT INTO StartBiasBiomes
    (LeaderType, BiomeType, Score)
VALUES
    ('LEADER_Xi_Jinping', 'BIOME_PLAINS', 30);