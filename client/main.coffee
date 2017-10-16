socket_url = "ws://" + location.host + "/socket"
socket = new WebSocket(socket_url)

socket.onopen = () -> socket.send "Hello World!"
socket.onmessage = (event) -> alert event.data