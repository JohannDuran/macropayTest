SELECT
	reviewers.name AS 'Reviewer Name', 
	books.title AS 'Book Title',
	ratings.rating AS 'Rating',
	ratings.rating_date AS 'Rating Date'
FROM ratings
INNER JOIN books
ON ratings.book_id = books.id
INNER JOIN reviewers
ON ratings.reviewer_id = reviewers.id
ORDER BY reviewers.name, books.title, ratings.rating DESC;