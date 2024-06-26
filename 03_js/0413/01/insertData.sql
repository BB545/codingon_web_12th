-- 아래의 코드는 시퀄라이즈를 이용하여 테이블을 생성하기 전에
-- 데이터베이스 복습용으로 실시합니다.
-- 실습1을 끝내고 models 각 모델을 작성한 후에 디비만 남기고 테이블은 삭제합니다.
-- sequelize를 이용하여 테이블을 만들고 자료입력은 따로 진행합니다
-- sports 디비 생성
-- CREATE DATABASE sports;
insert into team(name, createdAt, updatedAt) values
  ('sk', now(), now()),
  ('kt', now(), now()),
  ('nc', now(), now()),
  ('lg', now(), now());
insert into game(date, location, createdAt, updatedAt) values
  ('2023-10-1', 'seoul', now(), now()),
  ('2023-10-3', 'london', now(), now()),
  ('2023-10-5', 'la', now(), now());
insert into teamgames(team_id, game_id, createdAt, updatedAt) values
  (1, 1, now(), now()),
  (2, 1, now(), now()),
  (2, 2, now(), now()),
  (3, 1, now(), now()),
  (1, 3, now(), now()),
  (3, 3, now(), now());
insert into profile(position, salary, createdAt, updatedAt, player_id) values
  ('1B', 100, now(), now(), 1),
  ('2B', 150, now(), now(), 2),
  ('3B', 80, now(), now(), 3),
  ('LF', 200, now(), now(), 4),
  ('1B', 170, now(), now(), 5),
  ('2B', 130, now(), now(), 6),
  ('3B', 90, now(), now(), 7),
  ('LF', 250, now(), now(), 8);
insert into player(name, age, createdAt, updatedAt, teamid) values
  ('홍길동', 20, now(), now(), 1),
  ('성춘향', 21, now(), now(), 3),
  ('김첨지', 22, now(), now(), 2),
  ('김수지', 23, now(), now(), 4),
  ('강민재', 19, now(), now(), 1),
  ('황찬수', 28, now(), now(), 1),
  ('이장우', 24, now(), now(), 2),
  ('박나래', 30, now(), now(), 3);
select * from player;
select * from profile;
select * from team;
select * from game;
select * from teamgames;