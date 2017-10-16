import tornado
import os.path
import main_handler, socket_handler
from tornado.options import define, options

define("port", default=8888, help="run on the given port", type=int)
define("debug", default=False, help="run in debug mode")

class Application(tornado.web.Application):
    def __init__(self):
        handlers = [
            (r'/', main_handler.MainHandler),
            (r'/socket', socket_handler.SocketHandler),
        ]
        settings = dict(
            cookie_secret="__TODO:_GENERATE_YOUR_OWN_RANDOM_VALUE_HERE__",
            template_path=os.path.join(os.path.dirname(__file__), "..", "templates"),
            static_path=os.path.join(os.path.dirname(__file__), "..", "static"),
            xsrf_cookies=True,
        )
        super(Application, self).__init__(handlers, **settings)

def main():
    tornado.options.parse_command_line()
    app = Application()
    app.listen(options.port)
    print("Tornado server is now running. Listening on port %d" % (options.port))
    tornado.ioloop.IOLoop.current().start()

if __name__ == "__main__":
    main()