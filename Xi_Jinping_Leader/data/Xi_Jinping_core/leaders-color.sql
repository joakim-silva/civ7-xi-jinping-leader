-- ============================================================
-- Player Colors for LEADER_Xi_Jinping
-- China-inspired red and golden-yellow palette
-- ============================================================

INSERT INTO PlayerColors
(
    Type,
    Usage,

    PrimaryColor,
    SecondaryColor,

    Alt1PrimaryColor,
    Alt1SecondaryColor,

    Alt2PrimaryColor,
    Alt2SecondaryColor,

    Alt3PrimaryColor,
    Alt3SecondaryColor
)
VALUES
(
    'LEADER_Xi_Jinping',
    'Unique',

    'COLOR_LEADER_Xi_Jinping_PRIMARY',
    'COLOR_LEADER_Xi_Jinping_SECONDARY',

    'COLOR_LEADER_Xi_Jinping_PRIMARY_ALT1',
    'COLOR_LEADER_Xi_Jinping_SECONDARY_ALT1',

    'COLOR_LEADER_Xi_Jinping_PRIMARY_ALT2',
    'COLOR_LEADER_Xi_Jinping_SECONDARY_ALT2',

    'COLOR_LEADER_Xi_Jinping_PRIMARY_ALT3',
    'COLOR_LEADER_Xi_Jinping_SECONDARY_ALT3'
);


-- ============================================================
-- Color Definitions
-- Format: R,G,B,A
-- ============================================================

INSERT INTO Colors
(
    Type,
    Color,
    Color3D
)
VALUES

-- ------------------------------------------------------------
-- PRIMARY
-- Chinese flag red + golden yellow
-- ------------------------------------------------------------

(
    'COLOR_LEADER_Xi_Jinping_PRIMARY',
    '222,41,16,255',
    '222,41,16,255'
),

(
    'COLOR_LEADER_Xi_Jinping_SECONDARY',
    '255,222,0,255',
    '255,222,0,255'
),


-- ------------------------------------------------------------
-- ALTERNATE 1
-- Deep imperial red + bright gold
-- ------------------------------------------------------------

(
    'COLOR_LEADER_Xi_Jinping_PRIMARY_ALT1',
    '180,20,20,255',
    '180,20,20,255'
),

(
    'COLOR_LEADER_Xi_Jinping_SECONDARY_ALT1',
    '255,215,0,255',
    '255,215,0,255'
),


-- ------------------------------------------------------------
-- ALTERNATE 2
-- Dark crimson + pale gold
-- ------------------------------------------------------------

(
    'COLOR_LEADER_Xi_Jinping_PRIMARY_ALT2',
    '140,20,30,255',
    '140,20,30,255'
),

(
    'COLOR_LEADER_Xi_Jinping_SECONDARY_ALT2',
    '255,225,100,255',
    '255,225,100,255'
),


-- ------------------------------------------------------------
-- ALTERNATE 3
-- Rich scarlet + warm gold
-- ------------------------------------------------------------

(
    'COLOR_LEADER_Xi_Jinping_PRIMARY_ALT3',
    '200,35,30,255',
    '200,35,30,255'
),

(
    'COLOR_LEADER_Xi_Jinping_SECONDARY_ALT3',
    '240,180,35,255',
    '240,180,35,255'
);