import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# El cliente se conecta con su ip y con el puerto asignado en el servidor
s.connect(("192.168.1.11", 1337))

s.send(b"Hola desde el CLIENTE")

data = s.recv(1024)

print (data.decode("ascii"))

s.close()
