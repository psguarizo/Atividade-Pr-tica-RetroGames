
CREATE DATABASE db_retrogames;

USE db_retrogames;

CREATE TABLE jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    plataforma VARCHAR(100) NOT NULL,
    desenvolvedora VARCHAR(150) NOT NULL,
    imagem_url VARCHAR(500) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO jogos (titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES (
    'GTA V',
    'STEAM',
    'Rockstar Games',
    'https://t2.tudocdn.net/615108?w=1920&h=1080',
    99.90
);

INSERT INTO jogos (titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES (
    'Pac-Man',
    'PlayStation',
    'Namco',
    'https://1000logos.net/wp-content/uploads/2025/02/Pac-Man-Logo-1979.png',
    79.90
);

INSERT INTO jogos (titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES (
    'Resident Evil',
    'PC, PS4, Nintendo',
    'Capcom',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RFej02LVX5Z2rQypVGB91UORbmJsF2sLGHybehuyw-ydY5JhjQCt0xE&s=10',
    65.90
);
