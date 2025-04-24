export const msgCon852_ = (codigo) => {
  const mensaje_find = {
    "01": " Usted adquirio! una version del programa restringida. Supera el numero de comprobantes Comuniquese con PROSOFT SAS ",
    "02": " El visualizador de listados soporta solo hasta 500 paginas. Su archivo supera este numero pero solo mostraremos en pantalla las primeras 30.000 lineas ",
    10: " Intento seguir leyendo un archivo que llego a su fin. Informe al programador ",
    22: " Intento escribir en una secuencia que ya existe! ",
    26: " Clave invalida! ",
    30: " No se pudo accesar el archivo. El problema es de hardware, revise conexiones de RED, Impresoras o espacio disponible en disco duro ",
    35: " No existe el archivo",
    37: " No tiene acceso al hardware. El disco duro no esta compartido o el archivo esta protejido con atributos o la impresora no esta disponible ",
    39: " La estructura del archivo cambio. Es posible que se trate de un daño en el archivo o que el archivo sea de una version anterior y requiera actualizar ",
    41: " Intento abrir  un archivo que ya se habia abierto. Este error puede ser consecuencia de un error anterior o un error de programacion sin consecuencias ",
    42: " Intento cerrar un archivo que no se habia abierto. Este error puede ser consecuencia de un error anterior o un error de programacion sin consecuencias ",
    47: " Error de programacion. Se intento cerrar un archivo que No estaba abierto. Informe este error y la opcion al soporte tecnico Prosoft ",
    48: " Intento leer en un archivo que no se habia abierto. Este error es consecuencia de otro error, para solucionar el problema basese en el primer mensaje ",
    90: " Se intento crear un archivo que esta siendo utilizado por otro usuario o por usted mismo en otra ventana ",
    91: " Archivo abierto previamente, Por favor Reporte a Prosoft ",
    93: " Se intento borrar o modificar un registro que esta ocupado por otro usuario o por usted mismo en otra ventana ",
    98: " Daño en las llaves del archivo causado por fallas de luz o caidas. Reinicie el servidor, salga al DOS ubiquese en el directorio y corra LUZ-XXX segun el archivo dañado",
    99: " No se pudo leer o escribir un registro porque esta siendo usado por otro usuario en este momento",
    BD: " Ha ocurrido un error consultando la base de datos, consulte al asesor ",
  };
  return mensaje_find[codigo] || "Código CON852 no especificado";
};
