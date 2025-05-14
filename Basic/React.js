/**
 * TUTORIAL DE REACT MODERNO: COMPONENTES FUNCIONALES Y HOOKS
 * =========================================================
 * 
 * ¡Hola! Este tutorial te guiará por los conceptos fundamentales
 * de React moderno, utilizando exclusivamente componentes funcionales 
 * y Hooks. Está diseñado para quien ya conoce JavaScript básico.
 */

// ======================================================================
// 1. IMPORTACIÓN Y ESTRUCTURA BÁSICA DE UN COMPONENTE
// ======================================================================

// Así se importa React en un archivo de componente
import React, { useState, useEffect } from 'react';

// Un componente funcional simple
function Saludo() {
  // Los componentes siempre devuelven JSX
  return (
    <div>
      <h1>¡Hola mundo!</h1>
      <p>Bienvenido a React</p>
    </div>
  );
}

// La misma función como arrow function (estilo moderno)
const SaludoArrow = () => {
  return (
    <div>
      <h1>¡Hola mundo!</h1>
      <p>Bienvenido a React</p>
    </div>
  );
};

// Versión abreviada con retorno implícito
const SaludoCorto = () => (
  <div>
    <h1>¡Hola mundo!</h1>
    <p>Bienvenido a React</p>
  </div>
);

// Exportamos el componente para usarlo en otros archivos
export default Saludo;

// Para exportar múltiples componentes:
// export { Saludo, SaludoArrow, SaludoCorto };


// ======================================================================
// 2. JSX: SINTAXIS Y REGLAS CLAVE
// ======================================================================

const EjemploJSX = () => {
  const nombre = 'Ana';
  const estaLogueado = true;
  
  // Atributos en JSX usan camelCase (className en vez de class)
  return (
    <div className="contenedor">
      {/* Uso de llaves {} para insertar JavaScript */}
      <h1>Hola {nombre}!</h1>
      
      {/* Expresiones en JSX */}
      <p>La suma de 2 + 2 es: {2 + 2}</p>
      
      {/* Atributos dinámicos */}
      <button disabled={!estaLogueado}>Haz click</button>
      
      {/* Estilos en línea (objeto JavaScript) */}
      <p style={{ 
        color: 'blue', 
        fontSize: '16px', 
        marginTop: '10px' 
      }}>
        Texto con estilo
      </p>

      {/* Las etiquetas vacías deben cerrarse */}
      <input type="text" placeholder="Escribe algo" />
      <br />
      
      {/* React Fragments: evitan divs innecesarios */}
      <>
        <span>Elemento 1</span>
        <span>Elemento 2</span>
      </>
    </div>
  );
};


// ======================================================================
// 3. PROPS: RECEPCIÓN Y USO CORRECTO
// ======================================================================

// Props como parámetro
const Bienvenida = (props) => {
  return <h1>Hola, {props.nombre}!</h1>;
};

// Desestructuración de props (recomendado)
const Usuario = ({ nombre, edad, rol = 'invitado' }) => {
  // ↑ se puede asignar valor predeterminado como "rol"
  
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Edad: {edad} años</p>
      <p>Rol: {rol}</p>
    </div>
  );
};

// Pasando props a un componente
const App1 = () => {
  return (
    <div>
      <Bienvenida nombre="María" />
      <Usuario nombre="Carlos" edad={28} rol="admin" />
      <Usuario nombre="Laura" edad={31} /> {/* usará rol predeterminado */}
    </div>
  );
};

// Pasando children como prop
const Tarjeta = ({ titulo, children }) => {
  return (
    <div className="tarjeta">
      <h3>{titulo}</h3>
      <div className="contenido">
        {children} {/* Aquí se renderiza el contenido entre las etiquetas */}
      </div>
    </div>
  );
};

// Uso de children
const EjemploChildren = () => {
  return (
    <Tarjeta titulo="Información importante">
      <p>Este contenido es pasado como children</p>
      <button>Aceptar</button>
    </Tarjeta>
  );
};


// ======================================================================
// 4. useState Y MANEJO DE ESTADO LOCAL
// ======================================================================

const ContadorSimple = () => {
  // useState devuelve: [valorActual, funcionActualizadora]
  const [contador, setContador] = useState(0); // 0 es el valor inicial
  
  const incrementar = () => {
    setContador(contador + 1);
  };
  
  const decrementar = () => {
    setContador(contador - 1);
  };
  
  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </div>
  );
};

// Estado con objetos
const FormularioUsuario = () => {
  // Es mejor separar estados complejos en múltiples useState
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  
  // Aunque también puedes usar un objeto
  const [usuario, setUsuario] = useState({
    nombreCompleto: '',
    telefono: '',
    direccion: ''
  });
  
  // Con objetos, debes preservar los valores previos
  const actualizarNombreCompleto = (e) => {
    const nuevoValor = e.target.value;
    // Usamos el operador spread (...) para preservar las otras propiedades
    setUsuario({
      ...usuario,     // Mantiene los valores anteriores
      nombreCompleto: nuevoValor  // Actualiza solo el campo específico
    });
  };
  
  // Función para manejar cambios en campos individuales
  const handleNombreChange = (e) => setNombre(e.target.value);
  
  return (
    <form>
      <div>
        <label>Nombre:</label>
        <input value={nombre} onChange={handleNombreChange} />
      </div>
      <div>
        <label>Email:</label>
        <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Nombre completo:</label>
        <input 
          value={usuario.nombreCompleto} 
          onChange={actualizarNombreCompleto}
        />
      </div>
    </form>
  );
};

// Actualizaciones basadas en el estado anterior
const ContadorInteligente = () => {
  const [contador, setContador] = useState(0);
  
  const incrementar = () => {
    // Forma correcta cuando dependes del estado anterior
    setContador(prevContador => prevContador + 1);
    
    // Si hiciéramos esto dos veces:
    setContador(prevContador => prevContador + 1);
    setContador(prevContador => prevContador + 1);
    // El contador aumentaría en 2, porque cada llamada
    // tiene acceso al valor más actualizado
  };
  
  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};


// ======================================================================
// 5. useEffect Y SU USO MÁS COMÚN
// ======================================================================

const EjemploUseEffect = () => {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');
  
  // Ejecuta después de cada renderizado
  useEffect(() => {
    console.log('Componente renderizado');
  }); // Sin array de dependencias
  
  // Ejecuta solo al montar el componente (equivalente a componentDidMount)
  useEffect(() => {
    console.log('Componente montado');
    
    // Función de limpieza (se ejecuta al desmontar)
    return () => {
      console.log('Componente desmontado');
    };
  }, []); // Array vacío de dependencias
  
  // Se ejecuta cuando contador cambia
  useEffect(() => {
    document.title = `Has hecho clic ${contador} veces`;
    
    // Limpieza antes de ejecutar efecto nuevamente
    return () => {
      console.log('Limpiando efecto anterior de contador');
    };
  }, [contador]); // Array con dependencias específicas
  
  // Ejemplo práctico: cargar datos
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  
  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        // Simula una API
        // const respuesta = await fetch('https://api.ejemplo.com/usuarios');
        // const datos = await respuesta.json();
        const datosSimulados = [
          { id: 1, nombre: 'Ana' },
          { id: 2, nombre: 'Juan' }
        ];
        
        // Actualizamos estado con los datos
        setUsuarios(datosSimulados);
        setCargando(false);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
        setCargando(false);
      }
    };
    
    cargarUsuarios();
  }, []); // Solo al montar
  
  return (
    <div>
      <h2>Efectos en React</h2>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
      
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      
      <div>
        <h3>Usuarios:</h3>
        {cargando ? (
          <p>Cargando usuarios...</p>
        ) : (
          <ul>
            {usuarios.map(user => (
              <li key={user.id}>{user.nombre}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};


// ======================================================================
// 6. EVENTOS Y MANEJO DE FUNCIONES
// ======================================================================

const ManejadorEventos = () => {
  const [texto, setTexto] = useState('');
  const [enviado, setEnviado] = useState(false);
  
  // Función controladora de evento
  const handleChange = (e) => {
    setTexto(e.target.value);
  };
  
  // Prevenir comportamiento por defecto
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    console.log('Texto enviado:', texto);
    setEnviado(true);
  };
  
  // Pasando argumentos adicionales a eventos
  const handleClick = (mensaje, e) => {
    console.log(mensaje);
    console.log('Evento:', e.target);
  };
  
  return (
    <div>
      <h2>Manejo de Eventos</h2>
      
      {/* Formulario con onSubmit */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={texto}
          onChange={handleChange}
          placeholder="Escribe algo" 
        />
        <button type="submit">Enviar</button>
      </form>
      
      {enviado && <p>¡Formulario enviado con éxito!</p>}
      
      {/* Eventos con argumentos usando arrow function */}
      <button onClick={(e) => handleClick('Botón 1 clickeado', e)}>
        Botón 1
      </button>
      
      {/* Eventos del mouse */}
      <div 
        style={{ padding: '20px', background: '#f0f0f0', marginTop: '10px' }}
        onMouseEnter={() => console.log('Mouse entró')}
        onMouseLeave={() => console.log('Mouse salió')}
      >
        Pasa el mouse por encima
      </div>
    </div>
  );
};


// ======================================================================
// 7. RENDERIZADO CONDICIONAL
// ======================================================================

const RenderizadoCondicional = () => {
  const [estaLogueado, setEstaLogueado] = useState(false);
  const [tema, setTema] = useState('claro');
  const [rol, setRol] = useState('usuario');
  
  // Cambiar estado de login
  const toggleLogin = () => {
    setEstaLogueado(!estaLogueado);
  };
  
  // Cambiar tema
  const toggleTema = () => {
    setTema(tema === 'claro' ? 'oscuro' : 'claro');
  };
  
  return (
    <div style={{ 
      background: tema === 'oscuro' ? '#333' : '#fff',
      color: tema === 'oscuro' ? '#fff' : '#333',
      padding: '20px'
    }}>
      <h2>Renderizado Condicional</h2>
      
      {/* 1. Operador ternario (if-else) */}
      {estaLogueado 
        ? <p>Bienvenido, usuario</p> 
        : <p>Por favor, inicia sesión</p>
      }
      
      {/* 2. Operador AND (if sin else) */}
      {estaLogueado && <button>Ver perfil</button>}
      
      {/* 3. Variables para guardar JSX */}
      {(() => {
        let contenido;
        if (rol === 'admin') {
          contenido = <div>Panel de Administrador</div>;
        } else if (rol === 'editor') {
          contenido = <div>Panel de Editor</div>;
        } else {
          contenido = <div>Panel de Usuario</div>;
        }
        return contenido;
      })()}
      
      {/* 4. Componentes condicionales */}
      <div>
        <h3>Panel de control</h3>
        {estaLogueado ? <PanelUsuario rol={rol} /> : <LoginForm />}
      </div>
      
      <div style={{ marginTop: '15px' }}>
        <button onClick={toggleLogin}>
          {estaLogueado ? 'Cerrar sesión' : 'Iniciar sesión'}
        </button>
        <button onClick={toggleTema} style={{ marginLeft: '10px' }}>
          Cambiar a tema {tema === 'claro' ? 'oscuro' : 'claro'}
        </button>
        <select 
          value={rol} 
          onChange={(e) => setRol(e.target.value)}
          style={{ marginLeft: '10px' }}
        >
          <option value="usuario">Usuario</option>
          <option value="editor">Editor</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
    </div>
  );
};

// Componentes para el ejemplo anterior
const PanelUsuario = ({ rol }) => (
  <div>
    <p>Has iniciado sesión como: {rol}</p>
    <p>Última conexión: {new Date().toLocaleString()}</p>
  </div>
);

const LoginForm = () => (
  <form>
    <p>Introduce tus credenciales</p>
    <input placeholder="Usuario" />
    <input type="password" placeholder="Contraseña" />
    <button type="submit">Entrar</button>
  </form>
);


// ======================================================================
// 8. RENDERIZADO DE LISTAS
// ======================================================================

const ListasYKeys = () => {
  // Lista de datos
  const frutas = [
    { id: 1, nombre: 'Manzana', color: 'rojo' },
    { id: 2, nombre: 'Plátano', color: 'amarillo' },
    { id: 3, nombre: 'Uva', color: 'morado' },
    { id: 4, nombre: 'Naranja', color: 'naranja' }
  ];
  
  const [elementos, setElementos] = useState(frutas);
  const [nuevaFruta, setNuevaFruta] = useState({ nombre: '', color: '' });
  
  // Añadir elemento a la lista
  const agregarFruta = () => {
    if (nuevaFruta.nombre && nuevaFruta.color) {
      // Crear nuevo ID único (en un caso real usarías uuid o similar)
      const newId = elementos.length > 0 
        ? Math.max(...elementos.map(item => item.id)) + 1 
        : 1;
      
      // Añadir al estado usando el operador spread
      setElementos([
        ...elementos,
        { 
          id: newId, 
          nombre: nuevaFruta.nombre, 
          color: nuevaFruta.color 
        }
      ]);
      
      // Limpiar formulario
      setNuevaFruta({ nombre: '', color: '' });
    }
  };
  
  // Eliminar elemento
  const eliminarFruta = (id) => {
    setElementos(elementos.filter(fruta => fruta.id !== id));
  };
  
  return (
    <div>
      <h2>Listas y Keys</h2>
      
      {/* Formulario para añadir */}
      <div>
        <input
          placeholder="Nombre"
          value={nuevaFruta.nombre}
          onChange={(e) => setNuevaFruta({...nuevaFruta, nombre: e.target.value})}
        />
        <input
          placeholder="Color"
          value={nuevaFruta.color}
          onChange={(e) => setNuevaFruta({...nuevaFruta, color: e.target.value})}
        />
        <button onClick={agregarFruta}>Añadir fruta</button>
      </div>
      
      {/* Renderizado de la lista usando map */}
      <ul>
        {elementos.map((fruta) => (
          // key es crucial para el rendimiento y comportamiento correcto
          <li 
            key={fruta.id} 
            style={{
              color: fruta.color,
              margin: '10px 0',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span>{fruta.nombre} - {fruta.color}</span>
            <button onClick={() => eliminarFruta(fruta.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      
      {/* Mensaje si la lista está vacía */}
      {elementos.length === 0 && <p>No hay frutas en la lista</p>}
      
      {/* Ejemplo de transformación de datos */}
      <div>
        <h3>Nombres de frutas:</h3>
        <p>{elementos.map(f => f.nombre).join(', ')}</p>
      </div>
    </div>
  );
};


// ======================================================================
// 9. BUENAS PRÁCTICAS BÁSICAS
// ======================================================================

/**
 * ESTRUCTURA DE CARPETAS RECOMENDADA
 * 
 * /src
 *   /components
 *     /Button
 *       Button.js (o Button.jsx)
 *       Button.css (o Button.module.css para CSS Modules)
 *       Button.test.js
 *       index.js (archivo de exportación)
 *   /hooks
 *     useLocalStorage.js
 *     useFormValidation.js
 *   /context
 *     AuthContext.js
 *     ThemeContext.js
 *   /pages
 *     Home.js
 *     About.js
 *   /services
 *     api.js
 *   /utils
 *     helpers.js
 *   App.js
 *   index.js
 */

// 1. Componentes pequeños y enfocados
const BotonPrimario = ({ texto, onClick }) => (
  <button 
    className="boton-primario" 
    onClick={onClick}
  >
    {texto}
  </button>
);

// 2. Hooks personalizados para lógica reutilizable
const useLocalStorage = (key, valorInicial) => {
  // Este hook maneja el estado y su persistencia en localStorage
  const [valor, setValor] = useState(() => {
    try {
      // Intenta obtener del localStorage
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      console.error("Error al leer de localStorage:", error);
      return valorInicial;
    }
  });

  // Actualiza localStorage cuando el valor cambia
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(valor));
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  }, [key, valor]);

  return [valor, setValor];
};

// 3. Limpieza de efectos y prevención de memory leaks
const ComponenteConLimpieza = () => {
  const [datos, setDatos] = useState(null);
  
  useEffect(() => {
    // Simulamos una solicitud a API
    const controlador = new AbortController();
    
    const fetchDatos = async () => {
      try {
        // Usar signal del AbortController para cancelar fetch
        // const respuesta = await fetch('api/datos', { signal: controlador.signal });
        // const resultado = await respuesta.json();
        // setDatos(resultado);
        console.log("Datos cargados");
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error("Error en la carga:", error);
        }
      }
    };
    
    fetchDatos();
    
    // Función de limpieza para cancelar solicitudes pendientes
    return () => {
      console.log("Cancelando solicitudes pendientes");
      controlador.abort();
    };
  }, []);
  
  return <div>{datos ? "Datos cargados" : "Cargando..."}</div>;
};

// 4. Separación de lógica y presentación
// Componente de presentación (UI solamente)
const ProductoCard = ({ producto, onComprar }) => (
  <div className="producto-card">
    <h3>{producto.nombre}</h3>
    <p>{producto.descripcion}</p>
    <span>${producto.precio}</span>
    <button onClick={() => onComprar(producto.id)}>Comprar</button>
  </div>
);

// Componente contenedor (lógica y manejo de datos)
const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  
  useEffect(() => {
    // Carga productos de la API
    const cargarProductos = async () => {
      try {
        // const data = await obtenerProductosAPI();
        const data = [
          { id: 1, nombre: "Producto 1", descripcion: "Descripción del producto 1", precio: 99 },
          { id: 2, nombre: "Producto 2", descripcion: "Descripción del producto 2", precio: 149 }
        ];
        setProductos(data);
        setCargando(false);
      } catch (error) {
        console.error(error);
        setCargando(false);
      }
    };
    
    cargarProductos();
  }, []);
  
  const comprarProducto = (id) => {
    console.log(`Comprando producto ${id}`);
    // Lógica para añadir al carrito, etc.
  };
  
  if (cargando) return <p>Cargando productos...</p>;
  
  return (
    <div className="productos-grid">
      {productos.map(producto => (
        <ProductoCard 
          key={producto.id} 
          producto={producto} 
          onComprar={comprarProducto} 
        />
      ))}
    </div>
  );
};


// ======================================================================
// 10. PROYECTO INTEGRADOR: TODO LIST
// ======================================================================

// Proyecto integrador: Aplicación de lista de tareas
const TodoApp = () => {
  // Estado para las tareas
  const [tareas, setTareas] = useState(() => {
    // Recuperar tareas guardadas en localStorage
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });
  
  // Estado para la nueva tarea
  const [nuevaTarea, setNuevaTarea] = useState('');
  
  // Estado para edición
  const [edicion, setEdicion] = useState({
    id: null,
    texto: '',
    editando: false
  });
  
  // Estado para filtrado
  const [filtro, setFiltro] = useState('todas'); // todas, activas, completadas
  
  // Guardar en localStorage cuando cambian las tareas
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);
  
  // Añadir nueva tarea
  const agregarTarea = (e) => {
    e.preventDefault();
    
    if (!nuevaTarea.trim()) return;
    
    const nuevasTareas = [
      ...tareas, 
      {
        id: Date.now(),
        texto: nuevaTarea,
        completada: false,
        fecha: new Date()
      }
    ];
    
    setTareas(nuevasTareas);
    setNuevaTarea('');
  };
  
  // Cambiar estado de completada/pendiente
  const toggleCompletada = (id) => {
    const actualizadas = tareas.map(tarea => 
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(actualizadas);
  };
  
  // Iniciar edición de tarea
  const iniciarEdicion = (id, texto) => {
    setEdicion({
      id,
      texto,
      editando: true
    });
  };
  
  // Guardar tarea editada
  const guardarEdicion = () => {
    const actualizadas = tareas.map(tarea => 
      tarea.id === edicion.id ? { ...tarea, texto: edicion.texto } : tarea
    );
    
    setTareas(actualizadas);
    setEdicion({ id: null, texto: '', editando: false });
  };
  
  // Eliminar tarea
  const eliminarTarea = (id) => {
    const confirmacion = window.confirm('¿Estás seguro de eliminar esta tarea?');
    if (confirmacion) {
      setTareas(tareas.filter(tarea => tarea.id !== id));
    }
  };
  
  // Filtrar tareas según el estado seleccionado
  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === 'activas') return !tarea.completada;
    if (filtro === 'completadas') return tarea.completada;
    return true; // filtro === 'todas'
  });
  
  // Limpiar todas las tareas completadas
  const limpiarCompletadas = () => {
    setTareas(tareas.filter(tarea => !tarea.completada));
  };
  
  // Obtener contadores
  const totalTareas = tareas.length;
  const tareasCompletadas = tareas.filter(tarea => tarea.completada).length;
  const tareasPendientes = totalTareas - tareasCompletadas;
  
  return (
    <div className="todo-app" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Lista de Tareas</h1>
      
      {/* Formulario para añadir tareas */}
      <form onSubmit={agregarTarea} style={{ marginBottom: '20px', display: 'flex' }}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Añade una nueva tarea"
          style={{ 
            flexGrow: 1, 
            padding: '8px', 
            fontSize: '16px', 
            borderRadius: '4px 0 0 4px',
            border: '1px solid #ddd' 
          }}
        />
        <button 
          type="submit"
          style={{
            padding: '8px 16px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '0 4px 4px 0',
            cursor: 'pointer'
          }}
        >
          Añadir
        </button>
      </form>
      
      {/* Filtros */}
      <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
        <button 
          onClick={() => setFiltro('todas')}
          style={{ 
            margin: '0 5px',
            padding: '5px 10px',
            background: filtro === 'todas' ? '#2196F3' : '#f1f1f1',
            color: filtro === 'todas' ? 'white' : 'black',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          Todas ({totalTareas})
        </button>
        <button 
          onClick={() => setFiltro('activas')}
          style={{ 
            margin: '0 5px',
            padding: '5px 10px',
            background: filtro === 'activas' ? '#2196F3' : '#f1f1f1',
            color: filtro === 'activas' ? 'white' : 'black',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          Pendientes ({tareasPendientes})
        </button>
        <button 
          onClick={() => setFiltro('completadas')}
          style={{ 
            margin: '0 5px',
            padding: '5px 10px',
            background: filtro === 'completadas' ? '#2196F3' : '#f1f1f1',
            color: filtro === 'completadas' ? 'white' : 'black',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          Completadas ({tareasCompletadas})
        </button>
      </div>
      
      {/* Lista de tareas */}
      <ul style={{ 
        listStyleType: 'none', 
        padding: 0,
        margin: 0
      }}>
        {tareasFiltradas.map(tarea => (
          <li 
            key={tarea.id}
            style={{
              padding: '12px 15px',
              borderBottom: '1px solid #ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: tarea.completada ? '#f9f9f9' : 'white'
            }}
          >
            {edicion.editando && edicion.id === tarea.id ? (
              <div style={{ display: 'flex', flexGrow: 1 }}>
                <input
                  type="text"
                  value={edicion.texto}
                  onChange={(e) => setEdicion({...edicion, texto: e.target.value})}
                  style={{ flexGrow: 1, padding: '6px' }}
                />
                <button 
                  onClick={guardarEdicion}
                  style={{
                    marginLeft: '5px',
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    cursor: 'pointer'
                  }}
                >
                  Guardar
                </button>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                  <input
                    type="checkbox"
                    checked={tarea.completada}
                    onChange={() => toggleCompletada(tarea.id)}
                    style={{ marginRight: '10px' }}
                  />
                  <span style={{ 
                    textDecoration: tarea.completada ? 'line-through' : 'none',
                    color: tarea.completada ? '#888' : 'black',
                    flexGrow: 1
                  }}>
                    {tarea.texto}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => iniciarEdicion(tarea.id, tarea.texto)}
                    style={{
                      marginRight: '5px',
                      background: '#2196F3',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      borderRadius: '3px'
                    }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarTarea(tarea.id)}
                    style={{
                      background: '#f44336',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      borderRadius: '3px'
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      
      {tareasFiltradas.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888', padding: '20px 0' }}>
          No hay tareas {filtro === 'todas' ? '' : filtro}
        </p>
      )}
      
      {tareasCompletadas > 0 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={limpiarCompletadas}
            style={{
              background: '#ff9800',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Limpiar tareas completadas ({tareasCompletadas})
          </button>
        </div>
      )}s
      
      <div style={{ 
        marginTop: '20px', 
        padding: '10px',
        background: '#f9f9f9',
        borderRadius: '4px',
        textAlign: 'center'
      }}>
        <p>Total: {totalTareas} tareas | Completadas: {tareasCompletadas} | Pendientes: {tareasPendientes}</p>
      </div>
    </div>
  );
};

// Exportamos la aplicación principal y el proyecto integrador
export { App1 as App, TodoApp };