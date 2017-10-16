import game
import tornado.websocket

class SocketHandler(tornado.websocket.WebSocketHandler):
    def open(self):
        print("New client connected.")

    def on_close(self):
        print("Client disconnected.")

    def on_message(self, message):
        self.write_message(message)
