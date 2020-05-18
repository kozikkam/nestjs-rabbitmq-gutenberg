CREATE TABLE book (
    id SERIAL PRIMARY KEY,
    authors text[],
    title text,
    publisher text,
    published_date text,
    language text,
    subjects text[],
    license_rights text,
    created_at timestamp DEFAULT now()
);

CREATE INDEX book_index ON book (title, authors, published_date);
