select s.sname from sailors s
where s.age = (select max(s.age) from sailors s )
