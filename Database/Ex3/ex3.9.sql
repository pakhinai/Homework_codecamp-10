select  s.sid from sailors s where s.sid in
(select s.sid from sailors s
inner join reserves r on s.sid = r.sid
inner join boats b on b.bid = r.bid
where b.color = 'Red') 
and s.sid not in
(select s.sid  from sailors s
inner join reserves r on s.sid = r.sid
inner join boats b on b.bid = r.bid
where b.color = 'Green')