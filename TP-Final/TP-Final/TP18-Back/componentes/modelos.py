from base_db.conexion_db import conexion
from base_db.tabla_db import Tabla

class Persona(Tabla):
    
    tabla = 'subs'
    conexion = conexion
    campos = ('id', 'nombre', 'apellido', 'correo', 'whatsapp')
    
    def __init__(self, *args, de_bbdd=False):
        super().crear(args, de_bbdd) 