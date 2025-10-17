# app.py
from flask import Flask, request, jsonify, session
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # permite que o React acesse a API

# Base de dados simulada
usuarios = {
    "teste@email.com": "123456"
}

@app.route("/", methods=["GET"])
def hello():
    return jsonify({"message": "API rodando!"})

@app.route("/login", methods=["POST"])

def Login():
    dados = request.json
    email = dados.get("email")
    senha = dados.get("senha")
    if email in usuarios and senha in usuarios or senha != "" and email != "":
            return jsonify({"success":True,"email": email})
    else:
            return jsonify({"success": False, "erro": "email ou senha inválidos"}),401


@app.route("/cadastro", methods=["POST"])
def cadastro():
    dados = request.json
    email = dados.get("email")
    senha = dados.get("senha")

    if email in usuarios:
        return jsonify({"success": False, "message": "Usuário já existe"}), 400

    usuarios[email] = senha
    return jsonify({"success": True, "message": "Conta criada com sucesso"})

@app.route("/logout", methods=["POST"])
def Logout():
    session.clear()
    return jsonify({"Saindo": True})

if __name__ == "__main__":
    app.run(debug=True)
