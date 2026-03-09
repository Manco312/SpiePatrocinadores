-- Create sponsorship_packages table for storing package information
CREATE TABLE IF NOT EXISTS sponsorship_packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE sponsorship_packages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read on sponsorship_packages" ON sponsorship_packages;
DROP POLICY IF EXISTS "Allow all operations on sponsorship_packages" ON sponsorship_packages;

-- Create policy for sponsorship_packages (allow all for now, we'll handle auth in the app)
CREATE POLICY "Allow public read on sponsorship_packages" 
  ON sponsorship_packages 
  FOR SELECT 
  USING (true);

CREATE POLICY "Allow all operations on sponsorship_packages" 
  ON sponsorship_packages 
  FOR ALL 
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_sponsorship_packages_updated_at ON sponsorship_packages;
CREATE TRIGGER update_sponsorship_packages_updated_at
  BEFORE UPDATE ON sponsorship_packages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample sponsorship packages
INSERT INTO sponsorship_packages (title, category, description) VALUES
  ('Stand en Evento Principal', 'Espacio Físico', 'Espacio de 3x3 metros en el área principal del evento Semana de la Luz. Incluye mesa, sillas y conexión eléctrica. Visibilidad garantizada durante los 5 días del evento con alto tráfico de asistentes.'),
  ('Banner Principal', 'Pieza', 'Banner de 2x1 metros ubicado en la entrada principal del evento. Máxima visibilidad para todos los asistentes. Incluye diseño e impresión.'),
  ('Publicación en Instagram', 'Espacio en Redes Sociales', 'Una publicación dedicada en nuestro perfil de Instagram con más de 3,400 seguidores. Incluye diseño gráfico profesional y copy optimizado para engagement.'),
  ('Historia Destacada', 'Espacio en Redes Sociales', 'Historia destacada permanente en nuestro perfil de Instagram. Visible las 24 horas del día para todos nuestros seguidores y visitantes del perfil.'),
  ('Sala de Conferencias', 'Espacio Físico', 'Espacio exclusivo para realizar charla o taller de 45 minutos durante el evento. Incluye proyector, sistema de sonido y moderador.'),
  ('Folleto en Kit de Bienvenida', 'Pieza', 'Inclusión de folleto o material promocional en el kit de bienvenida que reciben todos los asistentes registrados al evento.');
