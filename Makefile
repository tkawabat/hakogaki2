SCHEMAS = \
  migrations/schemas/functions.sql \
  migrations/schemas/users.sql \
  migrations/schemas/projects.sql \
  migrations/schemas/scenes.sql

apply-db-schema-dry-run:
	cat $(SCHEMAS) | psqldef --dry-run -h aws-0-ap-northeast-1.pooler.supabase.com -p 6543 -U postgres.izwrmriasphrvqfhsdlp postgres

apply-db-schema:
	cat $(SCHEMAS) | psqldef -h aws-0-ap-northeast-1.pooler.supabase.com -p 6543 -U postgres.izwrmriasphrvqfhsdlp postgres