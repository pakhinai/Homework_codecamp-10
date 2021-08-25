select distinct  s.sname from sailors s
inner join reserves r on s.sid = r.sid
inner join boats b on b.bid = r.bid
where b.color = 'Red' or b.color = 'Green';