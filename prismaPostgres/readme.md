ALTER TABLE "User"
ADD COLUMN tsv tsvector GENERATED ALWAYS AS (
  to_tsvector('english', coalesce(email, '') || ' ' || coalesce(name, ''))
) STORED;   

select * from User;