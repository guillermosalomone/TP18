from flask import jsonify
from flask import render_template
from flask import request

from app import app
from componentes.modelos import Persona

@app.route("/api-subs/subs", methods=['POST'])
def crear_subs():
    
    if request.method == 'POST':
        datos = request.json["datos"]
    
        subs_nuevo = Persona(  
                datos['nombre'],
                datos['apellido'],
                datos['correo'],
                datos['whatsapp']
            )
        subs_nuevo = subs_nuevo.guardar_db()
        respuesta = {'mensaje': subs_nuevo}
      
        respuesta = {'mensaje': 'no se recibieron datos.'}

    return jsonify(respuesta)

@app.route('/api-subs/subs', methods=['DELETE'])
def eliminar_subs():
    
    if request.method == 'DELETE':
        datos = request.json["datos"]
        subs = subs.obtener('correo', datos)
        
        eliminar_subs = Persona.eliminar(Persona.id)
       
        
        if eliminar_subs:
            respuesta = {'mensaje': eliminar_subs}
        else:
            respuesta = {'mensaje': 'Algo salió mal!'}
    
    else:
        respuesta = {'mensaje': 'no se recibieron datos.'}
        
    return jsonify(respuesta)