SELECT a.account_number FROM account a
INNER JOIN branch b ON a.Branch_name = b.Branch_name
WHERE Branch_city = 'Riverside'