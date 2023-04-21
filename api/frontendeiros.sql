-- Modela o banco de dados da API do aplicativo.
-- ---------------------------------

-- Apaga o banco de dados caso ele exista.
-- IMPORTANTE! Só faça isso em momento de desenvolvimento.
-- Nunca use este código em produção.
DROP DATABASE IF EXISTS frontendeiros;

-- Cria o banco de dados com caracteres utf8 e buscas case-insensitive.
CREATE DATABASE frontendeiros CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

-- Seleciona o banco de dados para as próximas interações.
USE frontendeiros;

-- Cria tabela dos contatos → contacts.
CREATE TABLE contacts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status ENUM ('received', 'readed', 'responded', 'deleted') DEFAULT 'received'
);

-- Cria a tabela de usuários → users.
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_photo VARCHAR(255) COMMENT 'URL da imagem.',
    user_bio VARCHAR(255),
    user_birth DATE,
    user_type ENUM('user', 'moderator', 'author', 'admin') DEFAULT 'user',
    user_status ENUM('on', 'off', 'ban', 'del') DEFAULT 'on'
);

-- Cria a tabela de artigos → articles.
CREATE TABLE articles (
    art_id INT PRIMARY KEY AUTO_INCREMENT,
    art_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    art_author INT NOT NULL,
    art_title VARCHAR(127) NOT NULL,
    art_thumbnail VARCHAR(255) COMMENT 'URL da imagem.',
    art_resume VARCHAR(127) NOT NULL,
    art_content TEXT NOT NULL,
    art_views INT DEFAULT 0,
    art_status ENUM('on', 'off', 'del') DEFAULT 'on',
    FOREIGN KEY (art_author) REFERENCES users (user_id)
);

-- Cria a tabela de comentários → comments.
CREATE TABLE comments (
    cmt_id INT PRIMARY KEY AUTO_INCREMENT,
    cmt_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cmt_author INT NOT NULL,
    cmt_article INT NOT NULL,
    cmt_comment TEXT NOT NULL,
    FOREIGN KEY (cmt_author) REFERENCES users(user_id),
    FOREIGN KEY (cmt_article) REFERENCES articles(art_id)
);

-- Lista de redes sociais dos usuários → social.
CREATE TABLE social (
    scl_id INT PRIMARY KEY AUTO_INCREMENT,
    scl_user INT NOT NULL,
    scl_name VARCHAR(127) NOT NULL,
    scl_link VARCHAR(255) NOT NULL,
    scl_status ENUM('on', 'off', 'del') DEFAULT 'on',
    FOREIGN KEY(scl_user) REFERENCES users (user_id)

);

-- ---- --
-- CRUD --
-- ---- --

-- Insere dados na tabela 'users'.
INSERT INTO users (
    user_name,
    user_email,
    user_photo,
    user_bio,
    user_birth
) VALUES (
    'Rafael Santos',
    'rafael@gmail.com',
    'https://randomuser.me/api/portraits/men/8.jpg',
    'Ator, programador e enrolador',
    '2001-11-04'
),




