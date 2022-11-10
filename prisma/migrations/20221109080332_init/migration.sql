-- CreateTable
CREATE TABLE `Platform` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imageName` VARCHAR(255) NOT NULL,
    `platformName` VARCHAR(255) NOT NULL,
    `pricing` VARCHAR(255) NOT NULL,
    `mediaType` VARCHAR(255) NOT NULL,
    `supportedDevices` VARCHAR(255) NOT NULL,
    `download` VARCHAR(255) NOT NULL,
    `quality` VARCHAR(255) NOT NULL,
    `customProfiles` VARCHAR(255) NOT NULL,
    `identifyActors` VARCHAR(255) NOT NULL,
    `liveContent` VARCHAR(255) NOT NULL,
    `ownContent` VARCHAR(255) NOT NULL,
    `trial` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
