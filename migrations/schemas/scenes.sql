CREATE TABLE scenes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    text TEXT,
    plot TEXT,
    display_order INTEGER NOT NULL
);

CREATE TRIGGER update_scenes_updated_at
BEFORE UPDATE ON scenes
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();