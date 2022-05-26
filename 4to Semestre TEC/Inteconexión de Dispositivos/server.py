import socket
puerto = 1337

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 0.0.0.0 puede ser cualquier ip de la computadora
s.bind(("0.0.0.0", puerto)) 

# Se escucha solo 1 a la vez
s.listen(1)

conn, addr = s.accept()

with conn:
    data = conn.recv(1024)
    print(data.decode("ascii"))
    conn.send(b"Hola desde el SERVER")
    conn.close()