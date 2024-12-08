export default {
	load () {
		const socket = new AppsmithSocket().connect()
		socket.on("send_location_response", (data) => {
			showAlert(data.data.message, "warning")
		})
	}, 
}