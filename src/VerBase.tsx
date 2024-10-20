import  { useEffect, useState } from 'react';

// Definir el tipo para los registros
interface Record {
  id: number;
  user: string;
  password: string;
  new_password: string;
}

const VerBase = () => {
  const [data, setData] = useState<Record[]>([]);  // Especificar que `data` es una lista de `Record`
  const [error, setError] = useState('');

  // Realizar la solicitud GET cuando el componente se monte
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://oliver-six.vercel.app/sz');
        if (response.ok) {
          const result: Record[] = await response.json();  // Asegurar que `result` sea del tipo `Record[]`
          setData(result);  // Guardar los registros en el estado
        } else {
          setError('Error al obtener los datos');
        }
      } catch (error) {
        setError('Error de red');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Bienvenido a la página VerBase</h1>
      <p>Aquí puedes visualizar la base de datos.</p>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>ID:</strong> {item.id} <br />
              <strong>User:</strong> {item.user} <br />
              <strong>Password:</strong> {item.password} <br />
              <strong>New Password:</strong> {item.new_password}
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default VerBase;
