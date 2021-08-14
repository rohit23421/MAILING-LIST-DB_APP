CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(email) VALUES
("Katie34@gmail.com"),("Thor@yahoo.com");

# INSERT INTO users(email, created_at) VALUES
# ('dusty@gmail.com', 'Sun Aug 15 2021 12:39:58 GMT+0530 (UTC)');

SELECT 
    DATE_FORMAT(MIN(created_at), "%M %D %Y") as earliest_date 
FROM users;

SELECT * 
FROM   users 
WHERE  created_at = (SELECT Min(created_at) 
                     FROM   users); 
                     
SELECT Monthname(created_at) AS month, 
       Count(*)              AS count 
FROM   users 
GROUP  BY month 
ORDER  BY count DESC; 

SELECT Count(*) AS yahoo_users 
FROM   users 
WHERE  email LIKE '%@yahoo.com';

SELECT CASE 
         WHEN email LIKE '%@gmail.com' THEN 'gmail' 
         WHEN email LIKE '%@yahoo.com' THEN 'yahoo' 
         WHEN email LIKE '%@hotmail.com' THEN 'hotmail' 
         ELSE 'other' 
       end      AS provider, 
       Count(*) AS total_users 
FROM   users 
GROUP  BY provider 
ORDER  BY total_users DESC; 
