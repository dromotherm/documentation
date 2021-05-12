import socket
import struct

addr = ("192.168.2.3", 8802)
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
number=s.connect_ex(addr)
print(number)

if number == 0 :
  # ASCII MODE
  s.send(b':MEMory:AREAl? CH1_1'+b'\r\n')

  # read the answer with a buffer size of 1024 bytes
  data = s.recv(1024)

  print('Received', data)
  
  # BINARY MODE
  s.send(b':MEMory:BREAl? CH1_1'+b'\r\n')

  data = s.recv(1024)
  #i = int.from_bytes(data, byteorder='big')
  #i = struct.unpack('>'+2*'B', data)
  i = struct.unpack('>h', data)
  print(type(data))
  
  print('Received', i)
  

s.close