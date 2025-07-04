import Swal from 'sweetalert2';

const ColorList = ({ colorsList = [], handleClickClearColors}) => {

  const handleCopy = (color) => {
    navigator.clipboard.writeText(color).then(() => {
      Swal.fire({
        title: '¡Color copiado!',
        text: `El color ${color} ha sido copiado al portapapeles.`,
        icon: 'success',
        timer: 4000,
        timerProgressBar: true,
      });
    }).catch(err => {
      console.error('Error al copiar el color: ', err);
    });
  }

  return (
    <>
    {colorsList.length > 0 && (
      <div className="text-center mb-3">
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickClearColors}
        >
          Limpiar Colores
        </button>
      </div>
    )}
    <div className="list-group text-center">
      {colorsList.length > 0 ? (
        colorsList.map((color, index) => (
          <button
            key={index}
            type="button"
            className="list-group-item list-group-item-action"
            aria-current="true"
            title="Copiar"
            style={{
              background: color,
              fontWeight: "bolder",
            }}
            onClick={() => handleCopy(color)}
          >
            {color}
          </button>
        ))
      ) : (
        <div className="list-group-item list-group-item-action text-muted">
          No hay colores guardados
        </div>
      )}
    </div>
    </>
  );
};

export default ColorList;
