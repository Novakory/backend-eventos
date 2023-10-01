INSERT INTO sala VALUES(null, 'Centro de informacion');
INSERT INTO sala VALUES(null, 'Sala audiovisual');


CREATE TABLE `evento2` (
  `id_eve` int NOT NULL AUTO_INCREMENT,
  `nomevento_eve` varchar(255) NOT NULL,
  `descripcion_eve` varchar(255) NOT NULL,
  `telefono_eve` varchar(255) NOT NULL,
  `fecha_eve` date NOT NULL,
  `horaini_eve` time NOT NULL,
  `horafin_eve` time NOT NULL,
  `status_eve` varchar(255) NOT NULL,
  `id_sala` int NOT NULL,
  `id_usu` int NOT NULL,
  PRIMARY KEY (`id_eve`),
  KEY `id_sala` (`id_sala`),
  KEY `id_usu` (`id_usu`),
  CONSTRAINT `evento_ibfk_3` FOREIGN KEY (`id_sala`) REFERENCES `sala` (`id_sal`),
  CONSTRAINT `evento_ibfk_4` FOREIGN KEY (`id_usu`) REFERENCES `usuario` (`id_usu`),
  CONSTRAINT `evento_chk_3` CHECK ((`status_eve` in (_utf8mb4'FINALIZADO',_utf8mb4'EN USO',_utf8mb4'RESERVADO')))
);

SELECT COUNT(*) FROM evento2 WHERE (horaini_eve <= '12:00') AND (horafin_eve >= '13:00');

SELECT COUNT(*) FROM evento2 WHERE  fecha_eve='2023-10-01' AND ('10:00:00' BETWEEN horaini_eve AND horafin_eve OR '13:00:00' BETWEEN horaini_eve AND horafin_eve);

SELECT * FROM evento2 WHERE fecha_eve = ?;